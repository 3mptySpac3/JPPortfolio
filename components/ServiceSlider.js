// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxArrowTopRight,
} from 'react-icons/rx';

import { RiJavascriptLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";






// import required modules
import { FreeMode, Pagination } from 'swiper';

// service data
export const serviceData = [
  {
    icon: <RiJavascriptLine /> ,
    title: 'Javascript',
    description: 'Turning coffee and cream into code, one line at a time.',
  },
  {
    icon: <FaReact />,
    title: 'React',
    description: 'Crafting reactive and dynamic web experiences with ease.',
  },
  {
    icon: <IoPhonePortraitOutline />,
    title: 'React Native',
    description: 'Bridging the gap between desktop and mobile, seamlessly.',
  },
  {
    icon: <FaFigma />,
    title: 'UI/UX Design',
    description: 'Designing intuitive interfaces that stand out.',
  },
  {
    icon: <CiChat1 />,
    title: 'Communication',
    description: 'Creating successful projects through clear communication.',
  },
];

const ServiceSlider = () => {
  return (
  <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  }}
  freeMode={true}
  pagination={{ clickable: true }}
  modules={[FreeMode, Pagination]}
  classname='h-[240px sm:h-340px]'
  >  
     {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(107,40,40,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer 
            hover:bg-[rgba(122,58,58,0.17)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
