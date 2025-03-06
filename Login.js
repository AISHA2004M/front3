import React, { useState } from "react";

const Login = () => {
  const [focused, setFocused] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", email, password);
    } else {
      console.log("Signing up with:", email, password, username);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{isLogin ? "Login" : "Sign Up"}</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        {!isLogin && (
          <div style={styles.inputContainer}>
            <span style={styles.icon}>👤</span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={DynamicStyles(focused).input}
              onFocus={() => setFocused("username")}
              onBlur={() => setFocused(null)}
              required
            />
          </div>
        )}
        <div style={styles.inputContainer}>
          <span style={styles.icon}>✉️</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={DynamicStyles(focused).input}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <span style={styles.icon}>🔒</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={DynamicStyles(focused).input}
            onFocus={() => setFocused("password")}
            onBlur={() => setFocused(null)}
            required
          />
        </div>
        <button type="submit" style={DynamicStyles(focused).btn}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p style={styles.toggleText}>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span
          style={styles.toggleLink}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#121212",
    color: "#fff",
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "350px",
    padding: "40px",
    borderRadius: "15px",
    backgroundColor: "#1e1e1e",
    boxShadow: "0 8px 24px rgba(255, 255, 255, 0.1)",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#2c2c2c",
    borderRadius: "10px",
    padding: "10px",
    border: "2px solid #444",
  },
  icon: {
    fontSize: "20px",
    color: "#bbb",
  },
  input: {
    flex: 1,
    padding: "12px",
    fontSize: "16px",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    color: "#fff",
  },
  inputFocus: {
    borderColor: "#4db8ff",
    boxShadow: "0 0 12px rgba(77, 184, 255, 0.3)",
  },
  btn: {
    padding: "14px 20px",
    background: "linear-gradient(135deg, #4db8ff, #007acc)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "20px",
    fontWeight: "bold",
  },
  toggleText: {
    marginTop: "20px",
    color: "#bbb",
    textAlign: "center",
    fontSize: "14px",
  },
  toggleLink: {
    color: "#4db8ff",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underline",
  },
};

const DynamicStyles = (focused) => ({
  input: {
    ...styles.input,
    ...(focused ? styles.inputFocus : {}),
  },
  btn: {
    ...styles.btn,
  },
  toggleLink: {
    ...styles.toggleLink,
  },
});

export default Login;

