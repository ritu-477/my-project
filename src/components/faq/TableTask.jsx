import React from 'react';
import { TABLE_LIST } from '../../utils/helper';

const TableTask = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='py-14 px-4 rounded-xl max-w-[90vw] bg-dark-green'>
                <div className='overflow-x-auto w-full'>
                    <div className='min-w-[580px]'>
                        {TABLE_LIST.map((obj, i) => (
                            <div key={i} className={`flex gap-2 ${i === 0 ? "border-none" : "border-t"}`}>
                                <div className={`${i === 0 ? "opacity-0" : ""} w-[140px] py-[18.8px] pr-12 pl-2`}>
                                    <p className="text-sm font-normal font-avantt text-white leading-4">{obj.service}</p>
                                </div>
                                <div className={`w-24 bg-white text-center flex justify-center items-center py-[18.8px] ${i === 0 ? "rounded-t-lg" : i === 6 ? "rounded-b-lg" : ""}`}>
                                    <p className={`text-xs font-semibold font-avantt ${i === 6 ? "!font-normal !text-custom-sm !leading-custom-xs max-w-[33px]" : ""}`}>
                                        {obj.rift}
                                    </p>
                                </div>
                                <div className={`w-24 bg-white text-center flex justify-center items-center py-[18.8px] mx-[-3px] ${i === 0 ? "rounded-t-lg" : i === 6 ? "rounded-b-lg" : ""}`}>
                                    <p className={`text-xs font-semibold font-avantt ${i === 6 ? "!font-normal !text-custom-sm !leading-custom-xs max-w-[33px]" : ""}`}>
                                        {obj.taxscouts}
                                    </p>
                                </div>
                                <div className={`w-24 bg-white text-center flex justify-center items-center py-[18.8px] ${i === 0 ? "rounded-t-lg" : i === 6 ? "rounded-b-lg" : ""}`}>
                                    <p className={`text-xs font-semibold font-avantt ${i === 6 ? "!font-normal !text-custom-sm !leading-custom-xs max-w-[42px]" : ""}`}>
                                        {obj.coconut}
                                    </p>
                                </div>
                                <div className={`w-24 text-center flex justify-center items-center bg-light-green py-[18.8px] ${i === 0 ? "rounded-t-lg" : i === 6 ? "rounded-b-lg" : ""}`}>
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
