import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as NewHeart } from "../../assets/heart.svg";
import { Link } from "react-router-dom";
import "./header.css";
export const Header = () => {
  return (
    <header className="navigation navigation-component">
      <Link to="/">
        <div className="logo-header">
          <h3 className="logo-name"> MindifyCart</h3>
          <Logo className="logo" />
        </div>
      </Link>
      <div className="login-cart">
        <Cart className="cart" />
        <div className="heart">
          <NewHeart />
        </div>
        <button className="button button-primary">LOGIN</button>
      </div>
    </header>
  );
};
