import React from 'react';
import Heading from '../../common/Heading';
import Description from '../../common/Description';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { TESTIMONIALS_DATA } from '../../utils/helper';
import Icon from '../../utils/icons';

const OurTestimonials = () => {
  return (
    <div className="xl:py-[82px] lg:py-14 md:py-12 py-6">
      <div className="container lg:max-w-[1324px] mx-auto">
        <Heading classStyle={'text-center'} text={'Our'} spanTwo={'Testimonials'} />
        <Description
          classStyle={'mx-auto max-w-[490px] pt-4 text-center'}
          text={
            'Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum'
          }
        />
        <div className="max-w-[1140px] mx-auto xl:pt-[62px] lg:pt-14 sm:pt-12 pt-8 relative flex justify-center items-center">
          <button
            className="absolute group hidden hover:bg-deep-blue swiper-button-prev top-[54%] z-10 left-[-67px] size-10 rounded-full border-deep-blue border xl:flex justify-center items-center transition-all duration-500">
            <Icon className='group-hover:fill-white fill-deep-blue transition-all duration-500' iconName={'testimonialsLeftArrow'} />
          </button>
          <button
            className="absolute hidden group hover:bg-deep-blue swiper-button-next cursor-pointer top-[54%] z-10 right-[-67px] size-10 rounded-full border-deep-blue border xl:flex justify-center items-center transition-all duration-500">
            <Icon iconName={'testimonialsRightArrow'} className='group-hover:fill-white fill-deep-blue transition-all duration-500' />
          </button>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              el: '.custom-pagination',
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className} custom-bullet"></span>`,
            }}
            breakpoints={{
              576: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="our-slider"
          >
            {TESTIMONIALS_DATA.map(({ index, name, username, image, rating, description }) => (
              <SwiperSlide key={index}>
                <div className="max-w-[364px] p-4 sm:p-5 bg-white w-full border border-light-gray rounded-[4px] shadow-[0px_0px_13.9px_0px_#0000001A]">
                  <div className="flex gap-2">
                    <img className="size-[60px]" src={image} alt={`${name}-image`} />
                    <div className="flex flex-col">
                      <p className="sm:text-2xl sm:leading-9 font-normal text-lg">{name}</p>
                      <a className="text-base text-black opacity-50 font-normal" href="/">{username}</a>
                    </div>
                  </div>
                  <img className="sm:pt-6 pt-4" src={rating} alt="star" />
                  <Description
                    classStyle={'text-deep-blue max-w-[324px] pt-[18px]'}
                    text={description}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='mt-6 lg:mt-8 xl:hidden block'>
          <div className="custom-pagination justify-center flex"></div>
        </div>
      </div>
    </div>
  );
};

export default OurTestimonials;