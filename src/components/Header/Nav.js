import React from 'react'
import Infor from './Infor'
import Menu from './Menu'

const Nav = () => {
  return (
    <div className='max-w-full relative text-white'>
        <Menu />
        <div className='absolute top-0 -z-10 w-full overflow-hidden origin-0 h-[900px] skew-y-[-12deg] '
        style={{background: 'linear-gradient(150deg,#53f 15%,#05d5ff 70%,#a6ffcb 94%)', transformOrigin: 0}}>
            <span className='absolute top-0 w-[33%] left-[-16%] bg-[#53f] h-[190px]'></span>
            <span className='absolute top-0 w-[33%] left-[16%] bg-[#4553ff] h-[190px] right-auto'></span>
            <span className='absolute bottom-auto w-[33%] left-[49%] bg-[#4f40ff] h-[190px]'></span>
            <span className='absolute right-[-16%] top-[380px] w-[33%] bg-[#25ddf5] h-[190px]'></span>
            <span className='absolute bottom-0 w-[33%] bg-[#1fa2ff] h-[190px]'></span>
        </div>
        <Infor />
    </div>
  )
}

export default Nav