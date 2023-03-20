import React, {useState, useEffect} from 'react'
import Logo1 from '../assets/images/logos/Tech1mjuniorblack.png'
import Searchicon from '../assets/icons/searchicon.svg'
import Chat from '../assets/icons/chaticon.svg'
import Notification from '../assets/icons/notification.svg'
import Setting from '../assets/icons/settings.svg'
import Admin from '../assets/images/avatars/superadmin.jpg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BsUiRadiosGrid } from 'react-icons/bs'
import { TbBook2, TbBrandWechat } from 'react-icons/tb'
import { SlGraduation } from 'react-icons/sl'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { MdOutlineQuiz } from 'react-icons/md'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="navbar">
    <div className="maincontainer fixed top-0 left-0 z-50  w-full">
      <div className="colors w-full h-full flex reltive"><span className="blueh-auto bg-[#ffffff] sm:bg-primary-50 w-[20%]"></span><span className="white w-[80%] h-auto bg-[#ffffff] py-3"></span></div>
      <div className="main absolute top-0 left-0 w-full">
    <div className='w-full sm:w-[95%] mx-auto mt-0 sm:mt-5 rounded-sm p-4 bg-white-30 shadow-md flex justify-between items-center'>
        <div className="logo "><img src={Logo1} alt="" className='w-[60px] sm:w-20 md:w-[120px]' /></div>
        <div className="search">
            <form action="" className='flex items-center gap-1 border-[1px] justify-center w-[200px] sm:w-[250px] md:w-[490px]  p-1 border-primary-100 rounded-md'>
                <div className="icon"><img src={Searchicon} alt="" className='w-[16px]' /></div>
                <input type="text" className='border-none bg-white-30 w-full outline-none placeholder:text-primary-100 placeholder:text-lg' placeholder='search' />
            </form>
        </div>
        <div className="others hidden sm:flex gap-3 md:gap-6 items-center">
            <div className="chat relative"><img src={Chat} alt="" className='w-5 md:w-6 '/><span className=" absolute -top-2 left-3 px-[4px] md:px-[5px] py-[.5px] md:py-[1px] text-xs bg-green text-white-30  rounded-full">2</span></div>
            <div className="chat relative"><img src={Notification} alt="" className='w-5 md:w-6' /><span className=" absolute -top-2 left-3 px-[4px] md:px-[5px] py-[.5px] md:py-[1px] text-xs bg-red text-white-30 rounded-full">5</span></div>
            <div className="admin flex items-center gap-2"><img src={Admin} alt="" className='w-10 md:w-12 h-10 md:h-12 rounded-full object-cover' /><div className="admin-info leading-[1]"><div className="name text-primary-300">Adam Chuks</div><div className="title text-sm">Supa Admin</div></div></div>
            <div className="settings ml-2 md:ml-8 "><img src={Setting} alt="" className='w-[26px]' /></div>
            </div>
            {/* menubar */}
            <div
          onClick={handleClick}
          className="sm:hidden flex text-primary-300 text-xl z-50 pr-2 sm:pr-7 "
        >
          {!nav ? <GiHamburgerMenu /> : <FaTimes />}
        </div>
        <div
          className={
            !nav
              ? "hidden"
              : " fixed top-0 left-0 w-screen z-40 h-screen bg-[#ffffff] flex flex-col py-20 items-center text-black"
          }
        >
          <div className="navbody w-full px-5">
            <div className="w-full">
              <div className="user flex justify-between items-center">
                  <div className="admin flex items-center gap-2">
                    <img src={Admin} alt="" className='w-10 md:w-12 h-10 md:h-12 rounded-full object-cover' />
                    <div className="admin-info leading-[1]">
                       <div className="name text-primary-300">Adam Chuks</div>
                        <div className="title text-sm">Supa Admin</div>
                    </div>
                 </div>
                 <div className="otherr flex gap-4">
                   <div className="chat relative"><img src={Chat} alt="" className='w-6 '/>
                      <span className="   absolute -top-2 left-3 px-[5px] py-[1px] text-xs bg-green text-white-30  rounded-full">2</span>
                    </div>
                    <div className="chat relative"><img src={Notification} alt="" className='w-6' /><span className=" absolute -top-2 left-3 px-[5px] py-[1px] text-xs bg-red text-white-30 rounded-full">5</span></div>
                 </div>
              </div>
              <div className="links text-lg text-primary-300 font-semibold flex flex-col gap-5 justify-start mt-10 px-10">
              <Link
                  to="/in/home"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 items-center"
                >
                  <div className="icon"><BsUiRadiosGrid className=' w-4 h-4 ' /></div> <div className="text">Dashboard</div>
            </Link>
            <Link
                  to="/in/courses"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 items-center"
                >
                   <div className="icon"><TbBook2 className=' w-4 h-4 ' /></div> <div className="text">Courses</div>
            </Link>
            <Link
                  to="/in/students"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 items-center"
                >
                  <div className="icon">< SlGraduation className=' w-4 h-4'/></div><div className="text">Students</div>
            </Link>
                <Link
                  to="/in/payments"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 items-center"
                >
                  <div className="icon">< AiOutlineDollarCircle className=' w-4 h-4'/></div><div className="text">Payments</div>
            </Link>
            <Link
                  to="/in/quiz"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 items-center"
                >
                  <div className="icon">< MdOutlineQuiz className=' w-4 h-4'/></div><div className="text">Quiz / Assignments</div>
            </Link>
            <Link
                  to="/in/messages"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 items-center"
                >
                  <div className="icon">< TbBrandWechat className='w-4 h-4'/></div><div className="text">Messages</div>
            </Link>
              </div>
              <div className="logout mt-10">
              <button className='flex items-center gap-2 font-semibold bg-[#ffffff] px-5 py-2 border-2 rounded-md shadow-md border-primary-200 text-primary-200'><span><img src={Setting} alt="" /></span><span>Log Out</span></button>
              </div>
          </div>
        </div>
        </div>
        </div>
    </div>
    </div>

    </div>
  )
}

export default Navbar