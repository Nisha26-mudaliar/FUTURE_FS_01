function About() {
  return (
    <section id="about" style={styles.about}>
      <h2 style={styles.heading}>About Me</h2>
      <p style={styles.text}>
        I am a passionate Full Stack Web Developer with a strong interest in
        building modern, responsive, and user-friendly web applications.
        I have experience working with technologies like React, Node.js,
        Express, and MongoDB.
      </p>

      <p style={styles.text}>
        I enjoy solving real-world problems through code and continuously
        improving my skills in frontend and backend development.
        My goal is to build scalable applications and grow as a professional
        software developer.
      </p>
    </section>
  )
}

const styles = {
  about: {
    padding: "80px 20px",
    textAlign: "center",
    backgroundColor: "white"
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px"
  },
  text: {
    maxWidth: "700px",
    margin: "0 auto 20px",
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.6"
  }
}

export default About
