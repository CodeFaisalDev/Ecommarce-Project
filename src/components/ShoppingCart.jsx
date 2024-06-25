
import React from "react";
import { useCart } from "@/app/context/CartContext";

const ShoppingCart = () => {
  const { cart, cartSubtotal } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
      <h3>Subtotal: ${cartSubtotal.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;
