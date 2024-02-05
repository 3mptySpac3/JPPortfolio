import React from 'react';
import Image from 'next/image'; 
const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        {/* Avatar/Profile Image */}
        <div 
        className=''>
        </div>

        <p className=" text-lg mt-24">Software Developer | Web Designer | UI/UX Designer</p>
      </div>

      {/* Introduction */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-4">
        <span>
         I&apos;m a passionate software developer with over 5 years of experience specializing in web development and design. I love creating digital experiences that are efficient, effective, and enjoyable for users. Outside of coding, I enjoy hiking, photography, and exploring the latest tech trends.
        </span>
        </p>
      </div>

      {/* Skills */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="mt-4 list-disc list-inside pb-2">
          <li>Proficient in JavaScript, React, and Next.js</li>
          <li>Experience with RESTful services and API integration</li>
          <li>Strong understanding of responsive web design</li>
          <li>Excellent problem-solving skills and attention to detail</li>
        </ul>
      </div>

    
      
    </div>
  );
};

export default AboutMe;
