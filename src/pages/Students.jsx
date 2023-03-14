import React from 'react'
import Arrowup from '../assets/icons/arrow-up-1.svg';
import Arrowdown from '../assets/icons/arrow-down.svg';

const Students = ({sdata}) => {
  return (
    <div className='w-full'>
    <div className="content w-full flex">
        <div className="left w-[20%]"></div>
        <div className="right w-[80%] flex flex-col justify-center mt-28 mb-5">
          <div className='flex justify-between my-5 px-14'>
                <div className='max-w-fit'>
                  <p className='text-primary-75 text-[16px]'>Home/<span className='text-primary-500 text-[16px]'>Students</span></p>
                </div> 
                <div className='flex justify-evenly space-x-4 p-2 bg-white-10'>
                  <div className='flex justify-between cursor-pointer items-center space-x-2'>
                    <p className='text-sm text-primary-500'>STUDENTS</p>
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
                    <p className='text-sm text-neutral-50'>STATUS</p>
                    <div className='flex flex-col justify-center items-center'>
                      <img src={Arrowup} className='w-3 h-3' alt='' />
                      <img src={Arrowdown} className='w-3 h-3' alt='' />
                    </div>
                  </div>
                </div>
          </div>
<div className="studenttab">
  
<div class="relative overflow-x-auto px-14">
    <table class="w-full text-base text-left table-auto border-spacing-y-12">
        <thead class="text-sm  uppercase flex flex-col gap-8 w-[100%]">
            <tr className='bg-primary-50 text-primary-100 w-[100%] rounded-t-md flex justify-between'>
                <th scope="col" class="px-6 py-5 flex-1">
                    Name
                </th>
                <th scope="col" class="px-6 py-5 flex-1">
                    Course
                </th>
                <th scope="col" class="px-6 py-5 flex-1">
                    Level
                </th>
                <th scope="col" class="px-6 py-5 flex-1">
                    Guardian Contact
                </th>
                <th scope="col" class="px-6 py-5 flex-1">
                    School Name
                </th>
            </tr>
        </thead>
        {sdata.map((student) => {
          return (
          <tbody className='flex flex-col gap-4 w-[100%] mt-3 ' key={student.id}>
          <tr class="bg-white-20 text-primary-500 w-full flex justify-between rounded-md">
           <td class="px-6 py-4 flex-1 capitalize">
             {student.name}
          </td>
          <td class="px-6 py-4 flex-1">
         {student.course}
         </td>
          <td class="px-6 py-4 flex-1 capitalize">
          {student.level}
          </td>
         <td class="px-6 py-4 flex-1">
         {student.guardian}
         </td>
         <td class="px-6 py-4 flex-1">
          {student.school}
          </td>
        </tr>
       </tbody>
          )
        })}
       
    </table>
</div>

</div>
        </div>
    </div>
</div>
  )
}

export default Students