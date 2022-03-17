import { Link } from "react-router-dom";
import { useData } from "../../context/Data";
import "./categories.css";
export const Genres = () => {
  const { state } = useData();
  const { categories } = state;
  return categories.map(({ categoryName, image, _id }) => {
    return (
      <div className="category-card" key={_id}>
        <h1 className="text-md">{categoryName}</h1>
        <img src={image} alt="sweatshirt" className="image-categories" />
        <div className="overlay">
          <Link to = "/products">
            {" "}
            <button className="button-animation button button-primary">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
    );
  });
};
