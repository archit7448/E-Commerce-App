import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/Homepage/HomePage";
import { ProductPage } from "./pages/Product-Page/ProductPage";
import { SignIn } from "./pages/SignIn/SignIn";
import { WishListPage } from "./pages/wishlist/wishlistPage";
import { CartPage } from "./pages/cartPage/cartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignUp } from "./pages/signUp/SignUp";
import { ProfilePage } from "./pages/profilePage/profile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/Wishlist" element={<WishListPage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
