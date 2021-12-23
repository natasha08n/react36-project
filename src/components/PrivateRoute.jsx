import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { getLoggedIn } from "../store/selectors/user";

export function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
}
