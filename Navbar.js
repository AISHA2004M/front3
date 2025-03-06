import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/basket" style={styles.navLink}>
            Basket
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/login" style={styles.navLink}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#121212", // Darkest background
    padding: "15px 30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 12px rgba(0, 123, 255, 0.1)", // Soft light blue shadow
    position: "sticky",
    top: 0,
    zIndex: 1000,
    borderBottom: "2px solid #333333", // Dark gray border
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "30px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    position: "relative",
  },
  navLink: {
    color: "#e0e0e0", // Light gray text for better contrast
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "600",
    padding: "10px 20px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    display: "block",
    background: "linear-gradient(135deg, #121212, #1d1d1d)", // Dark gradient
    boxShadow: "0 2px 8px rgba(0, 123, 255, 0.2)", // Subtle shadow for dark mode
  },
  navLinkHover: {
    background: "linear-gradient(135deg, #007bff, #0056b3)", // Blue gradient on hover
    color: "#ffffff", // White text on hover
    transform: "translateY(-2px)", // Slight hover effect
    boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)", // Stronger blue shadow on hover
  },
};

export default Navbar;
