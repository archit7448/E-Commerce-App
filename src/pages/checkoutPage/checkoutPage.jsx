import {
  AddressManager,
  Header,
  Coupon,
  TotalPrice,
} from "../../components/index";
import { useData } from "../../context/dataContext";
import "./checkoutPage.css";
import { useState, useEffect } from "react";
import { notificationError, notificationInfo } from "../../utility/notify";
import { useNavigate } from "react-router-dom";
import { useAddress } from "../../context/address";
import { emptyCart } from "../../reducers/Cart";
import {
  decrementOperater,
  incrementOperater,
  removeFromCart,
} from "../../reducers/Cart";
export const CheckoutPage = () => {
  const { cart, couponPrice, dispatch } = useData();
  const [paymentId, setPaymentId] = useState("");
  const navigate = useNavigate();
  const [addressState, setAddressState] = useState("");
  const { checkoutAddress, dispatch: dispatchAddress, Address } = useAddress();
  const paymentMethodArray = [
    "netbanking",
    "upi",
    "card",
    "paylater",
    "Cash on Delivery",
  ];
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentState, setpaymentState] = useState(false);
  const [error, setError] = useState(false);
  const totalQuantity = () => {
    return cart.reduce((acc, { qty }) => acc + qty, 0);
  };
  const totalPrice = () => {
    const totalPrice = cart.map(
      ({ price, qty }) =>
        Number(
          price
            .split("")
            .filter((x) => x !== ",")
            .join("")
        ) * Number(qty)
    );
    return totalPrice.reduce((acc, curr) => acc + curr, 0);
  };

  const totalDiscount = () => {
    return ((100 - Number(couponPrice)) / 100) * totalPrice();
  };
  const setCheckoutHandler = (_id) => {
    setAddressState(_id);
    dispatchAddress({ type: "SET_CHECKOUT_ADDRESS", payload: { _id } });
  };
  useEffect(() => {
    if (checkoutAddress[0].edit) {
      setpaymentState(true);
    } else {
      setpaymentState(false);
    }
  }, [checkoutAddress]);

  /**
   * Order handler => Manage orders
   */

  const orderHandler = () => {
    placeOrderHandler(totalDiscount().toFixed(0), checkoutAddress);
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

  const placeOrderHandler = async (amount, checkoutAddress) => {
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
        name: checkoutAddress[0].firstName + checkoutAddress[0].lastName,
        email: checkoutAddress[0].email,
        contact: checkoutAddress[0].phoneNumber,
        method: paymentMethod,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const cartRemoveHandler = (_id) => {
    removeFromCart(dispatch, _id);
  };
  const increaseHandler = (_id) => {
    incrementOperater(dispatch, _id);
  };
  const decreaseHandler = (_id) => {
    decrementOperater(dispatch, _id);
  };
  const paymentMethodHanlder = () => {
    if (paymentMethod.length > 0) {
      setpaymentState(false);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <main className="flex-col">
      <Header />
      <section className="cart-handler-wrapper">
        <div className="order-summary">
          <h1>ORDER DETAILS: [{totalQuantity()}]</h1>
          <hr />
          {cart.map(({ _id, title, image, price, size, qty }) => {
            return (
              <div key={_id}>
                <div className="cart-summary">
                  <img src={image} alt={title} />
                  <div className="cart-details">
                    <div className="flex-row">
                      <h2>{title}</h2>
                      <h6>₹{price}</h6>
                    </div>
                    <h1>SIZE: {size}</h1>
                    <div className="quantity-container">
                      <button
                        className="button button-secondary"
                        onClick={() =>
                          qty > 1
                            ? decreaseHandler(_id)
                            : cartRemoveHandler(_id)
                        }
                      >
                        -
                      </button>
                      <h2 className="card-ratings">{qty}</h2>
                      <button
                        className="button button-secondary"
                        onClick={() => increaseHandler(_id)}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <button
                        className="remove-cart-button"
                        onClick={() => cartRemoveHandler(_id)}
                      >
                        Remove
                      </button>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            );
          })}
          <Coupon />
          {cart.length > 0 && (
            <TotalPrice prop={{ array: cart, coupon: couponPrice }} />
          )}
        </div>
        <div className="order-handler-wrapper">
          <div className="address-wrapper flex-col">
            <div className="address-heading">
              <h1>1. ADDRESSES</h1>
            </div>
            {Address.length > 0 && !checkoutAddress[0].edit && (
              <select
                name="state"
                value={addressState}
                onChange={(event) => setCheckoutHandler(event.target.value)}
              >
                <option value="checkout">Checkout Address</option>
                {Address.map(({ _id, title }) => {
                  return (
                    <option value={_id} key={_id}>
                      {title}
                    </option>
                  );
                })}
              </select>
            )}
            {checkoutAddress.map((value) => {
              return <AddressManager key={value._id} prop={value} />;
            })}
          </div>
          <div className="address-wrapper">
            <div
              className={`${
                checkoutAddress[0].edit
                  ? "address-heading"
                  : "address-heading text-grey"
              }`}
            >
              {<h1>2. PAY</h1>}
            </div>
            {paymentState ? (
              <div className="payment-wrapper">
                {paymentMethodArray.map((value) => {
                  return (
                    <label key={value} className="container">
                      <input
                        type="radio"
                        name="paymentMethods"
                        value={value}
                        onClick={(event) =>
                          setPaymentMethod(event.target.value)
                        }
                      />
                      {value}
                    </label>
                  );
                })}
                {error && (
                  <h3 className="wrong-color">Please Select Payment Method</h3>
                )}
                <button
                  className="button-primary button-address button-pay"
                  onClick={() => paymentMethodHanlder()}
                >
                  Continue To Review & Pay
                </button>
              </div>
            ) : checkoutAddress[0].edit ? (
              <>
                <div className="address-detail-wrapper flex-col">
                  <div>
                    <h2>Payment Method:</h2>
                    <div className="margin-top-1rem">
                      <h3>{paymentMethod}</h3>
                      <h3>Amount: ₹ {totalDiscount()}</h3>
                    </div>
                  </div>
                  <button
                    className="remove-cart-button flex-end"
                    onClick={() => setpaymentState(() => true)}
                  >
                    Edit
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="address-wrapper">
            <div
              className={`${
                !paymentState && checkoutAddress[0].edit
                  ? "address-heading"
                  : "address-heading text-grey"
              }`}
            >
              {<h1>3. REVIEW</h1>}
            </div>
            {!paymentState && checkoutAddress[0].edit ? (
              <div className="address-detail-wrapper flex-col">
                <div>
                  <div className="margin-top-1rem">
                    <h3>
                      Please review your information is accurate. Your order
                      will not be placed until you click "Place Order".
                    </h3>
                  </div>
                  <div className="margin-top-1rem">
                    <h1>ORDER TOTAL : ₹{totalPrice()}</h1>
                  </div>
                  <button
                    className="button-primary button-address button-pay"
                    onClick={() => orderHandler()}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
