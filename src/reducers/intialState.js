export const intialstate = {
  products: [],
  categories: [],
  filter: {
    sortBy: null,
    category: {
      food: false,
      movie: false,
      gym: false,
      book: false,
    },
    ratings: 0,
    price: 1000,
  },
  encodedToken: localStorage.getItem("token"),
  cart: [],
  wishlist: [],
  search: "",
  couponPrice: 0,
  isFilter: false,
  order: [],
};
