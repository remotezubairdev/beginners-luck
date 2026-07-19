import { useContext } from "react";
import { navLinks } from "../../constants/navLinks";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
    const { pathname } = useLocation();
    const { setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("access")
        localStorage.removeItem("refresh")
        setUser(null);
        navigate("/login")
    }


    return (
        <nav className="bg-white border-r border-gray-300 flex flex-col fixed w-[250px] top-0 left-0 bottom-0">
            <h1 className="text-xl font-semibold p-8">
                Beginner's Luck
            </h1>
            <ul className="flex flex-col gap-2 p-4">
                {
                    // I got confused how to store and access a react icon from an array
                    // So ChatGPT suggested they are functions so can be stored and accessed this way
                    navLinks.map((link, index) => {
                        const Icon = link.icon
                        return (
                            <li key={index}>
                                <Link to={link.path} className={`flex items-center gap-4 ${pathname === link.path ? 'bg-gray-50 border border-gray-300 rounded-xl' : ''} px-4 py-2`}>
                                    <Icon size={25} /> {link.name}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
            {
                <button className="button m-4 cursor-pointer" onClick={logout}>Logout</button>
            }
        </nav>
    );
}