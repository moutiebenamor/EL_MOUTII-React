import { useEffect, useRef } from 'react';

export default function InteractiveForms() {
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
        <section className="section content-section interactive-forms-section" id="interactive-forms" ref={sectionRef}>
            <div className="section-inner">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-number">03</span>
                    <span className="section-line"></span>
                    <span className="section-label">Interactive Forms</span>
                </div>

                {/* Hero */}
                <div className="if-hero reveal-item">
                    <h2 className="section-title">
                        Your touch<br />
                        <span className="text-gradient">reshapes</span> reality
                    </h2>
                    <p className="section-subtitle">
                        Every interaction is a conversation between human and machine.
                        Your cursor becomes a force of nature — attracting, repelling,
                        and sculpting the digital matter around it.
                    </p>
                </div>

                {/* Interaction Showcase */}
                <div className="if-showcase">
                    <div className="if-showcase-item reveal-item">
                        <div className="if-showcase-visual">
                            <div className="if-cursor-demo">
                                <div className="if-cursor-ring if-ring-1"></div>
                                <div className="if-cursor-ring if-ring-2"></div>
                                <div className="if-cursor-ring if-ring-3"></div>
                                <div className="if-cursor-dot"></div>
                            </div>
                        </div>
                        <div className="if-showcase-text">
                            <span className="if-showcase-number">01</span>
                            <h3>Cursor as Gravitational Body</h3>
                            <p>
                                Your mouse becomes a metaball entity with its own mass and gravitational field.
                                As it approaches other spheres, the smooth minimum blending function creates
                                organic bridges between surfaces, making your cursor feel like a natural
                                extension of the digital ecosystem.
                            </p>
                        </div>
                    </div>

                    <div className="if-showcase-item if-showcase-reverse reveal-item">
                        <div className="if-showcase-visual">
                            <div className="if-proximity-demo">
                                <div className="if-prox-circle if-prox-1"></div>
                                <div className="if-prox-circle if-prox-2"></div>
                                <div className="if-prox-field"></div>
                            </div>
                        </div>
                        <div className="if-showcase-text">
                            <span className="if-showcase-number">02</span>
                            <h3>Dynamic Proximity Response</h3>
                            <p>
                                The metaball field responds to cursor proximity with variable intensity.
                                Movement speed, distance to fixed spheres, and merge count all influence
                                the visual response — creating a rich, layered interaction model
                                that rewards exploration.
                            </p>
                        </div>
                    </div>

                    <div className="if-showcase-item reveal-item">
                        <div className="if-showcase-visual">
                            <div className="if-preset-demo">
                                <div className="if-preset-swatch" style={{ background: 'linear-gradient(135deg, #aa77ff, #4477ff)' }}></div>
                                <div className="if-preset-swatch" style={{ background: 'linear-gradient(135deg, #00ffaa, #00ffcc)' }}></div>
                                <div className="if-preset-swatch" style={{ background: 'linear-gradient(135deg, #ff6644, #ff4422)' }}></div>
                            </div>
                        </div>
                        <div className="if-showcase-text">
                            <span className="if-showcase-number">03</span>
                            <h3>Preset Personality Engine</h3>
                            <p>
                                Each of our 11 visual presets isn't just a color scheme — it's a complete
                                personality. From the brooding depth of Midnight to the electric energy of Neon,
                                every preset reconfigures lighting, smoothness, glow, and animation parameters
                                to create a distinct emotional atmosphere.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Interaction Tips */}
                <div className="if-tips reveal-item">
                    <h4 className="if-tips-title">Try these interactions</h4>
                    <div className="if-tips-grid">
                        <div className="if-tip">
                            <span className="if-tip-key">Move</span>
                            <span className="if-tip-desc">Drag cursor near corner spheres to merge</span>
                        </div>
                        <div className="if-tip">
                            <span className="if-tip-key">Hover</span>
                            <span className="if-tip-desc">Watch the glow radius expand on approach</span>
                        </div>
                        <div className="if-tip">
                            <span className="if-tip-key">⚙ Panel</span>
                            <span className="if-tip-desc">Switch presets to transform the entire atmosphere</span>
                        </div>
                        <div className="if-tip">
                            <span className="if-tip-key">◉ Toggle</span>
                            <span className="if-tip-desc">Click logo circles for dark/light mode</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
