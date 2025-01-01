import React from 'react';
import { TABLE_LIST } from '../../utils/helper';

const TableTask = () => {
    return (
        <div className='flex items-center justify-center lg:py-20 py-12 bg-black'>
            <div className='container'>
                <div className='max-sm:overflow-auto w-full py-14 px-4 bg-dark-green rounded-xl max-w-[580.24px] mx-auto'>
                    <div className='min-w-[554.89px]'>
                        {TABLE_LIST.map((obj, i) => (
                            <div key={i} className={`flex gap-2 ${i === 0 ? "border-none" : "border-t max-w-[554.89px] w-full"}`}>
                                <div className={`${i === 0 ? "opacity-0" : ""} w-[130px] py-[18.8px] pr-12 pl-2`}>
                                    <p className="text-sm font-normal font-avantt text-white leading-4">{obj.service}</p>
                                </div>
                                <div className={`w-[94.79px] ms-[2px] bg-white text-center flex justify-center items-center py-[18.8px] ${i === 0 ? "rounded-t-lg" : i === 6 ? "rounded-b-lg" : ""}`}>
                                    <p className={`text-xs font-semibold font-avantt ${i === 6 ? "!font-normal !text-custom-sm !leading-custom-xs max-w-[33px]" : ""}`}>
                                        {obj.rift}
                                    </p>
                                </div>
                                <div className={`w-[94.79px] ms-[2px] bg-white text-center flex justify-center items-center py-[18.8px] mx-[-3px] ${i === 0 ? "rounded-t-lg" : i === 6 ? "rounded-b-lg" : ""}`}>
                                    <p className={`text-xs font-semibold font-avantt ${i === 6 ? "!font-normal !text-custom-sm !leading-custom-xs max-w-[32px]" : ""}`}>
                                        {obj.taxscouts}
                                    </p>
                                </div>
                                <div className={`w-[94.79px] ms-[2px] bg-white text-center flex justify-center items-center py-[18.8px] ${i === 0 ? "rounded-t-lg" : i === 6 ? "rounded-b-lg" : ""}`}>
                                    <p className={`text-xs font-semibold font-avantt ${i === 6 ? "!font-normal !text-custom-sm !leading-custom-xs max-w-[48px]" : ""}`}>
                                        {obj.coconut}
                                    </p>
                                </div>
                                <div className={`w-[94.79px] ms-[2px] text-center flex justify-center items-center bg-light-green py-[18.8px] ${i === 0 ? "rounded-t-lg" : i === 6 ? "rounded-b-lg" : ""}`}>
                                    <p className={`text-xs font-semibold font-avantt ${i === 6 ? "!font-normal !text-custom-sm !leading-custom-xs max-w-[64px]" : ""}`}>
                                        {obj.pie}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableTask;