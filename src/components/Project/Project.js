import React from 'react'
import Item from './Item'
import movieapp from "../../images/project-test.png"
import bugerapp from "../../images/project-2.png"
import webNovel from "../../images/project-3.png"
const Project = () => {
  return (
    <div className='mt-[100px] w-[80%] mx-auto'>
        <h2 className='text-center lg:text-[6rem] text-[2rem] uppercase font-bold'>My Project</h2>
        <Item image={movieapp} 
        bgColor='linear-gradient(120deg, rgb(211, 224, 255), rgb(234, 234, 255))'
        name='Website Movie'
        about='Nơi xem trailer phim online. Mọi người có thể tìm kiếm phim cũng như để lại bình luận cho phim mình yêu thích.'
        techFrontEnd="ReactJS, Redux, Tailwindcss"
        techBackEnd="ExpressJS, MongoDB"
        linkDemo="https://movieapplucas.herokuapp.com/"
        linkSource="https://github.com/minhnhut170701/Movie_App" />
        
        <Item image={bugerapp} 
        bgColor='linear-gradient(-120deg, #fedfe7, #fbedff)'
        name='Website Hamburger'
        about="Shop bán bánh mì Hamburger với các tính năng cơ bản như lọc sản phẩm theo giá, Tìm kiếm sản phẩm, thêm vào giỏ hàng và thanh toán"
        techFrontEnd="ReactJS, Redux, Tailwindcss"
        techBackEnd="FireBase" 
        linkDemo="https://pizaaforpeople.netlify.app/"
        linkSource="https://github.com/minhnhut170701/React-Shop-Hamberger" />

        <Item image={webNovel} 
        bgColor='linear-gradient(120deg, #e0f7ff, #dffff4)'
        name='Website crawler'
        about="Sử dụng Cheerio đề cào dữ liệu từ trang web khác, bao gồm thông tin truyện và đường link đọc truyện"
        techFrontEnd="ReactJS, Redux, ChakraUI"
        techBackEnd="ExpressJS, Cheeerio" 
        linkDemo="https://me-truyen-chu.vercel.app/"
        linkSource="https://github.com/minhnhut170701/MeTruyenChu" />
    </div>
  )
}

export default Project