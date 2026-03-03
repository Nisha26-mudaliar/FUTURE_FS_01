function Projects() {
  return (
    <section id="projects" style={styles.projects}>
      <h2 style={styles.heading}>My Projects</h2>

      <div style={styles.container}>

        {/* Smart Expense Splitter */}
        <div style={styles.card}>
          <h3>Smart Expense Splitter</h3>
          <p>
            A full stack web application to split and manage group expenses
            efficiently with authentication and real-time calculations.
          </p>

          <a 
            href="https://github.com/Nisha26-mudaliar" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={styles.button}>View Project</button>
          </a>
        </div>

        {/* Brew Haven Cafe */}
        <div style={styles.card}>
          <h3>Brew Haven Cafe</h3>
          <p>
            A modern café website built with React featuring animated UI,
            gallery, interactive menu, cart system and responsive design.
          </p>

          <a 
            href="https://github.com/Nisha26-mudaliar/FUTURE_FS_03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={styles.button}>View Project</button>
          </a>
        </div>

        {/* Todo App */}
        <div style={styles.card}>
          <h3>React Todo App</h3>
          <p>
            A task management application built with React allowing users
            to add, delete and manage daily tasks efficiently.
          </p>

          <a 
            href="https://github.com/Nisha26-mudaliar/todo-react-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button style={styles.button}>View Project</button>
          </a>
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