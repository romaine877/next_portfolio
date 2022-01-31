import Link from "next/link";
import { HiMoon, HiSun  } from "react-icons/hi";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';

export default function MobileNav({view, toggle}) {

    const [darkMode, setDarkMode] = useState(true);
  const toggleDarkModeState = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {

    console.log(view);
    
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
    <div 
    onClick={() => toggle() }
    className="bg-stone-500 h-full backdrop-blur-sm w-full z-40 fixed inset-0 bg-opacity-25 items-center justify-center">
    
        
    
      <motion.div className="fixed top-5 right-5 max-w-sm dark:bg-[#0b1120] bg-indigo-50 rounded-lg p-5 m-5"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            
      >
        <motion.div className="flex flex-col justify-between">
          <motion.nav className=" md:space-x-7 md:space-y-0 space-y-1 md:py-3 flex flex-col md:flex-row text-center">
            <Link href="/">
              <motion.a className="text-black dark:text-white p-3 hover:text-indigo-500 hover:bg-white dark:hover:text-indigo-500 hover:shadow-lg dark:bg-transparent dark:hover:bg-violet-50 hover:scale-105 rounded-lg transition ease-in">
                Home
              </motion.a>
            </Link>
            <Link href="/projects">
              <motion.a className=" text-black dark:text-white p-3 hover:text-indigo-500 hover:bg-white dark:hover:text-indigo-500 hover:shadow-lg dark:bg-transparent dark:hover:bg-violet-50 hover:scale-105 rounded-lg transition ease-in ">
                Projects
              </motion.a>
            </Link>
            <Link href="/contact">
              <motion.a className=" text-black dark:text-white p-3 hover:text-indigo-500 hover:bg-white dark:hover:text-indigo-500 hover:shadow-lg dark:bg-transparent dark:hover:bg-violet-50 hover:scale-105 rounded-lg transition ease-in ">
                Contact
              </motion.a>
            </Link>

            <motion.div
              onClick={() => {
                toggleDarkModeState();
                localStorage.setItem("darkMode", !darkMode);
              }}
            >
              {darkMode ? (
                <HiSun className="text-yellow-300 w-10 h-10 p-3 hover:text-yellow-600 hover:scale-105  dark:bg-violet-50 rounded-lg transition ease-in mx-auto" />
              ) : (
                <HiMoon className="text-blue-500 w-10 h-10 p-3 hover:text-indigo-600 hover:scale-105 hover:bg-white hover:shadow-lg rounded-lg transition ease-in mx-auto" />
              )}
            </motion.div>
          </motion.nav>
        </motion.div>
      </motion.div>
  
    </div>
  );
}
