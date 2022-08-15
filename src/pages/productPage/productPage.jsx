import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { useData } from "../../context/dataContext";
import "./productPage.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { addToCart } from "../../reducers/Cart";
import { addToWishlist } from "../../reducers/wishlist";
import { useState, useEffect } from "react";
import axios from "axios";
export const ProductDetail = () => {
  const { productName } = useParams();
  const { cart, wishlist, dispatch } = useData();
  const token = localStorage.getItem("token");
  const [product, setProductState] = useState([]);
  const [sizeState, setSizeState] = useState("");
  const [errorState, setErrorState] = useState(false);
  const [shakeState, setShakeState] = useState(false);
  const navigate = useNavigate();
  const cartHandler = () => {
    if (token === null) {
      navigate("/signIn");
    } else if (sizeState === "") {
      setErrorState(true);
      setShakeState(true);
      setTimeout(() => setShakeState(false), 1000);
    } else {
      setErrorState(false);
      cart.find((cartItem) => cartItem.title === product.title)
        ? navigate("/cart")
        : addToCart(dispatch, product);
    }
  };
  const wishlistHandler = () => {
    if (token === null) {
      navigate("/signIn");
    } else {
      wishlist.find((wishlistItem) => wishlistItem.title === product.title)
        ? navigate("/wishlist")
        : addToWishlist(dispatch, product);
    }
  };

  let title, price, description, image, ratings;

  if (product.length !== 0) {
    ({ title, price, description, image, ratings } = product);
  }

  // Size Handler

  const sizeHandler = (size) => {
    setSizeState(() => size);
    setErrorState(false);
    setProductState((state) => ({ ...state, size: size }));
  };

  //ForPlaylist

  useEffect(() => {
    (async (productName) => {
      try {
        const response = await axios.get(`/api/products/${productName}`);
        setProductState({ ...response.data.product });
      } catch (error) {
        console.log(error);
      }
    })(productName);
  }, []);
  useEffect(() => {
    (async (productName) => {
      try {
        const response = await axios.get(`/api/products/${productName}`);
        setProductState({ ...response.data.product });
      } catch (error) {
        console.log(error);
      }
    })(productName);
  }, [productName]);
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
            <h1>Size</h1>
            <div className={`flex-row ${shakeState ? "shake-wrapper" : ""}`}>
              <div
                className={`size-button ${
                  sizeState === 5 ? "size-selected" : ""
                } `}
                onClick={() => sizeHandler(5)}
              >
                {" "}
                5{" "}
              </div>
              <div
                className={`size-button ${
                  sizeState === 6 ? "size-selected" : ""
                } `}
                onClick={() => sizeHandler(6)}
              >
                {" "}
                6{" "}
              </div>
              <div
                className={`size-button ${
                  sizeState === 7 ? "size-selected" : ""
                } `}
                onClick={() => sizeHandler(7)}
              >
                {" "}
                7{" "}
              </div>
              <div
                className={`size-button ${
                  sizeState === 8 ? "size-selected" : ""
                } `}
                onClick={() => sizeHandler(8)}
              >
                {" "}
                8{" "}
              </div>
            </div>
            {errorState && <h6>Please Select Size</h6>}
            <div className="product-id-button-wrapper">
              <button
                className="button button-primary product-id-button"
                onClick={() => cartHandler()}
              >
                {cart.find((cartItem) => cartItem._id === product._id)
                  ? "GO TO BAG"
                  : "ADD TO BAG"}
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
