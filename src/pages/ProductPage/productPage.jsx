import { useParams, Link } from "react-router-dom";
import { Header } from "../../Components/header/header";
import { useData } from "../../context/Data";
import "./productPage.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
export const ProductDetail = () => {
  const { productId } = useParams();
  const { products, cart, wishlist, dispatch } = useData();
  const token = localStorage.getItem("token");
  const product = products.find((product) => product._id === productId);
  const { _id, title, produced, price, description, image, ratings } = product;
  return (
    <main>
      <Header />
      <section>
        <div className="product-id-page">
          <div className="product-id-image">
            <img src={image} alt={title} />{" "}
          </div>
          <div className="product-id-details">
            <h1 className="product-id-heading">{title}</h1>
            <h3 className="product-id-description">{description}</h3>
            <h2 className="product-id-price">₹ {price}</h2>
            <div className="product-id-ratings">
              {ratings >= 1 ? (
                <AiFillStar className="ratings-color" />
              ) : (
                <AiOutlineStar className="ratings" />
              )}
              {ratings >= 2 ? (
                <AiFillStar className="ratings-color" />
              ) : (
                <AiOutlineStar className="ratings" />
              )}
              {ratings >= 3 ? (
                <AiFillStar className="ratings-color" />
              ) : (
                <AiOutlineStar className="ratings" />
              )}
              {ratings >= 4 ? (
                <AiFillStar className="ratings-color" />
              ) : (
                <AiOutlineStar className="ratings" />
              )}
              {ratings >= 5 ? (
                <AiFillStar className="ratings-color" />
              ) : (
                <AiOutlineStar className="ratings" />
              )}
            </div>
            <div className="product-id-button-wrapper">
              {!cart.find((cartItem) => cartItem._id === product._id) ? (
                token !== null ? (
                  <button
                    className="button button-primary product-id-button"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: product })
                    }
                  >
                    ADD TO CART
                  </button>
                ) : (
                  <Link to="/signIn">
                    <button className="button button-primary product-id-button">
                      ADD TO CART
                    </button>
                  </Link>
                )
              ) : token !== null ? (
                <Link to="/Cart">
                  <button className="button button-primary product-id-button">
                    GO TO CART
                  </button>
                </Link>
              ) : (
                <Link to="/signIn">
                  <button className="button button-primary product-id-button">
                    ADD TO CART
                  </button>
                </Link>
              )}
              {!wishlist.find((cartItem) => cartItem._id === product._id) ? (
                token !== null ? (
                  <button
                    className="button button-secondary product-id-button"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_WISHLIST", payload: product })
                    }
                  >
                    WISHLIST
                  </button>
                ) : (
                  <Link to="/signIn">
                    <button className="button button-secondary product-id-button">
                      WIHSLIST
                    </button>
                  </Link>
                )
              ) : token !== null ? (
                <Link to="/Wishlist">
                  <button className="button button-secondary product-id-button">
                    IN WISHLIST
                  </button>
                </Link>
              ) : (
                <Link to="/signIn">
                  <button className="button button-secondary product-id-button">
                    Wishlist
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
