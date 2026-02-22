import { useEffect, useRef, useState } from 'react';

const PRESET_OPTIONS = {
    Moody: 'moody',
    Cosmic: 'cosmic',
    Minimal: 'minimal',
    Vibrant: 'vibrant',
    Neon: 'neon',
    Sunset: 'sunset',
    Midnight: 'midnight',
    Toxic: 'toxic',
    Pastel: 'pastel',
    Psychedelic: 'dithered',
    Holographic: 'holographic'
};

export default function ControlPanel({ applyPreset, updateUniform, settingsRef }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activePreset, setActivePreset] = useState('holographic');
    const panelRef = useRef(null);

    const handlePresetChange = (presetKey) => {
        setActivePreset(presetKey);
        applyPreset(presetKey);
    };

    return (
        <div className={`control-panel ${isOpen ? 'open' : ''}`} ref={panelRef}>
            <button
                className="control-panel-toggle"
                onClick={() => setIsOpen(!isOpen)}
                title="Toggle Controls"
            >
                <span className="toggle-icon">{isOpen ? '✕' : '⚙'}</span>
            </button>

            {isOpen && (
                <div className="control-panel-content">
                    <h3 className="control-panel-title">Metaball Controls</h3>

                    <div className="control-group">
                        <label className="control-label">Preset</label>
                        <div className="preset-grid">
                            {Object.entries(PRESET_OPTIONS).map(([label, value]) => (
                                <button
                                    key={value}
                                    className={`preset-btn ${activePreset === value ? 'active' : ''}`}
                                    onClick={() => handlePresetChange(value)}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="control-group">
                        <label className="control-label">Animation Speed</label>
                        <input
                            type="range"
                            min="0.1"
                            max="3.0"
                            step="0.1"
                            defaultValue={settingsRef.current?.animationSpeed || 0.6}
                            onChange={(e) => updateUniform('uAnimationSpeed', parseFloat(e.target.value))}
                            className="control-slider"
                        />
                    </div>

                    <div className="control-group">
                        <label className="control-label">Movement Scale</label>
                        <input
                            type="range"
                            min="0.5"
                            max="2.0"
                            step="0.1"
                            defaultValue={settingsRef.current?.movementScale || 1.2}
                            onChange={(e) => updateUniform('uMovementScale', parseFloat(e.target.value))}
                            className="control-slider"
                        />
                    </div>

                    <div className="control-group">
                        <label className="control-label">Glow Intensity</label>
                        <input
                            type="range"
                            min="0"
                            max="2.0"
                            step="0.1"
                            defaultValue={settingsRef.current?.cursorGlowIntensity || 1.2}
                            onChange={(e) => updateUniform('uCursorGlowIntensity', parseFloat(e.target.value))}
                            className="control-slider"
                        />
                    </div>

                    <div className="control-group">
                        <label className="control-label">Glow Radius</label>
                        <input
                            type="range"
                            min="0.5"
                            max="3.0"
                            step="0.1"
                            defaultValue={settingsRef.current?.cursorGlowRadius || 2.2}
                            onChange={(e) => updateUniform('uCursorGlowRadius', parseFloat(e.target.value))}
                            className="control-slider"
                        />
                    </div>

                    <div className="control-group">
                        <label className="control-label">Blend Smoothness</label>
                        <input
                            type="range"
                            min="0.1"
                            max="1.0"
                            step="0.01"
                            defaultValue={settingsRef.current?.smoothness || 0.8}
                            onChange={(e) => updateUniform('uSmoothness', parseFloat(e.target.value))}
                            className="control-slider"
                        />
                    </div>

                    <div className="control-group">
                        <label className="control-label">Specular Power</label>
                        <input
                            type="range"
                            min="1"
                            max="64"
                            step="1"
                            defaultValue={settingsRef.current?.specularPower || 3}
                            onChange={(e) => updateUniform('uSpecularPower', parseFloat(e.target.value))}
                            className="control-slider"
                        />
                    </div>

                    <div className="control-group">
                        <label className="control-label">Fog Density</label>
                        <input
                            type="range"
                            min="0"
                            max="0.5"
                            step="0.01"
                            defaultValue={settingsRef.current?.fogDensity || 0.06}
                            onChange={(e) => updateUniform('uFogDensity', parseFloat(e.target.value))}
                            className="control-slider"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
