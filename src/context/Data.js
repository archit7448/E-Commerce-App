import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { intialstate } from "../reducers/intialState";
import { reducer } from "../reducers/reducer";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialstate);
  const {
    encodedToken,
    products,
    cart,
    wishlist,
    filter,
    categories,
    search,
    couponPrice,
    isFilter,
  } = state;
  const { sortBy, category, ratings, price } = filter;
  useEffect(() => {
    const productData = async () => {
      try {
        const response = await axios.get("/api/products");
        dispatch({ type: "ADD_PRODUCTS", payload: response.data.products });
      } catch (error) {
        console.log(error);
      }
    };
    productData();
  }, []);

  useEffect(() => {
    const CategoriesData = async () => {
      try {
        const response = await axios.get("/api/categories");
        dispatch({ type: "ADD_CATEGORIES", payload: response.data.categories });
      } catch (error) {
        console.log(error);
      }
    };
    CategoriesData();
  }, []);

  const userData = () => {
    (async () => {
      try {
        const response = await axios.get("/api/user/cart", {
          headers: {
            authorization: encodedToken,
          },
        });
        dispatch({ type: "UPDATE_CART", payload: response.data.cart });
      } catch (error) {
        console.log(error);
      }
    })();
    (async () => {
      try {
        const response = await axios.get("/api/user/wishlist", {
          headers: {
            authorization: encodedToken,
          },
        });
        dispatch({
          type: "UPDATE_WISHLIST",
          payload: response.data.wishlist,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  };

  useEffect(() => {
    encodedToken !== null && userData();
  }, [encodedToken]);

  return (
    <DataContext.Provider
      value={{
        state,
        encodedToken,
        products,
        cart,
        wishlist,
        filter,
        categories,
        dispatch,
        sortBy,
        category,
        ratings,
        price,
        search,
        couponPrice,
        isFilter,
        order: state.order,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
