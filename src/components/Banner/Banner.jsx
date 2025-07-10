import React from 'react'
import libraryImg from '../../assets/website/library.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'
import { FaTruckFast } from 'react-icons/fa6'

const bannerFeatures = [
  {
    id: 1,
    icon : (
      <GrSecure className='text-2xl lg:text-3xl h-12 w-12 rounded-full bg-violet-100 dark:bg-violet-300 p-2'/>
    ),
    text: 'Quality Books' 
  },
  {
    id: 2,
    icon : (
      <IoFastFood className='text-2xl lg:text-3xl h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-300 p-2'/>
    ),
    text: 'Fast Delivery' 
  },
  {
    id: 3,
    icon : (
      <GiFoodTruck className='text-2xl lg:text-3xl h-12 w-12 rounded-full bg-green-100 dark:bg-green-300 p-2'/>
    ),
    text: 'Easy Payment Method' 
  },
  {
    id: 4,
    icon : (
      <FaTruckFast className='text-2xl lg:text-3xl h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-300 p-2'/>
    ),
    text: 'Get Offers on Books' 
  },
]

const Banner = () => {
  return (
    <div className='py-10 dark:bg-gray-900'>
      <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-6 md:gap-4'>
          {/* Image Section */}
          <div>
            <img src={libraryImg} alt="library-img" 
              className='max-w-[400px] block mx-auto h-[350px] w-full img-shadow dark:drop-shadow-none'
            />
          </div>

          {/* Text Content Section */}
          <div className='flex flex-col justify-center gap-6 sm:pt-0'>
            <h1 className='text-3xl sm:text-4xl font-bold dark:text-white'>Library at your fingertips</h1>
            <p className='text-md text-gray-500 tracking-wide leading-5 dark:text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi similique magnam nostrum necessitatibus sequi harum fuga tempore rem modi. Deserunt?</p>

            <div className='flex flex-col gap-4'>
              <div className='space-y-4'>
                {
                  bannerFeatures.map((feature) => (
                    <div key={feature.id} className='flex items-center gap-4'>
                      {feature.icon} 
                      <span className='dark:text-gray-300'>{feature.text}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner