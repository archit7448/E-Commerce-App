import "./ratings.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useData } from "../../context/dataContext";
export const RatingsComponent = () => {
  const { state, dispatch } = useData();
  const {filter}  = state
  const { ratings } = filter;
  return (
    <div className="rating-heading-wrapper">
      <h1 className="ratings-heading">Rating Filter</h1>
      <div className="ratings-wrapper">
        <button
          className="button-ratings"
          onClick={() => dispatch({ type: "RATING_TOGGLE", payload: 1 })}
        >
          {ratings >= 1 ? (
            <AiFillStar className="ratings-color" />
          ) : (
            <AiOutlineStar className="ratings" />
          )}
        </button>
        <button
          className="button-ratings"
          onClick={() => dispatch({ type: "RATING_TOGGLE", payload: 2 })}
        >
          {ratings >= 2 ? (
            <AiFillStar className="ratings-color" />
          ) : (
            <AiOutlineStar className="ratings" />
          )}
        </button>
        <button
          className="button-ratings"
          onClick={() => dispatch({ type: "RATING_TOGGLE", payload: 3 })}
        >
          {ratings >= 3 ? (
            <AiFillStar className="ratings-color" />
          ) : (
            <AiOutlineStar className="ratings" />
          )}
        </button>
        <button
          className="button-ratings"
          onClick={() => dispatch({ type: "RATING_TOGGLE", payload: 4 })}
        >
          {ratings >= 4 ? (
            <AiFillStar className="ratings-color" />
          ) : (
            <AiOutlineStar className="ratings" />
          )}
        </button>
        <button
          className="button-ratings"
          onClick={() => dispatch({ type: "RATING_TOGGLE", payload: 5 })}
        >
          {ratings >= 5 ? (
            <AiFillStar className="ratings-color" />
          ) : (
            <AiOutlineStar className="ratings" />
          )}
        </button>
      </div>
    </div>
  );
};
