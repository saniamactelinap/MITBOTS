import React, { useState, useEffect } from "react";
import "./App.css";

const csSkills = [
  "JavaScript", "Python", "Java", "C++", "React", "Node.js", "SQL", "NoSQL",
  "Data Structures", "Machine Learning", "AI", "Deep Learning",
  "Computer Networks", "Cybersecurity", "DevOps", "Cloud Computing"
];

export default function App() {
  const BATCH_SIZE = 20; 
  const [skills, setSkills] = useState([]);
  const [index, setIndex] = useState(0);

  const loadMoreSkills = () => {
    const nextSkills = [];
    for (let i = 0; i < BATCH_SIZE; i++) {
      nextSkills.push(csSkills[(index + i) % csSkills.length]);
    }
    setSkills(prev => [...prev, ...nextSkills]);
    setIndex(prev => prev + BATCH_SIZE);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 5
    ) {
      loadMoreSkills();
    }
  };

  useEffect(() => {
    loadMoreSkills(); 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <h1>CEO Portfolio - CS Skills</h1>
      <div className="skills-list">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
