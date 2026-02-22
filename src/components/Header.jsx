import { useTheme } from '../context/ThemeContext';

export default function Header() {
    const { toggleTheme, theme } = useTheme();

    return (
        <div className="header-area">
            <div
                className="logo-container"
                id="theme-toggle"
                onClick={toggleTheme}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
                <div className="logo-circles">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                </div>
            </div>
            <div className="center-logo">
                <h1 id="logo-text">EL_MOUTII.</h1>
            </div>
        </div>
    );
}
