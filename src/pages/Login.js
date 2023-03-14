import React from 'react'
import logo from '../assets/images/logos/blue.png'
import backgroundImg from '../assets/images/background_images/page3.jpg'
import '../assets/css/global.css'
import { Link } from 'react-router-dom'
import SignInForm from './SignInForm'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
  .required("No password provided.")
  .min(8, "Password is too short - should be 8 chars minimum.")
  .matches(/(?=.*[0-9])/, "Password must contain a number.")
});

const Login = () => {
  function getStyles(errors, fieldName, touched) {
    if (errors, fieldName,touched) {
      return {
        border: '1px solid red'
      }
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
              onSubmit={values => {
                // Link to the HomePage
                console.log(values);
              }}
           >
              {({ errors, touched }) => (
                <Form className="flex flex-col justify-center items-center w-[100%] bg-white-30 rounded-lg p-10 lg:p-0 gap-y-[1rem] h-[90%] w-[70%] m-auto">
                  <div className=' w-[7rem] '>
                      <img src={logo} alt="background image"/>
                  </div>
                    <SignInForm 
                      title='Email Address'
                      inputType='email'
                      placeholder='Adams@gmail.com'
                      smalltext='Enter your valid email'
                      name='email'
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

                      <button type='onSubmit' className=' py-1 bg-primary-200 text-white-10 w-[100%] md:w-[90%]'>Log in</button>
                      <p className='text-xs text-center md:col-span-2'>Don't have an account! <Link to='/signup' className='text-primary-200'>Sign up</Link></p>
                      <Link to='/forgotPassword' className=' text-xs text-center text-neutral-70'>Forgot Password?</Link>
                </Form>
                
              )}
           </Formik>
        </div>
    </div>
  )
}

export default Login
