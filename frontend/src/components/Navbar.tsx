// import React from "react"
import { useEffect, useState } from "react"

function Navbar() {
    const [theme, setTheme] = useState("light")
    
    useEffect(() => {
      if(theme === 'dark') {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    },[theme])
  
    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark")
    }

  return (
    <div className="bg-black dark:bg-white w-screen flex flex-row-reverse ">
      <div className="self-end">
        <button onClick={handleThemeSwitch} className=' bg-gray-200 p-4 rounded-3xl'>
          Dark Mode
        </button>
      </div>
    </div>
  )
}

export default Navbar