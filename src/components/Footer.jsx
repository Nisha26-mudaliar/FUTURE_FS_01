function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Nisha Mudaliar. All rights reserved.</p>

      <div style={styles.links}>
        <a href="#" style={styles.link}>LinkedIn</a>
        <a href="#" style={styles.link}>GitHub</a>
        <a href="nisha@2004mudaliar@gmail.com" style={styles.link}>Email</a>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    padding: "20px",
    backgroundColor: "#111",
    color: "white",
    textAlign: "center"
  },
  links: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },
  link: {
    color: "#007bff",
    textDecoration: "none"
  }
}

export default Footer
