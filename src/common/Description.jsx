const Description = ({ text, classStyle }) => {
    return (
        <p className={`sm:text-base text-sm font-normal font-helvetica ${classStyle}`}>{text}</p>
    )
}

export default Description