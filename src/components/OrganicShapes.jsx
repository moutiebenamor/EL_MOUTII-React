import { useEffect, useRef } from 'react';

export default function OrganicShapes() {
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
        <section className="section content-section organic-shapes-section" id="organic-shapes" ref={sectionRef}>
            <div className="section-inner">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-number">02</span>
                    <span className="section-line"></span>
                    <span className="section-label">Organic Shapes</span>
                </div>

                {/* Hero */}
                <div className="os-hero reveal-item">
                    <h2 className="section-title">
                        Nature's geometry,<br />
                        <span className="text-gradient">digitally</span> reborn
                    </h2>
                    <p className="section-subtitle">
                        We draw inspiration from the natural world — cells dividing, droplets merging,
                        planets orbiting — and translate these phenomena into living digital sculptures.
                    </p>
                </div>

                {/* Shape Gallery */}
                <div className="os-gallery">
                    <div className="os-shape-card os-shape-card-hero reveal-item">
                        <div className="os-shape-preview">
                            <div className="os-blob os-blob-1"></div>
                            <div className="os-blob os-blob-2"></div>
                            <div className="os-blob os-blob-3"></div>
                        </div>
                        <div className="os-shape-info">
                            <h3>Metaball Fusion</h3>
                            <p>
                                Signed distance fields define implicit surfaces that smoothly merge and separate.
                                The boundary between two metaballs creates organic, membrane-like surfaces that
                                stretch and deform naturally, mimicking the behavior of soap bubbles or biological cells.
                            </p>
                            <div className="os-shape-meta">
                                <span className="os-meta-item">
                                    <span className="os-meta-dot"></span>
                                    Implicit Surface
                                </span>
                                <span className="os-meta-item">
                                    <span className="os-meta-dot"></span>
                                    Isosurface Extraction
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="os-shape-grid">
                        <div className="os-shape-card os-shape-card-sm reveal-item">
                            <div className="os-icon">◉</div>
                            <h4>Spherical Harmonics</h4>
                            <p>
                                Mathematical functions that describe the surface of a sphere,
                                creating complex organic deformations through harmonic oscillation.
                            </p>
                        </div>

                        <div className="os-shape-card os-shape-card-sm reveal-item">
                            <div className="os-icon">◈</div>
                            <h4>Fractal Boundaries</h4>
                            <p>
                                Self-similar patterns emerge at the intersection of blending fields,
                                producing infinitely detailed edge geometries at every scale.
                            </p>
                        </div>

                        <div className="os-shape-card os-shape-card-sm reveal-item">
                            <div className="os-icon">◇</div>
                            <h4>Voronoi Cells</h4>
                            <p>
                                Natural partitioning algorithms create organic cell-like structures,
                                mimicking patterns found in dragonfly wings and turtle shells.
                            </p>
                        </div>

                        <div className="os-shape-card os-shape-card-sm reveal-item">
                            <div className="os-icon">△</div>
                            <h4>Procedural Growth</h4>
                            <p>
                                L-systems and reaction-diffusion algorithms generate living patterns
                                that evolve and branch with mathematical precision.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quote */}
                <div className="os-quote reveal-item">
                    <blockquote>
                        "In every curve of nature, there is a mathematical truth waiting to be rendered."
                    </blockquote>
                    <cite>— Computational Geometry Principle</cite>
                </div>
            </div>
        </section>
    );
}
