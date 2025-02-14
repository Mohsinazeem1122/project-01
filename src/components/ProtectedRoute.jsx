import React from "react";
import { Navigate } from "react-router-dom";
import { useFirebase } from "../firebase/firebaseContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useFirebase();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
