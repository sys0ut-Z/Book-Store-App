import React from 'react'
import logo from '../../assets/website/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='py-6 bg-gray-200/80 dark:bg-gray-900 cursor-default'>
      <div className="container">
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'> {/* by default place-items-stretch hi hota hain */}

          {/* Text Details Section */}
          <div className='col-span-1 flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
              <img src={logo} className='max-w-8 sm:max-w-10'/>
              <span className='font-bold text-3xl lg:text-4xl dark:text-white'>Books Store</span>
            </div>
            <p className='pr-8 text-gray-700 dark:text-gray-400 text-xs sm:text-sm text-pretty'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quaerat quisquam minus debitis iure cupiditate?
            </p>
            <p className='flex items-center gap-2 dark:text-gray-300 text-base'>
              <FaLocationArrow /> 
              Ahmedabad, Gujarat
            </p>
            <p className='flex items-center gap-2 dark:text-gray-300 text-base'>
              <FaPhoneAlt /> 
              +91 1254367896
            </p>
            <div className='flex gap-4'>
              {
                [<FaInstagram />, <FaFacebook />, <FaLinkedin />].map((icon, i) => (
                  <a href="#" className='hover:text-secondary dark:hover:text-secondary hover:scale-110 transition-all duration-500
                  text-2xl dark:text-white' key={i}>{icon}</a>
                ))
              }
            </div>
          </div>

          {/* Links Section */}
          <div className='col-span-2 grid grid-cols-2 gap-8'>
            <div className='space-y-4'>
              <h1 className='font-bold text-3xl lg:text-4xl dark:text-white'>Important Links</h1>
              <ul className='flex flex-col gap-4'>
                {
                  ["Home", "About", "Contact", "Blog"].map((data, i) => (
                    <li key={i}>
                      <a href="#" className='text-lg lg:text-xl text-gray-700 dark:text-gray-300/80 space-x-2'>
                        <span className='text-xl lg:text-2xl'>&#11162;</span>
                        <span className='hover:text-secondary'>{data}</span>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className='space-y-4'>
              <h1 className='font-bold text-3xl lg:text-4xl dark:text-white'>Links</h1>
              <ul className='flex flex-col gap-4'>
                {
                  ["Home", "About", "Contact", "Blog"].map((data, i) => (
                    <li key={i}>
                      <a href="#" className='text-lg lg:text-xl text-gray-700 dark:text-gray-300/80 space-x-2'>
                        <span className='text-xl lg:text-2xl'>&#11162;</span>
                        <span className='hover:text-secondary'>{data}</span>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          {/* Location Links */}
          <div className='space-y-4'>
            <h1 className='font-bold text-3xl lg:text-4xl dark:text-white'>Locations</h1>
            <ul className='flex flex-col gap-4'>
              {
                ["Home", "About", "Contact", "Blog"].map((data, i) => (
                  <li key={i}>
                    <a href="#" className='text-lg lg:text-xl text-gray-700 dark:text-gray-300/80 space-x-2'>
                      <span className='text-xl lg:text-2xl'>&#11162;</span>
                      <span className='hover:text-secondary'>{data}</span>
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer