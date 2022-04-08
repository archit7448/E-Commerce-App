import { useData } from "../../context/Data";
import { Link } from "react-router-dom";

export const WishlistCard = () => {
  const { cart, wishlist, dispatch } = useData();
  return wishlist.map((products) => {
    const { _id, title, produced, price, description, image, ratings } =
      products;
    return (
      <div className="card-wrapper  card-cart" key={_id}>
        <img src={image} alt={title} />
        <div className="content-wrapper">
          <h1 className="card-heading-main">{title}</h1>
          <h4 className="card-heading-two">{produced}</h4>
          <h2 className="card-price">₹ {price}</h2>
          <h4 className="card-ratings"> ratings:{ratings}</h4>
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
