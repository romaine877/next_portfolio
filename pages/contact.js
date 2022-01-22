import React from "react";
import Layout from "../components/Layout";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {motion} from "framer-motion";

export default function contact() {
  return (
    <Layout title='Contact'>
      <div className="w-4/5 mx-auto my-10 md:flex md:flex-row-reverse md:justify-between">
      <motion.div className="  md:w-1/2 mb-10 md:m-5 p-5 dark:bg-indigo-50 bg-white shadow-xl rounded-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      >
          <form action="post">
            <div className="flex flex-col m-5 ">
              <label htmlFor="name" className="text-gray-700 text-sm mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-white rounded shadow-sm mb-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
                <label htmlFor="email" className="text-gray-700 text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-white rounded shadow-sm mb-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                />
                <label htmlFor="message" className="text-gray-700 text-sm mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                className="w-full bg-white rounded shadow-sm mb-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-indigo-700 hover:scale-105 text-white font-bold py-2 px-4 rounded-md m-5 transition ease-in"
              >
                Submit
              </button>

            </div>
          </form>
        </motion.div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <div className="mb-10">
            <h1 className="text-4xl font-bold dark:text-white">Contact</h1>
            <p className="dark:text-white my-4">
              you can contact me at such place at such time, ill get in touch
              with you soon
            </p>
          </div>
          <div className="mb-10">
            <a href="tel:8768968976" className="text-base bg-blue-500 w-72 hover:bg-indigo-700 hover:scale-105 transition ease-in m-3 py-3 px-4 text-white font-bold rounded-md flex justify-start mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3 dark:text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +876-896-8976
            </a>
            <a href="mailto:romaine877@gmail.com" className="text-base bg-blue-500 w-72 hover:bg-indigo-700 hover:scale-105 transition ease-in m-3 py-3 px-4 text-white font-bold rounded-md flex justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              romaine877@gmail.com
            </a>
          </div>
          <div className="flex w-1/3 m-5 justify-between">
            <div className="hover:bg-indigo-600 rounded-full p-5 transition ease-in dark:text-white hover:text-white">
              <a href="https://github.com/romaine877"
                target="_blank"
                rel="noopener noreferrer"
              >

            <FaGithub className="h-10 w-10 " />
              </a>
            </div>
            <div className="hover:bg-indigo-600 rounded-full p-5 transition ease-in dark:text-white hover:text-white">
              <a href="https://www.linkedin.com/in/romaine877/"
              target="_blank"
              rel="noopener noreferrer"
              
              >
            <span><FaLinkedin className="h-10 w-10 " /></span>     
                </a>
            </div>
          </div>
        </div>
        
      </div>
    </Layout>
  );
}
