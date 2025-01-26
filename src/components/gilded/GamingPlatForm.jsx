import React from 'react'

const GamingPlatForm = () => {
    return (
        <div className='bg-gaming-platform bg-no-repeat bg-cover bg-center pt-[229px] py-[228px] max-lg:py-[200px] max-md:py-[160px] max-sm:py-[100px]'>
            <div className='max-w-[980px] mx-auto relative container'>
                <h3 className='text-white lg:text-custom-8xl !leading-custom-10xl text-center lg:text-4xl md:text-3xl text-custom-md font-Josefin'>
                    <span className='relative'>
                        Gilded
                        <img
                            src="/assets/images/svg/future-vector-left.svg"
                            alt='Quotes-open'
                            className='absolute xl:left-[-97%] xl:top-[-70px] max-lg:size-6 max-lg:-left-6 max-lg:-top-2 max-xl:-left-20 max-xl:-top-12 max-xl:size-20'
                        />
                    </span>
                    Games is a new type of gaming platform, partially owned and operated
                    by its players. Earn Gild tokens by playing and use them to decide the
                    future of the <span className='relative'>
                        game!
                        <img
                            className='absolute bottom-[-55px] right-[-128px] max-lg:size-6 max-lg:-right-[25px] max-lg:-bottom-2 max-xl:-right-20 max-xl:-bottom-12 max-xl:size-20'
                            src="/assets/images/svg/future-vector-right.svg"
                            alt='Quotes-close'
                        />
                    </span>
                </h3>
            </div>
        </div>
    )
}

export default GamingPlatForm