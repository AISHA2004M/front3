import React from "react";

const Basket = ({ basketItems, removeFromBasket, clearBasket }) => {
  const totalPrice = basketItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    clearBasket();
  };

  const handleClearBasket = () => {
    if (window.confirm("Are you sure you want to clear the basket?")) {
      clearBasket();
    }
  };

  const styles = {
    basketPage: {
      padding: "20px",
      textAlign: "center",
      backgroundColor: "#000",
      minHeight: "100vh",
      width: "100vw", // يجعل العنصر يمتد عبر عرض الشاشة بالكامل
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    basketItems: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "center",
      width: "100%", // تمديد العناصر بعرض الصفحة
    },
    basketItem: {
      border: "1px solid #333",
      borderRadius: "15px",
      padding: "20px",
      width: "80%", // يجعل العنصر يأخذ معظم عرض الشاشة
      maxWidth: "600px",
      textAlign: "left",
      backgroundColor: "#111",
      boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)",
      display: "flex",
      gap: "20px",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    basketItemImage: {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "10px",
    },
    basketItemDetails: {
      flex: 1,
    },
    basketItemDetailsH3: {
      fontSize: "20px",
      color: "#fff",
      margin: "0 0 10px",
      fontWeight: "bold",
    },
    price: {
      fontSize: "18px",
      color: "#4db8ff",
      fontWeight: "bold",
      margin: "10px 0",
    },
    removeButton: {
      padding: "8px 16px",
      background: "linear-gradient(135deg, #ff4d4d, #b30000)",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "14px",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    basketSummary: {
      marginTop: "30px",
      padding: "20px",
      border: "1px solid #333",
      borderRadius: "15px",
      backgroundColor: "#111",
      boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)",
      width: "80%", // يجعل المجموع يأخذ معظم عرض الشاشة
      maxWidth: "400px",
      textAlign: "center",
    },
    checkoutButton: {
      padding: "12px 24px",
      background: "linear-gradient(135deg, #4db8ff, #007acc)",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "transform 0.2s, box-shadow 0.2s",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.basketPage}>
      <h1 style={{ fontSize: "36px", color: "#fff", marginBottom: "20px" }}>
        Your Basket
      </h1>
      {basketItems.length === 0 ? (
        <p style={{ fontSize: "18px", color: "#ccc" }}>Your basket is empty.</p>
      ) : (
        <div>
          <div style={styles.basketItems}>
            {basketItems.map((item) => (
              <div key={item.id} style={styles.basketItem}>
                <img src={item.image} alt={item.name} style={styles.basketItemImage} />
                <div style={styles.basketItemDetails}>
                  <h3 style={styles.basketItemDetailsH3}>{item.name}</h3>
                  <p style={{ color: "#aaa" }}>{item.description}</p>
                  <p style={styles.price}>Price: ${item.price}</p>
                  <button
                    onClick={() => removeFromBasket(item.id)}
                    style={styles.removeButton}
                  >
                    🗑️ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.basketSummary}>
            <h3 style={{ fontSize: "24px", color: "#fff" }}>
              Total Items: {basketItems.length}
            </h3>
            <h3 style={{ fontSize: "24px", color: "#fff" }}>
              Total Price: ${totalPrice}
            </h3>
            <button onClick={handleClearBasket} style={styles.removeButton}>
              🧹 Clear Basket
            </button>
            <button onClick={handleCheckout} style={styles.checkoutButton}>
              💳 Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;