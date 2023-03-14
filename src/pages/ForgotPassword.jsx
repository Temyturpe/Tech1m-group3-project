import React from 'react'
import logo from '../assets/images/logos/blue.png'
import backgroundImg from '../assets/images/background_images/forgotpassword.jpg'
import '../assets/css/global.css'
import { Link } from 'react-router-dom'
import SignInForm from './SignInForm'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ForgotPassword = () => {
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
            onSubmit={values => {
                // Link to the HomePage
                console.log(values);
            }}
        >
            {({errors,touched})=>(
                <Form className="flex flex-col justify-center items-center w-[100%] bg-white-30 gap-y-[1rem] h-[50%] w-[30%] m-auto">
                    <div className=' w-[7rem] '>
                        <img src={logo} alt="background image"/>
                    </div>
                    <p className='text-error text-center text-xs w-[20rem]'>An email with password reset link will be sent to you
        registered email address. If it exists on our system.</p>
                    <div className='w-[100%] flex flex-col items-center'>

                        <SignInForm 
                            title='Email Address'
                            inputType='email'
                            name='email'
                            style={getStyles(touched.email, "email", errors.email)}
                            placeholder='Adams@gmail.com'
                            smalltext='Enter your valid email'
                        />
                        {errors.email && touched.email ? (
                            <p className='text-xs text-error w-[90%] grid justify-left '>{errors.email}</p>):
                            <p className='text-xs text-neutral-50 w-[90%] grid justify-left '>Enter your valid email</p>
                        }
                    </div>
                    <button className=' py-1 bg-primary-200 text-white-10 w-[100%] md:w-[90%]'>Log in</button>
                    <p className='text-xs text-center md:col-span-2'>Don't have an account! <Link to='/signup' className='text-primary-200'>Sign up</Link></p>
                </Form>

            )}
        </Formik>
      </div>
    </div>
  )
}

export default ForgotPassword
