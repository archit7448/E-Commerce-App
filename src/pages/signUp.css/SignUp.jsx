import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "../../Components/header/header";
import { useAuth } from "../../context/Auth";
export const SignUp = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { dispatch } = useAuth();
  return (
    <main>
      <Header />
      <section className="form-wrapper validation">
        <form className="form">
          <label className="form-label">
            {" "}
            First Name
            <input
              type="text"
              placeholder="first Name"
              value={firstName}
              className="form-input"
              onChange={(event) => setfirstName(event.target.value)}
            />
          </label>
          <label className="form-label">
            {" "}
            Last Name
            <input
              type="text"
              placeholder="last Name"
              value={lastName}
              className="form-input"
              onChange={(event) => setLastName(event.target.value)}
            />
          </label>
          <label className="form-label">
            {" "}
            E-mail
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
            {" "}
            Password
            <input
              type="text"
              name="password"
              placeholder="password"
              className="form-input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <button className="button button-primary button-form">SIGN UP</button>
          <button
            className="button button-primary button-form"
            OnClick={() =>
              dispatch({
                type: "login",
                payload: {
                  email: "adarshbalika@neog.camp",
                  password: "adarshBalika",
                },
              })
            }
          >
            GUEST LOGIN
          </button>
            <button className="button button-secondary button-form">
              LOGIN
            </button>
        </form>
      </section>
    </main>
  );
};
