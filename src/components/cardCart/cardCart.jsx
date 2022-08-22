import { useData } from "../../context/dataContext";
import "./cardCart.css";
import {
  decrementOperater,
  incrementOperater,
  removeFromCart,
} from "../../reducers/Cart";
import { MdDeleteOutline } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { removeFromWishlist } from "../../reducers/wishlist";
export const CartCard = ({ prop }) => {
  const { _id, title, image, price, size, qty, ratings, description } = prop;
  const { dispatch } = useData();
  const location = useLocation();
  const navigate = useNavigate();
  const cartRemoveHandler = (_id) => {
    removeFromCart(dispatch, _id);
  };
  const increaseHandler = (_id) => {
    incrementOperater(dispatch, _id);
  };
  const decreaseHandler = (_id) => {
    decrementOperater(dispatch, _id);
  };
  const wishlistRemoveHandler = (_id) => {
    removeFromWishlist(dispatch, _id);
  };
  return (
    <div key={_id}>
      <div className="cart-card-wrapper">
        <img src={image} alt={title} className="cart-card-img" />
        <div className="cart-details">
          <div className="flex-row flex-space-between">
            <h2>{title}</h2>
            <h6>
              ₹
              {location.pathname === "/cart"
                ? Number(
                    price
                      .split("")
                      .filter((x) => x !== ",")
                      .join("")
                  ) * Number(qty)
                : price}
            </h6>
          </div>
          <div className="flex-row flex-space-between flex-center">
            {location.pathname === "/cart" ? <h1>Size: {size}</h1> : <></>}
            <h2
              className="cursor"
              onClick={() =>
                location.pathname === "/cart"
                  ? cartRemoveHandler(_id)
                  : wishlistRemoveHandler(_id)
              }
            >
              <MdDeleteOutline />
            </h2>
          </div>
          <h1>Ratings: {ratings}</h1>
          {location.pathname === "/cart" ? (
            <div className="quantity-container">
              <button
                className="button button-secondary"
                onClick={() =>
                  qty > 1 ? decreaseHandler(_id) : cartRemoveHandler(_id)
                }
              >
                -
              </button>
              <h2 className="card-ratings">{qty}</h2>
              <button
                className="button button-secondary"
                onClick={() => increaseHandler(_id)}
              >
                +
              </button>
            </div>
          ) : (
            <></>
          )}
          {location.pathname === "/wishlist" ? (
            <button
              className="button-primary button-address button-cart-card"
              onClick={() => navigate(`/product/${title}`)}
            >
              QUICK VIEW
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
