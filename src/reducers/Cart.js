import axios from "axios";

export const AddToCart = (state, product) => {
  (async (product) => {
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
    } catch (error) {
      console.log(error);
    }
  })(product);
  return { ...state, cart: [...state.cart, { ...product, quantity: 1 }] };
};

export const RemoveFromCart = (state, id) => {
  (async (id) => {
    try {
      const response = await axios.delete(`/api/user/cart/:${id}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
    } catch (error) {
      console.log(error);
    }
  })(id);
  const newCart = state.cart.filter((product) => product._id !== id);
  return { ...state, cart: [...newCart] };
};

export const IncrementOperater = (state, product) => {
  const { _id } = product;
  (async (id) => {
    try {
      const response = await axios.post(
        `/api/user/cart/:${id}`,
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
    } catch (error) {
      console.log(error);
    }
  })(_id);
  return {
    ...state,
    cart: state.cart.map((cartItem) =>
      cartItem._id === _id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    ),
  };
};

export const DecrementOperater = (state, product) => {
  const { _id } = product;
  (async (id) => {
    try {
      const response = await axios.post(
        `/api/user/cart/:${id}`,
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
    } catch (error) {
      console.log(error);
    }
  })(_id);
  return {
    ...state,
    cart: state.cart.map((cartItem) =>
      cartItem._id === _id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    ),
  };
};
