import React, { useState } from 'react'
import book1 from '../../assets/books/book1.jpg'
import book2 from '../../assets/books/book2.jpg'
import book3 from '../../assets/books/book3.jpg'
import vectorimg from '../../assets/website/blue-pattern.png'

const bgImageCss = {
  backgroundImage: `url(${vectorimg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}

export const heroImages = [
  {
    id: 1,
    img: book1,
    title: 'His life',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas temporibus soluta quam enim vero optio fugiat illo et"
  },
  {
    id: 2,
    img: book2,
    title: 'Who\'s there',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas temporibus soluta quam enim vero optio fugiat illo et"
  },
  {
    id: 3,
    img: book3,
    title: 'Lost Boy',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas temporibus soluta quam enim vero optio fugiat illo et"
  },
]

const Hero = ({handleOrderPopup}) => {
  const [imageId, setImageId] = useState(book1);
  const [heroText, setHeroText] = useState("His Life will forever be changed")
  const [description, setDescription] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quae odio repudiandae labore, totam nisi fugiat cumque deserunt neque magni.")
  
  return (
    <div className='min-h-[600px] sm:min-h-[700px] bg-gray-100 dark:bg-gray-950 flex justify-center items-center'
      style={bgImageCss}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4">
          {/* Text Content Section */}
          <div className='order-2 sm:order-1 dark:text-white space-y-4 pt-10'>
            <h1 data-aos="zoom-out"
              data-aos-duration="500"
              className='text-5xl xl:text-7xl font-bold pr-12'>{heroText}</h1>
            <p data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
              className='text-right text-primary font-semibold pr-4'>by Anonymous</p>
            <p data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >{description}</p>
            <button data-aos="zoom-in" 
              className='button' onClick={handleOrderPopup}>Order Now</button>
          </div>

          {/* Images Content Section */}
          <div className='relative order-1 sm:order-2 max-h-[450px] flex justify-center items-center gap-4 p-2'>
            <div className='overflow-hidden flex justify-center items-center hover:scale-105 duration-500'>
              <img src={imageId === 1 ? book1 : imageId === 2 ? book2 : book3} 
                alt="book-img" className='h-[450px] lg:h-[500px]'
                data-aos="zoom-in"
                data-aos-once="true"
              />
            </div>


            {/* 
              why we've translated this div -50%(-1/2) on y axis

              see -bottom-[40px] has no breakpoint so it will be applied at every breakpoint, it will just bring this div
              40px below its parent div,
              
              yes it is necessary but only till md breakpoint, from lg we don't need it but it will still be applied, 
              so to overcome this problem we've translated this div in y axis
            */}
            <div className='absolute flex flex-row lg:flex-col gap-2 -bottom-[40px]
            lg:-translate-y-1/2 lg:top-1/2 lg:-right-1 bg-opacity-60'>
              {
                heroImages.map((book) => (
                  <img key={book.id} src={book.img} alt="book_imgs"
                    data-aos="zoom-in"
                    data-aos-once="true"
                    onClick={() => {
                      setImageId(book.id);
                      setHeroText(book.title);
                      setDescription(book.description);
                    }}
                    className='max-w-[110px] max-h-[110px] object-contain inline-block hover:scale-105 transition-all duration-300'
                    // always give max height & width to the images so that they will adjust them automatically and won't exceed limit
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero