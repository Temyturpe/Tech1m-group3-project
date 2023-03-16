import React from 'react'

const Singlestudent = ({student}) => {
  return (
    <div>
        <tbody className='flex flex-col gap-4 w-[100%] mt-3 ' key={student.id}>
    <tr class="bg-white-20 text-primary-500 w-full flex md:text-base sm:text-sm text-[11px] justify-between rounded-md">
     <td class="md:px-6 px-2  py-3 md:py-5  flex-1 capitalize">
       {student.name}
    </td>
    <td class="md:px-6 px-2 py-3 md:py-5  flex-1">
   {student.course}
   </td>
    <td class="md:px-6 px-2 py-3 md:py-5  flex-1 capitalize">
    {student.level}
    </td>
   <td class="md:px-6 py-3 px-2 md:py-5  flex-1">
   {student.guardian}
   </td>
   <td class="md:px-6 py-3 px-2 md:py-5  flex-1">
    {student.school}
    </td>
  </tr>
 </tbody></div>
  )
}

export default Singlestudent