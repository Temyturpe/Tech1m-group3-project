import React from 'react';
import Arrowup from '../assets/icons/arrow-up-1.svg';
import Dollar from '../assets/icons/dollar-square.svg';
import Status from '../assets/icons/status-up.svg';
import Clock from '../assets/icons/clock.svg';
import Arrowdown from '../assets/icons/arrow-down.svg';
import Appdev from '../assets/images/course_card_images/appdev-card-img.jpg';
import Webdev from '../assets/images/course_card_images/webdev-card-img.jpg';
import Uiux from '../assets/images/course_card_images/uiux-card-img.jpg';

const Course = () => {

  //To do: Create another js file later to store the data and import it into any file that needs it
  const courseData =  [
    {
      id: 1,
      title:  "User Experience Design: Figma UI/UX Design",
      img: Uiux,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 50,
      level: "Intermediate"
    },
    {
      id: 2,
      title:  "App Development Fundamentals",
      img: Appdev,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 89,
      level: "Beginner"
    },
    {
      id: 3,
      title:  "Web Development Fundamentals",
      img: Webdev,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 91,
      level: "Advanced"
    },
    {
      id: 4,
      title:  "User Experience Design: Figma UI/UX Design",
      img: Uiux,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 40,
      level: "Intermediate"
    },
    {
      id: 5,
      title:  "App Development Fundamentals",
      img: Appdev,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 53,
      level: "Intermediate"
    },
    {
      id: 6,
      title:  "User Experience Design: Figma UI/UX Design",
      img: Uiux,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 23,
      level: "Intermediate"
    },
    {
      id: 7,
      title:  "Web Development Fundamentals",
      img: Webdev,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 50,
      level: "Intermediate"
    },
    {
      id: 8,
      title:  "App Development Fundamentals",
      img: Appdev,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 50,
      level: "Intermediate"
    },
    {
      id: 9,
      title:  "User Experience Design: Figma UI/UX Design",
      img: Uiux,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 50,
      level: "Intermediate"
    }
  ]

  return (
    <div className='w-full mt-20'>
        <div className="content w-full flex">
            <div className="left w-[20%]"></div>
            <div className="right w-[80%] flex flex-col justify-center text-2xl mt-8 font-semibold ">
              <div className='flex justify-between my-5 px-14'>
                <div className='max-w-fit'>
                  <p className='text-primary-75 text-[16px]'>Home/<span className='text-primary-500 text-[16px]'>Courses</span></p>
                </div> 
                <div className='flex justify-evenly space-x-4 p-2 bg-white-10'>
                  <div className='flex justify-between cursor-pointer items-center space-x-2'>
                    <p className='text-sm text-primary-500'>COURSE</p>
                    <div className='flex flex-col justify-center items-center'>
                      <img src={Arrowup} className='w-3 h-3' alt='' />
                      <img src={Arrowdown} className='w-3 h-3' alt='' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center cursor-pointer space-x-2'>
                    <p className='text-sm text-neutral-50'>LEVEL</p>
                    <div className='flex flex-col justify-center items-center'>
                      <img src={Arrowup} className='w-3 h-3' alt='' />
                      <img src={Arrowdown} className='w-3 h-3' alt='' />
                    </div>
                  </div>
                  <div className='flex justify-between cursor-pointer items-center space-x-2'>
                    <p className='text-sm text-neutral-50'>DURATION</p>
                    <div className='flex flex-col justify-center items-center'>
                      <img src={Arrowup} className='w-3 h-3' alt='' />
                      <img src={Arrowdown} className='w-3 h-3' alt='' />
                    </div>
                  </div>
                  <div className='flex justify-between items-center cursor-pointer space-x-2'>
                    <p className='text-sm text-neutral-50'>ALL</p>
                    <div className='flex flex-col justify-center items-center'>
                      <img src={Arrowup} className='w-3 h-3' alt='' />
                      <img src={Arrowdown} className='w-3 h-3' alt='' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='my-5 px-14 grid grid-cols-3 grid-rows-2 gap-6 '>
                {courseData.map((course) => {
                  return (
                    <div className='w-[284px] bg-white self-start rounded-lg cursor-pointer h-[334px]' key={course.id}>
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
                    </div>
                    
                  )
                })}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Course