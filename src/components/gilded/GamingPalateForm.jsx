import React from 'react'

const GamingPlatform = () => {
    return (
        <div className='bg-gaming-platform bg-no-repeat bg-cover bg-center'>
            <div className='max-w-[940px] mx-auto relative pt-[229px] py-[228px] max-lg:py-[200px] max-md:py-[160px]'>
                <h3 className='text-white text-[40px] leading-[62.4px] text-center max-lg:text-4xl max-md:text-3xl max-lg:leading-[50px] max-md:leading-[40px] '>
                    <span className='relative'>
                        Gilded
                        <img
                            src="/assets/images/svg/future-vector-left.svg"
                            alt='Quotes-open'
                            className='absolute left-[-80%] top-[-70px] max-lg:left-0 max-lg:top-[-100px] max-md:max-w-[80px]'
                        />
                    </span>
                    Games is a new type of gaming platform, partially owned and operated
                    by its players. Earn Gild tokens by playing and use them to decide the
                    future of the
                    <span className='relative'>
                        game!
                        <img
                            className='absolute bottom-[-70px] right-[-110px] max-lg:bottom-[-100px] max-lg:right-0 max-md:max-w-[80px]'
                            src="/assets/images/svg/future-vector-right.svg"
                            alt='Quotes-close'
                        />
                    </span>
                </h3>
            </div>
        </div>
    )
}

export default GamingPlatform