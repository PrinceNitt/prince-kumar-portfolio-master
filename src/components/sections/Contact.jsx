import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  // Inline style objects
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
    padding: "2rem",
    color: "white",
  };

  const boxStyle = {
    backgroundColor: "#1a1a2e",
    padding: "2rem",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "1rem",
  };

  const inputStyle = {
    padding: "0.75rem",
    borderRadius: "8px",
    border: "none",
    fontSize: "1rem",
    backgroundColor: "#2a2e3b",
    color: "white",
  };

  const buttonStyle = {
    padding: "0.75rem",
    fontSize: "1rem",
    backgroundColor: "#6c63ff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2>Contact</h2>
        <p>Feel free to reach out to me for any questions or opportunities!</p>
        <form
          ref={form}
          onSubmit={(e) => {
            e.preventDefault();
            emailjs
              .sendForm(
                "service_54pvr7p",
                "template_e4c5u8m",
                form.current,
                "WBubUU3xXG8VndH4D"
              )
              .then(
                () => {
                  alert("Message Sent!");
                  form.current.reset();
                },
                (error) => {
                  alert(
                    "Failed to send message: " +
                      (error.text || error.message || "Unknown error")
                  );
                }
              );
          }}
          style={formStyle}
        >
          <h3>Email Me 🚀</h3>
          <input name="email" placeholder="Your Email" required style={inputStyle} />
          <input name="name" placeholder="Your Name" required style={inputStyle} />
          <input name="title" placeholder="Subject" required style={inputStyle} />
          <textarea name="message" placeholder="Message" rows={4} required style={inputStyle} />
          <input type="submit" value="Send" style={buttonStyle} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
