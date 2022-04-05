import { useData } from "../../context/Data";
import { Link } from "react-router-dom";
export const CardCart = () => {
  const { state, dispatch } = useData();
  const { cart, wishlist } = state;

  return cart.length > 0 ? (
    cart.map((products) => {
      const { _id, title, produced, price, quantity, image, ratings } =
        products;
      return (
        <div className="card-wrapper  card-cart" key={_id}>
          <img src={image} alt={title} />
          <div className="content-wrapper">
            <h1 className="card-heading-main">{title}</h1>
            <h4 className="card-heading-two">{produced}</h4>
            <h2 className="card-price">₹ {price}</h2>
            <h4 className="card-ratings"> ratings:{ratings}</h4>
            <div className="card-button-wrapper">
              <div className="quantity-container">
                <button
                  className="button button-secondary"
                  onClick={() =>
                    dispatch({ type: "INCREMENT_PRODUCT", payload: products })
                  }
                >
                  +
                </button>
                <h2 className="card-ratings">{quantity}</h2>
                <button
                  className="button button-secondary"
                  onClick={() =>
                    quantity > 1
                      ? dispatch({
                          type: "DECREMENT_PRODUCT",
                          payload: products,
                        })
                      : dispatch({ type: "REMOVE_CART", payload: _id })
                  }
                >
                  -
                </button>
              </div>
              <button
                className="button button-primary"
                onClick={() => dispatch({ type: "REMOVE_CART", payload: _id })}
              >
                REMOVE
              </button>
              {!wishlist.find(
                (WishlistItem) => WishlistItem._id === products._id
              ) ? (
                <button
                  className="button button-secondary card-button "
                  onClick={() =>
                    dispatch({ type: "ADD_TO_WISHLIST", payload: products })
                  }
                >
                  WISHLIST
                </button>
              ) : (
                <Link to="/Wishlist">
                  <button className="button button-secondary card-button wishlist-button">
                    IN WISHLIST
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div></div>
  );
};
