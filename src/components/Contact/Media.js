import React from 'react'
import {FaFacebookF,FaGithub,FaLinkedin} from "react-icons/fa"
import "./styles.css"
const Media = () => {
  return (
    <div className='w-[30%] mx-auto  mt-20 pb-5'>
        <section className='space-x-10 text-center flex items-center justify-center'>
            <a href='https://github.com/minhnhut170701' target='_blank' rel="noreferrer"
            className='p-4 bg-white rounded-full text-xl relative hover:bg-black hover:text-white pop'>
                <FaGithub />
                <span className='absolute -top-14 -left-2 text-[16px] p-2 bg-black text-white hidden-pop'>Github</span>
            </a>
            <a href='https://www.facebook.com/key.boysin/' target='_blank' rel="noreferrer" 
            className='p-4 bg-white rounded-full text-xl relative hover:bg-[#3b5999] hover:text-white pop'>
                <FaFacebookF />
                <span className='absolute -top-14 -left-4 text-[16px] p-2 bg-[#3b5999] text-white hidden-pop'>Facebook</span>
            </a>
            <a href='https://www.linkedin.com/in/nguyen-minh-nhut-227712227/' target='_blank' rel="noreferrer"
             className='p-4 bg-white rounded-full text-xl relative hover:bg-[#3755ff] hover:text-white pop'>
                <FaLinkedin />
                <span className='absolute -top-14 -left-2 text-[16px] p-2 bg-[#3755ff] text-white hidden-pop'>Linkedin</span>
            </a>
        </section>
    </div>
  )
}

export default Media