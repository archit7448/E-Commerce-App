import { useAuth } from "../../context/auth";
import { FiLogIn } from "react-icons/fi";
import "./profile.css";
import {
  AddressComponent,
  AddressManager,
  Header,
} from "../../components/index";
import { useNavigate } from "react-router-dom";
import { useAddress } from "../../context/address";
import { useState } from "react";
export const ProfilePage = () => {
  const { user } = useAuth();
  const { Address } = useAddress();
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);
  const addressNavigate = () => {
    setDisplay((state) => !state);
  };
  return (
    <main>
      <Header />
      <section className="profile-section">
        <div className="profile-wrapper">
          <div className="address-wrapper">
            <div className="address-heading">
              <h1>Profile</h1>
            </div>
            <div className="address-detail-wrapper flex-col">
              <div className="flex-row">
                <h2>First Name:</h2>
                <h2 className="margin-1rem">{user.firstName}</h2>
              </div>
              <div className="flex-row">
                <h2>Last Name:</h2>
                <h2 className="margin-1rem">{user.lastName}</h2>
              </div>
              <div className="flex-row">
                <h2>Email:</h2>
                <h2 className="margin-1rem">{user.email}</h2>
              </div>
              <button className="button-primary button-logout">
                Logout <FiLogIn />
              </button>
            </div>
          </div>
        </div>
        <div className="profile-wrapper">
          <div className="address-wrapper">
            <div className="address-heading">
              <h1>Addresses</h1>
            </div>
            {Address.length > 0 ? (
              Address.map((value) => {
                return <AddressManager key={value._id} prop={value} />;
              })
            ) : (
              <></>
            )}
            <button
              className="button-primary button-addresses"
              onClick={() => addressNavigate()}
            >
              Add New Address
            </button>
            {display ? (
              <AddressComponent
                prop={{
                  firstname: "",
                  lastname: "",
                  address: "",
                  pincode: "",
                  city: "",
                  state: "",
                  email: "",
                  phoneNumber: "",
                  title: "",
                  edit: "",
                  _id: "",
                  setDisplay,
                }}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
