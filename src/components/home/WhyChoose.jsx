import React from 'react'
import Heading from '../../common/Heading'
import Description from '../../common/Description'
import Icon from '../../utils/icons'
import { WHY_CHOOSE_CARD_DATA } from '../../utils/helper'

const WhyChoose = () => {
  return (
    <div className="xl:py-20 lg:py-14 md:py-12 py-6">
      <div className="container">
        <Heading classStyle={'text-center'} text={'Why Choose Us for'} spanTwo={'Utilities'} />
        <Description
          classStyle={'mx-auto max-w-[620px] pt-4 text-center'}
          text={`This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition.`}
        />
        <div className="lg:pt-[58px] md:pt-12 gap-6 sm:pt-10 pt-8 lg:flex-row flex-col flex w-full">
          <div className="lg:w-[424px] w-full">
            <div className="lg:max-w-[424px] w-full bg-ink-blue xl:p-10 sm:p-6 p-5 rounded-[4px] sm:flex max-lg:gap-5 lg:flex-col max-lg:justify-center max-sm:items-center">
              <img
                className="sm:max-w-[277px] max-w-[200px] w-full max-sm:mx-auto"
                src="/assets/images/webp/thumb-image.webp"
                alt="thumb-image"
              />
              <div className="flex flex-col max-lg:justify-center max-sm:items-center lg:pt-[30px] max-sm:pt-5">
                <p className="md:text-2xl md:leading-custom-4xl text-xl leading-custom-2xl pb-3 text-white font-normal">
                  Tailored Recommendations
                </p>
                <Description
                  classStyle={'sm:max-w-[344px] sm:text-start text-center text-white opacity-90'}
                  text={
                    'Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.'
                  }
                />
                <div className="mt-[22px]">
                  <button className="sm:py-3 sm:px-6 py-2 px-4 bg-white rounded-[446px]">
                    <Icon iconName="utilitiesArrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-[692px] w-full">
            <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-6">
              {WHY_CHOOSE_CARD_DATA.map(({ index, icon, title, description }) => (
                <div
                  key={index}
                  className="md:p-6 p-4 rounded-[4px] bg-white border border-grayish-blue shadow-[0px_0px_13.9px_0px_#0000001A] sm:h-[286px]">
                  <Icon className={'sm:size-[60px] size-10'} iconName={icon} />
                  <div className="flex flex-col">
                    <p className="md:text-2xl lg:max-w-[286px] sm:leading-custom-4xl text-xl leading-custom-2xl pb-2 text-jet-black font-normal pt-[18px]">
                      {title}
                    </p>
                    <Description classStyle={'lg:max-w-[286px]'} text={description} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChoose