import React, {useState} from 'react'
import {AiFillCloseCircle} from "react-icons/ai"
const Menu = () => {
  const [menu, setMenu] = useState(false)
 
  const goToProject = () =>{
    if(window.innerWidth > 1500){
      window.scrollTo({
        top: 900,
        behavior: 'smooth'
      })
    }
    else{
      window.scrollTo({
        top: 1400,
        behavior: 'smooth'
      })
      
    }
  }
  const gotoSkill = () =>{
    if(window.innerWidth > 1500){
      window.scrollTo({
        top: 2300,
        behavior: 'smooth'
      })
      
    }
    else{
      window.scrollTo({
        top: 3700,
        behavior: 'smooth'
      })
     
    }
  }

  const gotoContact = () =>{
    if(window.innerWidth > 1500){
      window.scrollTo({
        top: 3300,
        
      })
     
    }
    else{
      window.scrollTo({
        top: 5500,
        
      })
    
    }
  }
  return (
    <nav className='flex items-center justify-between w-full lg:w-[70%] mx-auto p-14'>
            <h1 className='uppercase text-xl font-bold underline'>Lucas Nguyen</h1>
            <ul className='lg:flex items-center space-x-4 hidden'>
                <li><a href='https://github.com/minhnhut170701' target='_blank' rel="noopener noreferrer">GitHub</a></li>
                <li><button onClick={() => goToProject()}>Project</button></li>
                <li> <button onClick={() => gotoSkill()}>Skill</button></li>
                <li><button onClick={() => gotoContact()}>Contact</button></li>
            </ul>
            <button onClick={() => setMenu(!menu)}
            className='lg:hidden flex flex-col items-center space-y-2'>
                <span className='w-14 h-2 bg-white rounded-3xl'></span>
                <span className='w-14 h-2 bg-white rounded-3xl'></span>
                <span className='w-14 h-2 bg-white rounded-3xl'></span>
            </button>

            {menu && (
              <div className='bg-white w-full absolute top-0 left-0 p-8 z-50 md:hidden'>
                  <div className='flex items-center justify-between text-gray-400'>
                      <h1 className='text-3xl uppercase underline'>Lucas Nguyen</h1>
                      <button onClick={() => setMenu(false)}
                       className='text-3xl hover:text-black cursor-pointer'><AiFillCloseCircle /></button>
                  </div>
                  <ul className='flex flex-col  mt-[30px] text-gray-400'>
                      <li className='p-8 border-t border-b hover:text-black hover:bg-gray-400'>
                        <a href='https://github.com/minhnhut170701' target='_blank' rel="noopener noreferrer">GitHub</a>
                      </li>
                      <li className='p-8 border-t border-b hover:text-black hover:bg-gray-400'>
                        <button onClick={() => goToProject()}>Project</button>
                      </li>
                      <li className='p-8 border-t border-b hover:text-black hover:bg-gray-400'>
                        <button onClick={() => gotoSkill()}>Skill</button>
                      </li>
                      <li className='p-8 border-t border-b hover:text-black hover:bg-gray-400'>
                      <button onClick={() => gotoContact()}>Contact</button>
                      </li>
                  </ul>
              </div>
            ) }
    </nav>
  )
}

export default Menu