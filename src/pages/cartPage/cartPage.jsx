import { Header } from "../../Components/header/header";
import { CardCart } from "../../Components/card-cart/card-cart";
import { useData } from "../../context/Data";
import "./cartPage.css";
export const CartPage = () => {
  const { state } = useData();
  const { cart } = state;
  const TotalPrice = () => {
    const totalPrice = cart.map(
      ({ price, quantity }) => Number(price) * Number(quantity)
    );
    return totalPrice.reduce((acc, curr) => acc + curr, 0);
  };
  return (
    <main>
      <Header />
      <section className="productPage-wrapper">
        <div>
          <CardCart />
        </div>
        {cart.length > 0 ? (
          <div className="place-order">
            <h1 className="text-sm">PRICE DETAILS</h1>
            <hr />
            <h1 className="text-grey text-sm">
              Price({cart.length} items):{TotalPrice()}
            </h1>
            <h1 className="text-grey text-sm">Discount: -500</h1>
            <h1 className="text-grey text-sm">Delivery Charges: 50</h1>
            <hr />
            <h1 className="text-sm">TOTAL PRICE : {TotalPrice() - 500 + 50}</h1>
            <hr />
            <button className="button button-primary">
              <span>PLACE ORDER</span>
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </section>
    </main>
  );
};
