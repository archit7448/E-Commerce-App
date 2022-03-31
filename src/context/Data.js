import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { intialstate } from "../reducers/intialState";
import { reducer } from "../reducers/reducer";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialstate);
  const { encodedToken } = state;
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
        dispatch({ type: "ADD_TO_INTIAL_CART", payload: response.data.cart });
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
          type: "ADD_TO_INTIAL_WISHLIST",
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
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { useData, DataProvider };
