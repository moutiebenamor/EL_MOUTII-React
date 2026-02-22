export default function HeroSection({ storyText }) {
    return (
        <div className="hero">
            <h1>
                Where matter becomes<br />
                thought and thought<br />
                becomes form
            </h1>
            <h2
                id="story-text"
                dangerouslySetInnerHTML={{ __html: storyText }}
            />
        </div>
    );
}
