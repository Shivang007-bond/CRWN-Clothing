import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./Navigation.scss";

import ShopCart from "../../components/shop-cart/Shop-cart";
import CartDropdown from "../../components/cart-dropdown/Cart-dropdown";

import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";

import { UserContext } from "../../Context/user.context";
import { CartContext } from "../../Context/cart.context";

import { signOutUser } from "../../Utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>Sign Out</span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign-in
            </Link>
          )}
          <ShopCart />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
