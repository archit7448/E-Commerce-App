import { useData } from "../../context/dataContext";
import { useState, useEffect } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export const Coupon = () => {
  const { cart, couponPrice, dispatch } = useData();
  const [iserror, setError] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [isshow, setShow] = useState(false);
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

  //   Manage Coupons
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
  return (
    <div className="coupon-wrapper">
      <div className="flex-row flex-space-between promo-heading">
        <h1>Apply Promo Code</h1>
        {!isshow ? (
          <div className="drop-down" onClick={() => setShow(true)}>
            <RiArrowDropDownLine />
          </div>
        ) : (
          <div className="drop-down" onClick={() => setShow(false)}>
            <RiArrowDropUpLine />
          </div>
        )}
      </div>
      {isshow && (
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
          {iserror ? (
            <h2 className="wrong-color">
              {coupon.length === 0 ? "Please Add Coupon!" : "Coupon Invalid!"}{" "}
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
  );
};
