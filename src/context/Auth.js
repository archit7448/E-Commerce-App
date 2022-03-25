import { Navigate } from "react-router-dom";

export const RequireAuth = ({children}) => {
  const token = localStorage.getItem("token")
  return token !== null ? <Navigate to="/products"/>:children;
}  


