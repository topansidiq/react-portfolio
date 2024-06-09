import { HERO_CONTENT } from "../constants";
import profilePicture from "../assets/topan-profil-removebg-preview.png";

export default function Hero() {
    return (
        <section className="border-b border-neutral-900 pb-4 lg:mb-3.5">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl font-thin tracking-light lg:mt-16 lg:text-8xl">
                            Topan Sidiq
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ">
                            Javascript Developer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter ">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img
                            className="w-80 rounded-full border-2 border-purple-300"
                            src={profilePicture}
                            alt="Topan Profile Picture"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
