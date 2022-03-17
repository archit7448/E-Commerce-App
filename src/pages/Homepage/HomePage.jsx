import { Header } from "../../Components/header/header";
import mainImage from "../../assets/homepage.png";
import { Genres } from "../../Components/genres/cateories";
import "./Homepage.css";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <main>
      <Header />
      <section>
        <div className="homepage-main">
          <div className="blockquote-product">
            <blockquote>
              “Here you can find the best mental and physical health product ,
              like books , food , movies and gym equipment”
            </blockquote>
            <Link to = "/products">
              <button className="button button-primary button-blockquote">
                LET START
              </button>
            </Link>
          </div>
          <img src={mainImage} />
        </div>
        <h1 className="text-grey text-center">CATEGORY</h1>
        <div className="categories-type">
          <Genres />
        </div>
      </section>
    </main>
  );
};
