import { useEffect } from "react";
import GoalsList from "../components/main/GoalsList";

export default function Home() {
    return (
        <div className="container">
            <h1>
                Hello, Zubair
            </h1>
            {/* UI Container */}
            <div className="grid grid-cols-2 gap-x-12 mt-16">
                <GoalsList />
            </div>
        </div>
    );
}