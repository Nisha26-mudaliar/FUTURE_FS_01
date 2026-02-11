function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Nisha</h2>
      <ul style={styles.menu}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#skills" style={styles.link}>Skills</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
    </ul>

      
    </nav>
  )
}

const styles = {
  nav: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  backgroundColor: "#111",
  color: "white",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000
},

  logo: {
    margin: 0
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0
  },
  link: {
  textDecoration: "none",
  color: "white",
  cursor: "pointer"
}

  
}

export default Navbar
