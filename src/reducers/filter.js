export const SortedFunction = (products, sortBy) => {
  if (sortBy && sortBy === "HIGH_TO_LOW") {
    return [...products].sort((a, b) => Number(b.price) - Number(a.price));
  }
  if (sortBy && sortBy === "LOW_TO_HIGH") {
    return [...products].sort((a, b) => Number(a.price) - Number(b.price));
  }
  return products;
};

export const CategoryFilter = (products, category) => {
  const categoryArray = Object.keys(category).filter(
    (value) => category[value] === true
  );
  return categoryArray.length === 0
    ? products
    : products.filter(({ category }) => {
        const getData = (category) => {
          return categoryArray.filter((value) => value === category);
        };
        return getData(category).length === 0 ? false : true;
      });
};

export const RatingFilter = (products, ratingState) => {
  return ratingState === 0
    ? products
    : [...products].filter(({ ratings }) => ratings === ratingState);
};

export const PriceFilter = (products, Stateprice) => {
  return Stateprice === 1000
    ? products
    : [...products].filter(({ price }) => Number(Stateprice) >= Number(price));
};

export const SearchFilter = (products, search) => {
  const FilterArray = [...products].filter(
    ({ title }) =>
      title.toLowerCase().slice(0, search.length) === search.toLowerCase()
  );
  return search === "" ? [] : FilterArray.slice(0,3)
};
