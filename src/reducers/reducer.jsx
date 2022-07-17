import { intialstate } from "./intialState";

export const reducer = (state, action) => {
  const { filter } = state;
  const { category } = filter;
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SORT":
      return { ...state, filter: { ...state.filter, sortBy: action.payload } };
    case "TOGGLE_CATEGORY":
      return {
        ...state,
        filter: {
          ...filter,
          category: {
            ...category,
            [action.payload]: !category[action.payload],
          },
        },
      };
    case "RATING_TOGGLE":
      return { ...state, filter: { ...filter, ratings: action.payload } };
    case "CLEAR":
      return { ...state, filter: intialstate.filter };
    case "PRICE_FILTER":
      return { ...state, filter: { ...filter, price: action.payload } };
    case "UPDATE_CART":
      return { ...state, cart: action.payload };
    case "UPDATE_WISHLIST":
      return { ...state, wishlist: action.payload };
    case "UPDATE_SEARCH":
      return { ...state, search: action.payload };
    case "UPDATE_COUPON_PRICE":
      return { ...state, couponPrice: action.payload };
    case "UPDATE_FILTER_STATE":
      return { ...state, isFilter: action.payload };
    case "UPDATE_ORDER":
      return { ...state, order: [...state.order,action.payload] };
    default:
      return state;
  }
};
