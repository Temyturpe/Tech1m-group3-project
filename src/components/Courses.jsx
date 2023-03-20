import React from 'react'
import SingleCourse from './SingleCourse';

const Courses = ({course}) => {
  return (
    <div>
         <div className='my-5 px-5 md:px-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-6 '>
                {course.map((course) => {
                    return <SingleCourse course={course} key={course.id} />;
                })}
            </div>
    </div>
  )
}

export default Courses