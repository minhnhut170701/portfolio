import React from 'react'
import Contact from './Contact/Contact'
import Nav from './Header/Nav'
import Project from './Project/Project'
import MySkill from './Skill/MySkill'

const Home = () => {
  return (
    <div>
        <Nav />
        <Project />
        <MySkill />
        <Contact />
        <div className='w-full h-[40px] text-center p-2'>
            <p>Built and designed by Nguyen Minh Nhut.</p>
            <p>Copyright © 2022 All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Home