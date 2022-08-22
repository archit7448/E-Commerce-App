import { createContext, useContext, useReducer } from "react";
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
  Address: [],
  defaultAddress: {},
  checkoutAddress: [
    {
      _id: "1",
      firstname: "",
      lastname: "",
      address: "",
      pincode: "",
      city: "",
      state: "",
      email: "",
      phoneNumber: "",
      title: "Checkout Address",
      edit: false,
    },
  ],
  checkoutState: true,
};

const toggleDisplay = (state, payload) => {
  const { Address } = state;
  return {
    ...state,
    Address: Address.map((address) =>
      address._id === payload._id
        ? { ...address, edit: !address.edit }
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
        ? { ...payload, edit: !address.display }
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

const setCheckoutAddress = (state, payload) => {
  if (payload._id !== "checkout") {
    const { Address } = state;
    const value = Address.filter((address) => address._id === payload._id)[0];
    return {
      ...state,
      checkoutAddress: [{ ...value, edit: false }],
    };
  }
  return {
    ...state,
    checkoutAddress: [
      {
        _id: "1",
        firstname: "",
        lastname: "",
        address: "",
        pincode: "",
        city: "",
        state: "",
        email: "",
        phoneNumber: "",
        title: "Checkout Address",
        edit: false,
      },
    ],
  };
};

const addCheckoutAddress = (state, payload) => {
  return { ...state, checkoutAddress: [payload] };
};

const toggleCheckoutAddress = (state) => {
  const { checkoutAddress } = state;
  return {
    ...state,
    checkoutAddress: checkoutAddress.map((address) => ({
      ...address,
      edit: false,
    })),
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return {
        ...state,
        Address: [
          ...state.Address,
          { ...action.payload, _id: uuid(), edit: true },
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
    case "SET_CHECKOUT_ADDRESS":
      return setCheckoutAddress(state, action.payload);
    case "SET_DEFAULT_ADD_ADDRESS":
      return setAddDefaultAddress(state, action.payload);
    case "ADD_CHECKOUT_ADDRESS":
      return addCheckoutAddress(state, action.payload);
    case "TOGGLE_CHECKOUT_ADDRESS":
      return toggleCheckoutAddress(state);
    default:
      return { state };
  }
};

const AddressContext = createContext(null);

const AddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, IntialState);
  const { stateIndia, Address, defaultAddress, checkoutAddress } = state;
  return (
    <AddressContext.Provider
      value={{ dispatch, stateIndia, Address, defaultAddress, checkoutAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };
