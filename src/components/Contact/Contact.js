import React from 'react'
import background from "../../images/banner-contact.jpeg"
import ContactForm from './ContactForm'
import Media from './Media'
const Contact = () => {
  return (
    <div style={{backgroundImage: `url(${background})`}} 
    className='lg:h-[950px] w-full bg-no-repeat bg-cover mt-[100px]'>
        <h1 className='lg:text-[8rem] md:text-[6rem] sm:text-[4rem] text-[3rem]  text-white text-center'>Get in touch</h1>
        <ContactForm />
        <Media />
    </div>
  )
}

export default Contact