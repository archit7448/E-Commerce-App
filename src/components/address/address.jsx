import { useState } from "react";
import { useAddress } from "../../context/address";
import { validateEmail } from "../../utility/emailValidation/email";
import { useLocation } from "react-router-dom";
import "./address.css";
export const AddressComponent = () => {
  const { defaultAddress, stateIndia, dispatch } = useAddress();
  const location = useLocation();
  // State for Address Validation

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("Delhi");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addressState, setAddressState] = useState();
  const [addressEdit, setAddressEdit] = useState(true);
  const addressValidation = (event) => {
    event.preventDefault();
    if (firstname.length < 2) {
      setAddressError("Fill First Name!");
    } else if (lastname.length < 2) {
      setAddressState("Fill Last Name!");
    } else if (address.length < 10) {
      setAddressState("Write Proper Address Details");
    } else if (pincode.length !== 6) {
      setAddressState("Pincode should be 6 in length");
    } else if (city.length < 2) {
      setAddressState("Fill City Name!");
    } else if (phoneNumber.length !== 10) {
      setAddressState("Phone Number should be 10 in length");
    } else if (!validateEmail(email)) {
      setAddressState("Please fill Email Details Right!");
    } else {
      setAddressEdit(false);
      dispatch();
    }
  };
  const fillDummyData = (event) => {
    setFirstName("Archit");
    setLastName("Singh");
    setAddress("J-832 M.I.G.,Gujaini");
    setPincode("208022");
    setCity("Kanpur");
    setState("Uttar Pradesh");
    setEmail("architsingh1064@gmail.com");
    setPhoneNumber("9235662323");
    event.preventDefault();
  };
  return (
    <form className="form">
      <label>
        <input
          type="text"
          value={firstname}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
        <h2 className="animate-h2">FIRST NAME*</h2>
      </label>
      <label>
        <input
          type="text"
          value={lastname}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
        <h2 className="animate-h2">LAST NAME*</h2>
      </label>
      <label>
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        />
        <h2 className="animate-h2">ADDRESS*</h2>
      </label>
      <label>
        <input
          type="number"
          value={pincode}
          onChange={(event) => setPincode(event.target.value)}
          required
        />
        <h2 className="animate-h2">PINCODE*</h2>
      </label>
      <label>
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required
        />
        <h2 className="animate-h2">CITY*</h2>
      </label>
      <label>
        <select
          name="state"
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
        <h2 className="select-h2">STATE*</h2>
      </label>
      <div className="email-wrapper">
        <h2>Enter Contact Info(for Order Invoice)</h2>
      </div>
      <label>
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <h2 className="animate-h2">EMAIL*</h2>
      </label>
      <label>
        <input
          type="number"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
        />
        <h2 className="animate-h2">PHONE NUMBER*</h2>
      </label>
      <h2 className="wrong-color">{addressState}</h2>
      <h3 className="" onClick={(event) => fillDummyData(event)}>
        Fill Dummy Data?
      </h3>
      <button
        className="button-primary button-address"
        onClick={(event) => addressValidation(event)}
      >
        {location.pathname === "/cart"
          ? "Continue To Paymnet Method"
          : "Save Address"}
      </button>
    </form>
  );
};
