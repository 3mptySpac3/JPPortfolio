
//component
import Circles from "../../components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

// next
import Link from "next/link";

// react
import { useState } from "react";





const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Update form data in state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

    // Generate mailto link with form data
    const handleSubmit = (e) => {
      e.preventDefault();
      const mailtoLink = `mailto:jp@jean-pierre.dev?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`)}`;
      window.location.href = mailtoLink;
    };

  return (
  <div className="h-full bg-primary/30">
    <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
      {/*Text and form*/}
      <div className="flex flex-col w-full max-w-[700px]" >
        {/*Text*/}
        <Link href='mailto:jp@jean-pierre.dev'>
        <motion.h2 
        variants={fadeIn('up',0.2)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'
        className="h2 text-center mb-8">
        Let&apos;s <span className="text-accent hover:text-black hover:cursor-pointer">connect.</span>
        </motion.h2>
        </Link>
        {/*Form*/}
        <motion.form 
        variants={fadeIn('up',0.4)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'
        className="flex-1 flex flex-col gap-6 w-full mx-auto">
          <div className="flex gap-x-6 w-full">
            <input maxLength='30' type="text" placeholder="name" className="input" onChange={handleChange}/>
            <input maxLength='30'type="text" placeholder="email" className="input" onChange={handleChange}/>
          </div>
          <input maxLength='30' type="text" placeholder="subject" className="input" onChange={handleChange}/>
          <textarea maxLength='250' placeholder="message" className="textarea" onChange={handleChange}></textarea>
          <Link href='mailto:jeanpierrendeforgwang@gmail.com'>
          <button onClick={handleSubmit} className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex
          items-center justify-center overflow-hidden hover:border-accent group">
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Let&apos;s talk</span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 
            translate-all duration-300 absolute text-[22px]" />
          </button>
          </Link>
        </motion.form>
      </div>
    </div>
  </div>
  );
};

export default Contact;
