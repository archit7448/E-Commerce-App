import { Navigate } from "react-router-dom";

export const RequireAuth = ({children}) => {
  const token = localStorage.getItem("token")
  return token.length >0 ? <Navigate to="/products"/>:children;
}  


