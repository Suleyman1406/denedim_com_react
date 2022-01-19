import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useProfile } from "../Context/ProfileContext";

function RequireAuth({ children }) {
    const{isLogged}=useProfile();
    let location=useLocation();
    if (!isLogged) {
     
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }

  export default RequireAuth