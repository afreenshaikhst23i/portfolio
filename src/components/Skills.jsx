import html5Icon from '../assets/images/skills/html5.svg';
import css3Icon from '../assets/images/skills/css3.svg';
import javascriptIcon from '../assets/images/skills/javascript.svg';     
import reactIcon from '../assets/images/skills/react.svg';     
import nextIcon from '../assets/images/skills/next.svg';     
import tailwindIcon from '../assets/images/skills/tailwind-css.svg';    
import bootstrapIcon from '../assets/images/skills/bootstrap.svg';    
import sassIcon from '../assets/images/skills/sass.svg';    
import materialIcon from '../assets/images/skills/material-ui.svg';    
import gitIcon from '../assets/images/skills/git.svg';    
import githubIcon from '../assets/images/skills/github.svg';    
import vsCodeIcon from '../assets/images/skills/vs-code.svg';    
import vite from '../assets/images/skills/vite.svg';    

const skillCategories  = [
    {
        title: "Languages",
        skills: [
            { name: "HTML5", icon: html5Icon, width: 48, height: 48 },
            { name: "CSS3", icon: css3Icon, width: 48, height: 48 },
            { name: "JavaScript", icon: javascriptIcon, width: 48, height: 48 },
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: "React.js", icon: reactIcon, width: 48, height: 48 },
            { name: "Next.js", icon: nextIcon, width: 48, height: 48 },
        ]
    },
    {
        title: "Styling & UI",
        skills: [
            { name: "Tailwind CSS", icon: tailwindIcon, width: 48, height: 48 },
            { name: "Bootstrap", icon: bootstrapIcon, width: 48, height: 48 },
            { name: "Sass", icon: sassIcon, width: 48, height: 48 },
            { name: "Material-UI", icon: materialIcon, width: 48, height: 48 },
        ]
    },
    {
        title: "Tools & Workflow",
        skills: [
            { name: "Git", icon: gitIcon, width: 48, height: 48 },
            { name: "GitHub", icon: githubIcon, width: 48, height: 48 },
            { name: "VS Code", icon: vsCodeIcon, width: 48, height: 48 },
            { name: "Vite", icon: vite, width: 48, height: 48 },
        ]
    }
]

function Skills() {
    return (
        <section className="skills-section" id="skills">
            <div className="heading-wrapper scroll-reveal scroll-reveal-bottom">
                <h2 className="primary-heading">My Skills</h2>
                <span className="primary-heading-shadow" aria-hidden="true">My Skills</span>
            </div>
            <div className="skills-wrap">
                {skillCategories.map((category, index) => (
                    <div className="skills-grid scroll-reveal scroll-reveal-bottom" key={index}> 
                        <div className="skills-header">
                            <h3>{category.title}</h3>
                        </div>
                        <div className="skills-list">
                            {category.skills.map((skill, i) => (
                            <div key={i}>
                                <img src={skill.icon} alt={skill.name} width={skill.width} height={skill.height} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Skills;