import React from 'react'
import book1 from '../../assets/books/book1.jpg'
import book2 from '../../assets/books/book2.jpg'
import book3 from '../../assets/books/book3.jpg'
import { FaStar } from 'react-icons/fa6'

const topBooks = [
  {
    id: 1,
    img : book1,
    name: 'Who\'s there',
    title : 'Someone',
    ratings : 5,
  },
  {
    id: 2,
    img : book2,
    name: 'His Life',
    title : 'John',
    ratings : 4.5,
  },
  {
    id: 3,
    img : book3,
    name: 'Lost Boys',
    title : 'Lost Girl',
    ratings : 4.7,
  },
  {
    id: 4,
    img : book2,
    name: 'His Life',
    title : 'John',
    ratings : 4.4,
  },
  {
    id: 5,
    img : book1,
    name: 'Who\'s there',
    title : 'Someone',
    ratings : 4.5,
  },
  {
    id: 6,
    img : book3,
    name: 'Lost Boys',
    title : 'Lost Girl',
    ratings : 4.8,
  },
]

const BooksCard = () => {
  return (
    <div className='py-8 sm:py-10 dark:bg-gray-900'>
      <div className="container">
        <div>
          {/* Heading Section */}
          <div className='flex flex-col items-center gap-2 pb-4'>
            <p className='text-primary'>Top Books for you</p>
            <h1 className='text-3xl lg:text-4xl font-bold dark:text-white'>Top Books</h1>
            <p className='px-6 dark:text-gray-400 text-pretty text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste labore quos vero mollitia eligendi beatae!</p>
          </div>

          {/* Books Images Section */}
          <div className='pt-4'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
              {
                topBooks.map((book) => (
                  <div className='p-2' key={book.id}>
                    <div>
                      <img src={book.img} alt="books-img" className='max-h-[260px] rounded-lg'/>
                    </div>

                    <div className='flex flex-col items-start py-2'>
                      <h1 className='font-bold text-xl lg:text-2xl dark:text-white'>{book.name}</h1>
                      <p className='text-base lg:text-md dark:text-gray-400'>{book.title}</p>
                      <p className='flex items-center gap-1 font-semibold dark:text-white'>
                        <FaStar className='text-yellow-400'/>{book.ratings}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='text-center pt-6'>
            <button className='button'>
              View All Books
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BooksCard