import React from 'react'
import Singlestudent from './Singlestudent'

const Student = ({student}) => {
  return (
    <div> {student.map((student) => {
        return (
        <Singlestudent student={student} key={student.id}/>
        )
      })}</div>
  )
}

export default Student