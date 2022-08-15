import { useLocation, useNavigate } from "react-router-dom";
import { useData } from "../../context/dataContext";
import {
  addToCart,
  decrementOperater,
  incrementOperater,
  removeFromCart,
} from "../../reducers/Cart";
import { addToWishlist, removeFromWishlist } from "../../reducers/wishlist";
import "./card.css";
export const Card = ({ prop }) => {
  const { products, isCart, isWishlist } = prop;
  const { cart, wishlist, dispatch } = useData();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { _id, title, produced, price, description, image, ratings, qty } =
    products;
  const location = useLocation();
  const cartHandler = (e) => {
    if (token === null) {
      navigate("/signIn");
    } else {
      cart.find((cartItem) => cartItem._id === products._id)
        ? navigate("/cart")
        : addToCart(dispatch, products);
    }
    e.stopPropagation();
  };
  const wishlistHandler = (e) => {
    if (token === null) {
      navigate("/signIn");
    } else {
      wishlist.find((wishlistItem) => wishlistItem._id === products._id)
        ? navigate("/wishlist")
        : addToWishlist(dispatch, products);
    }
    e.stopPropagation();
  };
  const cartRemoveHandler = (e) => {
    removeFromCart(dispatch, _id);
    e.stopPropagation();
  };
  const increaseHandler = (e) => {
    incrementOperater(dispatch, _id);
    e.stopPropagation();
  };
  const decreaseHandler = (e) => {
    decrementOperater(dispatch, _id);
    e.stopPropagation();
  };

  const wishlistRemoveHandler = (e) => {
    removeFromWishlist(dispatch, _id);
    e.stopPropagation();
  };
  return (
    <div
      className="card-wrapper card-cart"
      key={_id}
      onClick={() => navigate(`/product/${_id}`)}
    >
      {location.pathname !== "/products" && <img src={image} alt={title} />}
      <div className="content-wrapper">
        {location.pathname === "/products" && <img src={image} alt={title} />}
        <h1 className="card-heading-main">{title}</h1>
        <h4 className="card-heading-two">{produced}</h4>
        <h2 className="card-price">₹ {price}</h2>
        <h4 className="card-ratings"> ratings:{ratings}</h4>
        {isCart ? (
          <div className="quantity-container">
            <button
              className="button button-secondary"
              onClick={(event) =>
                qty > 1 ? decreaseHandler(event) : cartRemoveHandler(event)
              }
            >
              -
            </button>
            <h2 className="card-ratings">{qty}</h2>
            <button
              className="button button-secondary"
              onClick={(event) => increaseHandler(event)}
            >
              +
            </button>
          </div>
        ) : (
          <> </>
        )}
        <div className="card-button-wrapper">
          {isCart ? (
            <button
              className="button button-primary card-button "
              onClick={(event) => cartRemoveHandler(event)}
            >
              REMOVE
            </button>
          ) : isWishlist ? (
            <button
              className="button button-primary card-button "
              onClick={(event) => wishlistRemoveHandler(event)}
            >
              REMOVE
            </button>
          ) : (
            <button
              className="button button-primary card-button "
              onClick={(event) => cartHandler(event)}
            >
              {cart.find((cartItem) => cartItem._id === products._id)
                ? "GO TO CART"
                : "ADD TO CART"}
            </button>
          )}
          {isWishlist ? (
            <button
              className="button button-secondary card-button "
              onClick={(event) => cartHandler(event)}
            >
              {cart.find((cartItem) => cartItem._id === products._id)
                ? "GO TO CART"
                : "ADD TO CART"}
            </button>
          ) : (
            <button
              className="button button-secondary card-button "
              onClick={(event) => wishlistHandler(event)}
            >
              {wishlist.find(
                (wishlistItem) => wishlistItem._id === products._id
              )
                ? "IN WISHLIST"
                : "WISHLIST"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
