import React from 'react'
import image from "../../images/me.jpg"
import Typed from "react-typed"
const Infor = () => {
  return (
    <div className='lg:w-[80%] w-ful mx-auto p-14'>
        <div className='flex lg:flex-row flex-col space-x-4'>
            <section className='space-y-10 p-6'>
                <Typed className='text-6xl font-bold'
            strings={[
                  "Hi, I'am Lucas 👋",
                ]}
                typeSpeed={40}
                
                loop={false}
              />
                <p className='text-lg' >Welcome to my personal website!</p>
                <p className='text-lg'>I enjoy building software that makes peoples' lives easier by writing elegant, performant, and maintainable frontend code.</p>
                <p className='text-2xl font-bold'>I'am Front-End Developer</p>
                <button className='p-4 border-4 uppercase border-white'>
                  <a href="../../CV/Nguyen-Minh-Nhut-Intern-Web-Developer-TopCV.vn-280722.72427.pdf" download="Nguyen-Minh-Nhut-Intern-Web-Developer-TopCV.vn-280722.72427.pdf">
                      Dowload My CV
                  </a>
                </button>
                 
              
               
            </section>
            <section>
                <img src={image} alt="Lucas Nguyen" className='lg:w-[30rem] lg:h-[30rem] outline-offset-[-10px] 
                 outline-white mt-[40px]' style={{outline: '1px solid #fff'}} />
            </section>
            
        </div>
    </div>
  )
}

export default Infor