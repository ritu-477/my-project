import React from "react";

const CardsAnimations = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-50 to-gray-200">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-80 transform hover:scale-105 hover:rotate-2 hover:shadow-2xl transition-all duration-300">
                {/* Top Image */}
                <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-500">
                    <img
                        src="/assets/images/webp/hero-image.webp"
                        alt="women-image"
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 transform hover:translate-x-1 hover:scale-105 transition-all duration-300">
                        Unlock Creativity
                    </h2>
                    <p className="text-gray-600 mb-4 transform hover:translate-y-1 hover:scale-95 transition-all duration-300">
                        Dive into the world of innovation and design. Learn, create, and transform your ideas into reality.
                    </p>
                    <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                        Get Inspired
                    </button>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-3 right-3 bg-purple-500 text-white px-3 py-1 rounded-full text-sm shadow-lg transform hover:scale-125 transition-transform duration-300">
                    New
                </div>
            </div>
        </div>
    );
};

export default CardsAnimations;
