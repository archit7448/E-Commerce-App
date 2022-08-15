import { useData } from "../../context/dataContext";
import { AiOutlineDown } from "react-icons/ai";
import {
  HiOutlineSortAscending,
  HiOutlineSortDescending,
} from "react-icons/hi";
export const Sort = () => {
  const { state, dispatch } = useData();
  const { filter } = state;
  const { sortBy } = filter;
  const buttonPrimary = "button button-product button-primary";
  const buttonSecondary = "button button-product button-secondary";
  return (
    <div className="sort-container">
      <h1 className="ratings-heading">Sort By Price</h1>
      <nav className="sort-wrapper">
        <label>
          <input
            type="radio"
            name="PriceSort"
            onClick={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
          />
          High to low
        </label>
        <label>
          <input
            type="radio"
            name="PriceSort"
            onClick={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
          />
          Low to high
        </label>
      </nav>
    </div>
  );
};
