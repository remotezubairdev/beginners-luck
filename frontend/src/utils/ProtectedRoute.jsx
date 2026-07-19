import { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Loading from './../components/system/Loading';

const ProtectedRoute = () => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loading message="Logging you in" />
    }
    else {
        if (user) {
            return <Outlet />
        }
        return <Navigate to={"/login"} />
    }
}

export default ProtectedRoute;