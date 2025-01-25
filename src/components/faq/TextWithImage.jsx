import React from "react";

const TextWithImage = () => {
    return (
        <div className="flex justify-center items-center py-20 bg-gray">
            <h1 className="text-7xl font-extrabold bg-clip-text text-transparent bg-center bg-cover animate-pulse"
                style={{
                    backgroundImage: "url('/assets/images/webp/india-flag.jpg')"
                }}>
                INDIA
            </h1>
        </div>
    );
};

export default TextWithImage;
