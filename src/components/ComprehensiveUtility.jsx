import React, { useRef, useState } from 'react';
import Heading from '../common/Heading'
import { ACCORDION_DATA } from '../utils/helper'
import Icon from '../utils/icons';

const ComprehensiveUtility = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='xl:py-[82px] lg:py-14 md:py-12 py-6'>
      <div className='container max-w-[1201px]'>
        <div className='lg:flex-row flex flex-col md:gap-12 gap-8 lg:gap-16 xl:gap-[73px]'>
          <div className='lg:w-[558px] w-full flex flex-col max-lg:justify-center max-lg:items-center'>
            <Heading classStyle={'lg:max-w-[456px] max-lg:text-center'} text={'Comprehensive Utility'} spanTwo={'Comparisons'} />
            <div className="lg:mt-[46px] sm:mt-10 mt-8 lg:h-[462px]">
              {ACCORDION_DATA.map((item, index) => (
                <div
                  key={index}
                  className="bg-white max-w-[558px] !border-border-gray rounded-[4px] border mb-4 transition-all duration-500"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between text-left text-deep-blue text-base sm:text-lg xl:text-2xl xl:leading-custom-4xl sm:p-[14px] p-3 font-normal !shadow-3xl"
                  >
                    <div className='flex sm:gap-6 gap-4'>
                      <Icon className={'lg:size-16 md:size-14 size-12'} iconName={item.icon} />
                      <div className='flex justify-between'>
                        <div className='flex flex-col justify-center'>
                          <span>{item.title}</span>
                          < div
                            ref={(el) => (contentRefs.current[index] = el)}
                            style={{
                              height: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                            }}
                            className="overflow-hidden transition-all duration-500 ease-in-out"
                          >
                            <div className="sm:pt-2 pt-1 text-deep-blue text-sm sm:text-base font-normal sm:leading-custom-3xl">
                              {item.content}
                            </div>
                          </div >
                       </div>
                        <svg className={`transform transition-transform duration-500 w-[16px] h-[10px] ${activeIndex === index ? 'rotate-0' : 'rotate-180'
                          }`} width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.330173 9.15584C0.541647 9.37621 0.828428 9.5 1.12745 9.5C1.42648 9.5 1.71326 9.37621 1.92473 9.15584L7.50681 3.33731L13.0889 9.15584C13.3016 9.36996 13.5864 9.48844 13.8821 9.48576C14.1778 9.48308 14.4606 9.35946 14.6697 9.14152C14.8788 8.92358 14.9974 8.62876 15 8.32056C15.0025 8.01236 14.8889 7.71543 14.6834 7.49374L8.30409 0.844159C8.09261 0.623794 7.80583 0.5 7.50681 0.5C7.20778 0.5 6.921 0.623794 6.70953 0.844159L0.330173 7.49374C0.118763 7.71417 -6.49944e-08 8.0131 -5.137e-08 8.32479C-3.77456e-08 8.63648 0.118763 8.93541 0.330173 9.15584Z" fill="#00171F" />
                        </svg>
                      </div>
                    </div>
                  
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className='xl:w-[530px] lg:max-w-[480px] w-full flex items-center justify-center'>
               <img className='max-w-[530px] w-full' src="/assets/images/webp/interior-designer.webp" alt="designer-image" />
          </div>
           </div>
      </div>

    </div>
  )
}

export default ComprehensiveUtility

 