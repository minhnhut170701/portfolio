import React from 'react'
import background from "../../images/banner-contact.jpeg"
import ContactForm from './ContactForm'
import Media from './Media'
const Contact = () => {
  return (
    <div style={{backgroundImage: `url(${background})`}} 
    className='lg:h-[950px] w-full bg-no-repeat bg-cover mt-[100px]'>
        <h1 className='text-[8rem] text-white text-center'>Get in touch</h1>
        <ContactForm />
        <Media />
    </div>
  )
}

export default Contact