import axios from "axios";
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { notificationError, notifyMessage } from "../utility/notify";
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(localStorage.getItem("token"));

  const successHandler = () => {
    setToken(localStorage.getItem("token"));
    setUser(JSON.parse(localStorage.getItem("user")));
    notifyMessage("SUCCESS!");
    navigate("/products");
  };

  const ErrorHandler = () => {
    if (error) {
      notificationError("GET ERROR");
    }
  };

  const SignUpHandler = () => {
    async (params) => {
      try {
        const response = await axios.post("/api/auth/signup", {
          params,
        });
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("user", response.data.user);
        successHandler();
      } catch (error) {
        console.log(error);
        ErrorHandler();
      }
    };
  };

  const LoginHandler = async (params) => {
    try {
      const response = await axios.post("/api/auth/login", params);
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(response.data.foundUser));
      successHandler();
    } catch (error) {
      console.log(error);
      ErrorHandler();
    }
  };

  const LogOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    notifyMessage("LogOut Succesfully");
  };

  return (
    <AuthContext.Provider
      value={{ token, user, LoginHandler, SignUpHandler, LogOutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
