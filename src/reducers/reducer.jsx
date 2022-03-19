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
      return {...state,filter:{...filter,ratings: action.payload}};
    case "CLEAR" :  
       return {...state,filter:intialstate.filter}
    case "PRICE_FILTER":
       return {...state,filter:{...filter,price: action.payload}}
    case "ADD_TOKEN":
            
   default:
          return state
  }
};
