import { Header } from "../../Components/header/header";
import { useAuth } from "../../context/auth";
import { CgProfile } from "react-icons/cg";
import { FiLogIn, FiMoreVertical } from "react-icons/fi";
import "./profile.css";
import { useState } from "react";
import { AddressComponent } from "../../Components/address/address";
import { useAddress } from "../../context/address";
import { EditAddressComponent } from "../../Components/editAddress/editAdress";
export const ProfilePage = () => {
  const [show, setShow] = useState(false);
  const { user, LogOutHandler } = useAuth();
  const { Address, dispatch } = useAddress();
  return (
    <main>
      <Header />
      <section className="flex-center">
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
          {Address.length > 0 && (
            <h2 className="text-grey-address">Manage Address</h2>
          )}
          {Address.map(
            ({ name, city, pincode, address, state, _id, display }) => {
              return (
                <div key={_id}>
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
                            Edit
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
                            Delete
                          </button>
                        </div>
                      </div>
                      <h3>{name}</h3>
                      <div>
                        <h3 className="color-primary">
                          {address} {pincode} {city} {state}
                        </h3>
                      </div>
                    </div>
                  )}
                  {!display && (
                    <EditAddressComponent
                      prop={{
                        name,
                        city,
                        pincode,
                        address,
                        state,
                        _id,
                        display,
                      }}
                    />
                  )}
                </div>
              );
            }
          )}
          <button
            className="button button-secondary button-address"
            onClick={() => setShow(true)}
          >
            + ADD A NEW ADDRESS
          </button>
          {show && <AddressComponent prop={{ setShow }} />}
          <button
            className="button button-primary button-logout"
            onClick={() => LogOutHandler()}
          >
            Logout <FiLogIn />{" "}
          </button>
        </div>
      </section>
    </main>
  );
};
