import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { getFragmentShader, vertexShader } from '../shaders/fragment.glsl.js';
import {
    isMobile, isSafari, isLowPowerDevice, devicePixelRatio,
    presets, getDefaultSettings
} from '../config/presets';

export function useMetaballEngine(containerRef, onStoryUpdate) {
    const engineRef = useRef(null);
    const settingsRef = useRef(getDefaultSettings());
    const animFrameRef = useRef(null);

    const applyPreset = useCallback((presetName) => {
        const engine = engineRef.current;
        if (!engine) return;

        const preset = presets[presetName];
        if (!preset) return;

        const s = settingsRef.current;
        s.preset = presetName;
        Object.keys(preset).forEach(key => {
            if (s.hasOwnProperty(key)) {
                s[key] = preset[key];
            }
        });

        const { material } = engine;
        material.uniforms.uSphereCount.value = s.sphereCount;
        material.uniforms.uAmbientIntensity.value = s.ambientIntensity;
        material.uniforms.uDiffuseIntensity.value = s.diffuseIntensity;
        material.uniforms.uSpecularIntensity.value = s.specularIntensity;
        material.uniforms.uSpecularPower.value = s.specularPower;
        material.uniforms.uFresnelPower.value = s.fresnelPower;
        material.uniforms.uBackgroundColor.value = s.backgroundColor;
        material.uniforms.uSphereColor.value = s.sphereColor;
        material.uniforms.uLightColor.value = s.lightColor;
        material.uniforms.uLightPosition.value = s.lightPosition;
        material.uniforms.uSmoothness.value = s.smoothness;
        material.uniforms.uContrast.value = s.contrast;
        material.uniforms.uFogDensity.value = s.fogDensity;
        material.uniforms.uCursorGlowIntensity.value = s.cursorGlowIntensity;
        material.uniforms.uCursorGlowRadius.value = s.cursorGlowRadius;
        material.uniforms.uCursorGlowColor.value = s.cursorGlowColor;
    }, []);

    const updateUniform = useCallback((name, value) => {
        const engine = engineRef.current;
        if (!engine) return;
        if (engine.material.uniforms[name]) {
            engine.material.uniforms[name].value = value;
        }
        // Also update settings
        const settingKey = name.replace(/^u/, '').replace(/^./, c => c.toLowerCase());
        if (settingsRef.current.hasOwnProperty(settingKey)) {
            settingsRef.current[settingKey] = value;
        }
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const settings = settingsRef.current;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
        camera.position.z = 1;
        const clock = new THREE.Clock();

        const renderer = new THREE.WebGLRenderer({
            antialias: !isMobile && !isLowPowerDevice,
            alpha: true,
            powerPreference: isMobile ? 'default' : 'high-performance',
            preserveDrawingBuffer: false,
            premultipliedAlpha: false
        });

        const pixelRatio = Math.min(devicePixelRatio, isMobile ? 1.5 : 2);
        renderer.setPixelRatio(pixelRatio);
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        renderer.setSize(viewportWidth, viewportHeight);
        renderer.setClearColor(0x000000, 0);
        renderer.outputColorSpace = THREE.SRGBColorSpace;

        const canvas = renderer.domElement;
        canvas.style.cssText = `
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      z-index: 0 !important;
      display: block !important;
    `;
        container.appendChild(canvas);

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new THREE.Vector2(viewportWidth, viewportHeight) },
                uActualResolution: { value: new THREE.Vector2(viewportWidth * pixelRatio, viewportHeight * pixelRatio) },
                uPixelRatio: { value: pixelRatio },
                uMousePosition: { value: new THREE.Vector2(0.5, 0.5) },
                uCursorSphere: { value: new THREE.Vector3(0, 0, 0) },
                uCursorRadius: { value: settings.cursorRadiusMin },
                uSphereCount: { value: settings.sphereCount },
                uFixedTopLeftRadius: { value: settings.fixedTopLeftRadius },
                uFixedBottomRightRadius: { value: settings.fixedBottomRightRadius },
                uSmallTopLeftRadius: { value: settings.smallTopLeftRadius },
                uSmallBottomRightRadius: { value: settings.smallBottomRightRadius },
                uMergeDistance: { value: settings.mergeDistance },
                uSmoothness: { value: settings.smoothness },
                uAmbientIntensity: { value: settings.ambientIntensity },
                uDiffuseIntensity: { value: settings.diffuseIntensity },
                uSpecularIntensity: { value: settings.specularIntensity },
                uSpecularPower: { value: settings.specularPower },
                uFresnelPower: { value: settings.fresnelPower },
                uBackgroundColor: { value: settings.backgroundColor },
                uSphereColor: { value: settings.sphereColor },
                uLightColor: { value: settings.lightColor },
                uLightPosition: { value: settings.lightPosition },
                uContrast: { value: settings.contrast },
                uFogDensity: { value: settings.fogDensity },
                uAnimationSpeed: { value: settings.animationSpeed },
                uMovementScale: { value: settings.movementScale },
                uMouseProximityEffect: { value: settings.mouseProximityEffect },
                uMinMovementScale: { value: settings.minMovementScale },
                uMaxMovementScale: { value: settings.maxMovementScale },
                uCursorGlowIntensity: { value: settings.cursorGlowIntensity },
                uCursorGlowRadius: { value: settings.cursorGlowRadius },
                uCursorGlowColor: { value: settings.cursorGlowColor },
                uIsSafari: { value: isSafari ? 1.0 : 0.0 },
                uIsMobile: { value: isMobile ? 1.0 : 0.0 },
                uIsLowPower: { value: isLowPowerDevice ? 1.0 : 0.0 }
            },
            vertexShader,
            fragmentShader: getFragmentShader(isMobile, isSafari, isLowPowerDevice),
            transparent: true
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Store engine refs
        engineRef.current = { scene, camera, renderer, material, clock, mesh, geometry };

        // Cursor & interaction state
        const cursorSphere3D = new THREE.Vector3(0, 0, 0);
        const targetMousePosition = new THREE.Vector2(0.5, 0.5);
        const mousePosition = new THREE.Vector2(0.5, 0.5);
        let activeMerges = 0;
        let lastTime = performance.now();
        let frameCount = 0;
        let fps = 0;

        function screenToWorldJS(nx, ny) {
            const uvX = nx * 2.0 - 1.0;
            const uvY = ny * 2.0 - 1.0;
            const aspect = window.innerWidth / window.innerHeight;
            return new THREE.Vector3(uvX * aspect * 2.0, uvY * 2.0, 0.0);
        }

        function onPointerMove(event) {
            const clientX = event.clientX ?? (event.touches?.[0]?.clientX ?? window.innerWidth / 2);
            const clientY = event.clientY ?? (event.touches?.[0]?.clientY ?? window.innerHeight / 2);

            targetMousePosition.x = clientX / window.innerWidth;
            targetMousePosition.y = 1.0 - clientY / window.innerHeight;

            const worldPos = screenToWorldJS(targetMousePosition.x, targetMousePosition.y);
            cursorSphere3D.copy(worldPos);

            let closestDistance = 1000.0;
            activeMerges = 0;
            const fixedPositions = [
                screenToWorldJS(0.08, 0.92),
                screenToWorldJS(0.25, 0.72),
                screenToWorldJS(0.92, 0.08),
                screenToWorldJS(0.72, 0.25)
            ];

            fixedPositions.forEach(pos => {
                const dist = cursorSphere3D.distanceTo(pos);
                closestDistance = Math.min(closestDistance, dist);
                if (dist < settings.mergeDistance) activeMerges++;
            });

            const proximityFactor = Math.max(0, 1.0 - closestDistance / settings.mergeDistance);
            const smoothFactor = proximityFactor * proximityFactor * (3.0 - 2.0 * proximityFactor);
            const dynamicRadius = settings.cursorRadiusMin + (settings.cursorRadiusMax - settings.cursorRadiusMin) * smoothFactor;

            material.uniforms.uCursorSphere.value.copy(cursorSphere3D);
            material.uniforms.uCursorRadius.value = dynamicRadius;

            if (onStoryUpdate) {
                onStoryUpdate(cursorSphere3D.x, cursorSphere3D.y, dynamicRadius, activeMerges, fps);
            }
        }

        function onTouchHandler(event) {
            event.preventDefault();
            if (event.touches && event.touches.length > 0) {
                onPointerMove({ clientX: event.touches[0].clientX, clientY: event.touches[0].clientY });
            }
        }

        function onWindowResize() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const currentPixelRatio = Math.min(devicePixelRatio, isMobile ? 1.5 : 2);

            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            renderer.setPixelRatio(currentPixelRatio);

            material.uniforms.uResolution.value.set(width, height);
            material.uniforms.uActualResolution.value.set(width * currentPixelRatio, height * currentPixelRatio);
            material.uniforms.uPixelRatio.value = currentPixelRatio;

            canvas.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 0 !important;
        display: block !important;
      `;
        }

        function animate() {
            animFrameRef.current = requestAnimationFrame(animate);

            const currentTime = performance.now();
            frameCount++;
            if (currentTime - lastTime >= 1000) {
                fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                if (onStoryUpdate) {
                    onStoryUpdate(cursorSphere3D.x, cursorSphere3D.y, material.uniforms.uCursorRadius.value, activeMerges, fps);
                }
                frameCount = 0;
                lastTime = currentTime;
            }

            mousePosition.x += (targetMousePosition.x - mousePosition.x) * settings.mouseSmoothness;
            mousePosition.y += (targetMousePosition.y - mousePosition.y) * settings.mouseSmoothness;

            material.uniforms.uTime.value = clock.getElapsedTime();
            material.uniforms.uMousePosition.value = mousePosition;

            if (performance.now() % 5000 < 16) {
                renderer.renderLists.dispose();
            }

            renderer.render(scene, camera);
        }

        // Event listeners
        window.addEventListener('mousemove', onPointerMove, { passive: true });
        window.addEventListener('touchstart', onTouchHandler, { passive: false });
        window.addEventListener('touchmove', onTouchHandler, { passive: false });
        window.addEventListener('touchend', (e) => e.preventDefault(), { passive: false });
        window.addEventListener('resize', onWindowResize, { passive: true });
        window.addEventListener('orientationchange', () => setTimeout(onWindowResize, 100), { passive: true });

        // Init cursor
        onPointerMove({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });

        // Start animation
        animate();

        // Cleanup
        return () => {
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
            window.removeEventListener('mousemove', onPointerMove);
            window.removeEventListener('touchstart', onTouchHandler);
            window.removeEventListener('touchmove', onTouchHandler);
            window.removeEventListener('resize', onWindowResize);

            geometry.dispose();
            material.dispose();
            renderer.dispose();

            if (container.contains(canvas)) {
                container.removeChild(canvas);
            }
            engineRef.current = null;
        };
    }, [containerRef, onStoryUpdate]);

    return { applyPreset, updateUniform, settingsRef };
}
