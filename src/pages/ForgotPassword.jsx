import React from 'react'
import logo from '../assets/images/logos/blue.png'
import backgroundImg from '../assets/images/background_images/forgotpassword.jpg'
import '../assets/css/global.css'
import { Link } from 'react-router-dom'
import SignInForm from './SignInForm'
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../contexts/AuthContext'
import { useState } from 'react'

const ForgotPassword = () => {
     const [error,setError]=useState('')
     const [success,setSuccess]=useState('')
     const {resetPassword} =useAuth()

     const SignupSchema = Yup.object().shape({  
        email: Yup.string().email('Invalid email').required('Required'),
      });
      function getStyles(errors, fieldName, touched) {
        if (errors, fieldName,touched) {
          return {
            border: '1px solid red'
          }
        }  
      }
  return (
    <div className=' h-screen w-screen'  style={{backgroundImage: `url(${backgroundImg})`,backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
      <div className='bg-dblue-900 bg-opacity-70 h-full flex flex-col  md:flex-row items-center justify-between px-20'>
        <Formik
             initialValues={{
                email: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={async(values,{resetForm})=>{
                console.log(values)
                   setSuccess('')
                    try {
                        setError('')
                        await resetPassword(values.email)
                        resetForm({values:''})
                        setSuccess('An email with password reset link will be sent to your registered email address')
                      } catch{
                        setError('User does not exist')
                    }
                    console.log(values)
               }}
        >
            {({errors,touched, isSubmitting,isValid})=>(
                <Form className="flex flex-col justify-center items-center w-[100%] bg-white-30 gap-y-[1rem] h-[50%] w-[30%] m-auto">
                    <div className=' w-[7rem] '>
                        <img src={logo} alt="background image"/>
                    </div>
                    {error?(
                        <p className='text-error text-center text-xs w-[20rem]'>{error}</p>
                    ):null}
                    {success?(
                    <p className='text-success text-center text-xs w-[20rem]'>{success}</p>
                ):null}
                    <div className='w-[100%] flex flex-col items-center'>

                        <SignInForm 
                            title='Email Address'
                            inputType='email'
                            name='email'
                            isValid={Formik.errors}
                            style={getStyles(touched.email, "email", errors.email)}
                            placeholder='Adams@gmail.com'
                            smalltext='Enter your valid email'
                        />
                        {errors.email && touched.email ? (
                            <p className='text-xs text-error w-[90%] grid justify-left '>{errors.email}</p>):
                            <p className='text-xs text-neutral-50 w-[90%] grid justify-left '>Enter your valid email</p>
                        }
                    </div>
                    <button type='submit' disabled={isSubmitting || !isValid} className=' py-1 bg-primary-200 text-white-10 w-[100%] disabled:bg-primary-100 hover:bg-primary-500 md:w-[90%]'>Reset Password</button>
                    <p className='text-xs text-center md:col-span-2'>Don't have an account! <Link to='/signup' className='text-primary-200 hover:text-primary-500'>Sign up</Link></p>
                </Form>

            )}
        </Formik>
      </div>
    </div>
  )
}

export default ForgotPassword
