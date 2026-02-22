import { useState, useRef, useEffect } from 'react';

export default function ContactSection() {
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [focused, setFocused] = useState(null);

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

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Build mailto link with form data
        const subject = encodeURIComponent(`Project Inquiry: ${formData.project || 'New Project'}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.project}\n\n${formData.message}`
        );
        window.location.href = `mailto:contact@elmoutii.dev?subject=${subject}&body=${body}`;
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section className="section content-section contact-section-full" id="contact-section" ref={sectionRef}>
            <div className="section-inner">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-number">05</span>
                    <span className="section-line"></span>
                    <span className="section-label">Contact</span>
                </div>

                <div className="ct-layout">
                    {/* Left Side - Info */}
                    <div className="ct-info reveal-item">
                        <h2 className="section-title">
                            Let's create<br />
                            <span className="text-gradient">together</span>
                        </h2>
                        <p className="section-subtitle">
                            Have a project in mind? Want to collaborate on something
                            extraordinary? Let's push the boundaries of what's
                            possible in digital experience.
                        </p>

                        <div className="ct-details">
                            <div className="ct-detail-item">
                                <span className="ct-detail-label">Email</span>
                                <a href="mailto:[EMAIL_ADDRESS]" className="ct-detail-value ct-link">
                                    [moutie.benamor@isimg.tn]
                                </a>
                            </div>
                            <div className="ct-detail-item">
                                <span className="ct-detail-label">Location</span>
                                <span className="ct-detail-value">Available Worldwide</span>
                            </div>
                            <div className="ct-detail-item">
                                <span className="ct-detail-label">Status</span>
                                <span className="ct-detail-value">
                                    <span className="ct-status-dot"></span>
                                    Open to Projects
                                </span>
                            </div>
                        </div>

                        <div className="ct-socials">
                            <a href="https://github.com/moutiebenamor" className="ct-social" aria-label="GitHub">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/moutie-ben-amor/" className="ct-social" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="ct-form-wrapper reveal-item">
                        <form className="ct-form" onSubmit={handleSubmit}>
                            <div className={`ct-field ${focused === 'name' ? 'focused' : ''} ${formData.name ? 'filled' : ''}`}>
                                <label htmlFor="ct-name">Your Name</label>
                                <input
                                    id="ct-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('name')}
                                    onBlur={() => setFocused(null)}
                                    required
                                />
                                <div className="ct-field-line"></div>
                            </div>

                            <div className={`ct-field ${focused === 'email' ? 'focused' : ''} ${formData.email ? 'filled' : ''}`}>
                                <label htmlFor="ct-email">Email Address</label>
                                <input
                                    id="ct-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused(null)}
                                    required
                                />
                                <div className="ct-field-line"></div>
                            </div>

                            <div className={`ct-field ${focused === 'project' ? 'focused' : ''} ${formData.project ? 'filled' : ''}`}>
                                <label htmlFor="ct-project">Project Type</label>
                                <input
                                    id="ct-project"
                                    type="text"
                                    name="project"
                                    value={formData.project}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('project')}
                                    onBlur={() => setFocused(null)}
                                    placeholder="e.g. Web Experience, 3D Visualization, Creative Dev"
                                />
                                <div className="ct-field-line"></div>
                            </div>

                            <div className={`ct-field ct-field-textarea ${focused === 'message' ? 'focused' : ''} ${formData.message ? 'filled' : ''}`}>
                                <label htmlFor="ct-message">Message</label>
                                <textarea
                                    id="ct-message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused(null)}
                                    required
                                ></textarea>
                                <div className="ct-field-line"></div>
                            </div>

                            <button
                                type="submit"
                                className={`ct-submit ${submitted ? 'submitted' : ''}`}
                            >
                                <span className="ct-submit-text">
                                    {submitted ? '✓ Message Prepared' : 'Send Transmission'}
                                </span>
                                <span className="ct-submit-arrow">→</span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Credit */}
                <div className="ct-footer reveal-item">
                    <div className="ct-footer-line"></div>
                    <div className="ct-footer-content">
                        <span>© 2026 EL_MOUTII</span>
                        <span>Crafted with Three.js + React</span>
                        <span>All rights reserved</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
