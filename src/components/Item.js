import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState('');
  const cartList = cart ? "in-cart" : '';
  const handleCartButtonClick = () => {
    // toggle the cart state when the button is clicked
    setCart(!cart);
  };

  return (
    <li className={cartList}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartButtonClick}>
        {cart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
