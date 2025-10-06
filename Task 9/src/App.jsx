import React from "react";
import "./App.css";

import cssLogo from "./assets/css.svg";
import djangoLogo from "./assets/django.svg";
import electronLogo from "./assets/electron.svg";
import figmaLogo from "./assets/figma.svg";
import htmlLogo from "./assets/html.svg";
import javaLogo from "./assets/java.svg";
import jsLogo from "./assets/javascript.svg";
import mongodbLogo from "./assets/mongodb.svg";
import mysqlLogo from "./assets/mysql.svg";
import postgresLogo from "./assets/postgresql.svg";
import nodeLogo from "./assets/nodejs.svg";
import pythonLogo from "./assets/python.svg";
import reactLogo from "./assets/react.svg";

const skills = [
  { name: "CSS", logo: cssLogo },
  { name: "Django", logo: djangoLogo },
  { name: "Electron", logo: electronLogo },
  { name: "Figma", logo: figmaLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "Java", logo: javaLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "MongoDB", logo: mongodbLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "PostgreSQL", logo: postgresLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "Python", logo: pythonLogo },
  { name: "React", logo: reactLogo },
];

const repeatedSkills = [...skills, ...skills];

export default function App() {
  return (
    <div className="App">
      <h1 className="skills-heading">Skills</h1>
      <div className="scroll-container">
        <div className="scroll-track">
          {repeatedSkills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img src={skill.logo} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
