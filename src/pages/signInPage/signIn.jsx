import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/header/header";
import { useAuth } from "../../context/auth";
import "./signIn.css";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { LoginHandler, user } = useAuth();
  const guestHandler = () => {
    setEmail("architsingh1064@gmail.com");
    setPassword("archit123");
  };
  return (
    <main>
      <Header />
      <section className="form-wrapper validation">
        <form className="form">
          <h1 className="heading-form">Sign In</h1>
          <label className="form-label">
            <input
              type="text"
              name="email-id"
              placeholder="Email"
              value={email}
              className="form-input"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className="form-label">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <h4 className="guest-button" onClick={() => guestHandler()}>
            Guest Login?
          </h4>
          <button
            className="button button-primary button-form"
            onClick={(event) => {
              event.preventDefault();
              email.length !== 0 &&
                password.length !== 0 &&
                LoginHandler({ email: email, password: password });
            }}
          >
            Sign In
          </button>
          <div className="flex-row">
            <h5>New User?</h5>
            <Link to="/SignUp">
              {" "}
              <h5 className="signUp-button">SignUp Now</h5>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};
