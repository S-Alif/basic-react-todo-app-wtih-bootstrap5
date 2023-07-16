/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";


const Header = ({ appName }) => {

  const [theme, setTheme] = useState(() => {
    if(localStorage.getItem('theme')){
      return JSON.parse(localStorage.getItem('theme'))
    }
    else{
      return "light"
    }
  })

  let themeToggler = (mode) => {
    setTheme(mode)
    document.querySelector('html').setAttribute('data-bs-theme', mode)
  }

  // save tasks on localStorage
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  })

  // get tasks from localStorage
  useEffect(() => {
    const mode = JSON.parse(localStorage.getItem('theme'))
    if (mode) {
      setTheme(mode)
      document.querySelector('html').setAttribute('data-bs-theme', mode)
    }
  }, []);

  return (
    <>
      <header className="">
        <div className="container">
          <div className="themes text-end">
            <button className="btn" onClick={() => { theme == "light" ? themeToggler("dark") : themeToggler("light") }}>Theme :<span className="ps-2">{theme == "dark" ? <BsSunFill /> : <BsMoonStarsFill />}</span></button>
          </div>
          <h1 className="text-capitalize fw-bolder mt-5 pt-4 text-center">{appName}</h1>
        </div>
      </header>
    </>
  );
};

export default Header;