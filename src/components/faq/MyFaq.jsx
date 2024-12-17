import React, { useState } from 'react';
import Description from '../../common/Description';
import { FAQ_DATA } from '../../utils/helper';

const MyFaq = () => {
    const [value, setValue] = useState(0);

    const handleClick = (index) => {
        setValue(value === index ? null : index);
    };

    return (
        <div className="flex items-center justify-center mx-auto pt-24">
            <div className="container">
                <div>
                    {FAQ_DATA.map((item, index) => (
                        <div
                            key={index}
                            className="lg:max-w-[552px] mx-auto border-b border-gray w-full transition-all duration-1000"
                        >
                            <button
                                onClick={() => handleClick(index)}
                                className="w-full flex justify-between items-center font-medium text-blue text-base sm:text-lg sm:py-4 py-3 transition-all duration-500"
                            >
                                <span>{item.heading}</span>
                                <span
                  className={`transform transition-transform duration-300 ease-in-out ${value === index ? 'rotate-180' : 'rotate-0'}`}
                >
                  {value === index ? '-' : '+'}
                </span>
                            </button>
                            <div
                                className={`transition-all pb-2 duration-1000 ease-in-out sm:overflow-hidden overflow-auto ${value === index
                                        ? 'max-h-[200px]'
                                        : 'max-h-0 opacity-0'}`} >
                                <Description text={item.description} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyFaq;
