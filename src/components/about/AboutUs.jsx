import React from 'react';
import Heading from '../../common/Heading';
import Description from '../../common/Description';
import { CARD_DATA } from '../../utils/helper';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="container">
        <div className="flex justify-between gap-4 max-lg:flex-wrap">
          {CARD_DATA.map((data, index) => (
            <NavLink to={`/about?${data.id}`} >
              <div
                key={index}
                className="border border-grayish-blue p-6 max-w-[400px] max-lg:max-w-[300px] mx-auto lg:mb-0 mb-4 cursor-pointer">
                <Heading classStyle={'text-center'} text={data.heading} />
                <Description
                  classStyle={'text-center pt-2 max-w-[400px] mx-auto'}
                  text={data.description} />
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
