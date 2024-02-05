import { useEffect } from 'react';
// next image
import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  useEffect(() => {
    const cursorText = document.createElement('div');
    cursorText.className = 'hover-text';
    cursorText.textContent = 'Click'; // The word you want to display
    document.body.appendChild(cursorText);

    const handleMouseMove = (e) => {
      cursorText.style.display = 'block';
      cursorText.style.left = e.pageX + 10 + 'px';
      cursorText.style.top = e.pageY + 10 + 'px';
    };

    const customCursorTextDiv = document.getElementById('customCursorText');
    customCursorTextDiv.addEventListener('mousemove', handleMouseMove);

    const handleMouseLeave = () => {
      cursorText.style.display = 'none';
    };
    customCursorTextDiv.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup function
    return () => {
      customCursorTextDiv.removeEventListener('mousemove', handleMouseMove);
      customCursorTextDiv.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeChild(cursorText);
    };
  }, []);

  return (
    
    <div id="customCursorText" className='bg-primary/75 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Coding Is Best Done <br /> at{' '}
            <span className='text-accent'> 2 am</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nostrum quam reprehenderit vero, tenetur voluptatem nulla aut
            aspernatur dolores ut.
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        {/* <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
        > */}
          {/* <Avatar /> */}
        {/* </motion.div> */}
      </div>
    </div>
  );
};

export default Home;
