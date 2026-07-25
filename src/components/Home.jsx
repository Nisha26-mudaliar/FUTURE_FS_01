import "./Home.css";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <section id="home" className="hero">
      {/* Left Side */}
      <div className="hero-left">

        <div className="availability">
          <span className="dot"></span>
          Available for Work
        </div>

        <h1 className="hero-title">
          Nisha <span>Mudaliar</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "Software Developer",
            2000,
            "React Developer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="hero-subtitle"
        />

        <p className="hero-description">
          I build responsive, scalable and user-focused web applications
          using modern technologies. Passionate about writing clean,
          maintainable code and creating seamless digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="btn secondary"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Nisha26-mudaliar"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/nisha-mudaliar-943936275"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:nisha2004mudaliar@gmail.com">
            Email
          </a>
        </div>

        <div className="stats">
          <div className="stat">
            <h3>4+</h3>
            <p>Projects</p>
          </div>

          <div className="stat">
            <h3>MCA</h3>
            <p>Graduate</p>
          </div>

          <div className="stat">
            <h3>Open</h3>
            <p>To Work</p>
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className="hero-right">

        <div className="glow"></div>

        <div className="code-card">

          <div className="code-header">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <pre>{`const developer = {
  name: "Nisha",

  role: "Full Stack",

  skills: [
    "React",
    "Node.js",
    "Python",
    "MongoDB"
  ],

  passion:
    "Building Modern Web Apps"
};`}</pre>

        </div>
      </div>
    </section>
  );
}

export default Home;