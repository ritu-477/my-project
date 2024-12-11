import React from 'react'
import Heading from '../../common/Heading'
import Description from '../../common/Description'
import CustomButton from '../../common/CustomButton'
import { BENEFITS_DATA } from '../../utils/helper'

const SwitchingEnergy = () => {
  return (
    <div className='xl:py-[82px] lg:py-14 md:py-12 py-6'>
      <div className='container'>
        <div className='lg:flex-row flex flex-col md:gap-12 gap-8 lg:gap-16 xl:gap-[75px] max-lg:flex-col-reverse'>
          <div className='lg:w-[507px] w-full flex items-center max-lg:justify-center'>
                  <img src="/assets/images/webp/switching-energy-image.webp" className='max-w-[507px] w-full' alt="switching-energy" />
          </div>
          <div className='lg:w-[558px] w-full flex flex-col max-lg:justify-center max-lg:items-center'>
            <Heading classStyle={'lg:max-w-[409px] max-lg:text-center'} spanText={'Switching Energy'} text={'Made Simple'} />
            <Description classStyle={'lg:max-w-[558px] max-lg:text-center pt-4'} text={`Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills.`} />
            <p className='sm:text-2xl sm:leading-custom-4xl text-xl text-ink-blue lg:pt-[38px] md:pt-8 sm:pt-6 pt-4 max-lg:text-center'>Benefits of Comparing Energy Plans</p>
            <ul className='list-disc md:pt-7 pl-5 sm:pt-6 pt-4'>
              {BENEFITS_DATA.map((benefit, index) => (
                <li key={index} className='sm:text-base text-sm text-navy-blue font-normal pb-2'>
                  {benefit}
                </li>
              ))}
            </ul>
            <div className='lg:pt-[42px] md:pt-9 sm:pt-7 pt-6'>
              <CustomButton classStyle={'bg-sky-blue text-white'} text={'Compare With Us'} iconColor="white" />
            </div>
          </div>
         </div>
       </div>
    </div>
  )
}

export default SwitchingEnergy