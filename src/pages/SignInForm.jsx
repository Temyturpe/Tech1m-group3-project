import React from 'react'
import '../assets/css/global.css'
import { Field } from 'formik';
import { CiSearch } from "react-icons/ci";


const SignInForm = (props) => {
  return (
    <div className="w-[100%] md:w-[90%] ">
                <div className="flex mb-1 justify-between">
                    <label htmlFor="" className='text-primary-500 text-xs'>{props.title}</label>
                    <p className='text-primary-200 text-xs'>Details</p>
                </div>
                <Field style={props.style} type={props.inputType} placeholder={props.placeholder} ref={props.ref} name={props.name} className='bg-white-20 w-full text-primary-200 text-sm px-4 py-1.5'/>
                
                
    </div>
  )
}

export default SignInForm
