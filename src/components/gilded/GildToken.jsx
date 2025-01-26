import React from 'react'
import { TOKEN_DATA } from '../../utils/helper'

const GildToken = () => {
  return (
      <div className="bg-token bg-cover bg-no-repeat bg-center lg:pt-[162px] lg:pb-[136px] md:pb-20 py-12" id="staking">
              <div className="container max-w-[1360px] mx-auto">
              <h2 className="font-Josefin font-bold md:text-5xl sm:text-4xl text-3xl !leading-custom-9xl text-white text-center lg:pb-[59px] pb-10">
                  <span className="text-gradient">$GILD </span>Token Info
              </h2>
                      <div className="flex gap-6 lg:flex-row flex-wrap justify-center">
                          {TOKEN_DATA.map((obj, index) => (
                              <div
                                  key={index}
                                  className="max-w-[312px] w-full hover:bg-gradient-to-t from-custom-blue to-custom-purple hover:shadow-[0px_8px_30px_0px_#1BABFE] rounded-[13px] h-full transition-all duration-300"
                              >
                                  <div className="max-w-[312px] w-full rounded-[13px] flex items-center flex-col justify-center bg-gradient-to-t from-custom-black to-custom-dark-black border border-border-gray h-[181px]">
                                      <img src={obj.img} alt={obj.alt} />
                                      <h4 className="text-white font-Josefin font-bold md:text-3xl text-2xl leading-7 pt-[9px]">
                                          {obj.title}
                                      </h4>
                                      {obj.subTitle && (
                                          <p className="font-Josefin text-lg font-normal leading-custom-2xl text-white text-nowrap pt-2">
                                              {obj.subTitle}
                                          </p>
                                      )}
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
    </div>
  )
}

export default GildToken