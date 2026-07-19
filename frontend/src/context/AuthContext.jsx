import { createContext, useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

export const AuthContext = createContext(null)

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const fetchUser = async () => {
        const data = await fetchData('http://127.0.0.1:8000/api/user');
        setUser(data);
    }
    useEffect(() => {
        fetchUser();
        console.log("mounted")
    }, [])
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
} 