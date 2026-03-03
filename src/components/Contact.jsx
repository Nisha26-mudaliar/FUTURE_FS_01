import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill all fields");
    return;
  }

  setSubmitted(true);
  setFormData({ name: "", email: "", message: "" });

  // 👇 Auto hide success message after 3 seconds
  setTimeout(() => {
    setSubmitted(false);
  }, 3000);
};

  return (
    <section id="contact" style={styles.contact}>
      <h2 style={styles.heading}>Contact Me</h2>

      {submitted && (
        <p style={styles.success}>✅ Message sent successfully!</p>
      )}

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>
    </section>
  );
}

const styles = {
  contact: {
    padding: "100px 20px",
    background: "linear-gradient(to right, #f8f9fa, #eef2f7)",
    textAlign: "center"
  },

  heading: {
    fontSize: "34px",
    marginBottom: "40px",
    fontWeight: "600"
  },

  form: {
    maxWidth: "520px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
  },

  input: {
    padding: "14px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1px solid #100f0f",
    outline: "none",
    transition: "0.3s"
  },

  textarea: {
    padding: "14px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1px solid #090909",
    outline: "none",
    resize: "none",
    transition: "0.3s"
  },

  button: {
    padding: "14px",
    background: "linear-gradient(135deg, #5684b5, #0056d2)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "16px",
    transition: "0.3s",
    boxShadow: "0 4px 10px rgba(11, 10, 10, 0.3)"
  }
};

export default Contact;