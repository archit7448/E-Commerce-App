import axios from "axios";
import { notificationError, notificationSuccess } from "../utility/notify";
import { v4 as uuid } from "uuid";
export const addToCart = async (dispatch, product) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: "UPDATE_CART", payload: response.data.cart });
    notificationSuccess("ADDED TO CART");
  } catch (error) {
    console.log(error);
    notificationError("GET FAILED");
  }
};

export const removeFromCart = async (dispatch, id) => {
  try {
    const response = await axios.delete(`/api/user/cart/${id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: "UPDATE_CART", payload: response.data.cart });
    notificationSuccess("REMOVED FROM CART");
  } catch (error) {
    console.log(error);
    notificationError("GET FAILED");
  }
};

export const emptyCart = async (dispatch, cart, coupon) => {
  try {
    const response = await axios.delete(`/api/user/cart`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: "UPDATE_CART", payload: response.data.cart });
    notificationSuccess("ORDER SUCESSFULL");
    dispatch({
      type: "UPDATE_ORDER",
      payload: { orderArray: cart, couponPrice: coupon, _id: uuid() },
    });
    dispatch({ type: "UPDATE_COUPON_PRICE", payload: 0 });
  } catch (error) {
    console.log(error);
    notificationError("GET FAILED");
  }
};

export const incrementOperater = async (dispatch, id) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "increment",
        },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: "UPDATE_CART", payload: response.data.cart });
    notificationSuccess("INCREMENT SUCCESSFULLY");
  } catch (error) {
    console.log(error);
    notificationError("GET ERROR");
  }
};

export const decrementOperater = async (dispatch, id) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: {
          type: "decrement",
        },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: "UPDATE_CART", payload: response.data.cart });
    notificationSuccess("DECREMENT SUCCESSFULLY");
  } catch (error) {
    console.log(error);
    notificationError("GET ERROR");
  }
};
