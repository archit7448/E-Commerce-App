import { useData } from "../../context/Data";
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
      <h1 className="ratings-heading">
        Sort By Price
        <AiOutlineDown />{" "}
      </h1>
      <nav className="sort-wrapper">
        <button
          className={sortBy === "HIGH_TO_LOW" ? buttonPrimary : buttonSecondary}
          onClick={() => dispatch({ type: "SORT", payload: "HIGH_TO_LOW" })}
        >
          High to low <HiOutlineSortDescending />
        </button>
        <button
          className={sortBy === "LOW_TO_HIGH" ? buttonPrimary : buttonSecondary}
          onClick={() => dispatch({ type: "SORT", payload: "LOW_TO_HIGH" })}
        >
          Low to high <HiOutlineSortAscending />
        </button>
      </nav>
    </div>
  );
};
