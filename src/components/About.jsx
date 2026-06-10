function About() {
    return (
        <section className="about-section" id="about">
            <div className="heading-wrapper">
                <h2 className="primary-heading">About Me</h2>
                <span className="primary-heading-shadow" aria-hidden="true">About Me</span>
            </div>
            <div className="about-main">
                <p className="mb-4">I’m a Frontend Developer with 7+ years of experience building responsive, accessible, and high-performance web applications using React.js, JavaScript, HTML, CSS, and modern frontend technologies. My core strength lies in creating clean, user-friendly interfaces that deliver a consistent experience across devices and browsers.</p>
                <p className="mb-4">I have experience working with React.js, Next.js, React Router, Redux Toolkit, and component-based frontend development. I enjoy building reusable components, responsive interfaces, and maintaining visual consistency while following modern frontend best practices.</p>
                <p>Outside of work, I continue expanding my frontend skill set by exploring modern web technologies, improving my React.js knowledge, and building personal projects to stay aligned with current industry trends.</p>
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