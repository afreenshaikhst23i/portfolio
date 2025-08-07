import goodluckScreen from '../assets/images/projects/goodluck.png'
import portfolioScreen from '../assets/images/projects/portfolio.png'
import githubWhiteIcon from '../assets/images/github-white.svg'
import eLinkWhiteIcon from '../assets/images/external-link-white.svg'

function Projects() {
    return (
        <section className="Projects-section" id="projects">
            <div className="heading-wrapper">
                <h2 className="primary-heading">Projects</h2>
                <span className="primary-heading-shadow" aria-hidden="true">Projects</span>
            </div>
            <div className="projects-wrap">
                <ul className="projects-slider">
                    <li>
                        <figure>
                            <img className="project-thumb" src={goodluckScreen} alt="" />
                            <figcaption>
                                <h2 className="fig-name">Good Luck Digital Photo Studio</h2>
                                <p className="fig-text">Designed and developed a portfolio website for a photo studio to professionally showcase their photography and services.</p>
                                <p className="mt-4 text-secondary">html5 , tailwind CSS</p>
                                <div className='flex flex-row gap-4 items-center'>
                                    <a className="fig-link" href="https://github.com/afreenshaikhst23i/goodluck-2024" target="_blank">
                                        <img className="w-6 h-6" src={githubWhiteIcon} alt="" />
                                    </a>
                                    <a className="fig-link" href="https://goodluckdps.com/" target="_blank">
                                        <img className="w-6 h-6" src={eLinkWhiteIcon} alt="" />
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                    <li>
                        <figure>
                            <img className="project-thumb" src={portfolioScreen} alt="" />
                            <figcaption>
                                <h2 className="fig-name">My Portfolio Website</h2>
                                <p className="fig-text">Loosely designed in VS Code and fully hand-coded using Tailwind CSS. Deployed via GitHub Pages.</p>
                                <p className="mt-4 text-secondary">React.js , vite , tailwind CSS , github pages</p>
                                <div className='flex flex-row gap-4 items-center'>
                                    <a className="fig-link" href="https://github.com/afreenshaikhst23i/portfolio" target="_blank">
                                        <img className="w-6 h-6" src={githubWhiteIcon} alt="" />
                                    </a>
                                    <a className="fig-link" href="https://afreenshaikhst23i.github.io/portfolio/" target="_blank">
                                        <img className="w-6 h-6" src={eLinkWhiteIcon} alt="" />
                                    </a>
                                </div>
                            </figcaption>
                        </figure>
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default Projects;