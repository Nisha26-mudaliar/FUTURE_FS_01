function Projects() {
  return (
    <section id="projects" style={styles.projects}>
      <h2 style={styles.heading}>My Projects</h2>

      <div style={styles.container}>
        <div style={styles.card}>
          <h3>Smart Expense Splitter</h3>
          <p>
            A full stack web application to split and manage group expenses
            efficiently with authentication and real-time calculations.
          </p>
          <button style={styles.button}>View Project</button>
        </div>

        <div style={styles.card}>
          <h3>SafeConnect</h3>
          <p>
            Built a social networking platform promoting digital well-being 
            and safe online interactions.
            Implemented user authentication and real-time posting.
          </p>
          <button style={styles.button}>View Project</button>
        </div>
      </div>
    </section>
  )
}

const styles = {
  projects: {
    padding: "80px 20px",
    textAlign: "center",
    backgroundColor: "white"
  },
  heading: {
    fontSize: "32px",
    marginBottom: "40px"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px"
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    width: "300px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
  },
  button: {
    marginTop: "15px",
    padding: "8px 15px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer"
  }
}

export default Projects
