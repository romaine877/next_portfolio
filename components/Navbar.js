import Link from "next/link";
import { HiMenu, HiMoon, HiSun  } from "react-icons/hi";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

export default function Navbar() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkModeState = () => {
    setDarkMode(!darkMode);
  };

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };


  useEffect(() => {
    
    const html = document.getElementsByTagName("html")[0];

    if(localStorage.getItem('darkMode')=== null) {
      localStorage.setItem('darkMode', 'true')
    }
    if (localStorage.getItem("darkMode") === "true") {
      html.classList.add("dark");
      body.classList.add("dark");
      setDarkMode(true);
    } else if (localStorage.getItem("darkMode") === "false") {
      html.classList.remove("dark");
      body.classList.remove("dark");
      setDarkMode(false);
    }
  
  }, [darkMode]);

  
  return (
    <header className="flex flex-row justify-between items-center p-5">
      <Link href="/">
      <a className="dark:text-white text-black p-3 hover:text-indigo-500 hover:bg-white hover:shadow-lg dark:hover:text-indigo-500 rounded-lg transition ease-in text-xl font-bold text-left">
       Romaine Halstead <br/>
        <span className=" text-base font-normal text-left ">Full Stack Developer</span>
      </a>
      </Link>
      <div className="md:hidden">
        {isMobileNavOpen ? (
          
          <MobileNav toggle={toggleMobileNav}/>
          
        )
        : (
          <HiMenu className="text-3xl dark:text-white hover:text-indigo-500 hover:bg-white dark:hover:text-indigo-500 hover:shadow-lg dark:bg-transparent dark:hover:bg-violet-50" onClick={toggleMobileNav} />
        )}
      </div>
      <nav className=" md:space-x-7 md:space-y-0 space-y-1 md:py-3 hidden md:flex md:flex-row text-center">
          <Link href='/'>
            <a className="  text-black dark:text-white p-3 hover:text-indigo-500 hover:bg-white dark:hover:text-indigo-500 dark:bg-transparent hover:shadow-lg dark:shadow-none dark:hover:bg-violet-50 hover:scale-105 rounded-lg transition ease-in ">Home</a>
          </Link>
            <Link href='/projects'>
            <a className=" text-black dark:text-white p-3 hover:text-indigo-500 hover:bg-white dark:hover:text-indigo-500  hover:shadow-lg dark:bg-transparent dark:hover:bg-violet-50 hover:scale-105 rounded-lg transition ease-in ">Projects</a>
            </Link>
            <Link href='/contact'>
            <a className=" text-black dark:text-white p-3 hover:text-indigo-500 hover:bg-white dark:hover:text-indigo-500 hover:shadow-lg dark:bg-transparent dark:hover:bg-violet-50 hover:scale-105 rounded-lg transition ease-in ">Contact</a>
            </Link>

            <div onClick={
              () => {
                toggleDarkModeState();
                localStorage.setItem("darkMode", !darkMode);
                
              }
            }>
              {darkMode ? (

                <HiSun className="text-yellow-300 w-10 h-10 p-3 hover:text-yellow-600 hover:scale-105  dark:bg-violet-50 rounded-lg transition ease-in mx-auto" />
                
              ) : (
                <HiMoon className="text-blue-500 w-10 h-10 p-3 hover:text-indigo-600 hover:scale-105 hover:bg-white hover:shadow-lg rounded-lg transition ease-in mx-auto" />
              )}
                
              
            </div>
           
                
      </nav>
                
    </header>
  );
}
