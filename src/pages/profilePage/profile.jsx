import { useAuth } from "../../context/auth";
import { useAddress } from "../../context/address";
import { CgProfile } from "react-icons/cg";
import { FiLogIn } from "react-icons/fi";
import { useState, useEffect } from "react";
import "./profile.css";
import {
  AddressManager,
  Header,
  AddressComponent,
} from "../../components/index";
import { useNavigate, useLocation } from "react-router-dom";
export const ProfilePage = () => {
  const { user } = useAuth();
  console.log(user);
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
          </div>
        </div>
      </section>
    </main>
  );
};
