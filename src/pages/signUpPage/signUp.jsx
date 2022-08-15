import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "../../components/header/header";
import { useAuth } from "../../context/auth";
export const SignUp = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { SignUpHandler } = useAuth();
  return (
    <main>
      <Header />
      <section className="form-wrapper validation">
        <form className="form">
          <label className="form-label">
            <input
              type="text"
              placeholder="first Name"
              value={firstName}
              className="form-input"
              onChange={(event) => setfirstName(event.target.value)}
            />
          </label>
          <label className="form-label">
            <input
              type="text"
              placeholder="last Name"
              value={lastName}
              className="form-input"
              onChange={(event) => setLastName(event.target.value)}
            />
          </label>
          <label className="form-label">
            <input
              type="text"
              name="email-id"
              placeholder="e-mail"
              value={email}
              className="form-input"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className="form-label">
            <input
              type="text"
              name="password"
              placeholder="password"
              className="form-input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button
            className="button button-primary button-form"
            onClick={() => {
              SignUpHandler({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
              });
            }}
          >
            SIGN UP
          </button>
          <div className="flex-row">
            <h5>Already have account?</h5>
            <Link to="/signIn">
              {" "}
              <h5 className="signUp-button">SignIn Now</h5>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};
