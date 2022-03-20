import { ReactComponent as Logo } from "../../assets/logo.svg";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./header.css";
export const Header = () => {
  const token = localStorage.getItem("token");
  return (
    <header className="navigation navigation-component">
      <Link to="/">
        <div className="logo-header">
          <h3 className="logo-name"> MindifyCart</h3>
          <Logo className="logo" />
        </div>
      </Link>
      <div className="login-cart">
        {token.length > 0 ? (
          <Link to="/Cart">
            <div className="header-logo">
              <AiOutlineShoppingCart />
            </div>
          </Link>
        ) : (
          <Link to="/signIn">
            <div className="header-logo">
              <AiOutlineShoppingCart />
            </div>
          </Link>
        )}
        {token.length > 0 ? (
          <Link to="/Wishlist">
            <div className="header-logo">
              <AiOutlineHeart />
            </div>
          </Link>
        ) : (
          <Link to="/signIn">
            <div className="header-logo">
              <AiOutlineHeart />
            </div>
          </Link>
        )}

        <Link to="/signIn">
          <button className="button button-primary">LOGIN</button>
        </Link>
      </div>
    </header>
  );
};
