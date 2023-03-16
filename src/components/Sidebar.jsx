import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsUiRadiosGrid } from 'react-icons/bs'
import { TbBook2, TbBrandWechat } from 'react-icons/tb'
import { SlGraduation } from 'react-icons/sl'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { MdOutlineQuiz } from 'react-icons/md'


const Sidebar = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);
      
  return (
    <div className='w-[20%] bg-primary-50 fixed top-0 left-0 h-screen pt-24 hidden sm:block'>
        <div className="navs mt-12 w-full px-5 md:px-16">
      <ul className="links flex flex-col gap-8 ">
        <li className='text-primary-100 active:text-primary-500'>
            <Link
                  to="/in/home"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 items-center"
                >
                  <div className="icon"><BsUiRadiosGrid className=' w-6 h-6 ' /></div> <div className="text text-sm md:text-base">Dashboard</div>
            </Link>
        </li>
        <li className='text-primary-100 hover:text-primary-500 active:text-primary-500'>
            <Link
                  to="/in/courses"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 items-center"
                >
                   <div className="icon"><TbBook2 className=' w-6 h-6 ' /></div> <div className="text text-sm md:text-base">Courses</div>
            </Link>
        </li>
        <li className='text-primary-100 hover:text-primary-500 active:text-primary-500'>
            <Link
                  to="/in/students"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 items-center"
                >
                  <div className="icon">< SlGraduation className=' w-6 h-6'/></div><div className="text text-sm md:text-base">Students</div>
            </Link>
        </li>
        <li className='text-primary-100 hover:text-primary-500 active:text-primary-500'>
            <Link
                  to="/in/payments"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 items-center"
                >
                  <div className="icon">< AiOutlineDollarCircle className=' w-6 h-6'/></div><div className="text text-sm md:text-base">Payments</div>
            </Link>
        </li>
        <li className='text-primary-100 hover:text-primary-500 active:text-primary-500'>
            <Link
                  to="/in/quiz"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 items-center"
                >
                  <div className="icon">< MdOutlineQuiz className=' w-6 h-6'/></div><div className="text text-sm md:text-base">Quiz / Assignments</div>
            </Link>
        </li>
        <li className='text-primary-100 hover:text-primary-500 active:text-primary-500'>
            <Link
                  to="/in/messages"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 items-center"
                >
                  <div className="icon">< TbBrandWechat className='w-6 h-6'/></div><div className="text text-sm md:text-base">Messages</div>
            </Link>
        </li>
     </ul>
        </div>
    </div>
  )
}

export default Sidebar