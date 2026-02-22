import { useRef, useCallback, useState } from 'react';
import { useMetaballEngine } from '../hooks/useMetaballEngine';
import { getStoryText } from '../config/presets';
import Header from './Header';
import HeroSection from './HeroSection';
import FooterLinks from './FooterLinks';
import ContactInfo from './ContactInfo';
import Coordinates from './Coordinates';
import ControlPanel from './ControlPanel';

export default function MetaballScene() {
    const containerRef = useRef(null);
    const [storyData, setStoryData] = useState({
        x: 0, y: 0, radius: 0.1, merges: 0, fps: 0
    });

    const onStoryUpdate = useCallback((x, y, radius, merges, fps) => {
        setStoryData({ x, y, radius, merges, fps });
    }, []);

    const { applyPreset, updateUniform, settingsRef } = useMetaballEngine(containerRef, onStoryUpdate);

    const storyText = getStoryText(
        storyData.x.toFixed(2),
        storyData.y.toFixed(2),
        storyData.radius.toFixed(2),
        storyData.merges,
        storyData.fps || 0
    );

    return (
        <section className="section hero-section">
            <div id="container" ref={containerRef}></div>

            <Header />
            <HeroSection storyText={storyText} />
            <ContactInfo />
            <FooterLinks />
            <Coordinates />

            <ControlPanel
                applyPreset={applyPreset}
                updateUniform={updateUniform}
                settingsRef={settingsRef}
            />
        </section>
    );
}
