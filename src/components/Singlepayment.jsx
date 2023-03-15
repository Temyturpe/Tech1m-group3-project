import React from 'react'

const Singlepayment = ({info}) => {
  return (
    <div className='flex shadow-sm items-center p-3 bg-white-20 mb-4' key={info.id}>
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
}

export default Singlepayment