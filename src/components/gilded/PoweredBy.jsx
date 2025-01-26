import React from 'react';
import { POWERED_BY_DATA } from '../../utils/helper';

const PoweredBy = () => {
    return (
        <div className="lg:pt-[58px] lg:pb-[136px] md:py-20 py-12" id="nodes">
            <div className="container max-w-[1360px] mx-auto">
                <h2 className="font-Josefin font-bold md:text-5xl sm:text-4xl text-3xl !leading-custom-9xl text-white text-center  lg:pb-[68px] pb-10">
                    <span className="text-gradient">Powered </span>By:
                </h2>
                    <div className="flex gap-6 lg:flex-row flex-wrap justify-center">
                    {POWERED_BY_DATA.map((obj, index) => (
                            <div
                                key={index}
                            className="max-w-[312px] w-full hover:bg-gradient-to-l from-custom-blue to-custom-purple hover:shadow-[0px_8px_30px_0px_#1BABFE] rounded-3xl h-full">
                                <div className="max-w-[312px] w-full px-[19px] rounded-[24px] flex items-center justify-center flex-col bg-gradient-to-t from-custom-black to-custom-dark-black border border-border-gray h-[214.25px]">
                                    <img src={obj.img} alt={obj.alt} />
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    );
};

export default PoweredBy;
