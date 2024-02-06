// links
import Link from 'next/link';



// icons
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { GoDash } from "react-icons/go";



const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
            <Link href={'https://www.linkedin.com/in/jean-pierre-n/'} target='_blank' className='hover:text-accent transition-all duration-600 animate-pulse'>
      <FaLinkedin />
      </Link>
      <Link href={'https://github.com/3mptySpac3'} target='_blank' className='hover:text-accent transition-all duration-400 animate-bounce'>
      <FaGithub />
      </Link>
      <div className='text-black'>
      <GoDash />
      </div>
      

    </div>
  );
};

export default Socials;
