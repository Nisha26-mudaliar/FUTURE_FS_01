function Footer() {
  return (
    <footer style={styles.footer}>
      <h3 style={styles.name}>Nisha Mudaliar</h3>

      <p style={styles.tagline}>
        Full Stack Web Developer | React • Node • MongoDB
      </p>

      <div style={styles.links}>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/Nisha26-mudaliar"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          GitHub
        </a>

        <a
          href="mailto:nisha@2004mudaliar@gmail.com"
          style={styles.link}
        >
          Email
        </a>
      </div>

      <p style={styles.copy}>
        © {new Date().getFullYear()} Nisha Mudaliar. All rights reserved.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    padding: "40px 20px",
    backgroundColor: "#111",
    color: "white",
    textAlign: "center"
  },
  name: {
    margin: "0",
    fontSize: "20px"
  },
  tagline: {
    margin: "8px 0 20px",
    color: "#aaa",
    fontSize: "14px"
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginBottom: "20px"
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontWeight: "bold"
  },
  copy: {
    fontSize: "13px",
    color: "#777"
  }
};

export default Footer;