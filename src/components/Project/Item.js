import React from 'react'

const Item = ({image, bgColor, name, about, techFrontEnd, techBackEnd, linkDemo, linkSource}) => {
  return (
    <div className='p-4 flex lg:flex-row flex-col items-center mt-[40px] text-[#000]' 
    style={{background: `${bgColor}`}}>
        <img src={image} alt='project 1' className='lg:w-[650px] w-[100%] lg:h-[22rem] p-4' />
        <section className='space-y-6 lg:p-0 p-4 '>
            <h3 className='text-2xl font-bold'  >{name}</h3>
            <p className='leading-8 text-[1rem]'>{about}</p>
            <p className='text-[#374151]'>2022-Design & web development</p>
            <article className='flex flex-col'>
              <p><span className='mr-3 font-bold text-xl'>&rarr;</span>FrontEnd: {techFrontEnd}</p>
              <p><span className='mr-3 font-bold text-xl'>&rarr;</span>BackEnd: {techBackEnd}</p> 
            </article>
            <div className='space-x-4'>
              <a href={linkDemo} rel="noopener noreferrer" target="_blank" 
              className='p-3 border border-black'>
                View Demo</a>
              <a href={linkSource} rel="noopener noreferrer" target="_blank" 
              className='p-3 border border-black' >
                View Source</a>
            </div>
           
        </section>
    </div>
  )
}

export default Item