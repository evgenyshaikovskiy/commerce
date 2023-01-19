import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { signOutUser } from "../../utils/firebase";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";

import "./navigation.styles.scss";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="navigation-bar">
        <Link className="logo-container" to="/">
          <img src={process.env.PUBLIC_URL + "/crown.svg"} alt="logo"></img>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon></CartIcon>
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
