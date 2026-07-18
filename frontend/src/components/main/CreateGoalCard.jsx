import { X } from "lucide-react";
export default function CreateGoalCard({ toggleCard }) {
    return (
        <div className="shadow-xl container fixed inset-50">
            <div className="flex justify-between">
                <h1 className="text-2xl">Create a New Main Goal</h1>
                <X size={35} onClick={toggleCard} className="cursor-pointer" />
            </div>
            <div className="flex flex-col gap-4 mt-8">
                <input 
                type="text"
                placeholder="e.g Research the impact of social media on youth"
                className="input-large"
                />
                <button className="button-large" onClick={toggleCard}>
                    Confirm Creation
                </button>
            </div>
        </div>
    );
}