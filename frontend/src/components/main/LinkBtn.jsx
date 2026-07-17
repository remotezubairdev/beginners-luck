import { Link } from "react-router-dom";
export default function LinkBtn({ path, text, style }) {
    if (style === "dark") {
        return (
            <Link 
            to={path}
            className="hover:scale-105 transition duration-300 ease-in-out inline-block text-black bg-white p-2 rounded-md text-sm"
            >
                { text }
            </Link>
        );
    }
    return (
        <Link 
        to={path}
        className="text-white hover:scale-105 transition duration-300 ease-in-out inline-block bg-gray-700 p-2 rounded-md text-sm"
        >
            { text }
        </Link>
    );
}