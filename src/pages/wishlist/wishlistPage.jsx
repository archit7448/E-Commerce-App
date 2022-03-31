import { Header } from "../../Components/header/header";
import { useData } from "../../context/Data";
import { WishlistCard } from "../../Components/wishlist-card/wishlist-card";
export const WishListPage = () => {
  const { state, dispatch } = useData()
  const { wishlist } = state;
  return (
    <main>
      <Header />
      <section>
        <WishlistCard/>
      </section>
    </main>
  );
};
