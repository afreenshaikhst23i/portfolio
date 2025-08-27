function About() {
    return (
        <section className="about-section" id="about">
            <div className="heading-wrapper">
                <h2 className="primary-heading">About Me</h2>
                <span className="primary-heading-shadow" aria-hidden="true">About Me</span>
            </div>
            <div className="about-main">
                <p className="mb-4">I’m a front-end developer with 7+ years of experience, passionate about building responsive, accessible web applications. I specialize in React.js with hands-on expertise in TypeScript, Tailwind CSS, Redux Toolkit, and modern JavaScript. My approach blends clean code with thoughtful UI development for consistent, high-performance results.</p>
                <p className="mb-4">I’ve worked on diverse projects — from enterprise platforms to lightweight digital tools — creating reusable components, integrating APIs, and solving front-end challenges. With a strong foundation in HTML, CSS, and JavaScript (ES6+), I follow best practices in performance, accessibility, and version control.</p>
                <p>Outside of work, I stay sharp through courses, personal builds, and exploring new frameworks to stay current in the fast-evolving front-end space.</p>
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