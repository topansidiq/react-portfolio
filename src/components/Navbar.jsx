import logo from "../assets/mengcode-logo.jpg";
import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaFacebook,
    FaDiscord,
} from "react-icons/fa";
import "../css/Navbar.css";

export default function Navbar() {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img
                    className="ml-10 w-16 rounded-full"
                    src={logo}
                    id="logo"
                    alt="mengcode Logo"
                />
                <p className="pl-4 text-2xl font-thin">
                    meng
                    <span className="font-bold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
                        code
                    </span>
                </p>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <FaLinkedin />
                <FaGithub />
                <FaInstagram />
                <FaFacebook />
                <FaDiscord />
            </div>
        </nav>
    );
}
