import { Header } from "../../Components/header/header";
import { useAuth } from "../../context/auth";
import { CgProfile } from "react-icons/cg";
import { FiLogIn } from "react-icons/fi";
import "./profile.css";
export const ProfilePage = () => {
  const { user, LogOutHandler } = useAuth();
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
