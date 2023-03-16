import React from 'react'
import logo from '../assets/images/logos/blue.png'
import backgroundImg from '../assets/images/background_images/page3.jpg'
import '../assets/css/global.css'
import { Link, useNavigate } from 'react-router-dom'
import SignInForm from './SignInForm'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../contexts/AuthContext'
import { useState } from 'react'
import Welcome from './Welcome'



const Login = () => {
  const [error,setError]=useState('')
  const {login} =useAuth()
  const history = useNavigate()
  
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/(?=.*[0-9])/, "Password must contain a number.")
  });
  function getStyles(errors, fieldName, touched) {
    if (errors, fieldName,touched) {
      return {
        border: '1px solid red'
      }
    }  
  }

  const disable= function (isSubmitting,dirty) {
    if (isSubmitting || Formik.dirty) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className=' h-screen flex-col flex lg:flex-row w-screen' >
      <div className=' w-screen h-[50%] lg:h-full lg:w-1/2 flex flex-col  lg:flex-row items-center justify-between  'style={{backgroundImage: `url(${backgroundImg})`,backgroundSize:'cover'}}>     
      </div>
      <div className='flex flex-col bg-primary-100 bg-opacity-50 h-full justify-center px-10  lg:w-1/2'>
           <Formik
              initialValues={{
                email: '',
                password:'',
              }}
              validationSchema={SignupSchema}
              onSubmit={async(values,errors)=>{
                console.log(values)
                   console.log(errors)
                    try {
                        setError('')
                        await login(values.email,values.password)
                        history('/in/home')
                      } catch{
                        setError('Invalid password or username')
                    }
                    console.log(values)
               }}
           >
              {({ errors, touched, isSubmitting,isValid }) => (
                <Form className="flex flex-col justify-center items-center w-[100%] bg-white-30 rounded-lg p-10 lg:p-0 gap-y-[1rem] h-[90%] w-[70%] m-auto">
                  <div className=' w-[7rem] '>
                      <img src={logo} alt="background image"/>
                  </div>
                  <p className='text-red h6'>{error}</p>
                  
                    <SignInForm 
                      title='Email Address'
                      inputType='email'
                      placeholder='Adams@gmail.com'
                      smalltext='Enter your valid email'
                      name='email'
                      isValid={Formik.errors}
                      style={getStyles(touched.email, "email", errors.email)}
        
                      />
                      {errors.email && touched.email ? (
                        <p className='text-xs text-error w-[90%] grid justify-left '>Please enter the correct email format</p>):
                        <p className='text-xs text-neutral-50 w-[90%] grid justify-left '>Enter your valid email</p>
                      }
                      <SignInForm 
                      title='Password'
                      inputType='password'
                      placeholder='......'
                      name='password'
                      style={getStyles(touched.password, "password", errors.password)}
                      smalltext='Enter strong password'
                      />
                      {errors.password && touched.password ? (
                        <p className='text-xs text-error w-[90%] grid justify-left '>{errors.password}</p>):
                        <p className='text-xs text-neutral-50 w-[90%] grid justify-left '>Enter strong password</p>
                      }
                      <div className='w-[100%] md:w-[90%]  '>
                      <div className="flex mb-1 justify-between">
                          <label htmlFor="" className='text-primary-500 text-xs'>Role</label>
                          <p className='text-primary-200 text-xs'>Details</p>
                      </div>
                      <select name="" id="" className=' items-center bg-white-20 p-1.5 text-primary-200 text-sm px-4 w-full'>
                          <option value="">Instructor</option>
                          <option value="">Recruiter</option>
                          <option value="">student</option>
                      </select>
                      <p className='text-xs text-neutral-50'>Select your role</p>

                      </div>

                      <button type='submit' disabled={isSubmitting || !isValid} className=' py-1 disabled:bg-primary-100 hover:bg-primary-500 bg-primary-200 text-white-10 w-[100%] md:w-[90%]'>Log in</button>
                      <p className='text-xs text-center md:col-span-2'>Don't have an account! <Link to='/signup' className='text-primary-200 hover:text-primary-500'>Sign up</Link></p>
                      <Link to='/forgotPassword' className=' text-xs text-center text-neutral-70 hover:text-neutral-200'>Forgot Password?</Link>
                </Form>
                
              )}
           </Formik>
        </div>
    </div>
  )
}

export default Login