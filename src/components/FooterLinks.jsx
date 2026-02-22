export default function FooterLinks() {
    const links = [
        { label: 'Fluid Dynamics', target: 'fluid-dynamics' },
        { label: 'Organic Shapes', target: 'organic-shapes' },
        { label: 'Interactive Forms', target: 'interactive-forms' },
        { label: 'Motion Studies', target: 'motion-studies' },
        { label: 'Contact', target: 'contact-section' },
    ];

    const handleClick = (e, target) => {
        e.preventDefault();
        const section = document.getElementById(target);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="footer-links">
            {links.map((link, i) => (
                <a
                    key={i}
                    href={`#${link.target}`}
                    className="footer-link"
                    onClick={(e) => handleClick(e, link.target)}
                >
                    {link.label}
                </a>
            ))}
        </div>
    );
}
