import React from 'react'
import { heroImages } from '../Hero/Hero'
import { FaStar } from 'react-icons/fa'

const BestBooks = () => {
  return (
    <div className='flex justify-center items-center py-6 dark:bg-gray-950'>
      <div className="container">
        <div className='p-1'>
          {/* Heading Section */}
          <div className='flex flex-col items-center'>
            <p className='text-md text-secondary font-semibold'>Trending Books</p>
            <h1 className='font-bold text-3xl xl:text-4xl dark:text-white'>Best Books</h1>
            <p className='px-8 text-pretty max-w-[600px] text-center dark:text-gray-300/80'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita sapiente molestias vero repellat quae!
            </p>
          </div>

          {/* Images Section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 pt-6 cursor-default dark:text-white'>
            {
              heroImages.map((data) => (
                <div className='group py-2 sm:py-4 flex flex-col items-center gap-3 shadow-xl rounded-xl bg-white dark:bg-gray-800 hover:bg-gradient-to-r hover:from-primary hover:to-secondary' key={data.id}>
                  <div className='py-2 px-4'>
                    <img src={data.img} alt="book_img" className='max-h-[260px]'/>
                  </div>

                  <div className='flex flex-col items-center group-hover:text-white space-y-2'>
                    <p className='flex gap-1'>
                      {
                        Array.from({length: 4}).map((_, i) => <FaStar key={i} className='text-yellow-400' />)
                      }
                    </p>
                    <h1 className='font-bold text-2xl xl:text-3xl'>{data.title}</h1>
                    <p className='line-clamp-2 text-pretty px-6 text-center dark:text-gray-300'>{data.description}</p>
                  </div>

                  {/* if you apply gradient bg color then on hover it won't change it's color, so use single color */}
                  <button className='px-4 xl:px-6 py-2 bg-primary text-white 
                  rounded-full font-semibold cursor-pointer group-hover:bg-white/80 group-hover:text-secondary'>
                    Order Now
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestBooks