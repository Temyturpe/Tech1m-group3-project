import React from 'react'
import Dollar from '../assets/icons/dollar-square.svg';
import Status from '../assets/icons/status-up.svg';
import Clock from '../assets/icons/clock.svg';

const SingleCourse = ({course}) => {
  return (
    <div> <div className='w-[284px] bg-white self-start rounded-lg cursor-pointer h-[334px]' key={course.id}>
    <div className='h-[50%] w-full rounded-t-lg'>
      <img src={course.img} className='w-full h-full rounded-t-sm object-cover' alt='' />
    </div>
    <div className='pt-2 px-3 border border-t-0 h-[50%]  border-[#D9D9D9]'>
      <h5 className='mb-1 text-lg font-[400] tracking-tight text-primary-500'>{course.title}</h5>
      <p className='text-[12px] mb-[4px] text-neutral-90 font-[500]'>Created: {course.dateCreated} -  {course.timeCreated}</p>
      <div className='flex justify-between mb-2'>
        <div className='flex items-center'>
          <img src={Dollar} className='w-[13px] h-[13px]' alt="" />
          <p className='text-primary-75 ml-1 text-xs'>{course.price}</p>
        </div>
        <div className='flex items-center'>
          <img src={Status} className='w-[13px] h-[13px]' alt="" />
          <p className='text-primary-75 ml-1 text-xs'>{course.level}</p>
        </div>
        <div className='flex items-center'>
          <img src={Clock} className='w-[13px] h-[13px]' alt="" />
          <p className='text-primary-75 ml-1 text-xs'>{course.duration}</p>
        </div>
      </div>
      <p className='text-neutral-70 text-xs font-[500]'>{course.modules} modules</p>
    </div>
  </div></div>
  )
}

export default SingleCourse