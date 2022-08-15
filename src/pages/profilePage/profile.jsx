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
import { useData } from "../../context/data";
export const ProfilePage = () => {
 
  return (
    <main>
      <Header />
      <section className="profile-section">
        <div className="user-wrappper">
          <div className="">
            <h2>Profile</h2>
          </div>
        </div>
      </section>
    </main>
  );
};
