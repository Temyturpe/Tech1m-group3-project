import React from 'react'

const Singlestudent = ({student}) => {
  return (
    <div>
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
 </tbody></div>
  )
}

export default Singlestudent