import React, {useState} from 'react';
import Arrowup from '../assets/icons/arrow-up-1.svg';
import Arrowdown from '../assets/icons/arrow-down.svg';
import Payments from '../components/Payments';
import Pagination from '../components/Pagination';

const Payment = ({pdata}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = pdata.slice(indexOfFirstPost, indexOfLastPost);

// Change page
const paginateFront = () => setCurrentPage(currentPage + 1);
const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <div className='w-full mt-24'>
    <div className="content w-full flex">
        <div className="left w-0 sm:w-[20%]"></div>
        <div className="right w-full sm:w-[80%] px-5 md:px-14">
              <div className='flex flex-col sm:flex-row gap-5 justify-between my-5 '>
                <div className='max-w-fit'>
                  <p className='text-primary-75 text-[16px]'>Home/<span className='text-primary-500 text-[16px]'>Payments</span></p>
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
                    <p className='text-sm text-neutral-50'>AMOUNT</p>
                    <div className='flex flex-col justify-center items-center'>
                      <img src={Arrowup} className='w-3 h-3' alt='' />
                      <img src={Arrowdown} className='w-3 h-3' alt='' />
                    </div>
                  </div>
                  <div className='flex justify-between cursor-pointer items-center space-x-2'>
                    <p className='text-sm text-neutral-50'>DATE</p>
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
              <div>
                  <div className=''>
                       <Payments  info = {currentPosts}/>
                  </div>
                  <Pagination
                postsPerPage={postsPerPage}
                totalPosts={pdata.length}
                paginateBack={paginateBack}
                paginateFront={paginateFront}
                currentPage={currentPage}
            />
              </div>
        </div>
    </div>
</div>
  )
}

export default Payment