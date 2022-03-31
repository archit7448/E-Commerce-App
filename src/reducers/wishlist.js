import axios from "axios";
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
      } catch (error) {
        console.log(error);
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
      } catch (error) {
        console.log(error);
      }
    })(id);
    const newWishlist = state.wishlist.filter((product) => product._id !== id);
    return { ...state, wishlist: [...newWishlist] };
  };
  