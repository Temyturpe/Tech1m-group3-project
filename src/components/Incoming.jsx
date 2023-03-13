import React from 'react'
import Member1 from '../assets/images/avatars/member1.jpg'
import Member2 from '../assets/images/avatars/member2.jpg'
import Member3 from '../assets/images/avatars/member3.jpg'
import Member4 from '../assets/images/avatars/member4.jpg'
import Member5 from '../assets/images/avatars/member5.jpg'

const Incoming = () => {
  return (
    <div className='flex-1 w-full'>
      <div className="title text-primary-500">Upcoming Lessons</div>
      <div className="lessons mt-4">
        <ul className='text-primary-100 flex flex-col gap-3'>
          <li className="lesson w-full bg-white-20 px-2 py-2 rounded-md">
            <div className="title ">UI/UX Design Thinking</div>
            <div className="time text-xs">12:30am - 1:15pm</div>
            <div class="flex -space-x-4 mt-2">
               <img class="w-7 h-7 object-cover rounded-full" src={Member5}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member4}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member3}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member2}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member1} alt=""/>
             </div>
          </li>
          <li className="lesson w-full bg-white-20 px-2 py-2 rounded-md">
            <div className="title ">UI Motion Fundamentals</div>
            <div className="time text-xs">1:35pm - 2:15pm</div>
            <div class="flex -space-x-4 mt-2">
               <img class="w-7 h-7 object-cover rounded-full" src={Member5}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member4}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member3}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member2}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member1} alt=""/>
             </div>
          </li>
          <li className="lesson w-full bg-white-20 px-2 py-2 rounded-md">
            <div className="title ">Web Development Fundamentals</div>
            <div className="time text-xs">2:30pm - 2:45pm</div>
            <div class="flex -space-x-4 mt-2">
               <img class="w-7 h-7 object-cover rounded-full" src={Member5}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member4}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member3}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member2}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member1} alt=""/>
             </div>
          </li>
          <li className="lesson w-full bg-white-20 px-2 py-2 rounded-md">
            <div className="title ">User Research Methodologies</div>
            <div className="time text-xs">4:30pm - 4:15pm</div>
            <div class="flex -space-x-4 mt-2">
               <img class="w-7 h-7 object-cover rounded-full" src={Member5}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member4}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member3}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member2}  alt=""/>
               <img class="w-7 h-7 object-cover rounded-full" src={Member1} alt=""/>
             </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Incoming