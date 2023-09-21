import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

// import "./Navigation.scss";
import { NavigationContainer , LogoContainer, NavLinks, NavLink } from "./Navigation.style";

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
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
          ) : (
            <NavLink to="/auth">
              Sign-in
            </NavLink>
          )}
          <ShopCart />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
