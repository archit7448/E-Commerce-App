import { CartCard } from "../../components/cardCart/cardCart";
import { Card, Header, WishlistCard } from "../../components/index";
import { useData } from "../../context/dataContext";
export const WishListPage = () => {
  const { wishlist } = useData();
  return (
    <main>
      <Header />
      <section className="cart-section">
        <h1 className="cart-heading">MY WISHLIST [{wishlist.length}]:</h1>
        {wishlist.length > 0 ? (
          <div className="wishlist-wrapper">
            {wishlist.map((products) => (
              <CartCard key={products._id} prop={products} />
            ))}
          </div>
        ) : (
          <></>
        )}
      </section>
    </main>
  );
};
