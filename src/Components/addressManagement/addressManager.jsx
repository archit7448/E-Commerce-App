import { useLocation } from "react-router-dom";
import { useAddress } from "../../context/address";
import { AddressComponent } from "../address/address";

export const AddressManager = ({ prop }) => {
  const { dispatch } = useAddress();
  const location = useLocation();
  const {
    firstname,
    lastname,
    address,
    pincode,
    city,
    state,
    email,
    phoneNumber,
    title,
    edit,
    _id,
  } = prop;
  return edit ? (
    <div className="flex-col">
      <div className="address-detail-wrapper">
        <div>
          <h2>
            {location.pathname === "/profile" 
              ? `${title}:`
              : "Shipping Address:"}
          </h2>
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
          <h2>Contact Info:</h2>
          <div className="margin-top-1rem">
            <h3>{email}</h3>
            <h3>+91{phoneNumber}</h3>
          </div>
        </div>
      </div>
      <div className="button-address-wrapper">
        {location.pathname === "/profile" ? (
          <button
            className="remove-cart-button"
            onClick={() =>
              dispatch({ type: "DELETE_ADDRESS", payload: { _id } })
            }
          >
            Remove
          </button>
        ) : (
          <></>
        )}
        <button
          className="remove-cart-button"
          onClick={() =>
            location === "/profile"
              ? dispatch({ type: "TOGGLE_DISPLAY", payload: { _id } })
              : dispatch({ type: "TOGGLE_CHECKOUT_ADDRESS" })
          }
        >
          Edit
        </button>
      </div>
      {location.pathname === "/profile" ? <hr /> : <></>}
    </div>
  ) : (
    <AddressComponent
      prop={{
        firstname,
        lastname,
        address,
        pincode,
        city,
        state,
        email,
        phoneNumber,
        title,
        edit,
        _id,
      }}
    />
  );
};
