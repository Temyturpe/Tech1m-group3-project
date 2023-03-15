import React from 'react'
import Logo1 from '../assets/images/logos/Tech1mjuniorblack.png'
import Searchicon from '../assets/icons/searchicon.svg'
import Chat from '../assets/icons/chaticon.svg'
import Notification from '../assets/icons/notification.svg'
import Setting from '../assets/icons/settings.svg'
import Admin from '../assets/images/avatars/superadmin.jpg'

const Navbar = () => {
  return (
    <div className="maincontainer fixed top-0 left-0 z-50  w-full">
      <div className="colors w-full h-full flex reltive"><span className="blueh-auto bg-primary-50 w-[20%]"></span><span className="white w-[80%] h-auto bg-[#ffffff] py-3"></span></div>
      <div className="main absolute top-0 left-0 w-full">
    <div className='w-[95%] mx-auto mt-5 rounded-sm p-4 bg-white-30 shadow-md flex justify-between items-center'>
        <div className="logo "><img src={Logo1} alt="" className='w-[120px]' /></div>
        <div className="search">
            <form action="" className='flex items-center gap-1 border-[1px] justify-center w-[490px] p-1 border-primary-100 rounded-md'>
                <div className="icon"><img src={Searchicon} alt="" className='w-[16px]' /></div>
                <input type="text" className='border-none bg-white-30 w-full outline-none placeholder:text-primary-100 placeholder:text-lg' placeholder='search' />
            </form>
        </div>
        <div className="others flex gap-6 items-center">
            <div className="chat relative"><img src={Chat} alt="" className='w-6'/><span className=" absolute -top-2 left-3 px-[5px] py-[1px] text-xs bg-green text-white-30  rounded-full">2</span></div>
            <div className="chat relative"><img src={Notification} alt="" className='w-6' /><span className=" absolute -top-2 left-3 px-[5px] py-[1px] text-xs bg-red text-white-30 rounded-full">5</span></div>
            <div className="admin flex items-center gap-2"><img src={Admin} alt="" className='w-12 h-12 rounded-full object-cover' /><div className="admin-info leading-[1]"><div className="name text-primary-300">Adam Chuks</div><div className="title text-sm">Supa Admin</div></div></div>
            <div className="settings ml-8"><img src={Setting} alt="" className='w-[26px]' /></div>
        </div>
        </div>
    </div>
    </div>
    
  )
}

export default Navbar