import React from "react";
import { ROADMAP_DATA } from '../../utils/helper';

const Roadmap = () => {
   
    return (
        <div
            className="lg:pt-[92px] lg:pb-[75px] md:py-[60px] py-12 relative max-w-[1920px] mx-auto">
            <div className="absolute right-0 top-[43.5%] xl:block hidden">
                <img
                    src="/assets/images/svg/dashed-line.svg"
                    alt="timeline-line"
                    className="2xl:max-w-[654px] w-full max-w-[300px]"
                />
            </div>
            <div className="container max-w-[1360px] mx-auto relative">
                <h2 className="font-Josefin font-bold md:text-5xl sm:text-4xl text-3xl !leading-custom-9xl text-white text-center xl:pb-[97px] pb-10">
                    <span className="text-gradient">Road</span>map
                </h2>
                <div className="lg:flex relative justify-between after:absolute after:content-[''] lg:after:left-0 lg:after:right-0 lg:after:top-[34px] after:z-[-1] after:bg-custom-gray lg:after:w-[83%] after:w-[1px] lg:after:h-[1px] after:h-[70%] after:top-0 sm:after:left-[33px] after:left-[25px] max-lg:max-w-full max-xl:max-w-[980px] xl:max-w-[1224px]">
                    {ROADMAP_DATA.map((obj, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:ps-0 sm:ps-[90px] ps-[70px] ${index > 0 ? "lg:mt-0 mt-[30px]" : ""} lg:pt-[95px] relative`}>
                            <div
                                className={`relative ${index === 0 ? 'xl:ps-[18px] lg:after:w-[65px]' : ''} after:absolute after:content-[''] after:bg-gradient-to-r from-custom-purple to-custom-blue after:shadow-[0px_0px_63.22px_0px_#1BABFE] lg:after:top-[-95px] lg:after:left-0 after:top-0 after:left-[-67px] sm:after:-left-20 lg:after:w-[65px] after:w-[45px] lg:after:h-[62px] after:h-11 after:rounded-[50%]`}>                                <p className="font-Poppins font-semibold sm:text-lg text-base !sm:leading-custom-2xl leading-5 text-white">
                                    {obj.title}
                                </p>
                                <p className="font-Poppins font-semibold sm:text-4xl text-2xl text-white !leading-custom-13xl">
                                    {obj.question}
                                </p>
                                {obj.description.map((detail, i) => (
                                    <div key={i} className="flex items-center sm:pt-[12px] pt-[10px]">
                                        <div className="size-1 rounded-[50%] bg-custom-gray ms-1"></div>
                                        <p className="font-Montserrat font-normal sm:text-lg text-base !leading-custom-12xl text-white opacity-[70%] ps-2">
                                            {detail}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roadmap;

