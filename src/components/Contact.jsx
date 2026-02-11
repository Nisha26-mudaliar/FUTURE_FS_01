function Contact() {
  return (
    <section id="contact" style={styles.contact}>
      <h2 style={styles.heading}>Contact Me</h2>

      <form style={styles.form}>
        <input
          type="text"
          placeholder="Your Name"
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={styles.input}
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </section>
  )
}

const styles = {
  contact: {
    padding: "80px 20px",
    backgroundColor: "#f5f5f5",
    textAlign: "center"
  },
  heading: {
    fontSize: "32px",
    marginBottom: "30px"
  },
  form: {
    maxWidth: "500px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "10px",
    fontSize: "16px"
  },
  textarea: {
    padding: "10px",
    fontSize: "16px"
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
}

export default Contact
