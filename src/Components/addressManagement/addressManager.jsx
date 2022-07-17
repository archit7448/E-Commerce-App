import { useAddress } from "../../context/address";
import { FiMoreVertical } from "react-icons/fi";
import { AddressComponent } from "../index";

export const AddressManager = () => {
  const { Address, dispatch } = useAddress();
  return Address.map((addressData) => {
    const { name, city, pincode, address, state, _id, display, phoneNumber } =
      addressData;
    return (
      <div key={_id} className="flex-col">
        <div className="flex-row">
          <input
            type="radio"
            name="select-address"
            onClick={() =>
              dispatch({ type: "SELECT_DEFAULT_ADDRESS", payload: addressData })
            }
          />
          {display && (
            <div className="address-input-wrapper">
              <div className="edit-address-wrapper">
                <FiMoreVertical className="address-input-button" />
                <div className="edit-address-button-wrapper">
                  <button
                    className="edit-address-button"
                    onClick={() =>
                      dispatch({ type: "TOGGLE_DISPLAY", payload: _id })
                    }
                  >
                    EDIT
                  </button>
                  <button
                    className="delete-address-button"
                    onClick={() =>
                      dispatch({
                        type: "DELETE_ADDRESS",
                        payload: { _id },
                      })
                    }
                  >
                    DELETE
                  </button>
                </div>
              </div>
              <h3>{name}</h3>
              <div>
                <h3 className="color-primary">
                  {address} ,{pincode}, +91{phoneNumber} ,{city}, {state}
                </h3>
              </div>
            </div>
          )}
          {!display && (
            <AddressComponent
              prop={{
                name,
                city,
                pincode,
                address,
                state,
                _id,
                display,
                phoneNumber,
                editState: true,
              }}
            />
          )}
        </div>
      </div>
    );
  });
};
