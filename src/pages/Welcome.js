import React from 'react'
import logo from '../assets/images/logos/white.png'
import backgroundImg from '../assets/images/background_images/page1.jpg'
import '../assets/css/global.css'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow-right.svg' 
import home from '../assets/icons/home-2.svg' 

const Welcome = () => {
  return (
    <div className=' h-screen' style={{backgroundImage: `url(${backgroundImg})`,backgroundSize:'cover'}}>
      <div className='bg-dblue-900 bg-opacity-70 h-full flex flex-col  md:flex-row items-center justify-between px-10 md:px-20'>
        <div className='mt-20 md:mt-0'>
          <img src={logo} alt="background image" />
        </div>
        <div className='flex my-20 md:my-0 md:w-1/2 flex-col bg-primary-200 bg-opacity-30 h-full justify-center md:px-10 space-y-12 '>
          <div className='px-10 space-y-5'>
            <h1 className='text-white-30 h3'>Welcome</h1>
            <p className='text-white-30 body'>Get ready to explore the exciting world of
            technology and learn new skills that will help you shape your future.</p>
          </div>
          <div className='flex flex-col px-10 space-y-3 items-center'>

            <Link to='/signup' className='text-white-30 rounded-lg py-1 w-full bg-primary-200'>
                <div className='flex justify-center space-x-2'>
                  <img src={home} alt="" />
                  <div>
                    Let's Get Started
                  </div>
                  <img src={arrow} alt="" />

                </div>
              
              </Link>
            
            <small className='text-white-30 '>Already have an account! <Link to='/login' className='text-primary-200'>Log in</Link></small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
