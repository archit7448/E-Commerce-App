import {
  AddressComponent,
  AddressManager,
  Header,
} from "../../components/index";
import { useData } from "../../context/dataContext";
import "./cartPage.css";
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
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { validateEmail } from "../../utility/emailValidation/email";
export const CartPage = () => {
  const { cart, couponPrice, dispatch } = useData();
  const [error, setError] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { defaultAddress, stateIndia } = useAddress();

  // State for Address Validation

  // const [firstname, setFirstName] = useState("");
  // const [lastname, setLastName] = useState("");
  // const [pincode, setPincode] = useState("");
  // const [city, setCity] = useState("");
  // const [address, setAddress] = useState("");
  // const [state, setState] = useState("Delhi");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [addressState, setAddressState] = useState();
  const [addressEdit, setAddressEdit] = useState(true);
  // const addressValidation = (event) => {
  //   event.preventDefault();
  //   if (firstname.length < 2) {
  //     setAddressError("Fill First Name!");
  //   } else if (lastname.length < 2) {
  //     setAddressState("Fill Last Name!");
  //   } else if (address.length < 10) {
  //     setAddressState("Write Proper Address Details");
  //   } else if (pincode.length !== 6) {
  //     setAddressState("Pincode should be 6 in length");
  //   } else if (city.length < 2) {
  //     setAddressState("Fill City Name!");
  //   } else if (phoneNumber.length !== 10) {
  //     setAddressState("Phone Number should be 10 in length");
  //   } else if (!validateEmail(email)) {
  //     setAddressState("Please fill Email Details Right!");
  //   } else {
  //     setAddressEdit(false);
  //   }
  // };
  // const fillDummyData = (event) => {
  //   setFirstName("Archit");
  //   setLastName("Singh");
  //   setAddress("J-832 M.I.G.,Gujaini");
  //   setPincode("208022");
  //   setCity("Kanpur");
  //   setState("Uttar Pradesh");
  //   setEmail("architsingh1064@gmail.com");
  //   setPhoneNumber("9235662323");
  //   event.preventDefault();
  // };

  // Calculate Total Price

  const TotalPrice = () => {
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

  const totalQuantity = () => {
    return cart.reduce((acc, { qty }) => acc + qty, 0);
  };

  const totalDiscount = () => {
    return ((100 - Number(couponPrice)) / 100) * TotalPrice();
  };

  /**
   * Manage Coupons
   */

  const couponHandler = (value) => {
    setCoupon(value);
    setError(false);
  };

  const ApplyHandler = (coupon) => {
    if (coupon === "shoe5%" && TotalPrice() > 5000) {
      setError(false);
      dispatch({ type: "UPDATE_COUPON_PRICE", payload: "5" });
    } else if (coupon === "shoe10%" && TotalPrice() > 10000) {
      setError(false);
      dispatch({ type: "UPDATE_COUPON_PRICE", payload: "10" });
    } else if (coupon === "shoe15%" && TotalPrice() > 15000) {
      setError(false);
      dispatch({ type: "UPDATE_COUPON_PRICE", payload: "15" });
    } else if (coupon === "shoe20%" && TotalPrice() > 20000) {
      setError(false);
      dispatch({ type: "UPDATE_COUPON_PRICE", payload: "20" });
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    ((coupon) => {
      if (coupon === "5" && TotalPrice() > 5000) {
        dispatch({ type: "UPDATE_COUPON_PRICE", payload: "5" });
      } else if (coupon === "10" && TotalPrice() > 10000) {
        dispatch({ type: "UPDATE_COUPON_PRICE", payload: "10" });
      } else if (coupon === "15" && TotalPrice() > 15000) {
        dispatch({ type: "UPDATE_COUPON_PRICE", payload: "15" });
      } else if (coupon === "20" && TotalPrice() > 20000) {
        dispatch({ type: "UPDATE_COUPON_PRICE", payload: "20" });
      } else {
        dispatch({ type: "UPDATE_COUPON_PRICE", payload: "0" });
      }
    })(couponPrice);
  }, [cart]);
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
  const cartRemoveHandler = (_id) => {
    removeFromCart(dispatch, _id);
    e.stopPropagation();
  };
  const increaseHandler = (_id) => {
    incrementOperater(dispatch, _id);
  };
  const decreaseHandler = (_id) => {
    decrementOperater(dispatch, _id);
  };
  return (
    <main>
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
          <div className="coupon-wrapper">
            <div className="flex-row flex-space-between promo-heading">
              <h1>Apply Promo Code</h1>
              {!show ? (
                <div className="drop-down" onClick={() => setShow(true)}>
                  <RiArrowDropDownLine />
                </div>
              ) : (
                <div className="drop-down" onClick={() => setShow(false)}>
                  <RiArrowDropUpLine />
                </div>
              )}
            </div>
            {show && (
              <div className="coupon-apply-wrapper">
                <h2>Enter Promo Code</h2>
                <div className="flex-row">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(event) => couponHandler(event.target.value)}
                  />
                  <button
                    className={`${coupon.length > 0 ? "button-black" : ""}`}
                    onClick={() => ApplyHandler(coupon)}
                  >
                    APPLY
                  </button>
                </div>
                {error ? (
                  <h2 className="wrong-color">
                    {coupon.length === 0
                      ? "Please Add Coupon!"
                      : "Coupon Invalid!"}{" "}
                  </h2>
                ) : (couponPrice === "5" && coupon === "shoe5%") ||
                  (couponPrice == "10" && coupon == "shoe10%") ||
                  (couponPrice == "15" && coupon == "shoe15%") ||
                  (couponPrice == "20" && coupon == "shoe20%") ? (
                  <h2 className="correct-color">Coupon Applied!</h2>
                ) : (
                  <></>
                )}
                <div>
                  <h2>shoe5% for more than ₹5,000</h2>
                  <h2>shoe10% for more than ₹10,000</h2>
                  <h2>shoe15% for more than ₹15,000</h2>
                  <h2>shoe20% for more than ₹20,000</h2>
                </div>
              </div>
            )}
          </div>
          <div className="total-table">
            <hr />
            <div className="flex-row flex-space-between">
              <h2>Sub Total </h2>
              <h2>₹{TotalPrice()}</h2>
            </div>
            <div className="flex-row flex-space-between">
              <h2>Shipping costs</h2>
              <h2>₹0</h2>
            </div>
            <div className="flex-row flex-space-between">
              <h2>
                Discount Coupon
                {couponPrice !== 0 ? `(${couponPrice}%)` : "(0%)"}
              </h2>
              <h2 className="strike-through">₹{TotalPrice()}</h2>
            </div>
            <div className="flex-row flex-space-between">
              <div className="flex-row flex-end">
                <h1>Grand Total </h1>
                <h3>Prices includes GST</h3>
              </div>
              <div className="flex-row">
                <h1 className="wrong-color">₹{totalDiscount().toFixed(0)}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="order-handler-wrapper">
          <div className="address-wrapper">
            <div className="address-heading">
              <h1>1.ADDRESSES</h1>
            </div>
            {addressEdit ? (
              <div className="flex-col">
                <AddressComponent />
              </div>
            ) : (
              // <form className="form">
              //   <label>
              //     <input
              //       type="text"
              //       value={firstname}
              //       onChange={(event) => setFirstName(event.target.value)}
              //       required
              //     />
              //     <h2 className="animate-h2">FIRST NAME*</h2>
              //   </label>
              //   <label>
              //     <input
              //       type="text"
              //       value={lastname}
              //       onChange={(event) => setLastName(event.target.value)}
              //       required
              //     />
              //     <h2 className="animate-h2">LAST NAME*</h2>
              //   </label>
              //   <label>
              //     <input
              //       type="text"
              //       value={address}
              //       onChange={(event) => setAddress(event.target.value)}
              //       required
              //     />
              //     <h2 className="animate-h2">ADDRESS*</h2>
              //   </label>
              //   <label>
              //     <input
              //       type="number"
              //       value={pincode}
              //       onChange={(event) => setPincode(event.target.value)}
              //       required
              //     />
              //     <h2 className="animate-h2">PINCODE*</h2>
              //   </label>
              //   <label>
              //     <input
              //       type="text"
              //       value={city}
              //       onChange={(event) => setCity(event.target.value)}
              //       required
              //     />
              //     <h2 className="animate-h2">CITY*</h2>
              //   </label>
              //   <label>
              //     <select
              //       name="state"
              //       value={state}
              //       onChange={(event) => setState(event.target.value)}
              //     >
              //       {stateIndia.map((state, id) => {
              //         return (
              //           <option value={state} key={id}>
              //             {state}
              //           </option>
              //         );
              //       })}
              //     </select>
              //     <h2 className="select-h2">STATE*</h2>
              //   </label>
              //   <div className="email-wrapper">
              //     <h2>Enter Contact Info(for Order Invoice)</h2>
              //   </div>
              //   <label>
              //     <input
              //       type="text"
              //       value={email}
              //       onChange={(event) => setEmail(event.target.value)}
              //       required
              //     />
              //     <h2 className="animate-h2">EMAIL*</h2>
              //   </label>
              //   <label>
              //     <input
              //       type="number"
              //       value={phoneNumber}
              //       onChange={(event) => setPhoneNumber(event.target.value)}
              //       required
              //     />
              //     <h2 className="animate-h2">PHONE NUMBER*</h2>
              //   </label>
              //   <h2 className="wrong-color">{addressState}</h2>
              //   <button
              //     className="button-primary"
              //     onClick={(event) => fillDummyData(event)}
              //   >
              //     Fill Dummy Data?
              //   </button>
              //   <button
              //     className="button-primary button-address"
              //     onClick={(event) => addressValidation(event)}
              //   >
              //     Continue To Payment Method
              //   </button>
              // </form>
              <div className="address-detail-wrapper">
                <div>
                  <h2>Shipping Address:</h2>
                  <div className="margin-top-1rem">
                    <h3>
                      {firstname} {lastname}
                    </h3>
                    <h3>{address}</h3>
                    <h3>
                      {pincode} ,{city}{" "}
                    </h3>
                    <h3>{state} </h3>
                  </div>
                </div>
                <div>
                  <h2>Shipping Method:</h2>
                  <div className="margin-top-1rem">
                    <h3>Standard : ₹0</h3>
                  </div>
                </div>
                <div>
                  <h2>Contact Info:</h2>
                  <div className="margin-top-1rem">
                    <h3>{email}</h3>
                    <h3>+91{phoneNumber}</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="address-wrapper">
            <div className="address-heading">{<h1>2.PAY</h1>}</div>
          </div>
        </div>
      </section>
    </main>
  );
};
