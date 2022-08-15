import { useData } from "../../context/dataContext";

export const ProductFilter = () => {
  const { state, dispatch } = useData();
  const { filter } = state;
  const { category } = filter;
  const { food, movie, gym, book } = category;
  return (
    <div className="category-heading-wrapper">
      <h1 className="ratings-heading">Product Filter</h1>
      <div className="category-wrapper">
        <label>
          <input
            type="checkbox"
            checked={food}
            onChange={() =>
              dispatch({ type: "TOGGLE_CATEGORY", payload: "food" })
            }
          />
          FOOD
        </label>
        <label>
          <input
            type="checkbox"
            checked={gym}
            onChange={() =>
              dispatch({ type: "TOGGLE_CATEGORY", payload: "gym" })
            }
          />
          GYM
        </label>
        <label>
          <input
            type="checkbox"
            checked={movie}
            onChange={() =>
              dispatch({ type: "TOGGLE_CATEGORY", payload: "movie" })
            }
          />
          MOVIES
        </label>
        <label>
          <input
            type="checkbox"
            checked={book}
            onChange={() =>
              dispatch({ type: "TOGGLE_CATEGORY", payload: "book" })
            }
          />
          BOOK
        </label>
      </div>
    </div>
  );
};
