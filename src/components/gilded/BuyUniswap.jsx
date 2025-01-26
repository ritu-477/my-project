import React from 'react';
import { BUY_NOW_DATA } from '../../utils/helper';

const BuyUniswap = () => {
    return (
        <div className="xl:bg-buy-uniswap bg-buy-uniswap-mobile bg-cover bg-center bg-no-repeat xl:pt-[300px] xl:pb-[220px] lg:pb-[133px] lg:pt-[150px] py-12" id="uniswap">
            <div className="max-w-[1360px] mx-auto container">
                <div className="flex flex-wrap lg:flex-row mx-[-12px]">
                    <div className="lg:w-[50%] w-full px-3 flex lg:justify-start justify-center items-center mb-10 lg:mb-0">
                        <div className="flex lg:justify-start lg:items-start justify-center items-center flex-col">
                            <h2 className="font-Josefin font-bold md:text-5xl sm:text-4xl text-3xl !leading-custom-9xl text-white text-center pb-[21px]">
                                Buy On <span className="text-gradient-blue">Uniswap</span>
                            </h2>
                            <div className="flex flex-col pb-[30px]">
                                {BUY_NOW_DATA.map((obj, index) => (
                                    <div key={index} className="flex items-center gap-3 pb-[11px]">
                                        <div className="size-1 rounded-[50%] bg-white ms-2"></div>
                                        <p className="text-xl font-Josefin leading-custom-3xl font-normal text-white">{obj.title}</p>
                                    </div>
                                ))}
                            </div>
                            <button className="font-normal text-2xl leading-6 text-white font-Josefin rounded-[79px] py-[14.69px] px-5 shadow-custom bg-gradient-to-r from-custom-purple to-custom-blue hover:to-custom-purple hover:from-custom-blue shadow-[0px_8px_30px_0px_#1BABFE] transition ease-in-out duration-300 flex gap-[10px] items-center">
                                <a href="/">
                                    <img className='max-w-[23.2px]' src="/assets/images/svg/buy-now-vector.svg" alt="horse" />
                                </a>
                                Buy Now
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-[50%] w-full px-3 flex justify-center">
                        <div className="flex justify-center items-center">
                            <img src="/assets/images/webp/locker-image.webp" alt="locker" width={341} height={365} className="w-full max-w-[341px] object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyUniswap;
