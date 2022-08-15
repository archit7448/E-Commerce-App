import mainImage from "../../assets/Image.png";
import { Header, Genres } from "../../components/index";
import "./landingPage.css";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <main>
      <Header />
      <section className="top-0px">
        <div className="homepage-main">
          {/* <div className="relative">
            <img src={mainImage} />
            <div className="blockquote-product">
              <blockquote>
                “Here you can find the best mental and physical health product ,
                like books , food , movies and gym equipment”
              </blockquote>
              <Link to="/products">
                <button className="button button-primary button-blockquote">
                  Shop Now
                </button>
              </Link>
            </div> */}
          {/* </div> */}
        </div>
        <h1 className="categories-heading">Browse Categories</h1>
        <div className="categories-type">
          <Genres />
        </div>
      </section>
    </main>
  );
};
