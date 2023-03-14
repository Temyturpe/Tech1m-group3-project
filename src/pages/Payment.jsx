import React from 'react';
import Arrowup from '../assets/icons/arrow-up-1.svg';
import Arrowdown from '../assets/icons/arrow-down.svg';
import Uiux from '../assets/images/course_card_images/uiux-card-img.jpg';
import Appdev from '../assets/images/course_card_images/appdev-card-img.jpg';
import Webdev from '../assets/images/course_card_images/webdev-card-img.jpg';

const Payment = () => {
  const data = [
    {
      id: 1,
      student: "Malik Samuel",
      invoice: "Invoice #23874909",
      paymentDate: "4 JAN 2023",
      title:  "User Experience Design: Figma UI/UX Design",
      img: Uiux,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 50,
      level: "Intermediate",
      status: "Accepted"
    },
    {
      id: 2,
      student: "Agbo Samuel",
      invoice: "Invoice #234354909",
      paymentDate: "4 JAN 2023",
      title:  "App Development Fundamentals",
      img: Appdev,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 89,
      level: "Beginner",
      status: "Accepted"
    },
    {
      id: 3,
      student: "Vicky Micheal",
      invoice: "Invoice #23345909",
      paymentDate: "4 JAN 2023",
      title:  "Web Development Fundamentals",
      img: Webdev,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 91,
      level: "Advanced",
      status: "Accepted"
    },
    {
      id: 4,
      student: "Richard Manny",
      invoice: "Invoice #7675909",
      paymentDate: "4 JAN 2023",
      title:  "User Experience Design: Figma UI/UX Design",
      img: Uiux,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 40,
      level: "Intermediate",
      status: "Accepted"
    },
    {
      id: 5,
      student: "Townhall Balablue",
      invoice: "Invoice #27676888",
      paymentDate: "4 JAN 2023",
      title:  "App Development Fundamentals",
      img: Appdev,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 53,
      level: "Intermediate",
      status: "Accepted"
    },
    {
      id: 6,
      student: "Vivian James",
      invoice: "Invoice #8897545",
      paymentDate: "4 JAN 2023",
      title:  "User Experience Design: Figma UI/UX Design",
      img: Uiux,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 23,
      level: "Intermediate",
      status: "Accepted"
    },
    {
      id: 7,
      student: "Peter Obi",
      invoice: "Invoice #56768909",
      paymentDate: "4 JAN 2023",
      title:  "Web Development Fundamentals",
      img: Webdev,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 50,
      level: "Intermediate",
      status: "Accepted"
    },
    {
      id: 8,
      student: "Abubakar Adamu",
      invoice: "Invoice #0099743",
      paymentDate: "4 JAN 2023",
      title:  "App Development Fundamentals",
      img: Appdev,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 50,
      level: "Intermediate",
      status: "Accepted"
    },
    {
      id: 9,
      student: "Bola Shagaya",
      invoice: "Invoice #7884909",
      paymentDate: "4 JAN 2023",
      title:  "User Experience Design: Figma UI/UX Design",
      img: Uiux,
      dateCreated: "January 2022",
      timeCreated: "5:48pm",
      price: "$1010",
      duration: "6 weeks",
      modules: 50,
      level: "Intermediate",
      status: "Accepted"
    }
]

  
  return (
    <div className='w-full mt-24'>
    <div className="content w-full flex">
        <div className="left w-[20%]"></div>
        <div className="right w-[80%] text-2xl font-semibold px-14">
              <div className='flex justify-between items-center my-5 '>
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
              <div>
                  <div className=''>
                    { data.map(info => {
                      return (
                        <div className='flex shadow-sm items-center p-3 bg-white-20 mb-4'>
                          <div className='flex items-center w-full'>
                            <div className='w-[76px] h-[72px]'>
                              <img src={info.img} className='w-full h-full rounded-[4px] object-cover' alt='' />
                            </div>
                            <div className='flex items-center w-full justify-between'>
                              <div className='flex ml-[8px] w-[243px] flex-col'>
                                <h2 className='text-base text-primary-500 font-medium'>{info.student}</h2>
                                <p className='text-base text-primary-500 font-medium '>{info.title}</p>
                                <p className='text-neutral-60 font-medium text-xs'>{info.invoice}</p>
                              </div>
                              <div className='flex flex-col items-end'>
                                <p className='text-base text-neutral-50 font-normal'>{info.price}</p>
                                <p className='text-base text-neutral-50 font-normal'>{info.status}</p>
                                <p className='text-base text-neutral-50 font-normal'>{info.paymentDate}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                      
                    })}
                  </div>
                  {/* Pagination section */}
              </div>
        </div>
    </div>
</div>
  )
}

export default Payment