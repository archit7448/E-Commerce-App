import { Header, Card } from "../../Components/index";
import { useData } from "../../context/Data";
import "./cartPage.css";
import { useState, useEffect } from "react";
import {
  notificationError,
  notificationInfo,
  notificationSuccess,
  notifyMessage,
} from "../../utility/notify";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAddress } from "../../context/address";
import { emptyCart } from "../../reducers/Cart";
export const CartPage = () => {
  const { cart, couponPrice, dispatch } = useData();
  const [error, setError] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { defaultAddress } = useAddress();

  // Calculate Total Price

  const TotalPrice = () => {
    const totalPrice = cart.map(
      ({ price, qty }) => Number(price) * Number(qty)
    );
    return totalPrice.reduce((acc, curr) => acc + curr, 0);
  };

  /**
   * Manage Coupons
   */

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

  /**
   * Order handler => Manage orders
   */

  const orderHandler = () => {
    if (defaultAddress === null) {
      navigate("/profile", { state: "/profile" });
      notificationInfo("Select Default Address");
    } else {
      placeOrderHandler(
        TotalPrice() - (100 + couponPrice) + 50,
        defaultAddress
      );
    }
  };

  useEffect(() => {
    if (paymentId !== "") {
      emptyCart(dispatch, cart, couponPrice);
    }
  }, [paymentId]);
  /**
   * Razorpay handler =>  manage payment gateway
   */

  const initializeRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const placeOrderHandler = async (amount, defaultAddress) => {
    const response = await initializeRazorpay(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!response) {
      notificationError("not working");
      return;
    }

    const options = {
      key: "rzp_test_16vW92FydTHK1Z",
      currency: "INR",
      amount: amount * 100,
      name: "Mindify Cart",
      handler: function (response) {
        setPaymentId(response.razorpay_payment_id);
      },
      prefill: {
        name: defaultAddress.name,
        email: "architsingh1064@gmail.com",
        contact: defaultAddress.phoneNumber,
        method: "netbanking",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <main>
      <Header />
      <section className="productPage-wrapper">
        <div>
          {cart.map((products) => {
            return (
              <Card key={products._id} prop={{ products, isCart: true }} />
            );
          })}
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
            <button
              className="button button-primary button-place-order"
              onClick={() => orderHandler()}
            >
              {defaultAddress === null ? "Checkout" : "Place Order"}
            </button>
          </div>
        ) : (
          <div>
            <h1>EMPTY CART</h1>
          </div>
        )}
        {show && cart.length > 0 && (
          <div className="overlay-coupon">
            <div className="cancel-coupon-container">
              <h3 className="text-xsm text-grey">Coupons</h3>
              <h3 className="text-grey text-sm" onClick={() => setShow(false)}>
                <MdOutlineCancel />
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
