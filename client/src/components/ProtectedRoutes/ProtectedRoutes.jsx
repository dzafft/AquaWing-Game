import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { usersContextRef } from "../../context/usersContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(usersContextRef);

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
