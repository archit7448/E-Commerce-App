import { useAuth } from "../../context/auth";
import { useAddress } from "../../context/address";
import { CgProfile } from "react-icons/cg";
import { FiLogIn } from "react-icons/fi";
import { useState, useEffect } from "react";
import "./profile.css";
import {
  AddressManager,
  Header,
  AddressComponent,
} from "../../Components/index";
import { useNavigate, useLocation } from "react-router-dom";
import { useData } from "../../context/Data";
export const ProfilePage = () => {
  const [showAddress, setShowAddress] = useState(false);
  const { user, LogOutHandler } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { order } = useData();
  const { Address, defaultAddress } = useAddress();
  useEffect(() => {
    if (defaultAddress !== null) {
      location.state === "/profile" ? navigate("/cart") : null;
    }
  }, [defaultAddress]);
  return (
    <main>
      <Header />
      <section>
        <div className="profile-page-wrapper">
          <CgProfile className="profile-page-profile" />
          <h2 className="text-grey">
            Name:{" "}
            <span className="color-primary">
              {" "}
              {user.firstName} {user.lastName}
            </span>
          </h2>
          <h2 className="text-grey">
            E-MAIL: <span className="color-primary">{user.email}</span>
          </h2>
          <button
            className="button button-primary button-logout"
            onClick={() => LogOutHandler()}
          >
            Logout <FiLogIn />{" "}
          </button>
          <hr />
          {Address.length > 0 && (
            <h2 className="text-grey-address">Manage Address</h2>
          )}
          <AddressManager />
          <button
            className="button button-secondary button-address"
            onClick={() => setShowAddress(true)}
          >
            + ADD A NEW ADDRESS
          </button>
          {showAddress && <AddressComponent prop={{ setShowAddress }} />}
          <hr />
          <h1 className="text-grey-address">Order Summary</h1>
          {order.map(({ orderArray, couponPrice, _id }, index) => {
            console.log(_id);
            const TotalPrice = () => {
              const totalPrice = orderArray.map(
                ({ price, qty }) => Number(price) * Number(qty)
              );
              return totalPrice.reduce((acc, curr) => acc + curr, 0);
            };
            return (
              <div key={_id}>
                <h2>Order {index + 1} Details</h2>
                {orderArray.map(
                  ({
                    title,
                    produced,
                    price,
                    ratings,
                    description,
                    image,
                    _id,
                    qty,
                  }) => {
                    return (
                      <div
                        className="card-wrapper card-cart-order"
                        key={_id}
                        onClick={() => navigate(`/product/${_id}`)}
                      >
                        <img src={image} alt={title} />
                        <div className="content-wrapper">
                          <h1 className="card-order-heading-main">{title}</h1>
                          <h4 className="card-order-heading-two">{produced}</h4>
                          <h2 className="card-order-price">
                            ₹ {price} X {qty}
                          </h2>
                          <h4 className="card-order-ratings">
                            {" "}
                            ratings:{ratings}
                          </h4>
                          <p className="card-order-para">{description}</p>
                        </div>
                      </div>
                    );
                  }
                )}
                <div className="place-order">
                  <h1 className="text-sm">PRICE DETAILS</h1>
                  <hr />
                  <h1 className="text-grey text-xsm">
                    Price({orderArray.length} items):{TotalPrice()}
                  </h1>
                  <h1 className="text-grey text-xsm">Discount: -100</h1>
                  <h1 className="text-grey text-xsm">Coupons: {couponPrice}</h1>
                  <h1 className="text-grey text-xsm">Delivery: 50</h1>
                  <hr />
                  <h1 className="text-sm">
                    TOTAL PRICE :{TotalPrice() - (50 + couponPrice)}
                  </h1>
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};
  