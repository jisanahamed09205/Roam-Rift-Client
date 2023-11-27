import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
        <div>
            {/* <div className="bg-[url('https://live.staticflickr.com/65535/53312867597_fcc619c59b_z.jpg')] hero"> */}
            <div className="bg-[url('/banner-1.1.jpg')] hero">
            <div className="hero-overlay bg-opacity-70"></div>
                <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                        <div className="max-w-3xl text-center mx-auto">
                            <h1 className="block font-[500] text-gray-200 text-4xl sm:text-xl md:text-3xl lg:text-5xl font-Fell" style={{ color: '', fontWeight: '' }}>
                                <Typewriter
                                    words={['Unleash Extraordinary Journeys: Your Ultimate Tourist Guide Companion Awaits!']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </h1>
                        </div>
                        <div className="max-w-3xl text-center mx-auto">
                            <div className="">
                                <p
                                    data-aos="fade-left"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="500"
                                    className="text-lg text-gray-200 font-Playpen"><span className="text-2xl">Embark on a Journey of a Lifetime!</span> <br />
                                    Explore hidden gems, cultural wonders, and breathtaking landscapes with our comprehensive Tourist Guide. Whether you are a seasoned traveler or a first-time adventurer, find the ultimate insights, tips, and curated experiences to make your trips unforgettable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;