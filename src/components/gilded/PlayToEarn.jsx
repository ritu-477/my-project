import React from "react";

const PlayToEarn = () => {
    return (
        <div className="lg:pt-[65px] lg:pb-[110px] pb-[48px] relative" id='presale'>
            <div className="absolute left-0 z-[-1] top-[37%] lg:block hidden">
                <img
                    src="/assets/images/webp/play-earn-ellipse-left.webp"
                    alt="ellipse-left"
                    className="w-[380px] h-[567px]"
                />
            </div>
            <div className="absolute right-0 z-[-1] top-[37%] lg:block hidden">
                <img
                    src="/assets/images/webp/play-earn-ellipse-right.webp"
                    alt="ellipse-right"
                    className="w-[380px] h-[567px]"
                />
            </div>
            <div className="container max-w-[1360px] mx-auto">
                <div className="flex justify-center mx-auto flex-col">
                    <h2 className="font-Josefin font-bold md:text-5xl sm:text-4xl text-3xl !leading-custom-9xl text-white text-center pb-4">
                        Play To <span className="text-gradient-blue">Earn</span>
                    </h2>
                    <p className="sm:text-xl text-base text-white font-Poppins font-normal !leading-custom-11xl text-center mx-auto opacity-70 max-w-[1024px]">
                        Gilded World will be the first game released by Gilded Games. It is
                        an MMORPG, browser-based game that is unlike any other. We have
                        taken inspiration from some of the most popular and successful
                        MMORPG and RPG games and have boiled it down to the best online
                        gameplay that people will actually want to play!
                    </p>
                </div>
                <div className="border-Earn md:mt-12 mt-5 max-w-[1320px] mx-auto relative after:[background:linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)border-box] after:absolute after:border-[2px] lg:after:border-[5px] after:border-transparent after:rounded-[13px] after:w-full after:inset-0 after:z-[2]">
                    <img
                        src="/assets/gif/gilded-worldgif.gif"
                        alt="gifimage"
                        className="w-full max-w-[1320px] lg:h-[561px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default PlayToEarn;
