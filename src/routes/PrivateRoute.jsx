import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../context";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children, isPrivateRoute, isPublicRoute }) => {
  const { user } = useContext(GlobalContext);
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  if (isPrivateRoute && user.status !== "ACTIVE") {
    return <Navigate to="/personal-information" replace={true} />;
  }

  if (isPublicRoute && user.status === "ACTIVE") {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

export default PrivateRoute;
