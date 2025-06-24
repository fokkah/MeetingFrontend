import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!\n\nEmail: " + email + "\nDescription: " + description);
    setEmail("");
    setDescription("");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        width: "100vw",
      }}
    >
      <div style={{ maxWidth: 400, width: "100%" }}>
        <h3>Contact</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">My email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={e => setDescription(e.target.value)}
              maxLength={1000}
              rows={6}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;