import React from 'react'
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const USER_ID = 'lHs7Q9g1_dQU1V_Z_'
  const SERVICE_ID = 'service_21tgaog'
  const TEMPLATE_ID = 'template_ysu1ub9'
  const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
        });
      e.target.reset()
    };
  return (
    <div className='lg:w-[35%] h-auto mx-auto p-6' 
    style={{background: 'linear-gradient(-45deg,hsla(0,0%,100%,.137),hsla(0,0%,100%,.603))'}}>
       <p className='p-4 bg-blue-200 text-blue-700 border-l-4 border-blue-700'>Tell me anything! Or shoot me a message on Linkedin!</p>
        <form className='p-4' onSubmit={handleOnSubmit}>
            <label for="user_name" className='mt-16 pb-1' >Your name</label>
            <input type='text' id="name"  name='user_name' style={{boxShadow: '4px 4px 60px #fff3', backdropFilter: 'blur(6px)'}}
            className='w-full p-2 rounded-xl text-[#2b2b2b] bg-[#daebf2]  text-[16px] mt-2'  required/>
             <label for="user_email"  className='pt-2 pb-1'>Your email</label>
            <input type='email' id="name"  name='user_email' style={{boxShadow: '4px 4px 60px #fff3', backdropFilter: 'blur(6px)'}}
            className='w-full p-2 rounded-xl text-[#2b2b2b] bg-[#daebf2]  text-[16px] mt-2' required />
             <label for="user_subject"  className='pt-2 pb-1'>Your email subject</label>
            <input type='email' id="name" name='user_subject' style={{boxShadow: '4px 4px 60px #fff3', backdropFilter: 'blur(6px)'}}
            className='w-full p-2 rounded-xl text-[#2b2b2b] bg-[#daebf2]  text-[16px] mt-2' required />
             <label for="user_message"  className='pt-2 pb-1'>Your message</label>
            <input type='text' id="name" name='user_message' style={{boxShadow: '4px 4px 60px #fff3', backdropFilter: 'blur(6px)'}}
            className='w-full p-2 rounded-xl text-[#2b2b2b] bg-[#daebf2]  text-[16px] mt-2 pb-8' required />
            <button type='submit' className='text-center p-2 text-white bg-[#1453db] text-xl w-full mt-4'>Send</button>
        </form>
       
    </div>
  )
}

export default ContactForm