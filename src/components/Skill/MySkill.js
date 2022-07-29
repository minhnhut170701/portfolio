import React from 'react'
import "./animation.css"
const MySkill = () => {
  return (
    <div className='animation-bg mt-[200px]'>
        <div className='w-[80%] mx-auto relative mt-[200px]'> 
            <span className='color'></span>
            <span className='color'></span>
            <span className='color'></span>
            <h2 className='uppercase text-3xl font-bold mb-5'>My Skill</h2>
            <div className='flex lg:flex-row flex-col lg:space-y-0 lg:space-x-28 space-y-10'>
                {/* icon skill */}
                <div className='grid grid-cols-3 gap-6 h-[400px]'>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.alissanguyen.dev/images/tech/javascript.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p>Javascript</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.alissanguyen.dev/images/tech/react.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p>ReactJS</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.alissanguyen.dev/images/tech/html.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p>HTML</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.alissanguyen.dev/images/tech/css.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p>CSS</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.alissanguyen.dev/images/tech/tailwindcss.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p>TailwindCSS</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.alissanguyen.dev/images/tech/nodejs.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p>NodeJS</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p>MongoDB</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.alissanguyen.dev/images/tech/netlify.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p>Netlify</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p>Heroku</p>
                            </section>

                </div>
                    {/* infor skill */}
                <div className='lg:w-[60%] -mt-10'>
                                <article className='p-8 rounded-xl  mt-[30px] shadow-2xl hover:brightness-150 bg-[#ffffffc4] '>
                                    <p>Khả năng triển khai trang web theo bản thiết kế với ReactJS hoặc HTML, CSS thuần.
                                        Bao gồm responsive để tích hợp trên các thiết bị khác nhau
                                    </p>
                                </article>
                                <article className='p-8 hover:brightness-150 shadow-2xl bg-[#ffffffc4] rounded-xl  mt-[30px]'>
                                    <p>Sử dụng các thư viện UI như TailwindCSS, Headless UI, Chakra UI để tạo một trang web đẹp, responsive và truy cập nhanh chóng
                                    </p>
                                </article>
                                <article className='p-8 hover:brightness-150 shadow-2xl bg-[#ffffffc4] rounded-xl mt-[30px]'>
                                    <p>Sử dụng cơ bản ExpressJS để khởi tạo API cho web, theo mô hình MVC và theo kiến trúc RestAPI</p>
                                </article>
                                <article className='p-8 hover:brightness-150 shadow-2xl bg-[#ffffffc4] rounded-xl  mt-[30px]'>
                                    <p>Hiểu biết cơ bản và dùng MongoDB để khởi tạo dữ liệu dùng để hiển thị, 
                                        lưu trữ và chỉnh sửa trên trang web</p>
                                </article>
                                <article className='p-8 hover:brightness-150 shadow-2xl bg-[#ffffffc4] rounded-xl  mt-[30px]'>
                                    <p>Hiểu cơ bản các khái niệm về SEO cho website và có để deloy web trên các nền tảng như Netlify hay Vercel</p>
                                </article>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default MySkill