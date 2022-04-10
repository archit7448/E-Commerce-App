import { createContext, useContext, useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";
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
      _id: uuid(),
      display: true,
    },
  ],
};
const ToggleDisplay = (state, payload) => {
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

const UpdateAddress = (state, payload) => {
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

const DeleteAddress = (state, payload) => {
  const { Address } = state;
  return {
    ...state,
    Address: Address.filter((address) => address._id !== payload._id),
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
      return ToggleDisplay(state, action.payload);
    case "UPDATE_ADDRESS":
      return UpdateAddress(state, action.payload);
    case "DELETE_ADDRESS":
      return DeleteAddress(state, action.payload);
    default:
      return { state };
  }
};

const AddressContext = createContext(null);

const AddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, IntialState);
  const { stateIndia, Address } = state;
  return (
    <AddressContext.Provider value={{ dispatch, stateIndia, Address }}>
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };
