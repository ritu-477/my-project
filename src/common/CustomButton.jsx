import React from "react";
import Icon from "../utils/Icons";

const CustomButton = ({ text, classStyle, iconColor }) => {
    return (
        <button
            className={`font-bold text-base leading-custom-base font-helvetica items-center rounded-tr-[50px] rounded-br-[50px] rounded-bl-[40px] py-3 sm:px-5 px-4 flex gap-[3px] duration-300 ease-in-out hover:bg-sky-700 ${classStyle}`}>
            {text}
            <Icon iconName="upperArrow" color={iconColor} />
        </button>
    );
};

export default CustomButton;