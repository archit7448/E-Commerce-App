import { Routes, Route } from "react-router-dom";
import "./App.css";
import { RequireAuth } from "./context/Auth";
import { HomePage } from "./pages/Homepage/HomePage";
import { ProductPage } from "./pages/Product-Page/ProductPage";
import { SignIn } from "./pages/SignIn/SignIn";
import { WishListPage } from "./pages/wishlist/wishlistPage";
import { CartPage } from "./pages/cartPage/cartPage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route
          path="/signIn"
          element={
            <RequireAuth>
              <SignIn />
            </RequireAuth>
          }
        ></Route>
        <Route path="/Wishlist" element={<WishListPage />} />
        <Route path="/Cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
