import { Header } from "../../Components/header/header";
import "./ProductPage.css";
import { Card } from "../../Components/card/card";
import { ProductFilter } from "../../Components/ProductFilter/ProductFilter";
import { Sort } from "../../Components/sort/sort";
import { RatingsComponent } from "../../Components/ratings/ratings";
import { useData } from "../../context/Data";
import { HiOutlineFilter } from "react-icons/hi";
import { useState } from "react";
export const ProductPage = () => {
  const { dispatch, price } = useData();
  const [showfilter, setShowFilter] = useState(false);
  return (
    <main>
      <Header />
      <section className="product-heading">
        <button
          className="button-filter"
          onClick={() => setShowFilter((state) => !state)}
        >
          Filters
          <HiOutlineFilter className="filter-icon" />
        </button>
        {showfilter && (
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
          <Card />
        </div>
      </section>
    </main>
  );
};
