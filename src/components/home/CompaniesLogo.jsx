import React from 'react'
import { LOGO_LIST } from '../../utils/helper'

const CompaniesLogo = () => {
  return (
    <div className='md:pt-[54px] pb-6 lg:pb-14 md:pb-12 xl:pb-20 pt-12'>
      <div className='xl:container max-xl:px-3'>
        <h3 className='xl:text-custom-2xl xl:leading-custom-6xl lg:max-w-[496px] xl:max-w-[548px] w-full md:text-3xl text-2xl lg:text-start text-center text-ink-blue max-xl:px-2'>
          More Than <span className='text-sky-blue'>80,000</span>+ Companies Trust Bill Central
        </h3>
        <div className='max-w-[1129px] flex lg:gap-[51px] sm:gap-8 gap-5 mx-auto xl:pt-16 lg:pt-14 sm:pt-12 pt-8 max-xl:pb-2 max-xl:overflow-auto'>
          {LOGO_LIST.map((obj, index) => (
            <img
              key={index}
              src={obj.src}
              alt={obj.alt}
              style={{ maxWidth: obj.maxWidth }} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompaniesLogo