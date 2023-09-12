import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./Navigation.scss";

import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";

import { UserContext } from "../../Context/user.context";
import { signOutUser } from "../../Utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);


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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
