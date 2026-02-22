import { useEffect, useRef } from 'react';

export default function FluidDynamics() {
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
        const cards = sectionRef.current?.querySelectorAll('.fd-card, .fd-hero-text, .fd-stat, .fd-visual');
        cards?.forEach(card => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="section content-section fluid-dynamics-section" id="fluid-dynamics" ref={sectionRef}>
            <div className="section-inner">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-number">01</span>
                    <span className="section-line"></span>
                    <span className="section-label">Fluid Dynamics</span>
                </div>

                {/* Hero Text */}
                <div className="fd-hero-text reveal-item">
                    <h2 className="section-title">
                        The mathematics<br />
                        of <span className="text-gradient">flowing</span> matter
                    </h2>
                    <p className="section-subtitle">
                        We craft digital experiences that move like water — fluid, responsive,
                        and endlessly captivating. Every pixel flows with purpose.
                    </p>
                </div>

                {/* Stats Row */}
                <div className="fd-stats">
                    <div className="fd-stat reveal-item">
                        <span className="stat-number">60</span>
                        <span className="stat-unit">fps</span>
                        <span className="stat-label">Render Performance</span>
                    </div>
                    <div className="fd-stat reveal-item">
                        <span className="stat-number">∞</span>
                        <span className="stat-unit"></span>
                        <span className="stat-label">Unique Patterns</span>
                    </div>
                    <div className="fd-stat reveal-item">
                        <span className="stat-number">0</span>
                        <span className="stat-unit">ms</span>
                        <span className="stat-label">Input Latency</span>
                    </div>
                    <div className="fd-stat reveal-item">
                        <span className="stat-number">11</span>
                        <span className="stat-unit">+</span>
                        <span className="stat-label">Visual Presets</span>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="fd-cards">
                    <div className="fd-card fd-card-large reveal-item">
                        <div className="fd-card-number">01</div>
                        <div className="fd-card-content">
                            <h3>Ray Marching Engine</h3>
                            <p>
                                Our custom ray marching engine traces through signed distance fields
                                in real-time, calculating light interactions with mathematically perfect
                                smooth surfaces. Each frame computes thousands of distance queries to
                                produce organic, flowing geometries that respond instantly to user input.
                            </p>
                            <div className="fd-card-tags">
                                <span>GLSL</span>
                                <span>SDF</span>
                                <span>Real-time</span>
                            </div>
                        </div>
                    </div>

                    <div className="fd-card reveal-item">
                        <div className="fd-card-number">02</div>
                        <div className="fd-card-content">
                            <h3>Smooth Minimum Blending</h3>
                            <p>
                                Polynomial smooth minimum functions create seamless merging between
                                metaball entities. The blending algorithm adapts dynamically based on
                                proximity, creating organic transitions that feel alive.
                            </p>
                            <div className="fd-card-tags">
                                <span>smin()</span>
                                <span>Polynomial</span>
                            </div>
                        </div>
                    </div>

                    <div className="fd-card reveal-item">
                        <div className="fd-card-number">03</div>
                        <div className="fd-card-content">
                            <h3>Gravitational Attraction</h3>
                            <p>
                                Each sphere exerts gravitational pull on nearby entities,
                                creating natural clustering and separation behaviors that mimic
                                the physics of celestial bodies in miniature.
                            </p>
                            <div className="fd-card-tags">
                                <span>Physics</span>
                                <span>N-body</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Element */}
                <div className="fd-visual reveal-item">
                    <div className="fd-visual-circle"></div>
                    <div className="fd-visual-text">
                        <span>Fluidity is not chaos —</span>
                        <span>it is controlled elegance</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
