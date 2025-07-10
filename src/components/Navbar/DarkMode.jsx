import React, { useEffect, useState } from 'react'
import darkModeBtn from '../../assets/website/dark-mode-button.png'
import lightModeBtn from '../../assets/website/light-mode-button.png'

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark" ? "dark" : "light");

  const htmlElement = document.documentElement;

  useEffect(() => {
    if(theme === "dark"){
      htmlElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    else{
      htmlElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme])

  return (
    <div className='relative'>
      <img src={lightModeBtn} className={`absolute top-0 left-0 z-20 w-16 cursor-pointer 
      ${theme === "light" ? "opacity-100" : "opacity-0"} duration-300`} alt="lightmode-img"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <img src={darkModeBtn} className={`w-16 cursor-pointer 
      ${theme === "dark" ? "opacity-100" : "opacity-0"} duration-300`}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")} alt="darkmode-img"
      />
    </div>
  )
}

export default DarkMode