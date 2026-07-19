import { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
    const { user } = useContext(AuthContext)
    if (user) {
        return <Outlet />
    } else {
        return <Navigate to={"/login"} />
    }
}

export default ProtectedRoute;