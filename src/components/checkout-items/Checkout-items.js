import { useContext } from "react";
import "./Checkout-items.scss";

import { CartContext } from "../../Context/cart.context";

const CheckoutItems = ({ cartItem }) => {
  const { addItemToCart, removeItemfromCart, clearItemfromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemfromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemfromCart(cartItem);

  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItems;
