import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag, BiUser } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import { useData } from "../../context/dataContext";
import { SearchFilter } from "../../reducers/filter";
export const Header = () => {
  let location = useLocation();
  const { cart, wishlist, search, dispatch, products } = useData();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const cartHandler = () => {
    if (token === null) {
      navigate("/signIn");
    } else {
      navigate("/cart");
    }
  };
  const wishlistHandler = () => {
    if (token === null) {
      navigate("/signIn");
    } else {
      navigate("/wishlist");
    }
  };
  const searchData = SearchFilter(products, search);
  const navigateHandle = (title) => {
    navigate(`/product/${title}`);
    dispatch({ type: "UPDATE_SEARCH", payload: "" });
  };
  const profileHandler = () => {
    navigate("/profile");
  };
  return (
    <header className="navigation">
      <Link to="/">
        <div className="logo-header flex-row">
          <h3 className="logo-name"> ShoeNew</h3>
          <img
            src={
              "https://res.cloudinary.com/dqlfw4xi2/image/upload/v1660125441/logo_yve5sf.png"
            }
            alt="logo"
          />
        </div>
      </Link>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-search"
          placeholder="Search Shoes"
          value={search}
          onChange={(event) =>
            dispatch({ type: "UPDATE_SEARCH", payload: event.target.value })
          }
        />
        {searchData.length > 0 ? (
          <div
            className="input-icon"
            onClick={() => dispatch({ type: "UPDATE_SEARCH", payload: "" })}
          >
            <AiOutlineClose />
          </div>
        ) : (
          <div className="input-icon">
            <GoSearch />
          </div>
        )}
        {searchData.length > 0 ? (
          <div className="search-data">
            <div>
              <h1>Suggested Products</h1>
            </div>
            {searchData.map(({ title, price, image, _id }) => {
              return (
                <div
                  key={_id}
                  className="flex-row search-parent"
                  onClick={() => navigateHandle(title)}
                >
                  <img src={image} />
                  <div>
                    <h2>{title}</h2>
                    <h6>₹{price}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex-row margin-left-1rem">
        <div className="logo-icon" onClick={() => cartHandler()}>
          <BiShoppingBag />
          {cart.length > 0 && (
            <div className="logo-number">
              {cart.length > 9 ? "9+" : cart.length}
            </div>
          )}
        </div>
        <div className="logo-icon" onClick={() => wishlistHandler()}>
          <AiOutlineHeart />
          {wishlist.length > 0 && (
            <div className="logo-number">
              {wishlist.length > 9 ? "9+" : wishlist.length}
            </div>
          )}
        </div>
        <div className="logo-icon" onClick={() => profileHandler()}>
          <BiUser />
        </div>
      </div>
      <div className="input-wrapper wrap-up">
        <input
          type="text"
          className="input-search"
          placeholder="Search Shoes"
          value={search}
          onChange={(event) =>
            dispatch({ type: "UPDATE_SEARCH", payload: event.target.value })
          }
        />
        {searchData.length > 0 ? (
          <div
            className="input-icon"
            onClick={() => dispatch({ type: "UPDATE_SEARCH", payload: "" })}
          >
            <AiOutlineClose />
          </div>
        ) : (
          <div className="input-icon">
            <GoSearch />
          </div>
        )}
        {searchData.length > 0 ? (
          <div className="search-data search-540px">
            <div>
              <h1>Suggested Products</h1>
            </div>
            {searchData.map(({ title, price, image, _id }) => {
              return (
                <div
                  key={_id}
                  className="flex-row search-parent"
                  onClick={() => navigateHandle(title)}
                >
                  <img src={image} />
                  <div>
                    <h2>{title}</h2>
                    <h6>₹{price}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};
