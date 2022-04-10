import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../context/Data";
import {
  CategoryFilter,
  SortedFunction,
  RatingFilter,
  PriceFilter,
  SearchFilter,
} from "../../reducers/filter";
import "./card.css";
export const Card = () => {
  const {
    products,
    cart,
    wishlist,
    dispatch,
    sortBy,
    category,
    ratings,
    price,
    search,
  } = useData();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const sortedData = SortedFunction(products, sortBy);
  const categoryData = CategoryFilter(sortedData, category);
  const RatingData = RatingFilter(categoryData, ratings);
  const PriceData = PriceFilter(RatingData, price);
  const SearchData = SearchFilter(PriceData, search);
  return SearchData.map((products) => {
    const { _id, title, produced, price, description, image, ratings } =
      products;
    return (
      <div
        className="card-wrapper card-cart"
        key={_id}
        onClick={() => navigate(`/product/${_id}`)}
      >
        <img src={image} alt={title} />
        <div className="content-wrapper">
          <h1 className="card-heading-main">{title}</h1>
          <h4 className="card-heading-two">{produced}</h4>
          <h2 className="card-price">₹ {price}</h2>
          <h4 className="card-ratings"> ratings:{ratings}</h4>
          <p className="card-para">{description}</p>
          <div className="card-button-wrapper">
            {!cart.find((cartItem) => cartItem._id === products._id) ? (
              token !== null ? (
                <Link to="/products">
                  <button
                    className="button button-primary card-button "
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: products })
                    }
                  >
                    ADD TO CART
                  </button>
                </Link>
              ) : (
                <Link to="/signIn">
                  <button className="button button-primary card-button">
                    ADD TO CART
                  </button>
                </Link>
              )
            ) : token !== null ? (
              <Link to="/Cart">
                <button className="button button-primary card-button">
                  GO TO CART
                </button>
              </Link>
            ) : (
              <Link to="/signIn">
                <button className="button button-primary card-button">
                  ADD TO CART
                </button>
              </Link>
            )}
            {!wishlist.find((cartItem) => cartItem._id === products._id) ? (
              token !== null ? (
                <Link to="/products">
                  <button
                    className="button button-secondary card-button "
                    onClick={() =>
                      dispatch({ type: "ADD_TO_WISHLIST", payload: products })
                    }
                  >
                    WISHLIST
                  </button>
                </Link>
              ) : (
                <Link to="/signIn">
                  <button className="button button-secondary card-button">
                    WIHSLIST
                  </button>
                </Link>
              )
            ) : token !== null ? (
              <Link to="/Wishlist">
                <button className="button button-secondary card-button wishlist-button">
                  IN WISHLIST
                </button>
              </Link>
            ) : (
              <Link to="/signIn">
                <button className="button button-secondary card-button">
                  ADD TO CART
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  });
};
