import { useState, useCallback } from 'react';

export default function ContactInfo() {
    const [copied, setCopied] = useState(false);
    const email = 'hi@filip.fyi';

    const handleCopy = useCallback((e) => {
        e.preventDefault();
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(() => {
                window.location.href = `mailto:${email}`;
            });
    }, [email]);

    return (
        <div className="contact-info" id="contact">
            <p className="contact-heading">+Get in touch</p>
            <span
                className="contact-email"
                onClick={handleCopy}
                role="button"
                tabIndex={0}
            >
                {copied ? 'transmission sent to clipboard' : email}
            </span>
        </div>
    );
}
