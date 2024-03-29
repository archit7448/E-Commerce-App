import { createContext, useContext, useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { notificationSuccess } from "../utility/notify";
const IntialState = {
  stateIndia: [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamilnadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ],
  Address: [
    {
      name: "Archit Singh",
      pincode: "200010",
      city: "Kanpur",
      address: "F-673 Ratan Lal Nagar",
      state: "Uttar Pradesh",
      phoneNumber: "9235662323",
      _id: uuid(),
      display: true,
    },
  ],
  defaultAddress: null,
};

const toggleDisplay = (state, payload) => {
  const { Address } = state;
  return {
    ...state,
    Address: Address.map((address) =>
      address._id === payload
        ? { ...address, display: !address.display }
        : address
    ),
  };
};

const updateAddress = (state, payload) => {
  const { Address } = state;
  return {
    ...state,
    Address: Address.map((address) =>
      address._id === payload._id
        ? { ...payload, display: !address.display }
        : address
    ),
  };
};

const deleteAddress = (state, payload) => {
  const { Address } = state;
  return {
    ...state,
    Address: Address.filter((address) => address._id !== payload._id),
  };
};

const setDefaultAddress = (state, payload) => {
  const { Address } = state;
  notificationSuccess("Default Address");
  return {
    ...state,
    defaultAddress: Address.filter((address) => address._id === payload._id),
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return {
        ...state,
        Address: [
          ...state.Address,
          { ...action.payload, _id: uuid(), display: true },
        ],
      };
    case "TOGGLE_DISPLAY":
      return toggleDisplay(state, action.payload);
    case "UPDATE_ADDRESS":
      return updateAddress(state, action.payload);
    case "DELETE_ADDRESS":
      return deleteAddress(state, action.payload);
    case "SELECT_DEFAULT_ADDRESS":
      return setDefaultAddress(state, action.payload);
    default:
      return { state };
  }
};

const AddressContext = createContext(null);

const AddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, IntialState);
  const { stateIndia, Address, defaultAddress } = state;
  return (
    <AddressContext.Provider
      value={{ dispatch, stateIndia, Address, defaultAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };
