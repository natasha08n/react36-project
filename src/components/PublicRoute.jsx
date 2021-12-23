import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { getLoggedIn } from "../store/selectors/user";

export function PublicRoute({ children }) {
  const isLoggedIn = useSelector(getLoggedIn);

  return isLoggedIn ? <Navigate to="/" /> : children;
}
