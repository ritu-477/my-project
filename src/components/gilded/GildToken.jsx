import React from 'react'
import { TOKEN_DATA } from '../../utils/helper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination } from 'swiper/modules';

const GildToken = () => {
  return (
      <div className="bg-img4 lg:pt-[130px] lg:pb-[136px] md:pb-[80px] pt-[48px] pb-[48px]"id="staking">
              <div className="container max-w-[1360px] px-3 mx-auto">
                  <h2 className="sm:text-[48px] sm:leading-[61px] text-[28px] leading-[39px] text-white font-Josefin font-bold text-center pb-[59px]">
                      <span className="text-gradient">$GILD</span> Token Info
                  </h2>
                  <div className="hidden xl:block">
                      <div className="flex gap-[24px]">
                          {TOKEN_DATA.map((obj, index) => (
                              <div
                                  key={index}
                                  className="max-w-[312px] w-full hover:bg-gradient-to-t from-[#1babfe] to-[#815cc8] hover:shadow-[0px_8px_30px_0px_#1BABFE] rounded-[13px] h-full"
                              >
                                  <div className="token-box max-w-[312px] w-full rounded-[13px] flex items-center flex-col pt-[24px] pb-[17px] bg-gradient-to-t from-[#c4c4c400] to-[#FFFFFF1A] border border-[#FFFFFF33] h-[181px]">
                                      <img src={obj.img} alt={obj.alt} />
                                      <h4 className="text-white font-Josefin font-bold md:text-[30px] md:leading-[38.25px] text-[20px] leading-[28px] pt-[9px]">
                                          {obj.heading}
                                      </h4>
                                      {obj.subheading && (
                                          <p className="font-Josefin text-[18px] font-normal leading-[22.95px] text-white text-nowrap pt-[4px]">
                                              {obj.subheading}
                                          </p>
                                      )}
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              <div className="xl:hidden block">
                  <Swiper
                      modules={[Pagination]}
                      spaceBetween={20}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      breakpoints={{
                          640: {
                              slidesPerView: 1,
                          },
                          768: {
                              slidesPerView: 2,
                          },
                          1024: {
                              slidesPerView: 3,
                          },
                      }}
                  >
                      {TOKEN_DATA.map((obj, index) => (
                          <SwiperSlide key={index}>
                              <div className="max-w-[312px] w-full hover:bg-gradient-to-t from-[#1babfe] to-[#815cc8] hover:shadow-[0px_8px_30px_0px_#1BABFE] rounded-[13px] h-full mb-6">
                                  <div className="token-box max-w-[312px] w-full rounded-[13px] flex items-center flex-col pt-[24px] pb-[17px] bg-gradient-to-t from-[#c4c4c400] to-[#FFFFFF1A] border border-[#FFFFFF33] h-[181px]">
                                      <img src={obj.img} alt={obj.alt} />
                                      <h4 className="text-white font-Josefin font-bold md:text-[30px] md:leading-[38.25px] text-[20px] leading-[28px] pt-[9px]">
                                          {obj.heading}
                                      </h4>
                                      {obj.subheading && (
                                          <p className="font-Josefin text-[18px] font-normal leading-[22.95px] text-white pt-[4px]">
                                              {obj.subheading}
                                          </p>
                                      )}
                                  </div>
                              </div>
                          </SwiperSlide>
                      ))}
                  </Swiper>
              </div>
              </div>
    </div>
  )
}

export default GildToken