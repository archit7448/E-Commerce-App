import {
  Header,
  Card,
  ProductFilter,
  Sort,
  RatingsComponent,
} from "../../Components/index";
import {
  CategoryFilter,
  SortedFunction,
  RatingFilter,
  PriceFilter,
  SearchFilter,
} from "../../reducers/filter";
import "./ProductListPage.css";
import { useData } from "../../context/Data";
import { HiOutlineFilter } from "react-icons/hi";
export const ProductPage = () => {
  const {
    products,
    dispatch,
    sortBy,
    category,
    ratings,
    price,
    search,
    isFilter,
  } = useData();
  const sortedData = SortedFunction(products, sortBy);
  const categoryData = CategoryFilter(sortedData, category);
  const RatingData = RatingFilter(categoryData, ratings);
  const PriceData = PriceFilter(RatingData, price);
  const SearchData = SearchFilter(PriceData, search);
  return (
    <main>
      <Header />
      <div></div>
      <section className="product-heading">
        <button
          className="button-filter"
          onClick={() =>
            dispatch({ type: "UPDATE_FILTER_STATE", payload: !isFilter })
          }
        >
          Filters
          <HiOutlineFilter className="filter-icon" />
        </button>
        {isFilter && (
          <div className="filters-wrapper">
            <button
              className="clear-button button button-secondary"
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              <h3>CLEAR</h3>
            </button>
            <RatingsComponent />
            <Sort />
            <ProductFilter />
            <div className="price-wrapper">
              <h1 className="ratings-heading">
                price filter:<span className="price-color">{price}</span>
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
            </div>
          </div>
        )}
        <hr />
        <div className="card-container">
          {SearchData.map((products) => {
            return <Card key={products._id} prop={{ products }} />;
          })}
        </div>
      </section>
    </main>
  );
};
