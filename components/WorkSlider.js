// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Vita',
          path: '/CapstoneThumbnail.jpg',
          url: 'https://github.com/3mptySpac3/Vita-la-revolution.git'
        },
        {
          title: '30-Thirty',
          path: '/thumbnail3030.png',
          url: 'https://github.com/3mptySpac3/30-Thirty'
        },
        {
          title: 'J-Store',
          path: '/Jshop.png',
          url: 'https://github.com/3mptySpac3/JP-Store'
        },
        {
          title: 'Chess',
          path: '/mychess.png',
          url: 'https://github.com/3mptySpac3/ChessGame'
        },

      ],
    },
    {
      images: [
        {
        title: 'Dino Game',
        path: '/DinoGame.png',
        url: 'https://github.com/3mptySpac3/Dino'
        },
        {
          title: 'Jps Shop',
          path: '/v41.png',
          url: 'https://github.com/3mptySpac3/CSharp-Project-CPRG211'
        },
        {
          title: 'Godot Game 1',
          path: '/godot1.png',
          url: 'https://3mptyspac3.github.io/GodotGame1/'
        }
        {
          title: 'Capstone',
          path: '/Capstone1.jpg',
          url: 'https://www.figma.com/proto/ofp2312WjvSgK8VpW6jcpK/Software-analysis?type=design&node-id=159-5601&t=GWH9vHRzun0qBtUZ-1&scaling=scale-down&page-id=82%3A649&starting-point-node-id=159%3A5601&mode=design'
        },

      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';


// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div
                    className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                    key={index}
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      {image.url ? (
                    <a href={image.url} target="_blank" rel="noopener noreferrer">
                      <Image src={image.path} width={400} height={200} alt={image.title}  />
                    </a>
                  ) : (
                    // Placeholder with frosted effect
                    <div className="w-full h-full  backdrop-blur-sm flex items-center justify-center "> 
                    
                  <p className="text-lg text-white" style={{ textAlign: 'center' }}>
                    ¯\_(ツ)_/¯
                  </p>
                    
                    </div>
                    
                  )}
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#141414] to-[#0E0E0E] opacity-0 group-hover:opacity-60 transition-all duration-700  pointer-events-none'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-accent '>
                          {/* title part 1 */}
                          <div className='delay-100'>Click</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>
                            Me!
                          </div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

