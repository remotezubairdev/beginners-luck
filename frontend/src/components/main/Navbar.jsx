import { navLinks } from "../../constants/navLinks";

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-tl from-blue-900 to-pink-700 text-white flex flex-col gap-20 fixed w-[300px] top-0 left-0 bottom-0">
            <h1 className="text-4xl font-semibold p-8">
                Beginner's <br />Luck
            </h1>
            <ul className="flex flex-col gap-8">
                {
                    // I got confused how to store and access a react icon from an array
                    // So ChatGPT suggested they are functions so can be stored and accessed this way
                    navLinks.map((link, index) => {
                        const Icon = link.icon
                        return (
                            <li key={index}>
                                <a href={link.path} className="flex items-center gap-5 text-2xl px-8 hover:translate-x-1 transition ease-in-out duration-300">
                                    <Icon size={30} /> {link.name}
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}