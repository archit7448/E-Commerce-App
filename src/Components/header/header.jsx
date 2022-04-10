import { ReactComponent as Logo } from "../../assets/logo.svg";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import { useData } from "../../context/Data";
export const Header = () => {
  let location = useLocation();
  const { cart, wishlist, search, dispatch } = useData();
  const token = localStorage.getItem("token");
  return (
    <header className="navigation navigation-component">
      <Link to="/">
        <div className="logo-header">
          <h3 className="logo-name"> MindifyCart</h3>
          <Logo className="logo" />
        </div>
      </Link>
      {location.pathname === "/products" && (
        <div className="input-wrapper">
          <input
            type="text"
            className="input-search"
            placeholder="...search"
            value={search}
            onChange={(event) =>
              dispatch({ type: "UPDATE_SEARCH", payload: event.target.value })
            }
          />
        </div>
      )}
      <div className="login-cart">
        {token !== null ? (
          <Link to="/Cart">
            <div className="header-logo cart-logo">
              <AiOutlineShoppingCart />
            </div>
            <span className="cart-log">
              {cart.length < 10 ? cart.length : 9 + "+"}
            </span>
          </Link>
        ) : (
          <Link to="/signIn">
            <div className="header-logo">
              <AiOutlineShoppingCart />
            </div>
          </Link>
        )}
        {token !== null ? (
          <Link to="/Wishlist">
            <div className="header-logo heart-logo">
              <AiOutlineHeart />
              <span className="cart-log">
                {wishlist.length < 10 ? wishlist.length : 9 + "+"}
              </span>
            </div>
          </Link>
        ) : (
          <Link to="/signIn">
            <div className="header-logo">
              <AiOutlineHeart />
            </div>
          </Link>
        )}
        {token !== null ? (
          <Link to="/profile">
            <button className="button button-login">
              <FaUserAlt />
            </button>
          </Link>
        ) : (
          <Link to="/signIn">
            <button className="button  button-login">
              {" "}
              <FaUserAlt />{" "}
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};
