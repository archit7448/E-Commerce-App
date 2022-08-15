import "./cardProduct.css";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillHeart,
} from "react-icons/ai";
import { useData } from "../../context/dataContext";
import { addToCart } from "../../reducers/Cart";
import { addToWishlist, removeFromWishlist } from "../../reducers/wishlist";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ prop }) => {
  const { products } = prop;
  const { _id, title, price, image } = products;
  const { cart, wishlist, dispatch } = useData();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const cartHandler = (e) => {
    if (token === null) {
      navigate("/signIn");
    } else {
      cart.find((cartItem) => cartItem.title === products.title)
        ? navigate("/cart")
        : addToCart(dispatch, products);
    }
    e.stopPropagation();
  };
  const wishlistHandler = (e) => {
    if (token === null) {
      navigate("/signIn");
    } else {
      wishlist.find((wishlistItem) => wishlistItem.title === products.title)
        ? removeFromWishlist(dispatch, _id)
        : addToWishlist(dispatch, products);
    }
    e.stopPropagation();
  };
  return (
    <div className="product">
      <div
        className="img-wrapper"
        onClick={() => navigate(`/product/${title}`)}
      >
        <img src={image} alt={title} />
      </div>
      <div
        className={`${
          wishlist.find((wishlistItem) => wishlistItem._id === products._id)
            ? "red"
            : ""
        } wishlist`}
        onClick={(event) => wishlistHandler(event)}
      >
        {wishlist.find((wishlistItem) => wishlistItem._id === products._id) ? (
          <AiFillHeart />
        ) : (
          <AiOutlineHeart />
        )}
      </div>
      <div className="info">
        <div className="title">{title}</div>
        <div className="price">₹{price}</div>
      </div>

      <div className="actions-wrapper">
        <button
          className={`${
            cart.find((cartItem) => cartItem._id === products._id)
              ? "button-primary"
              : "button-secondary"
          } cart`}
          onClick={(event) => cartHandler(event)}
        >
          <AiOutlineShoppingCart />
          {cart.find((cartItem) => cartItem._id === products._id)
            ? "Go To Cart"
            : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};
