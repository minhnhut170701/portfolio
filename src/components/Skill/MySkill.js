import React from 'react'
import "./animation.css"
const MySkill = () => {
  return (
    <div className='animation-bg lg:overflow-visible overflow-hidden mt-[200px]'>
        <div className='w-[80%] mx-auto relative mt-[200px]'> 
            <span className='color lg:w-full w[20%]'></span>
            <span className='color lg:w-full w[20%]'></span>
            <span className='color lg:w-full w[20%]'></span>
            <h2 className='uppercase text-3xl font-bold mb-5'>My Skill</h2>
            <div className='flex lg:flex-row flex-col lg:space-y-0 lg:space-x-28 space-y-10'>
                {/* icon skill */}
                <div className='grid grid-cols-3 gap-6 lg:h-[60%]'>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.alissanguyen.dev/images/tech/javascript.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p className='p-2 lg:text-lg text-sm'>Javascript</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.alissanguyen.dev/images/tech/react.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p className='p-2 lg:text-lg text-sm'>ReactJS</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.alissanguyen.dev/images/tech/html.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p className='p-2 lg:text-lg text-sm'>HTML</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.alissanguyen.dev/images/tech/css.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p className='p-2 lg:text-lg text-sm'>CSS</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.alissanguyen.dev/images/tech/tailwindcss.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p className='p-2 lg:text-lg text-sm'>TailwindCSS</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.alissanguyen.dev/images/tech/nodejs.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p className='p-2 lg:text-lg text-sm'>NodeJS</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p className='p-2 lg:text-lg text-sm'>MongoDB</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.alissanguyen.dev/images/tech/netlify.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p className='p-2 lg:text-lg text-sm'>Netlify</p>
                            </section>
                            <section className='p-4 shadow-2xl rounded-xl flex flex-col items-center animation-hover'>
                                <img src='https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg' alt='#' className='w-[4rem] h-[4rem]'/>
                                <p className='p-2 lg:text-lg text-sm'>Heroku</p>
                            </section>

                </div>
                    {/* infor skill */}
                <div className='lg:w-[60%] -mt-10'>
                                <article className='p-8 rounded-xl  mt-[30px] shadow-2xl hover:brightness-150 bg-[#ffffffc4] '>
                                    <p>Kh??? n??ng tri???n khai trang web theo b???n thi???t k??? v???i ReactJS ho???c HTML, CSS thu???n.
                                        Bao g???m responsive ????? t??ch h???p tr??n c??c thi???t b??? kh??c nhau
                                    </p>
                                </article>
                                <article className='p-8 hover:brightness-150 shadow-2xl bg-[#ffffffc4] rounded-xl  mt-[30px]'>
                                    <p>S??? d???ng c??c th?? vi???n UI nh?? TailwindCSS, Headless UI, Chakra UI ????? t???o m???t trang web ?????p, responsive v?? truy c???p nhanh ch??ng
                                    </p>
                                </article>
                                <article className='p-8 hover:brightness-150 shadow-2xl bg-[#ffffffc4] rounded-xl mt-[30px]'>
                                    <p>S??? d???ng c?? b???n ExpressJS ????? kh???i t???o API cho web, theo m?? h??nh MVC v?? theo ki???n tr??c RestAPI</p>
                                </article>
                                <article className='p-8 hover:brightness-150 shadow-2xl bg-[#ffffffc4] rounded-xl  mt-[30px]'>
                                    <p>Hi???u bi???t c?? b???n v?? d??ng MongoDB ????? kh???i t???o d??? li???u d??ng ????? hi???n th???, 
                                        l??u tr??? v?? ch???nh s???a tr??n trang web</p>
                                </article>
                                <article className='p-8 hover:brightness-150 shadow-2xl bg-[#ffffffc4] rounded-xl  mt-[30px]'>
                                    <p>Hi???u c?? b???n c??c kh??i ni???m v??? SEO cho website v?? c?? ????? deloy web tr??n c??c n???n t???ng nh?? Netlify hay Vercel</p>
                                </article>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default MySkill