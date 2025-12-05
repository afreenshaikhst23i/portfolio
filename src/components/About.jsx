function About() {
    return (
        <section className="about-section" id="about">
            <div className="heading-wrapper">
                <h2 className="primary-heading">About Me</h2>
                <span className="primary-heading-shadow" aria-hidden="true">About Me</span>
            </div>
            <div className="about-main">
                <p className="mb-4">I’m a UI/Frontend Developer with 7+ years of experience creating responsive, accessible, and pixel-perfect user interfaces. My core strengths lie in HTML, CSS, and modern UI development, ensuring designs translate into clean, consistent, and high-performance web experiences.</p>
                <p className="mb-4">I have hands-on exposure to React.js and Next.js through UI-focused POCs and personal projects, where I built reusable components, implemented responsive layouts, and explored component-based development patterns. I enjoy working with tools like Tailwind CSS to streamline styling and maintain visual consistency across pages.</p>
                <p>Outside of work, I continue improving my skills by experimenting with new UI techniques, refining React/Next.js fundamentals, and building small personal projects to stay aligned with modern frontend trends.</p>
                <div className="cta-wrapper pt-6 inline-block">
                    <a href={`${import.meta.env.BASE_URL}afreen-z-shaikh-resume.pdf`} target="_blank" rel="noopener noreferrer" className="link">
                        View Full Resume
                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
export default About;