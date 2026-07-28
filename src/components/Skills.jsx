import "./Skills.css";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiFlask,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "REST API" },
      { name: "JWT" },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },

  {
    title: "Programming",
    skills: [
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C++" },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code" },
      { name: "Postman", icon: <SiPostman /> },
      { name: "npm" },
    ],
  },

  {
    title: "Core Skills",
    skills: [
      { name: "OOP" },
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "Responsive Design" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <p className="section-tag">MY SKILLS</p>

        <h2>Technologies I Work With</h2>

        <div className="underline"></div>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.title}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>

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