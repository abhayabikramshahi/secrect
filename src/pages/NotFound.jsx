import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const NotFound = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "5rem", fontWeight: "bold", marginBottom: "1rem" }}>404</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Page Not Found</p>
      <Link to="/" style={{
        color: "#fff",
        background: "#222",
        padding: "0.75rem 2rem",
        borderRadius: "999px",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1.1rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)"
      }}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
