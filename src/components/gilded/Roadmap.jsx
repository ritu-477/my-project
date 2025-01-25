import React from 'react';
import { ROADMAP_DATA } from '../../utils/helper';

const Roadmap = () => {
    return (
        <div className="overflow-hidden">
            <div className="container md:pt-[92px] pb-[45px] lg:pb-[75px] relative">
                <h2 className="font-Josefin font-bold text-[48px] leading-[61.2px] text-white text-center">
                    <span className="bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] inline-block text-transparent bg-clip-text">
                        Road
                    </span>
                    map
                </h2>

                {/* Desktop Version */}
                <div className="hidden lg:block">
                    <hr className="max-w-[975px] w-full border-[2px] border-[#333333] mt-[128px]" />
                    {ROADMAP_DATA.map((obj, index) => (
                        <div
                            key={index}
                            className={`absolute top-[37%] ${index === 0
                                    ? 'left-0'
                                    : index === 1
                                        ? 'left-[36%]'
                                        : 'right-[23%]'
                                }`}
                        >
                            <div className="w-[65px] h-[62px] bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] rounded-[50%] drop-shadow-[0_0px_15px#1BABFE]"></div>
                        </div>
                    ))}

                    <div className="absolute right-[-25%] hidden 2xl:block">
                        <img src="/assets/images/svg/dashed-line.svg" alt="line" />
                    </div>

                    <div className="flex justify-between 2xl:row 2xl:justify-start">
                        {ROADMAP_DATA.map((obj, index) => (
                            <div
                                key={index}
                                className={`2xl:col-${index === 1
                                        ? '5 flex justify-center'
                                        : index === 2
                                            ? '3 flex justify-end'
                                            : '3'
                                    }`}
                            >
                                <div>
                                    <p className="font-Poppins font-semibold text-[18px] leading-[23.33px] text-white mt-[69px]">
                                        {obj.title}
                                    </p>
                                    <p className="font-Poppins font-semibold text-[36px] leading-[46.44px] text-white">
                                        {obj.qustion}
                                    </p>
                                    {obj.description.map((milestone, idx) => (
                                        <div
                                            key={idx}
                                            className="flex gap-[15px] items-center mt-[12px]"
                                        >
                                            <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                            <p className="font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc">
                                                {milestone}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Version */}
                <div className="mt-[36px] lg:hidden">
                    {ROADMAP_DATA.map((obj, index) => (
                        <div key={index} className="relative pl-[75px] group pt-[10px]">
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:sm:h-[246px] before:border-[1px] before:border-[#333333] before:bg-[#333333] sm:before:ml-[1rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-[32px] after:h-[32px] after:md:w-[53px] after:md:h-[53px] after:bg-[linear-gradient(90deg,#815CC8_0%,#1BABFE_100%)] after:rounded-full sm:after:ml-[1rem] after:-translate-x-1/2 after:translate-y-1.5 after:drop-shadow-[0_0px_15px#1BABFE]"></div>
                            <p className="font-Poppins font-semibold text-[15px] md:text-[18px] leading-[23.33px] text-white mt-[46px] md:mt-[69px]">
                                {obj.title}
                            </p>
                            <p className="font-Poppins font-semibold text-[26px] md:text-[36px] leading-[46.44px] text-white">
                                {obj.qustion}
                            </p>
                            {obj.description.map((milestone, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-[15px] items-center mt-[6px] md:mt-[12px]"
                                >
                                    <div className="w-[4px] h-[4px] bg-[#B2B2B2] rounded-[50%]"></div>
                                    <p className="font-Montserrat font-normal text-[18px] leading-[32px] text-[#B2B2B2] list-disc">
                                        {milestone}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
