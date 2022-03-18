import { useData } from "../../context/Data";

export const ProductFilter = () => {
  const { state, dispatch } = useData();
  const { filter } = state;
  const { category } = filter;
  const { food, movie, gym, book } = category;
  const buttonPrimary = "button button-product button-primary";
  const buttonSecondary = "button button-product button-secondary";
  return (
    <div className="category-heading-wrapper">
      <h1 className="ratings-heading">Product Filter</h1>
      <div className="category-wrapper">
        <button
          className={food ? buttonPrimary : buttonSecondary}
          onClick={() => dispatch({ type: "TOGGLE_CATEGORY", payload: "food" })}
        >
          FOOD
        </button>
        <button
          className={gym ? buttonPrimary : buttonSecondary}
          onClick={() => dispatch({ type: "TOGGLE_CATEGORY", payload: "gym" })}
        >
          GYM
        </button>
        <button
          className={movie ? buttonPrimary : buttonSecondary}
          onClick={() =>
            dispatch({ type: "TOGGLE_CATEGORY", payload: "movie" })
          }
        >
          MOVIES
        </button>
        <button
          className={book ? buttonPrimary : buttonSecondary}
          onClick={() => dispatch({ type: "TOGGLE_CATEGORY", payload: "book" })}
        >
          BOOK
        </button>
      </div>
    </div>
  );
};
