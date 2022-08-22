import { MdLock } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
export const TotalPrice = ({ prop }) => {
  const { array, coupon } = prop;
  const location = useLocation();
  const navigate = useNavigate();
  const TotalPrice = () => {
    const totalPrice = array.map(
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
    return ((100 - Number(coupon)) / 100) * TotalPrice();
  };
  return (
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
          {coupon !== 0 ? `(${coupon}%)` : "(0%)"}
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
      {location.pathname === "/cart" ? (
        <button
          className="button-primary button-address button-cart-card flex-row flex-center flex-space-between"
          onClick={() => navigate("/checkout")}
        >
          SECURE CHECKOUT
          <div className="text-md">
            <MdLock />
          </div>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};
