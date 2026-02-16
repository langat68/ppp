import React, { useState } from "react";
import { Github, Linkedin, Twitter, Send } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    alert("Message sent!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <h2>Get In Touch</h2>
        <p>Have a project in mind? Let's talk.</p>

        <div className="contact-content">

          {/* Form */}
          <form onSubmit={handleSubmit} className="contact-form">

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit">
              Send Message <Send size={16} />
            </button>

          </form>

          {/* Socials */}
          <div className="contact-socials">
            <p>
              I'm open to freelance work and full-time opportunities.
            </p>

            <div className="social-icons">
              <a href="#"><Github size={18} /></a>
              <a href="#"><Linkedin size={18} /></a>
              <a href="#"><Twitter size={18} /></a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
