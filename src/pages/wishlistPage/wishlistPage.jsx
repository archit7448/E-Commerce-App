import { Card, Header, WishlistCard } from "../../components/index";
import { useData } from "../../context/data";
export const WishListPage = () => {
  const { wishlist } = useData();
  return (
    <main>
      <Header />
      <section>
        {wishlist.length > 0 ? (
          wishlist.map((products) => (
            <Card key={products._id} prop={{ products, isWishlist: true }} />
          ))
        ) : (
           <div className="flex-center">
            <h1>EMPTY WISHLIST</h1>
           </div>
        )}
      </section>
    </main>
  );
};
