import { useData } from "../../context/Data";

import {
  CategoryFilter,
  SortedFunction,
  RatingFilter,
  PriceFilter,
} from "../../reducers/filter";
import "./card.css";
export const Card = () => {
  const { state } = useData() ;
  const { products, filter } = state;
  const { sortBy, category, ratings,price } = filter;
  const sortedData = SortedFunction(products, sortBy);
  const categoryData = CategoryFilter(sortedData, category);
  const RatingData = RatingFilter(categoryData, ratings);
  const PriceData = PriceFilter(RatingData,price)
  return PriceData.map(
    ({ _id, title, produced, price, description, image, ratings }) => {
      return (
        <div className="card-wrapper  card-cart" key={_id}>
          <img src={image} alt={title} />
          <div className="content-wrapper">
            <h1 className="card-heading-main">{title}</h1>
            <h2 className="card-heading-two">{produced}</h2>
            <h2 className="card-price">₹ {price}</h2>
            <h2 className="card-ratings"> ratings:{ratings}</h2>
            <p className="card-para">{description}</p>
            <div className="card-button-wrapper">
              <button className="button button-primary card-button">
                ADD TO CART
              </button>
              <button className="button button-secondary card-button">
                WISHLIST
              </button>
            </div>
          </div>
        </div>
      );
    }
  );
};
