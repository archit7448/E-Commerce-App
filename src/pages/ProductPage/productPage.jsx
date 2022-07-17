import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../Components/header/header";
import { useData } from "../../context/Data";
import "./productPage.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { addToCart } from "../../reducers/Cart";
import { addToWishlist } from "../../reducers/wishlist";
export const ProductDetail = () => {
  const { productId } = useParams();
  const { products, cart, wishlist, dispatch } = useData();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const product = products.find((product) => product._id === productId);
  const { title, price, description, image, ratings } = product;
  const cartHandler = () => {
    if (token === null) {
      navigate("/signIn");
    } else {
      cart.find((cartItem) => cartItem._id === product._id)
        ? navigate("/cart")
        : addToCart(dispatch, product);
    }
  };
  const wishlistHandler = () => {
    if (token === null) {
      navigate("/signIn");
    } else {
      wishlist.find((wishlistItem) => wishlistItem._id === product._id)
        ? navigate("/wishlist")
        : addToWishlist(dispatch, product);
    }
  };
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
              <button
                className="button button-primary product-id-button"
                onClick={() => cartHandler()}
              >
                {cart.find((cartItem) => cartItem._id === product._id)
                  ? "GO TO CART"
                  : "ADD TO CART"}
              </button>
              <button
                className="button button-secondary product-id-button"
                onClick={() => wishlistHandler()}
              >
                {wishlist.find(
                  (wishlistItem) => wishlistItem._id === product._id
                )
                  ? "IN WISHLIST"
                  : "WISHLIST"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
