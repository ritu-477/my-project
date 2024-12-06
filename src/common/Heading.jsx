const Heading = ({ heading, textBold,classStyle}) => {
    return (
        <h2 className={`${classStyle}`}>
            {heading}
            <span className='font-bold'>{textBold}</span>
        </h2>
    )
}

export default Heading