import goodluckScreen from '../assets/images/projects/goodluck.png'
import portfolioScreen from '../assets/images/projects/portfolio.png'
import githubWhiteIcon from '../assets/images/github-white.svg'
import eLinkWhiteIcon from '../assets/images/external-link-white.svg'

const projects = [
    {
        img: goodluckScreen,
        name: 'Good Luck Digital Photo Studio',
        description: 'Designed and developed a portfolio website for a photo studio to professionally showcase their photography and services.',
        tech: 'html5 , tailwind CSS , JavaScript',
        github: 'https://github.com/afreenshaikhst23i/goodluck-2024',
        live: 'https://goodluckdps.com/',
    },
    {
        img: portfolioScreen,
        name: 'My Portfolio Website',
        description: 'Loosely designed in VS Code and fully hand-coded using Tailwind CSS. Deployed via GitHub Pages.',
        tech: 'React.js , vite , tailwind CSS , github pages',
        github: 'https://github.com/afreenshaikhst23i/portfolio',
        live: 'https://afreenshaikhst23i.github.io/portfolio/',
    },
];

function Projects() {
    return (
        <section className="Projects-section" id="projects">
            <div className="heading-wrapper scroll-reveal scroll-reveal-bottom">
                <h2 className="primary-heading">Projects</h2>
                <span className="primary-heading-shadow" aria-hidden="true">Projects</span>
            </div>
            <div className="projects-wrap">
                <div className="projects-main">
                    {projects.map((project, index) => (
                        <div key={index} className={`projects-card scroll-reveal scroll-reveal-bottom ${index % 2 === 0 ? 'flow-right' : 'flow-left'}`}>
                            <figure>
                                <a href={project.live} className='project-thumb' target="_blank" rel="noopener noreferrer">
                                    <img src={project.img} alt={project.name} />
                                </a>
                                <figcaption>
                                    <h2 className="fig-name">{project.name}</h2>
                                    <p className="fig-text">{project.description}</p>
                                    <p className="mt-4 text-secondary">{project.tech}</p>
                                    <div className="flex flex-row gap-4 items-center">
                                        <a
                                            className="fig-link"
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="GitHub"
                                        >
                                            <img className="w-6 h-6" src={githubWhiteIcon} alt="GitHub" />
                                        </a>
                                        <a
                                            className="fig-link"
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="External Link"
                                        >
                                            <img className="w-6 h-6" src={eLinkWhiteIcon} alt="External Link" />
                                        </a>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Projects;