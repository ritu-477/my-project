import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Heading from '../../common/Heading';
import { SIMPLE_STEPS_DATA } from '../../utils/helper';

const SimpleSteps = () => {
  return (
    <div className="xl:py-20 lg:py-14 md:py-12 py-6">
      <div className="container">
        <Heading classStyle={'text-center'} text={'Simple Steps to'} spanTwo={'Switch'} />
        <p className="text-center mx-auto lg:max-w-[610px] text-dark-gray opacity-90 pt-4">
          Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto max-xl:px-4 lg:pt-[58px] sm:pt-12 pt-8">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {SIMPLE_STEPS_DATA.map((obj, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden cursor-pointer mb-12">
                <img
                  src={obj.image}
                  alt={obj.alt}
                  className="h-[661px] object-cover max-lg:h-[500px] max-md:h-96 max-sm:h-[340px] w-full"/>
                <div className="absolute flex items-end justify-center bg-light-blue h-full w-full bottom-0 group-hover:bottom-full transition-all duration-500">
                  <p className="vertical-text lg:pt-8 pt-3 lg:text-custom-xl sm:text-2xl text-lg leading-7 lg:leading-custom-5xl text-deep-blue">
                    <span>{index + 1}</span>. {obj.title}
                  </p>
                </div>
                <div className="absolute -bottom-full transition-all w-full duration-500 bg-ink-blue group-hover:bottom-0">
                  <div className="lg:ps-[42px] pr-8 py-8 md:p-6 p-4">
                    <h4 className="lg:pb-[14px] pb-2 lg:text-custom-xl text-2xl lg:leading-custom-5xl leading-7 max-md:leading-6 text-white">
                      {index + 1}. {obj.title}
                    </h4>
                    <p className="sm:text-base text-sm sm:leading-custom-3xl max-w-[286px] text-white opacity-90">
                      {obj.data}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimpleSteps;
