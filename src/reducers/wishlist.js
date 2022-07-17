import axios from "axios";
import { notificationError, notificationSuccess } from "../utility/notify";
export const addToWishlist = async (dispatch, product) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    dispatch({ type: "UPDATE_WISHLIST", payload: response.data.wishlist });
    notificationSuccess("ADDED TO WISHLIST");
  } catch (error) {
    console.log(error);
    notificationError("GET FAILED");
  }
};

export const removeFromWishlist = async (dispatch, id) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    dispatch({ type: "UPDATE_WISHLIST", payload: response.data.wishlist });
    notificationSuccess("REMOVED FROM WISHLIST");
  } catch (error) {
    console.log(error);
    notificationError("GET FAILED");
  }
};
