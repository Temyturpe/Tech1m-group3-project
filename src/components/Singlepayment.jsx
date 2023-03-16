import React from 'react'

const Singlepayment = ({info}) => {
  return (
    <div className='flex shadow-sm items-center p-1 sm:p-3 bg-white-20 mb-4' key={info.id}>
    <div className='flex items-center w-full'>
      <div className='w-[76px] h-[72px] hidden sm:block'>
        <img src={info.img} className='w-full h-full rounded-[4px] object-cover' alt='' />
      </div>
      <div className='flex items-center w-full justify-between'>
        <div className='flex ml-[8px] w-[243px] flex-col'>
          <h2 className='sm:text-base text-sm text-primary-500 font-medium'>{info.student}</h2>
          <p className='sm:text-base text-sm text-primary-500 font-medium '>{info.title}</p>
          <p className='text-neutral-60 font-medium text-xs sm:text-xs'>{info.invoice}</p>
        </div>
        <div className='flex flex-col'>
          <p className='sm:text-base text-sm text-neutral-50 font-normal'>{info.price}</p>
          <p className='sm:text-base text-sm text-neutral-50 font-normal'>{info.status}</p>
          <p className='sm:text-base text-sm text-neutral-50 font-normal'>{info.paymentDate}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Singlepayment