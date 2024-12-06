const Description = ({ text, classStyle }) => {
    return (
        <p className={`text-base font-normal font-helvetica ${classStyle}`}>{text}</p>
    )
}

export default Description