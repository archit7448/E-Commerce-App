import axios from "axios";
import { notificationError, notificationSuccess } from "../utility/notify";
export const AddToWishlist = (state, product) => {
  (async (product) => {
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
      notificationSuccess("ADDED TO WISHLIST");
    } catch (error) {
      console.log(error);
      notificationError("GET FAILED");
    }
  })(product);
  return { ...state, wishlist: [...state.wishlist, product] };
};

export const RemoveFromWishlist = (state, id) => {
  (async (id) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/:${id}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      notificationSuccess("REMOVED FROM WISHLIST");
    } catch (error) {
      console.log(error);
      notificationError("GET FAILED");
    }
  })(id);
  const newWishlist = state.wishlist.filter((product) => product._id !== id);
  return { ...state, wishlist: [...newWishlist] };
};
