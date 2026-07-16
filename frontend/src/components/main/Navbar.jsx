import { navLinks } from "../../constants/navLinks";

export default function Navbar() {
    return (
        <nav className="nav-bg flex flex-col gap-20 fixed w-[300px] top-0 left-0 bottom-0 p-8 text-white">
            <h1 className="text-5xl font-bold">
                Beginner's <br />Luck
            </h1>
            <ul className="flex flex-col gap-5">
                {
                    // I got confused how to store and access a react icon from an array
                    // So ChatGPT suggested they are functions so can be stored and accessed this way
                    navLinks.map((link, index) => {
                        const Icon = link.icon
                        return (
                            <li key={index}>
                                <a href={link.path} className="flex items-center gap-5 text-2xl font-bold hover:text-black">
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