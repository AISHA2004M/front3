import React, { useState } from "react";
import Cart from "../components/Cart";
import front from "../assets/front.jpg"; 
import laptop from "../assets/laptop.jpg";
import phone from "../assets/phone.jpeg";
import headphones from "../assets/headphones.jpeg"; // Updated file name
import smartwatch from "../assets/smartwatch.webp";
import tablet from "../assets/Tablet.jpg"; // Updated file name
import gamingConsole from "../assets/gamingConsol.jpg"; // Updated file name
import earbuds from "../assets/earbuds.jpg"; // Updated file name
import tv from "../assets/tv.webp"; // Updated file name
import drone from "../assets/drone.jpg"; // Updated file name
import hardDrive from "../assets/hardDrive.jpg"; // Updated file name

// Product list
const productsList = [
  { id: 1, name: "Laptop", price: 1000, image: laptop, description: "High-performance laptop for work and gaming." },
  { id: 2, name: "Phone", price: 500, image: phone, description: "Latest smartphone with advanced camera and fast performance." },
  { id: 3, name: "Headphones", price: 150, image: headphones, description: "Noise-canceling headphones with deep bass." },
  { id: 4, name: "Smart Watch", price: 250, image: smartwatch, description: "Track your health and stay connected on the go." },
  { id: 5, name: "Tablet", price: 400, image: tablet, description: "Portable tablet with high-resolution display." },
  { id: 6, name: "Gaming Console", price: 450, image: gamingConsole, description: "Next-gen gaming console for immersive gaming experience." },
  { id: 7, name: "Wireless Earbuds", price: 120, image: earbuds, description: "True wireless earbuds with long battery life." },
  { id: 8, name: "4K Smart TV", price: 800, image: tv, description: "Ultra HD smart TV with built-in streaming apps." },
  { id: 9, name: "Drone", price: 600, image: drone, description: "High-quality drone with 4K camera and GPS." },
  { id: 10, name: "External Hard Drive", price: 80, image: hardDrive, description: "Portable external hard drive with large storage capacity." },
];

const Products = ({ cartItems, addToCart, removeFromCart, addToBasket }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>Welcome to Our Online Store</h1>

      <div style={styles.bannerContainer}>
        <img src={front} alt="Super Sale" style={styles.bannerImage} />
      </div>

      <div style={styles.productsSection}>
        {productsList.map((product) => (
          <div
            key={product.id}
            style={{
              ...styles.productCard,
              ...(hoveredCard === product.id ? styles.productCardHover : {}),
            }}
            onMouseEnter={() => setHoveredCard(product.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <div style={styles.productInfo}>
              <h2 style={styles.productName}>{product.name}</h2>
              <p style={styles.productDescription}>{product.description}</p>
              <p style={styles.productPrice}>${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                style={{
                  ...styles.btn,
                  ...styles.btnCart,
                  ...(hoveredCard === product.id ? styles.btnCartHover : {}),
                }}
              >
                Add to Cart
              </button>
              <button
                onClick={() => addToBasket(product)}
                style={{
                  ...styles.btn,
                  ...styles.btnBasket,
                  ...(hoveredCard === product.id ? styles.btnBasketHover : {}),
                }}
              >
                Add to Basket
              </button>
            </div>
          </div>
        ))}
      </div>

      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

// ✅ **Dark Mode Styles**
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#121212",
    minHeight: "100vh",
    color: "#E0E0E0",
  },
  mainTitle: {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#ffffff",
    fontWeight: "bold",
    textShadow: "2px 2px 8px rgba(255, 255, 255, 0.2)",
  },
  bannerContainer: {
    width: "100%",
    marginBottom: "20px",
  },
  bannerImage: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)",
  },
  productsSection: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  productCard: {
    border: "1px solid #333",
    borderRadius: "15px",
    padding: "20px",
    width: "280px",
    textAlign: "center",
    backgroundColor: "#1E1E1E",
    boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  productCardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 24px rgba(255, 255, 255, 0.2)",
  },
  productImage: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  productInfo: {
    textAlign: "left",
    padding: "10px",
  },
  productName: {
    fontSize: "20px",
    color: "#FFFFFF",
    margin: "10px 0",
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: "14px",
    color: "#CCCCCC",
    margin: "5px 0",
  },
  productPrice: {
    fontSize: "18px",
    color: "#4db8ff",
    fontWeight: "bold",
    margin: "10px 0",
  },
  btn: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.2s ease, transform 0.2s ease",
    margin: "5px",
  },
  btnCart: {
    background: "linear-gradient(135deg, #4db8ff, #007acc)",
    color: "white",
  },
  btnCartHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(77, 184, 255, 0.5)",
  },
  btnBasket: {
    background: "linear-gradient(135deg, #ff4d4d, #cc0000)",
    color: "white",
  },
  btnBasketHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(255, 77, 77, 0.5)",
  },
};

export default Products;