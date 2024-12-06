import CustomButton from "./CustomButton";

const Input = ({ text, type = "text", classStyle }) => {
    return (
            <input
                className={`font-normal sm:text-base sm:leading-custom-sm text-sm leading-4 font-helvetica opacity-50 outline-none placeholder:text-deep-blue text-deep-blue ${classStyle}`}
                type={type}
                placeholder={text}
            />
    );
};

export default Input;