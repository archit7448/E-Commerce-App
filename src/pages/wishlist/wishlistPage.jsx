import { Card, Header, WishlistCard } from "../../Components/index";
import { useData } from "../../context/Data";
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
          <> </>
        )}
      </section>
    </main>
  );
};
