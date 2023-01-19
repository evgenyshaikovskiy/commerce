import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
