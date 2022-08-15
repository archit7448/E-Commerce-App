import {
  Header,
  Card,
  ProductFilter,
  Sort,
  RatingsComponent,
} from "../../components/index";
import {
  CategoryFilter,
  SortedFunction,
  RatingFilter,
  PriceFilter,
} from "../../reducers/filter";
import "./explorePage.css";
import { useData } from "../../context/dataContext";
import { AiOutlineClose } from "react-icons/ai";
import { ProductCard } from "../../components/cardProduct/cardProduct";
export const ProductPage = () => {
  const { products, dispatch, sortBy, category, ratings, price, search } =
    useData();
  const sortedData = SortedFunction(products, sortBy);
  const categoryData = CategoryFilter(sortedData, category);
  const RatingData = RatingFilter(categoryData, ratings);
  const PriceData = PriceFilter(RatingData, price);
  // const SearchData = SearchFilter(PriceData, search);
  return (
    <main>
      <Header />
      <section className="product-heading">
        {/* <div className="filters-wrapper">
          <div className="flex-row">
            <h2>Filters</h2>
            <button
              className="clear-button button button-secondary"
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              <h3>CLEAR</h3>
            </button>
          </div>
          <RatingsComponent />
          <Sort />
          <ProductFilter />
          <div className="price-wrapper">
            <h1 className="ratings-heading">
              Price Filter:<span className="price-color">{price}</span>
            </h1>
            <input
              type="range"
              min={100}
              max={1000}
              step="100"
              value={price}
              onChange={(event) =>
                dispatch({
                  type: "PRICE_FILTER",
                  payload: event.target.value,
                })
              }
            />
          </div> */}
        {/* </div> */}
        <div className="card-container">
          {PriceData.map((products) => {
            return <ProductCard key={products._id} prop={{ products }} />;
          })}
        </div>
      </section>
    </main>
  );
};
