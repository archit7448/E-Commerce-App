import { Coupon, Header } from "../../components";
import { useData } from "../../context/dataContext";
import { CartCard } from "../../components/cardCart/cardCart";
import { TotalPrice } from "../../components/totalPrice/totalPrice";
import "./cartPage.css";
export const CartPage = () => {
  const { cart, couponPrice } = useData();
  console.log(couponPrice);
  const totalQuantity = () => {
    return cart.reduce((acc, { qty }) => acc + qty, 0);
  };
  return (
    <main>
      <Header />
      <section className="cart-section">
        <div>
          <h1 className="cart-heading">
            MY SHOPPING CART [{totalQuantity()}]:
          </h1>
        </div>
        <div className="flex-row flex-space-between cart-wrapper">
          <div className="cart-list-wrapper">
            {cart.map((value) => {
              return <CartCard key={value._id} prop={value} />;
            })}
          </div>
          <div className="cart-total">
            <Coupon />
            {cart.length > 0 ? (
              <TotalPrice prop={{ array: cart, coupon: couponPrice }} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
