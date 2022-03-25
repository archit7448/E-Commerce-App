import { useData } from "../../context/Data";
import { Link } from "react-router-dom";

export const WishlistCard = () => {
  const { state, dispatch } = useData();
  const { cart, wishlist } = state;
  return wishlist.map((products) => {
    const { _id, title, produced, price, description, image, ratings } =
      products;
    return (
      <div className="card-wrapper  card-cart" key={_id}>
        <img src={image} alt={title} />
        <div className="content-wrapper">
          <h1 className="card-heading-main">{title}</h1>
          <h2 className="card-heading-two">{produced}</h2>
          <h2 className="card-price">₹ {price}</h2>
          <h2 className="card-ratings"> ratings:{ratings}</h2>
          <p className="card-para">{description}</p>
          <div className="card-button-wrapper">
            <button
              className="button button-primary"
              onClick={() =>
                dispatch({ type: "REMOVE_WISHLIST", payload: _id })
              }
            >
              REMOVE
            </button>
            {!cart.find((cartItem) => cartItem._id === products._id) ? (
              <button
                className="button button-secondary card-button "
                onClick={() =>
                  dispatch({ type: "ADD_TO_CART", payload: products })
                }
              >
                ADD TO CART
              </button>
            ) : (
              <Link to="/CART">
                <button className="button button-secondary card-button ">
                  GO TO CART
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  });
};