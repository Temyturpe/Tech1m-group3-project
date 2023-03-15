import React from 'react'
import SingleCourse from './SingleCourse';

const Courses = ({course}) => {
  return (
    <div>
         <div className='my-5 px-14 grid grid-cols-3 grid-rows-2 gap-6 '>
                {course.map((course) => {
                    return <SingleCourse course={course} key={course.id} />;
                })}
            </div>
    </div>
  )
}

export default Courses