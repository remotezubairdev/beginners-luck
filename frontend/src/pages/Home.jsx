import { useContext } from "react";
import GoalsList from "../components/main/GoalsList";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
    const { user } = useContext(AuthContext);
    return (
        <div className="container">
            <h1>
                Hello, {user?.username}
            </h1>
            {/* UI Container */}
            <div className="grid grid-cols-2 gap-x-12 mt-16">
                <GoalsList />
            </div>
        </div>
    );
}