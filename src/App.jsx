import { useEffect, useState } from "react"
import AppStore from "./components/AppStore/AppStore"
import Banner from "./components/Banner/Banner"
import BestBooks from "./components/BestBooks/BestBooks"
import BooksCard from "./components/BooksCard/BooksCard"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Testimonials from "./components/Testimonials/Testimonials"

// import AOS
import AOS from "aos"
import "aos/dist/aos.css"
import Popupbox from "./components/Popupbox/Popupbox"

function App() {

  const [orderPopup, setOrderPopup] = useState(false);

  // handler function
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh()
  })
  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <BestBooks handleOrderPopup={handleOrderPopup} />
      <Banner />
      <AppStore />
      <BooksCard />
      <Testimonials />
      <Footer />
      <Popupbox orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default App
