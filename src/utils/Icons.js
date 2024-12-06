const Icon = ({ iconName, className, color = "none" }) => {
    const IconList = {
        upperArrow: (
            <svg
                width="24"height="24"viewBox="0 0 24 24"fill="none"
                xmlns="http://www.w3.org/2000/svg"><path d="M6 19L19 6M19 6V18.48M19 6H6.52" stroke={color} strokeWidth="1.93338"strokeLinecap="round"strokeLinejoin="round"/>
            </svg>
        ),
    };

    return (
        <span className={`flex ${className}`}>
            {iconName && IconList[iconName]}
        </span>
    );
};

export default Icon;
