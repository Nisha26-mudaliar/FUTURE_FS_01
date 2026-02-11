function Skills() {
  return (
    <section id="skills" style={styles.skills}>
      <h2 style={styles.heading}>My Skills</h2>

      <div style={styles.container}>
        <div style={styles.card}>
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>

        <div style={styles.card}>
          <h3>Backend</h3>
          <p>Node.js, Express</p>
        </div>

        <div style={styles.card}>
          <h3>Database</h3>
          <p>MongoDB, MySQL</p>
        </div>

        <div style={styles.card}>
          <h3>Tools</h3>
          <p>Git, GitHub, VS Code</p>
        </div>
      </div>
    </section>
  )
}

const styles = {
  skills: {
    padding: "80px 20px",
    backgroundColor: "#f5f5f5",
    textAlign: "center"
  },
  heading: {
    fontSize: "32px",
    marginBottom: "40px"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px"
  },
  card: {
    backgroundColor: "white",
    padding: "20px",
    width: "200px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  }
}

export default Skills
