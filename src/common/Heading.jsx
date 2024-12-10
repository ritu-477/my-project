const Heading = ({ classStyle, spanText, text, spanTwo }) => {
    return (
        <h2 className={`${classStyle} xl:text-5xl xl:leading-custom-7xl font-normal md:text-4xl text-custom-base max-md:leading-8`}><span className="font-bold">{spanText}</span> {text} <span className="font-bold">{spanTwo}</span></h2>
    )
}

export default Heading