import React from 'react'
import Header from './Header'
import Description from '../common/Description'
import CustomInput from '../common/CustomInput'
import CustomButton from '../common/CustomButton'

const Hero = () => {   
  return (
    <div className='bg-hero bg-cover lg:bg-[length:100%_100%] bg-center bg-no-repeat lg:h-[810px] md:pb-20 sm:pb-16 pb-8'>
      <Header />
      <div className='container lg:pt-[109px] md:pt-20 sm:pt-16 pt-8'>
        <div className='flex lg:flex-row gap-4 flex-col w-full'>
          <div className='flex flex-col lg:w-[612px] lg:pt-3 w-full max-lg:justify-center max-lg:items-center'>
            <h1 className='font-helvetica sm:text-5xl text-3xl xl:text-custom-6xl xl:leading-custom-6xl text-white lg:text-start text-center lg:max-w-[612px]'>Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span> Plans</h1>
            <Description classStyle='text-white lg:max-w-[506px] w-full max-lg:text-center pt-4 opacity-90 pb-6 lg:pb-[42px]' text={'Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.'} />
              <form className='rounded-tr-[100px] rounded-br-[100px] rounded-bl-[70px] bg-white flex justify-between max-w-[476px] w-full py-2 ps-4 sm:ps-[21pz] pr-2 border border-gray' action="">
                <CustomInput classStyle={'font-normal font-helvetica outline-none !placeholder:text-deep-blue text-deep-blue'} text={'Start typing your address'} type='text' />
                <CustomButton classStyle="bg-sky-blue text-white ms-2" text="Compare" iconColor="white" />
              </form>
          </div>
          <div className='relative flex max-lg:justify-center mt-5 lg:mt-0'>
            <img className='absolute right-[-72px] top-[-58px] dots pointer-events-none xl:max-w-[200px] xl:block hidden' src="/assets/images/webp/dots-ellipse.webp" alt="dots-ellipse" />
            <img className='xl:max-w-[558px] max-w-[500px] lg:h-[760px] pointer-events-none max-lg:w-full relative z-[1]' src="/assets/images/webp/hero-image.webp" alt="hero-image" />
          </div>
          </div>
      </div>
    </div>
  )
}

export default Hero