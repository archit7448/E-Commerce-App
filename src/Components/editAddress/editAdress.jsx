import { useState } from "react";
import { useAddress } from "../../context/address";
export const EditAddressComponent = ({ prop }) => {
  const [error, setError] = useState(false);
  const { dispatch, stateIndia } = useAddress();
  const {
    name: nameInput,
    pincode: pincodeInput,
    city: cityInput,
    address: addressInput,
    state: stateInput,
    _id,
    display
  } = prop;
  const [name, setName] = useState(nameInput);
  const [pincode, setPincode] = useState(pincodeInput);
  const [city, setCity] = useState(cityInput);
  const [address, setAddress] = useState(addressInput);
  const [state, setState] = useState(stateInput);
  const addressUpdateHandler = () => {
    if (
      name.length === 0 ||
      pincode.length === 0 ||
      address.length === 0 ||
      city.length === 0 ||
      state.length === 0
    ) {
      setError(true);
    } else {
      dispatch({
        type: "UPDATE_ADDRESS",
        payload: { name, city, pincode, address, state, _id,display  },
      });
      setError(false);
    }
  };
  return (
    <div className="address-wrapper">
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Pincode"
          value={pincode}
          onChange={(event) => setPincode(event.target.value)}
        />
      </div>
      <textarea
        type="text"
        placeholder="Address(Area and Street)"
        className="address-input"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <div>
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
      </div>
      {error && (
        <h1 className="address-error-heading">Please fill all details</h1>
      )}
      <div>
        <button
          className="button button-primary address-save-button"
          onClick={() => addressUpdateHandler()}
        >
          SAVE
        </button>
        <button
          className="button button-secondary address-save-button"
          onClick={() => dispatch({ type: "TOGGLE_DISPLAY", payload: _id })}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};
