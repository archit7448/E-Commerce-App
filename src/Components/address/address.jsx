import { useState} from "react";
import { useAddress } from "../../context/address";
import { validateEmail } from "../../utility/emailValidation/email";
import { useLocation } from "react-router-dom";
import "./address.css";
export const AddressComponent = ({ prop }) => {
  const { stateIndia, dispatch, Address } = useAddress();
  const location = useLocation();
  const {
    firstname: propfirstName,
    lastname: propLastName,
    address: propAddress,
    pincode: propPincode,
    city: propCity,
    state: propState,
    email: propEmail,
    phoneNumber: propPhoneNumber,
    title: propTitle,
    edit,
    _id,
    setDisplay,
  } = prop;
  // State for Address Validation

  const [firstname, setFirstName] = useState(propfirstName);
  const [lastname, setLastName] = useState(propLastName);
  const [pincode, setPincode] = useState(propPincode);
  const [city, setCity] = useState(propCity);
  const [address, setAddress] = useState(propAddress);
  const [state, setState] = useState(propState);
  const [email, setEmail] = useState(propEmail);
  const [phoneNumber, setPhoneNumber] = useState(propPhoneNumber);
  const [addressState, setAddressState] = useState();
  const [title, setTitle] = useState(propTitle);

  const addAddressHandler = () => {
    dispatch({
      type: "ADD_ADDRESS",
      payload: {
        title,
        firstname,
        lastname,
        pincode,
        city,
        address,
        state,
        email,
        phoneNumber,
      },
    });
    setDisplay(false);
  };

  const checkoutHandler = () => {
    dispatch({
      type: "ADD_CHECKOUT_ADDRESS",
      payload: {
        firstname,
        lastname,
        address,
        pincode,
        city,
        state,
        email,
        phoneNumber,
        title,
        edit: true,
        _id,
      },
    });
  };

  const updateHandler = () => {
    dispatch({
      type: "UPDATE_ADDRESS",
      payload: {
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
      },
    });
  };
  const addressHandler = () => {
    if (location.pathname !== "/profile") {
      checkoutHandler();
    } else {
      edit ? updateHandler() : addAddressHandler();
    }
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    _id.length > 0
      ? dispatch({ type: "TOGGLE_DISPLAY", payload: { _id } })
      : setDisplay(false);
  };

  const addressValidation = (event) => {
    event.preventDefault();
    if (title.length < 2) {
      setAddressState("Fill Title!");
    } else if (
      Address.length > 0 &&
      Address.find((addressValue) => addressValue.title === title)
    ) {
      setAddressState("Please Fill Different Title! Already Taken");
    } else if (firstname.length < 2) {
      setAddressState("Fill First Name!");
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
      addressHandler();
    }
  };
  const fillDummyData = (event) => {
    {
      location.pathname === "/profile"
        ? setTitle("New Address")
        : setTitle("null");
    }
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
      {location.pathname === "/profile" ? (
        <label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
          <h2 className="animate-h2">TITLE *</h2>
        </label>
      ) : (
        <></>
      )}
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
          type="text"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
        />
        <h2 className="animate-h2">PHONE NUMBER*</h2>
      </label>
      <h2 className="wrong-color">{addressState}</h2>
      <h3 className="dummy-button" onClick={(event) => fillDummyData(event)}>
        Fill Dummy Data?
      </h3>
      <button
        className="button-primary button-address"
        onClick={(event) => addressValidation(event)}
      >
        {location.pathname === "/checkout"
          ? "Continue To Paymnet Method"
          : "Save Address"}
      </button>
      {location.pathname === "/profile" ? (
        <button
          className="button-secondary button-cancel"
          onClick={(event) => cancelHandler(event)}
        >
          Cancel
        </button>
      ) : (
        <></>
      )}
    </form>
  );
};
