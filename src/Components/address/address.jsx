import { useState } from "react";
import { useAddress } from "../../context/address";
import { notificationError } from "../../utility/notify";
export const AddressComponent = ({ prop }) => {
  const {
    name: propName,
    city: propCity,
    pincode: propPincode,
    address: propAddress,
    state: propState,
    phoneNumber: propPhoneNumber,
    _id,
    display,
    editState,
  } = prop;
  const { setShowAddress } = prop;
  const { dispatch, stateIndia } = useAddress();
  const [name, setName] = useState(editState ? propName : "");
  const [pincode, setPincode] = useState(editState ? propPincode : "");
  const [city, setCity] = useState(editState ? propCity : "");
  const [address, setAddress] = useState(editState ? propAddress : "");
  const [state, setState] = useState(editState ? propState : "Delhi");
  const [phoneNumber, setPhoneNumber] = useState(
    editState ? propPhoneNumber : ""
  );
  const cancelHandler = () => {
    setShowAddress(false);
    setName("");
    setCity("");
  };

  const ErrorHandler = () => {
    if (name.length < 2) {
      notificationError("Name is short");
    } else if (pincode.length !== 6) {
      notificationError("Pincode should be 6 in length");
    } else if (city.length < 2) {
      notificationError("Proper City Name");
    } else if (address.length < 10) {
      notificationError("Write Proper Address Details");
    } else if (phoneNumber.length !== 10) {
      notificationError("Phone Number should be 10 in length");
    }
    return (
      name.length < 2 ||
      pincode.length !== 6 ||
      city.length < 2 ||
      address.length < 10 ||
      phoneNumber.length !== 10
    );
  };

  const addressHandler = () => {
    if (!ErrorHandler()) {
      dispatch({
        type: "ADD_ADDRESS",
        payload: { name, city, pincode, address, state, phoneNumber },
      });
      setAddress("");
      setCity("");
      setAddress("");
      setPincode("");
      setState("");
      setShowAddress(false);
    }
  };
  const addressUpdateHandler = () => {
    if (!ErrorHandler()) {
      dispatch({
        type: "UPDATE_ADDRESS",
        payload: {
          name,
          city,
          pincode,
          address,
          state,
          _id,
          display,
          phoneNumber,
        },
      });
    }
  };
  return (
    <div className="address-wrapper">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="number"
        placeholder="Pincode"
        value={pincode}
        onChange={(event) => setPincode(event.target.value)}
      />
      <input
        type="number"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <textarea
        type="text"
        placeholder="Address(Area and Street)"
        className="address-input"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <input
        type="text"
        placeholder="City/District/Town"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <select
        name="state"
        className="option-address"
        value={state}
        onChange={(event) => setState(event.target.value)}
      >
        {stateIndia.map((state, id) => {
          return (
            <option value={state} key={id}>
              {state}
            </option>
          );
        })}
      </select>
      <div>
        <button
          className="button button-primary address-save-button"
          onClick={() =>
            editState ? addressUpdateHandler() : addressHandler()
          }
        >
          SAVE
        </button>
        <button
          className="button button-secondary address-save-button"
          onClick={() =>
            editState
              ? dispatch({ type: "TOGGLE_DISPLAY", payload: _id })
              : cancelHandler()
          }
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};
