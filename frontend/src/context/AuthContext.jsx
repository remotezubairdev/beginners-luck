import { createContext, useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

export const AuthContext = createContext(null)

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const logout = () => {
        setUser(null)
    }

    const fetchUser = async () => {
        try {
            setLoading(true)
            const data = await fetchData('http://127.0.0.1:8000/api/user');
            if (data) {
                setUser(data);
            } else {
                setUser(null)
            }
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <AuthContext.Provider value={{ user, setUser, loading, fetchUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
} 