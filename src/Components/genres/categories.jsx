import { useNavigate } from "react-router-dom";
import { useData } from "../../context/dataContext";
import "./categories.css";
export const Genres = () => {
  const { categories, dispatch } = useData();
  const navigate = useNavigate();
  const categoryHandler = (category) => {
    dispatch({ type: "TOGGLE_CATEGORY", payload: category.toLowerCase() });
  dispatch({ type: "UPDATE_FILTER_STATE", payload: true });
    navigate("/products");
  };
  return categories.map(({ categoryName, image, _id }) => {
    return (
      <div
        className="category-card"
        key={_id}
        onClick={() => categoryHandler(categoryName)}
      >
        <img src={image} alt="sweatshirt" className="image-categories" />
        <button className="button-animation button">{categoryName}</button>
      </div>
    );
  });
};
