import aboutJpg from "../assets/about.jpg";

export default function About() {
    return (
        <>
            <section className="border-b border-neutral-900 pb-4">
                <h2 className="my-20 text-center text-4xl">
                    About <span className="text-neutral-500 ">Me</span>
                </h2>
                <div className="flex flex-wrap">
                    <div className="w-full lg:1/2 lg:p-8">
                        <div className="flex items-center justify-center">
                            <img
                                id="about"
                                className="w-80 rounded-2xl border-2 border-purple-300"
                                src={aboutJpg}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
