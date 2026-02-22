export default function AboutSection() {
    return (
        <section className="section about-section" id="about">
            <div className="about-content">
                <div className="about-header">
                    <span className="about-label">// About</span>
                    <h2 className="about-title">
                        Consciousness in<br />Digital Form
                    </h2>
                </div>

                <div className="about-grid">
                    <div className="about-card">
                        <div className="about-card-icon">◉</div>
                        <h3>Fluid Dynamics</h3>
                        <p>
                            Ray-marched metaballs simulate fluid organic matter,
                            responding to your presence with gravitational attraction
                            and smooth blending algorithms.
                        </p>
                    </div>

                    <div className="about-card">
                        <div className="about-card-icon">◈</div>
                        <h3>Organic Shapes</h3>
                        <p>
                            Spherical distance fields merge and separate in real-time,
                            creating living geometries that breathe with the rhythm
                            of computation.
                        </p>
                    </div>

                    <div className="about-card">
                        <div className="about-card-icon">◇</div>
                        <h3>Interactive Forms</h3>
                        <p>
                            Your cursor becomes a gravitational body — attracting,
                            repelling, and merging with the entities that inhabit
                            this quantum consciousness space.
                        </p>
                    </div>

                    <div className="about-card">
                        <div className="about-card-icon">△</div>
                        <h3>Motion Studies</h3>
                        <p>
                            Procedural animation driven by trigonometric functions
                            creates endlessly evolving orbital patterns, each unique
                            and never repeating.
                        </p>
                    </div>
                </div>

                <div className="about-tech">
                    <span className="tech-label">Built with</span>
                    <div className="tech-tags">
                        <span className="tech-tag">Three.js</span>
                        <span className="tech-tag">GLSL</span>
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">Ray Marching</span>
                        <span className="tech-tag">SDF</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
