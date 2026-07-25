import "./About.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="section-header">
        <p className="section-tag">GET TO KNOW ME</p>
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>

      <div className="about-container">

        {/* Left Card */}

        <div className="about-card">

          <h3>👨‍💻 Developer Profile</h3>

          <div className="info">
            <span>🎓 Education</span>
            <p>MCA Graduate</p>
          </div>

          <div className="info">
            <span>📍 Location</span>
            <p>Ahmedabad, Gujarat</p>
          </div>

          <div className="info">
            <span>💼 Role</span>
            <p>Full Stack Developer</p>
          </div>

          <div className="info">
            <span>🌱 Status</span>
            <p>Open to Work</p>
          </div>

        </div>

        {/* Right Content */}

        <div className="about-content">

          <h3>Building digital experiences with clean code.</h3>

          <p>
            I'm <strong>Nisha Mudaliar</strong>, a passionate Full Stack Developer
            who enjoys creating responsive, scalable and user-friendly web
            applications. I love turning ideas into real products through
            clean architecture and modern technologies.
          </p>

          <p>
            My experience includes developing projects with React, Node.js,
            Express.js, MongoDB, JavaScript and Python. I'm always excited to
            learn new technologies and continuously improve my development
            skills.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express</span>
            <span>JavaScript</span>
            <span>Python</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;