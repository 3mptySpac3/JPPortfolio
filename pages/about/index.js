import React from 'react';
import { SiJavascript, SiNextdotjs } from 'react-icons/si'; 
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiCsharp, SiReact, SiTailwindcss, SiMongodb, SiFigma, SiFirebase, SiExpress } from 'react-icons/si';
import { IoPhonePortraitOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';




const AboutMe = () => {
  const skills = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#61DAFB' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'C#', icon: SiCsharp, color: '#239120' },
    // { name: 'React Native', icon: IoPhonePortraitOutline, color: '#61DAFB' }, 
    // { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'GitHub', icon: FaGithub, color: '#C0F8F8' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#C0F8F8' },

  ];

  const SkillIcon = ({ icon: Icon, name, color }) => (
    <div className="w-20 h-20 m-4 flex flex-col items-center justify-center group hover:translate-y-3 duration-1000">
      <Icon size="3em" color={color} />
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" >{name}</span>
    </div>
  );


  return (
    
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        {/* Avatar/Profile Image */}
        <div 
        className=''>
        </div>

        <motion.p 
        className=" text-lg mt-24 text-white"
        variants={fadeIn('down', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        >
          <span className='hover:text-accent '>
            Web Designer </span>| <span className='hover:text-accent'>Software Developer </span>| <span className='hover:text-accent'>UI/UX Designer</span>
          
        </motion.p>
      </div>

      {/* Introduction */}
      <div className="mt-8 ">
        <motion.h2 
        variants={fadeIn('down', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="text-2xl font-semibold text-accent ">
          About Me</motion.h2>
        <motion.p 
        className="mt-4"
        variants={fadeIn('up', 0.8)}
        initial='hidden'
        animate='show'
        exit='hidden'
        >
        <span 
        className='text-white'
        >
        I&apos;m a passionate software developer with a keen eye for design, I pride myself on being an <br />
        exuberantly fast learner. I am, at heart, a curious explorer of life, with a particular fondness <br />
        for crafting aesthetically appealing designs. To me, programming is equivilent to accidentally <br /> 
        falling in love and like Ceasar &mdash; <span className=' text-accent hover:text-black'>&quot;I came, I saw, I coded.&quot;</span>
        </span>
        </motion.p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap justify-center mt-4">
        {skills.map((skill) => (
          <SkillIcon key={skill.name} {...skill} className=''/>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
