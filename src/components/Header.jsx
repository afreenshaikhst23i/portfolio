import { useState, useEffect } from 'react';
import mailIcon from '../assets/images/social-icons/mail.svg';
import linkedinIcon from '../assets/images/social-icons/linkedin.svg';
import githubIcon from '../assets/images/social-icons/github.svg';
import resumeIcon from '../assets/images/social-icons/resume.svg';

const navItems = [
    { href:  "#about", title: "About" },
    { href:  "#skills", title: "Skills"},
    { href:  "#projects", title: "Projects"},
    { href:  "#certificate", title: "Certifications"}
]

const socialLinks = [
  {
    href: "mailto:shaikhafreenst23i@gmail.com",
    title: "Email",
    icon: mailIcon,
  },
  {
    href: "https://www.linkedin.com/in/afreen-zuber-shaikh",
    title: "LinkedIn",
    icon: linkedinIcon,
  },
  {
    href: "https://github.com/afreenshaikhst23i",
    title: "GitHub",
    icon: githubIcon,
  },
  {
    href: "/afreen-shaikh-resume.pdf",
    title: "Resume",
    icon: resumeIcon,
  },
];


function Header() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;

        navItems.forEach((item) => {
            const section = document.querySelector(item.href);
            if (section) {
            const offsetTop = section.offsetTop;
            const offsetHeight = section.offsetHeight;

            if (
                scrollY >= offsetTop - 100 &&
                scrollY < offsetTop + offsetHeight - 100
            ) {
                setActiveSection(item.href);
            }
            }
        });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // trigger on load

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="header-main">
            <div className="nav-wrapper">
                <div className="logo-name-wrapper">
                    <h1 className="logo-name">
                        <a href="index.html" className="logo-main">
                            <span className="logo">Afreen Shaikh</span>
                        </a>
                    </h1>
                    <h2 className="logo-subtitle">
                        UI/FRONTEND DEVELOPER
                    </h2>
                    <p className="logo-description">
                        Building high-performance, accessible, and elegant interfaces for the modern web
                    </p>
                </div>
                <nav className="menu-main" id="main-menu">
                    <ul className="menu-list">
                        {navItems.map((navList) => (
                            <li key={navList.href}>
                                <a href={navList.href} 
                                className={`menu-item ${activeSection === navList.href ? 'active' : ''}`}>
                                <span className='nav-indicator' aria-hidden="true"></span>
                                <span className='nav-text'>{navList.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <ul className="social-icon-list">
                {socialLinks.map((item, index) => (
                    <li key={index} className="social-icon-item">
                    <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon-link"
                        title={item.title}
                    >
                        <img src={item.icon} alt={item.title} />
                    </a>
                    </li>
                ))}
            </ul>
        </header>
    );
}
export default Header;