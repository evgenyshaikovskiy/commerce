import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img
        className="shopping-icon"
        src={process.env.PUBLIC_URL + "/shopping-bag.svg"}
        alt="cart-icon"
      />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
