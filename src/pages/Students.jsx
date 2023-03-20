import React, {useState} from 'react'
import Arrowup from '../assets/icons/arrow-up-1.svg';
import Arrowdown from '../assets/icons/arrow-down.svg';
import Pagination from '../components/Pagination';
import Student from '../components/Student';

const Students = ({sdata}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

// Get current posts
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = sdata.slice(indexOfFirstPost, indexOfLastPost);

// Change page
const paginateFront = () => setCurrentPage(currentPage + 1);
const paginateBack = () => setCurrentPage(currentPage - 1);

  return (
    <div className='w-full'>
    <div className="content w-full flex">
        <div className="left w-0 sm:w-[20%]"></div>
        <div className="right w-full sm:w-[80%] flex flex-col justify-center mt-16 sm:mt-28 mb-5">
          <div className='flex flex-col sm:flex-row  gap-5 justify-between my-5 px-5 md:px-14'>
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
<div class="relative overflow-x-auto px-2 md:px-14">
    <table class="w-full text-base text-left table-auto border-spacing-y-12">
        <thead class="md:text-sm text-[10px] sm:text-xs  uppercase flex flex-col gap-8 w-[100%]">
            <tr className='bg-primary-50 text-primary-100 w-[100%] rounded-t-md flex justify-between'>
                <th scope="col" class=" md:px-6 py-3 px-2 md:py-5 flex-1">
                    Name
                </th>
                <th scope="col" class=" md:px-6 py-3 px-2 md:py-5 flex-1">
                    Course
                </th>
                <th scope="col" class=" md:px-6 py-3 px-2 md:py-5 flex-1">
                    Level
                </th>
                <th scope="col" class=" md:px-6 py-3 px-2 md:py-5 flex-1">
                    Guardian Contact
                </th>
                <th scope="col" class=" md:px-6 py-3 px-2 md:py-5 flex-1">
                    School Name
                </th>
            </tr>
        </thead>
        <div >
           <Student student={currentPosts}/>
          </div> 
    </table>
</div>
<Pagination
                postsPerPage={postsPerPage}
                totalPosts={sdata.length}
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

export default Students