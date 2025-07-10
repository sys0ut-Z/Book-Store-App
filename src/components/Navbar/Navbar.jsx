import React from 'react'
import Logo from '../../assets/website/logo.png'
import { FaCaretDown } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode'

const bookMenu = [
  {
    id: 1,
    name : "Home",
    link : "/#"
  },
  {
    id: 2,
    name: "Best Seller",
    link : "/#services"
  }
]

const quickLinks = [
  {
    id: 1,
    name: "Trending Books",
    link : "/#trending-books"
  },
  {
    id: 2,
    name: "Best Selling",
    link : "/#best-selling"
  },
  {
    id: 3,
    name: "Authors",
    link : "/#authors"
  },

]
const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='shadow-lg dark:bg-gray-900'>
      <div className="container">
        <div className='flex justify-between items-center'>

          {/* Left Section */}
          <div>
            <a href="#" className='flex font-bold text-2xl sm:text-3xl gap-2 items-center'>
              <img src={Logo} className='max-w-12 xl:max-w-16'/>
              <span className='dark:text-white'>Books</span>
            </a>
          </div>

          
          {/* Right Section */}
          {/* why flex? : to align both links section & order cart button */}
          <div className='flex gap-6 items-center dark:text-white'>

            {/* DarkMode Section */}
            <DarkMode />
            
            {/* Links Section */}
            {/* HERE : don't increase the gap coz it will create a problem for dark mode button in md mode*/}
            <ul className='md:flex hidden items-center gap-4 text-lg xl:text-xl font-semibold'>
              {
                bookMenu.map((menu) => (
                  <li key={menu.id}>
                    <a href={menu.link} className='hover:text-primary px-4 transition-all duration-300'>{menu.name}</a>
                  </li>
                ))
              }

              {/* Quick Links Dropdown Section */}
              <li className='relative group'>
                <a href="/#quick-links" className='flex items-center gap-1 group-hover:text-primary'>
                  Quick Links
                  <FaCaretDown className='text-xl group-hover:-rotate-180 transition-all duration-500'/>
                </a>
                <div className='group-hover:block hidden absolute -left-9 z-10 bg-white p-2 pt-6
                  text-base xl:text-lg group-hover:shadow-lg dark:group-hover:bg-gray-800 rounded-md'>
                  <ul className='flex flex-col gap-2'>
                    {
                      quickLinks.map((data) => (
                        <li key={data.id} className='hover:bg-secondary/80 hover:text-white rounded-md'>
                          <a href={data.link} className='inline-block p-2'>{data.name}</a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </li>

            </ul>

            {/* Order Section */}
            <button className='text-base xl:text-lg bg-gradient-to-r from-primary to-secondary text-white px-6 py-2
              flex items-center gap-2 rounded-full hover:scale-105 transition-all duration-300'
              onClick={handleOrderPopup}
            >
              Order
              <FaCartShopping />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar