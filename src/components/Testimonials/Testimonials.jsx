import React from 'react'
import Slider from 'react-slick'

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cumque earum quisquam sint, saepe reprehenderit corporis fuga temporibus ipsum in?",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cumque earum quisquam sint, saepe reprehenderit corporis fuga temporibus ipsum in?",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Sachin",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cumque earum quisquam sint, saepe reprehenderit corporis fuga temporibus ipsum in?",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Raj",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cumque earum quisquam sint, saepe reprehenderit corporis fuga temporibus ipsum in?",
    img: "https://picsum.photos/104/104",
  },
]

const sliderConfig = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  cssEase: 'linear',
  
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ]
}

const Testimonials = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-800'>
      <div className="container">

        {/* Header Section */}
        <div className='flex flex-col items-center gap-2 pb-4'>
          <p className='text-primary'>What Our Customer say About Us</p>
          <h1 className='text-3xl lg:text-4xl font-bold dark:text-white'>Testimonials</h1>
          <p className='px-6 dark:text-gray-400 text-pretty text-center'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste labore quos vero mollitia eligendi
          </p>
        </div>

        {/* Testimonial Cards Section */}
        <div className="pt-8">
          <Slider {...sliderConfig}>
            {
              testimonialData.map((data) => (
                <div key={data.id}>
                  <div className='flex flex-col gap-4 shadow-lg rounded-xl bg-primary/10 dark:bg-gray-900/50 mx-4 px-6 py-8'>
                    <div>
                      <img src={data.img} alt="profile-pic" className='rounded-full'/>
                    </div>
                    <div>
                      <div>
                        <p className='text-gray-500 dark:text-gray-400 text-base sm:text-md'>{data.text}</p>
                        <h1 className='text-2xl sm:text-3xl font-medium dark:text-white'>{data.name}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials