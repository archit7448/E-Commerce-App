import { ReactComponent as Logo } from "../../assets/logo.svg";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useData } from "../../context/Data";
export const Header = () => {
  const { state } = useData();
  const { cart, wishlist } = state;
  const token = localStorage.getItem("token");
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate("/")
    localStorage.removeItem("token")
  }
  return (
    <header className="navigation navigation-component">
      <Link to="/">
        <div className="logo-header">
          <h3 className="logo-name"> MindifyCart</h3>
          <Logo className="logo" />
        </div>
      </Link>
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
          <button className="button button-primary button-login" onClick= {handleLogout}>LogOut</button>
        ) : (
          <Link to="/signIn">
            <button className="button button-primary button-login">
              LogIn
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};
