import { Header } from "../../Components/header/header";
import { CardCart } from "../../Components/card-cart/card-cart";
import { useData } from "../../context/Data";
import "./cartPage.css";
import { useState } from "react";
import { notificationInfo } from "../../utility/notify";
export const CartPage = () => {
  const { cart, couponPrice, dispatch } = useData();
  const [error, setError] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [show, setShow] = useState(false);
  const TotalPrice = () => {
    const totalPrice = cart.map(
      ({ price, quantity }) => Number(price) * Number(quantity)
    );
    return totalPrice.reduce((acc, curr) => acc + curr, 0);
  };
  console.log(TotalPrice);
  const ApplyHandler = (coupon) => {
    if (coupon === "Mindify300" && TotalPrice() > 1000) {
      dispatch({ type: "UPDATE_COUPON_PRICE", payload: 300 });
      setShow(false);
      setError(false);
      notificationInfo("Coupon Applied ");
    }
    if (coupon === "Mindify500" && TotalPrice() > 1500) {
      dispatch({ type: "UPDATE_COUPON_PRICE", payload: 500 });
      setShow(false);
      setError(false);
      notificationInfo("Coupon Applied Sucessfully");
    }
    if (coupon === "Mindify700" && TotalPrice() > 2000) {
      dispatch({ type: "UPDATE_COUPON_PRICE", payload: 700 });
      setShow(false);
      setError(false);
      notificationInfo("Coupon Applied Sucessfully");
    }
    if (coupon === "Mindify1000" && TotalPrice() > 3000) {
      dispatch({ type: "UPDATE_COUPON_PRICE", payload: 1000 });
      setShow(false);
      setError(false);
      notificationInfo("Coupon Applied Sucessfully");
    } else {
      setError(true);
      setCoupon("");
    }
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
            <div className="flex-row">
              <h1 className="text-xsm">Apply Coupons</h1>
              <button
                className="button button-secondary button-coupon"
                onClick={() => setShow(true)}
              >
                Apply
              </button>
            </div>
            <hr />
            <h1 className="text-sm">PRICE DETAILS</h1>
            <hr />
            <h1 className="text-grey text-xsm">
              Price({cart.length} items):{TotalPrice()}
            </h1>
            <h1 className="text-grey text-xsm">Discount: -100</h1>
            <h1 className="text-grey text-xsm">Coupons: {couponPrice}</h1>
            <h1 className="text-grey text-xsm">Delivery: 50</h1>
            <hr />
            <h1 className="text-sm">
              TOTAL PRICE : ₹{TotalPrice() - (100 + couponPrice) + 50}
            </h1>
            <hr />
            <button className="button button-primary button-place-order">
              PLACE ORDER
            </button>
          </div>
        ) : (
          <div></div>
        )}
        {show && cart.length > 0 && (
          <div className="overlay-coupon">
            <div className="cancel-coupon-container">
              <h3 className="text-xsm text-grey">Coupons</h3>
              <h3 className="text-grey text-xsm" onClick={() => setShow(false)}>
                X
              </h3>
            </div>
            <hr />
            <div className="check-button-wrapper">
              <input
                type="text"
                className="check-input"
                placeholder="Enter Coupon Code"
                value={coupon}
                onChange={(event) => setCoupon(event.target.value)}
              ></input>
            </div>
            {error && (
              <h1 className="text-xsm text-red">
                Coupon is wrong or not applicable
              </h1>
            )}
            <hr />
            <div className="coupon-text-container">
              <h4 className="color-primary">
                Mindify300:{" "}
                <span className="text-grey">For more than ₹ 1000</span>
              </h4>
              <h4 className="color-primary">
                Mindify500:{" "}
                <span className="text-grey">For more than ₹ 1500</span>
              </h4>
              <h4 className="color-primary">
                Mindify700:{" "}
                <span className="text-grey">For more than ₹ 2000</span>
              </h4>
              <h4 className="color-primary">
                Mindify1000:{" "}
                <span className="text-grey">For more than ₹ 3000</span>
              </h4>
            </div>
            <hr />
            <div className="flex-row">
              <button
                className="button button-primary button-apply-coupon"
                onClick={() => ApplyHandler(coupon)}
              >
                Apply
              </button>
              <button
                className="button button-secondary button-apply-coupon"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};
