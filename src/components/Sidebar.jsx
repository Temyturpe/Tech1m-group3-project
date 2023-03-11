import React, { useEffect } from 'react'
import Dash from '../assets/icons/home.svg'
import Courses from '../assets/icons/courses.svg'
import Students from '../assets/icons/students.svg'
import Payments from '../assets/icons/payments.svg'
import Quiz from '../assets/icons/quiz.svg'
import Massages from '../assets/icons/message.svg'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);
      
  return (
    <div className='w-[20%] bg-primary-50 fixed top-0 left-0 h-screen pt-24'>
        <div className="navs mt-12 w-full px-16">
      <ul className="links flex flex-col gap-8 ">
        <li >
            <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 w-5 h-5 items-center"
                >
                  <img src={Dash} alt="" /><div className="text text-primary-500">Dashboard</div>
            </Link>
        </li>
        <li >
            <Link
                  to="/courses"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 w-5 h-5 items-center"
                >
                  <img src={Courses} alt="" /><div className="text text-primary-100">Courses</div>
            </Link>
        </li>
        <li >
            <Link
                  to="/students"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 w-5 h-5 items-center"
                >
                  <img src={Students} alt="" /><div className="text text-primary-100">Students</div>
            </Link>
        </li>
        <li >
            <Link
                  to="/payments"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 w-5 h-5 items-center"
                >
                  <img src={Payments} alt="" /><div className="text text-primary-100">Payments</div>
            </Link>
        </li>
        <li >
            <Link
                  to="/quiz"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 w-5 h-5 items-center"
                >
                  <img src={Quiz} alt="" /><div className="text text-primary-100">Quiz / Assignments</div>
            </Link>
        </li>
        <li >
            <Link
                  to="/messages"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link flex gap-3 w-5 h-5 items-center"
                >
                  <img src={Massages} alt="" /><div className="text text-primary-100">Messages</div>
            </Link>
        </li>
     </ul>
        </div>
    </div>
  )
}

export default Sidebar