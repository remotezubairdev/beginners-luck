import { LoaderCircle } from "lucide-react";

export default function Loading({ message }) {
    return (
        <div className="max-w-xl container flex flex-row justify-between items-center gap-3">
            { message }
            <LoaderCircle size={30} className='animate-spin' />
        </div>
    );
}