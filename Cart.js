import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="mt-6 p-6 border rounded-lg shadow-2xl bg-gray-800 text-white">
      <h2 className="text-3xl font-semibold mb-5 text-center text-indigo-400 drop-shadow-lg">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center text-lg animate-pulse">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center py-4 px-6 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              <span className="text-lg font-medium">{item.name} - ${item.price}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-lg transition-all duration-200 transform hover:scale-110 shadow-sm"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;