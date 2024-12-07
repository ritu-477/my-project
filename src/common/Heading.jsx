const Heading = ({ heading, customText,classStyle}) => {
    return (
        <h2 className={`${classStyle}`}>
            {heading}
            <span className='font-bold'>{customText}</span>
        </h2>
    )
}

export default Heading