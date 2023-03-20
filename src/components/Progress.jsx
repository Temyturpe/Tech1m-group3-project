import React from 'react'
import Student1 from '../assets/images/avatars/student1.jpg'
import Student2 from '../assets/images/avatars/student2.jpg'
import Student3 from '../assets/images/avatars/student3.jpg'
import Student4 from '../assets/images/avatars/student4.jpg'
import Student5 from '../assets/images/avatars/student5.jpg'
import Student6 from '../assets/images/avatars/student6.jpg'
import More from '../assets/icons/more.svg'


const Progress = () => {
  return (
    <div className='w-full p-2 shadow-md rounded-md'>
        <div className="title text-primary-500">Student's Progress</div>
        <div className="datas">
            <ul className='w-full px-1 mt-3 text-sm'>
                <li className='flex items-center w-full gap-3 py-1 text-primary-100'>
                  <img src={Student1} alt="" className='w-[32px] h-[32px] object-cover rounded-full '/>
                  <div className="info flex w-full flex-col gap-3">
                     <div className="name flex justify-between w-full">
                         <span className="name">Smith Blacks</span>
                         <span className="percentage">36%</span>
                     </div>
                     <div className="progressbar">
                        <div class="w-full bg-primary-50 flex items-center rounded-full h-[.5px] mb-4">
                        <div class=" bg-neutral-50 h-[6px] rounded-full w-[36%]"></div>
                     </div>
                     </div>
                   </div>
                </li>
                <li className='flex items-center w-full gap-3 py-1 text-primary-100'>
                  <img src={Student2} alt="" className='w-[32px] h-[32px] object-cover rounded-full '/>
                  <div className="info flex w-full flex-col gap-3">
                     <div className="name flex justify-between w-full">
                         <span className="name">Adeola Bats</span>
                         <span className="percentage">65%</span>
                     </div>
                     <div className="progressbar">
                        <div class="w-full bg-primary-50 flex items-center rounded-full h-[.5px] mb-4">
                        <div class=" bg-neutral-50 h-[6px] rounded-full w-[65%]"></div>
                     </div>
                     </div>
                   </div>
                </li>
                <li className='flex items-center w-full gap-3 py-1 text-primary-100'>
                  <img src={Student3} alt="" className='w-[32px] h-[32px] object-cover rounded-full '/>
                  <div className="info flex w-full flex-col gap-3">
                     <div className="name flex justify-between w-full">
                         <span className="name">Ying Toms</span>
                         <span className="percentage">24%</span>
                     </div>
                     <div className="progressbar">
                        <div class="w-full bg-primary-50 flex items-center rounded-full h-[.5px] mb-4">
                        <div class=" bg-neutral-50 h-[6px] rounded-full w-[24%]"></div>
                     </div>
                     </div>
                   </div>
                </li>
                <li className='flex items-center w-full gap-3 py-1 text-primary-100'>
                  <img src={Student4} alt="" className='w-[32px] h-[32px] object-cover rounded-full '/>
                  <div className="info flex w-full flex-col gap-3">
                     <div className="name flex justify-between w-full">
                         <span className="name">Tailor Hing</span>
                         <span className="percentage">72%</span>
                     </div>
                     <div className="progressbar">
                        <div class="w-full bg-primary-50 flex items-center rounded-full h-[.5px] mb-4">
                        <div class=" bg-neutral-50 h-[6px] rounded-full w-[72%]"></div>
                     </div>
                     </div>
                   </div>
                </li>
                <li className='flex items-center w-full gap-3 py-1 text-primary-100'>
                  <img src={Student5} alt="" className='w-[32px] h-[32px] object-cover rounded-full '/>
                  <div className="info flex w-full flex-col gap-3">
                     <div className="name flex justify-between w-full">
                         <span className="name">Smith Blacks</span>
                         <span className="percentage">45%</span>
                     </div>
                     <div className="progressbar">
                        <div class="w-full bg-primary-50 flex items-center rounded-full h-[.5px] mb-4">
                        <div class=" bg-neutral-50 h-[6px] rounded-full w-[45%]"></div>
                     </div>
                     </div>
                   </div>
                </li>
                <li className='flex items-center w-full gap-3 py-1 text-primary-100'>
                  <img src={Student6} alt="" className='w-[32px] h-[32px] object-cover rounded-full '/>
                  <div className="info flex w-full flex-col gap-3">
                     <div className="name flex justify-between w-full">
                         <span className="name">Smith Blacks</span>
                         <span className="percentage">16%</span>
                     </div>
                     <div className="progressbar">
                        <div class="w-full bg-primary-50 flex items-center rounded-full h-[.5px] mb-4">
                        <div class=" bg-neutral-50 h-[6px] rounded-full w-[16%]"></div>
                     </div>
                     </div>
                   </div>
                </li>
            </ul>
        </div>
        <button className='text-primary-100 text-base mt-4 flex gap-2 justify-center items-center py-2 w-full border-solid border-[.5px] rounded-md border-primary-100'><img src={More} alt="" className='w-8 flex items-center justify-center' /> <span>View All</span></button>

    </div>
  )
}

export default Progress