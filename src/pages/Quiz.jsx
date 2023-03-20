import React from 'react';
import More from '../assets/icons/more.svg';

const Quiz = ({bdata}) => {
  return (
    <div className='w-full'>
    <div className="content w-full flex">
        <div className="left w-0 sm:w-[20%]"></div>
        <div className="right w-full sm:w-[80%] mt-20 sm:mt-28 p-6">
          <div className='w-[100%] px-0 sm:px-8'>
            <div className='bg-primary-300 flex items-center h-[122px] w-full text-primary-50 shadow-md p-4 rounded-md'>
              <h1 className='text-[24px]'>Quiz/Assignment</h1>
            </div>
            <div className='flex flex-col sm:flex-row gap-5 mt-8 justify-between h-fit'>
                <div className='flex flex-col py-[13px] px-[18px] mt-[15px] w-full sm:w-[48%] rounded-lg shadow-md'>
                  <h2 className='text-primary-300 text-base mb-[29px]'>Assignments</h2>
                  <div className=''>
                    {bdata.map(assignment => {
                      return (
                        <div key={assignment.id} className='mb-6'>
                          <h3 className='text-primary-100 w-full text-base'>{assignment.name}</h3>
                          <p className='text-primary-500 text-base'>submissions</p>
                          <p className='text-primary-500 text-xl'>{assignment.submission}</p>
                        </div>
                      )
                    })}
                  </div>
                  <button className='flex justify-center border border-primary-300 rounded-sm w-full py-2 items-center mb-3'><img src={More} alt='' /><p className='text-primary-300 text-base'>View More</p></button>
                </div>
                <div className='w-full sm:w-[48%] h-[533px] mt-[15px] relative rounded-lg shadow-md'>
                  <h2 className='text-primary-300 justify-self-start self-start text-base p-7'>Assignments</h2>
                  <p className='text-primary-100 text-base absolute w-full h-full top-0 left-0 flex justify-center items-center'>No quiz record yet</p>
                </div>
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default Quiz