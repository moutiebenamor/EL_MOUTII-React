import { useEffect, useRef } from 'react';

export default function MotionStudies() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('section-visible');
                    }
                });
            },
            { threshold: 0.15 }
        );
        const items = sectionRef.current?.querySelectorAll('.reveal-item');
        items?.forEach(item => observer.observe(item));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="section content-section motion-studies-section" id="motion-studies" ref={sectionRef}>
            <div className="section-inner">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-number">04</span>
                    <span className="section-line"></span>
                    <span className="section-label">Motion Studies</span>
                </div>

                {/* Hero */}
                <div className="ms-hero reveal-item">
                    <h2 className="section-title">
                        Movement is the<br />
                        <span className="text-gradient">language</span> of life
                    </h2>
                    <p className="section-subtitle">
                        Procedural animation creates patterns that never repeat. Every orbit,
                        every oscillation is a unique moment in a continuous temporal flux —
                        a living choreography written in trigonometry.
                    </p>
                </div>

                {/* Timeline */}
                <div className="ms-timeline">
                    <div className="ms-timeline-line"></div>

                    <div className="ms-timeline-item reveal-item">
                        <div className="ms-timeline-dot"></div>
                        <div className="ms-timeline-content">
                            <span className="ms-timeline-phase">Phase 01</span>
                            <h3>Orbital Mechanics</h3>
                            <p>
                                Each metaball entity follows a unique orbital path defined by sinusoidal
                                functions with varying frequencies and phase offsets. The combination of
                                sin and cos creates Lissajous-like patterns that produce complex,
                                non-repeating trajectories through 3D space.
                            </p>
                            <div className="ms-code-snippet">
                                <code>offset = sin(t × speed + φ) × orbitRadius</code>
                            </div>
                        </div>
                    </div>

                    <div className="ms-timeline-item reveal-item">
                        <div className="ms-timeline-dot"></div>
                        <div className="ms-timeline-content">
                            <span className="ms-timeline-phase">Phase 02</span>
                            <h3>Temporal Variation</h3>
                            <p>
                                Speed multipliers create hierarchical motion — fast-orbiting inner
                                spheres and slow-drifting outer bodies. The speed formula
                                ensures each entity has a distinct temporal signature,
                                preventing synchronization and creating perpetual novelty.
                            </p>
                            <div className="ms-code-snippet">
                                <code>speed = 0.4 + index × 0.12</code>
                            </div>
                        </div>
                    </div>

                    <div className="ms-timeline-item reveal-item">
                        <div className="ms-timeline-dot"></div>
                        <div className="ms-timeline-content">
                            <span className="ms-timeline-phase">Phase 03</span>
                            <h3>Proximity Dynamics</h3>
                            <p>
                                When the cursor approaches, orbit radii expand through proximity scaling.
                                This creates a breathing effect — spheres push outward as your gravitational
                                influence enters their space, then contract when you retreat,
                                mimicking the respiration of a living organism.
                            </p>
                            <div className="ms-code-snippet">
                                <code>proximityScale = 1.0 + (1.0 - smoothstep(dist)) × 0.5</code>
                            </div>
                        </div>
                    </div>

                    <div className="ms-timeline-item reveal-item">
                        <div className="ms-timeline-dot"></div>
                        <div className="ms-timeline-content">
                            <span className="ms-timeline-phase">Phase 04</span>
                            <h3>Lighting & Shadow Dance</h3>
                            <p>
                                As forms move, their relationship to the light source changes continuously.
                                Specular highlights sweep across surfaces, ambient occlusion deepens
                                in crevices, and soft shadows shift — every frame is a new lighting study,
                                a new composition of light and dark.
                            </p>
                            <div className="ms-code-snippet">
                                <code>shadow = softShadow(point, lightDir, 0.01, 10.0, 20.0)</code>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Motion Parameters */}
                <div className="ms-params reveal-item">
                    <h4 className="ms-params-title">Animation Parameters</h4>
                    <div className="ms-params-grid">
                        <div className="ms-param">
                            <span className="ms-param-name">animationSpeed</span>
                            <div className="ms-param-bar">
                                <div className="ms-param-fill" style={{ width: '20%' }}></div>
                            </div>
                            <span className="ms-param-value">0.6</span>
                        </div>
                        <div className="ms-param">
                            <span className="ms-param-name">movementScale</span>
                            <div className="ms-param-bar">
                                <div className="ms-param-fill" style={{ width: '60%' }}></div>
                            </div>
                            <span className="ms-param-value">1.2</span>
                        </div>
                        <div className="ms-param">
                            <span className="ms-param-name">mouseSmoothness</span>
                            <div className="ms-param-bar">
                                <div className="ms-param-fill" style={{ width: '50%' }}></div>
                            </div>
                            <span className="ms-param-value">0.1</span>
                        </div>
                        <div className="ms-param">
                            <span className="ms-param-name">mergeDistance</span>
                            <div className="ms-param-bar">
                                <div className="ms-param-fill" style={{ width: '75%' }}></div>
                            </div>
                            <span className="ms-param-value">1.5</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
