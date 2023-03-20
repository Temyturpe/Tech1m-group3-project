import React from 'react'
import More from '../assets/icons/more.svg'
import {Link} from 'react-router-dom'

const Total = () => {
  return (
    <div className='w-full'>
        <div className="top">
          <ul className="courses flex flex-col gap-4">
            <li className='flex justify-between items-center shadow-md rounded-md px-3 py-5'>
                <div className="left">
                  <div className="top text-success">Top Courses</div>
                  <div className="bottom text-primary-500 text-2xl">215</div>
               </div>
               <div className="right">
               <Link to='/in/courses'>
                <button className='text-primary-100 text-base flex gap-2 justify-center items-center py-1 px-4      border-solid border-[.5px] rounded-md border-primary-100'>
                  <img src={More} alt="" className='w-8 flex items-center justify-center' /> 
                  <span>View All</span>
               </button>
                </Link>
                </div>
            </li>
            <li className='flex justify-between items-center shadow-md rounded-md px-3 py-5 '>
            <div className="left">
              <div className="top text-primary-100">Total Students</div>
              <div className="bottom text-primary-500 text-2xl">1,759</div>
            </div>
            <div className="right">
              <Link to='/in/students'><button className='text-primary-100 text-base flex gap-2 justify-center items-center py-1 px-4 border-solid border-[.5px] rounded-md border-primary-100'><img src={More} alt="" className='w-8 flex items-center justify-center' /> <span>View All</span></button>
              </Link>
              </div>
            </li>
            <li className='flex justify-between items-center shadow-md rounded-md px-3 py-5 '>
            <div className="left">
              <div className="top text-primary-100">Total Lessons</div>
              <div className="bottom text-primary-500 text-2xl">800</div>
            </div>
            <div className="right"><Link to='/in/quiz'><button className='text-primary-100 text-base flex gap-2 justify-center items-center py-1 px-4 border-solid border-[.5px] rounded-md border-primary-100'><img src={More} alt="" className='w-8 flex items-center justify-center' /> <span>View All</span></button>
            </Link></div>
            </li>
          </ul>
        </div>
        <div className="workstats w-full bg-white-20 mt-5 px-3 py-2 rounded-md">
          <div className="title text-primary-500 capitalize mb-2">work stats</div>
          <div className="table w-full">
            <table className='w-full text-[15px]'>
              <tr className='w-full text-neutral-100'>
                <td className='w-[33.33%]'>
                  Lesson
                </td>
                <td className='w-[33.33%]'>
                  Taking
                </td>
                <td className='w-[33.34%]'>
                  Working
                </td>
              </tr>
              <tr className='w-full text-neutral-100'>
                <td className='w-[33.33%]'>
                  Discuss
                </td>
                <td className='w-[33.33%]'>
                  Class
                </td>
                <td className='w-[33.34%]'>
                  Progress
                </td>
              </tr>
              <tr className='w-full text-primary-75'>
                <td className='w-[33.33%]'>
                  3.4hrs
                </td>
                <td className='w-[33.33%]'>
                  4.5hrs
                </td>
                <td className='w-[33.33%]'>
                918 +23.45%
                </td>
              </tr>
            </table>
          </div>
        </div>
    </div>
  )
}

export default Total