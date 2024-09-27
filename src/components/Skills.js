import React from 'react';
import "./Skills.css";
import htmlLogo from "../assets/html-logo.svg";
import cssLogo from "../assets/css-logo.svg";
import javascriptLogo from "../assets/javascript-logo.svg";
import reactLogo from "../assets/react-logo.svg";
import nodejsLogo from "../assets/nodejs-logo.svg";
import gitLogo from "../assets/git-logo.svg";
import githubLogo from "../assets/github-logo.svg";
import vscodeLogo from "../assets/vscode-logo.svg";
import logo from '../assets/C++.png';

const Skills = () => {
    const skillsList = [
        { img: htmlLogo, skillName: "HTML" },
        { img: cssLogo, skillName: "CSS" },
        { img: logo, skillName: "C++" },
        { img: javascriptLogo, skillName: "JavaScript" },
        { img: reactLogo, skillName: "React.js" },
        { img: nodejsLogo, skillName: "Node.js" },
        { img: gitLogo, skillName: "Git" },
        { img: githubLogo, skillName: "GitHub" },
        { img: vscodeLogo, skillName: "VS Code" }
    ];

    return (
        <div className='skills-container' id='skills'>
            <h2 className='skills-title'>Skills</h2>
            <div className='skill-cards-container'>
                {skillsList.map((item) => (
                    <div className='skill-card' key={item.skillName}>
                        <div className='skill-img-container'>
                            <img src={item.img} alt={item.skillName} className="skill-img" />
                        </div>
                        <div className='skill-name'>
                            <p>{item.skillName}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
