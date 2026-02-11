function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <h1 style={styles.title}>
        Hi, I'm <span style={styles.highlight}>Nisha</span>
      </h1>
      <h2 style={styles.subtitle}>Full Stack Web Developer</h2>
      <p style={styles.description}>
        I build responsive and scalable web applications using modern
        technologies like React, Node.js, and MongoDB.
      </p>

      <div style={styles.buttons}>
        <button style={styles.primaryBtn}>View Projects</button>
        <button style={styles.secondaryBtn}>Contact Me</button>
      </div>
    </section>
  )
}

const styles = {
  hero: {
  textAlign: "center",
  padding: "140px 20px 100px",
  backgroundColor: "#f5f5f5"
},

  title: {
    fontSize: "40px",
    marginBottom: "10px"
  },
  highlight: {
    color: "#007bff"
  },
  subtitle: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#555"
  },
  description: {
    maxWidth: "600px",
    margin: "0 auto 30px",
    fontSize: "18px",
    color: "#666"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },
  primaryBtn: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer"
  },
  secondaryBtn: {
    padding: "10px 20px",
    backgroundColor: "transparent",
    border: "2px solid #007bff",
    cursor: "pointer"
  }
}

export default Hero

