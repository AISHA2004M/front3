import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>© 2025 Online Store</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#121212", // Dark background for footer
    color: "#e0e0e0", // Light gray text for contrast
    padding: "20px",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    width: "100%",
    boxShadow: "0 -4px 12px rgba(0, 123, 255, 0.1)", // Soft blue shadow for effect
  },
  footerText: {
    fontSize: "16px",
    margin: 0,
  },
};

export default Footer;