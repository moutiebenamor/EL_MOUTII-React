import * as THREE from 'three';

// Device detection utilities
export const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
);
export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
export const isLowPowerDevice = isMobile || navigator.hardwareConcurrency <= 4;
export const devicePixelRatio = Math.min(
    window.devicePixelRatio || 1,
    isMobile ? 1.5 : 2
);

export const presets = {
    moody: {
        sphereCount: isMobile ? 4 : 6,
        ambientIntensity: 0.02,
        diffuseIntensity: 0.6,
        specularIntensity: 1.8,
        specularPower: 8,
        fresnelPower: 1.2,
        backgroundColor: new THREE.Color(0x050505),
        sphereColor: new THREE.Color(0x000000),
        lightColor: new THREE.Color(0xffffff),
        lightPosition: new THREE.Vector3(1, 1, 1),
        smoothness: 0.3,
        contrast: 2.0,
        fogDensity: 0.12,
        cursorGlowIntensity: 0.4,
        cursorGlowRadius: 1.2,
        cursorGlowColor: new THREE.Color(0xffffff)
    },
    cosmic: {
        sphereCount: isMobile ? 5 : 8,
        ambientIntensity: 0.03,
        diffuseIntensity: 0.8,
        specularIntensity: 1.6,
        specularPower: 6,
        fresnelPower: 1.4,
        backgroundColor: new THREE.Color(0x000011),
        sphereColor: new THREE.Color(0x000022),
        lightColor: new THREE.Color(0x88aaff),
        lightPosition: new THREE.Vector3(0.5, 1, 0.5),
        smoothness: 0.4,
        contrast: 2.0,
        fogDensity: 0.15,
        cursorGlowIntensity: 0.8,
        cursorGlowRadius: 1.5,
        cursorGlowColor: new THREE.Color(0x4477ff)
    },
    minimal: {
        sphereCount: isMobile ? 2 : 3,
        ambientIntensity: 0.0,
        diffuseIntensity: 0.25,
        specularIntensity: 1.3,
        specularPower: 11,
        fresnelPower: 1.7,
        backgroundColor: new THREE.Color(0x0a0a0a),
        sphereColor: new THREE.Color(0x000000),
        lightColor: new THREE.Color(0xffffff),
        lightPosition: new THREE.Vector3(1, 0.5, 0.8),
        smoothness: 0.25,
        contrast: 2.0,
        fogDensity: 0.1,
        cursorGlowIntensity: 0.3,
        cursorGlowRadius: 1.0,
        cursorGlowColor: new THREE.Color(0xffffff)
    },
    vibrant: {
        sphereCount: isMobile ? 6 : 10,
        ambientIntensity: 0.05,
        diffuseIntensity: 0.9,
        specularIntensity: 1.5,
        specularPower: 5,
        fresnelPower: 1.3,
        backgroundColor: new THREE.Color(0x0a0505),
        sphereColor: new THREE.Color(0x110000),
        lightColor: new THREE.Color(0xff8866),
        lightPosition: new THREE.Vector3(0.8, 1.2, 0.6),
        smoothness: 0.5,
        contrast: 2.0,
        fogDensity: 0.08,
        cursorGlowIntensity: 0.8,
        cursorGlowRadius: 1.3,
        cursorGlowColor: new THREE.Color(0xff6644)
    },
    neon: {
        sphereCount: isMobile ? 4 : 7,
        ambientIntensity: 0.04,
        diffuseIntensity: 1.0,
        specularIntensity: 2.0,
        specularPower: 4,
        fresnelPower: 1.0,
        backgroundColor: new THREE.Color(0x000505),
        sphereColor: new THREE.Color(0x000808),
        lightColor: new THREE.Color(0x00ffcc),
        lightPosition: new THREE.Vector3(0.7, 1.3, 0.8),
        smoothness: 0.7,
        contrast: 2.0,
        fogDensity: 0.08,
        cursorGlowIntensity: 0.8,
        cursorGlowRadius: 1.4,
        cursorGlowColor: new THREE.Color(0x00ffaa)
    },
    sunset: {
        sphereCount: isMobile ? 3 : 5,
        ambientIntensity: 0.04,
        diffuseIntensity: 0.7,
        specularIntensity: 1.4,
        specularPower: 7,
        fresnelPower: 1.5,
        backgroundColor: new THREE.Color(0x150505),
        sphereColor: new THREE.Color(0x100000),
        lightColor: new THREE.Color(0xff6622),
        lightPosition: new THREE.Vector3(1.2, 0.4, 0.6),
        smoothness: 0.35,
        contrast: 2.0,
        fogDensity: 0.1,
        cursorGlowIntensity: 0.8,
        cursorGlowRadius: 1.4,
        cursorGlowColor: new THREE.Color(0xff4422)
    },
    midnight: {
        sphereCount: isMobile ? 3 : 4,
        ambientIntensity: 0.01,
        diffuseIntensity: 0.4,
        specularIntensity: 1.6,
        specularPower: 9,
        fresnelPower: 1.8,
        backgroundColor: new THREE.Color(0x000010),
        sphereColor: new THREE.Color(0x000015),
        lightColor: new THREE.Color(0x4466ff),
        lightPosition: new THREE.Vector3(0.9, 0.8, 1.0),
        smoothness: 0.28,
        contrast: 2.0,
        fogDensity: 0.14,
        cursorGlowIntensity: 0.8,
        cursorGlowRadius: 1.6,
        cursorGlowColor: new THREE.Color(0x3355ff)
    },
    toxic: {
        sphereCount: isMobile ? 5 : 9,
        ambientIntensity: 0.06,
        diffuseIntensity: 0.85,
        specularIntensity: 1.7,
        specularPower: 6,
        fresnelPower: 1.1,
        backgroundColor: new THREE.Color(0x001000),
        sphereColor: new THREE.Color(0x001500),
        lightColor: new THREE.Color(0x66ff44),
        lightPosition: new THREE.Vector3(0.6, 1.1, 0.7),
        smoothness: 0.55,
        contrast: 2.0,
        fogDensity: 0.09,
        cursorGlowIntensity: 0.8,
        cursorGlowRadius: 1.7,
        cursorGlowColor: new THREE.Color(0x44ff22)
    },
    pastel: {
        sphereCount: isMobile ? 4 : 6,
        ambientIntensity: 0.08,
        diffuseIntensity: 0.5,
        specularIntensity: 1.2,
        specularPower: 12,
        fresnelPower: 2.0,
        backgroundColor: new THREE.Color(0x101018),
        sphereColor: new THREE.Color(0x080814),
        lightColor: new THREE.Color(0xaabbff),
        lightPosition: new THREE.Vector3(1.0, 0.7, 0.9),
        smoothness: 0.38,
        contrast: 1.8,
        fogDensity: 0.07,
        cursorGlowIntensity: 0.35,
        cursorGlowRadius: 1.1,
        cursorGlowColor: new THREE.Color(0x8899ff)
    },
    dithered: {
        sphereCount: isMobile ? 5 : 8,
        ambientIntensity: 0.1,
        diffuseIntensity: 0.8,
        specularIntensity: 1.5,
        specularPower: 6,
        fresnelPower: 1.2,
        backgroundColor: new THREE.Color(0x0a0520),
        sphereColor: new THREE.Color(0x000000),
        lightColor: new THREE.Color(0xff00ff),
        lightPosition: new THREE.Vector3(0.8, 0.8, 0.8),
        smoothness: 0.6,
        contrast: 1.8,
        fogDensity: 0.05,
        cursorGlowIntensity: 1.0,
        cursorGlowRadius: 2.0,
        cursorGlowColor: new THREE.Color(0x00ffff)
    },
    holographic: {
        sphereCount: isMobile ? 4 : 6,
        ambientIntensity: 0.12,
        diffuseIntensity: 1.2,
        specularIntensity: 2.5,
        specularPower: 3,
        fresnelPower: 0.8,
        backgroundColor: new THREE.Color(0x0a0a15),
        sphereColor: new THREE.Color(0x050510),
        lightColor: new THREE.Color(0xccaaff),
        lightPosition: new THREE.Vector3(0.9, 0.9, 1.2),
        smoothness: 0.8,
        contrast: 1.6,
        fogDensity: 0.06,
        cursorGlowIntensity: 1.2,
        cursorGlowRadius: 2.2,
        cursorGlowColor: new THREE.Color(0xaa77ff)
    }
};

export function getDefaultSettings() {
    return {
        preset: 'holographic',
        ...presets.holographic,
        fixedTopLeftRadius: 0.8,
        fixedBottomRightRadius: 0.9,
        smallTopLeftRadius: 0.3,
        smallBottomRightRadius: 0.35,
        cursorRadiusMin: 0.08,
        cursorRadiusMax: 0.15,
        animationSpeed: 0.6,
        movementScale: 1.2,
        mouseSmoothness: 0.1,
        mergeDistance: 1.5,
        mouseProximityEffect: true,
        minMovementScale: 0.3,
        maxMovementScale: 1.0
    };
}

export function getStoryText(x, y, radius, merges, fps) {
    if (isMobile) {
        return `vessel: (${x}, ${y})<br>field: ${radius}u<br>merges: ${merges}<br>flux: ${fps}hz`;
    }
    return `our vessel drifts at coordinates (${x}, ${y})<br>gravitational field extends ${radius} units into quantum foam<br>currently merging with ${merges} other entities<br>temporal flux: ${fps} cycles per second`;
}
