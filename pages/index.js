import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout title={'Home'}>
      <div className="md:h-5/6 flex items-center">
        <div className=" w-5/6 mx-auto ">
          <h1 className="text-5xl font-bold pb-6 dark:text-white text-black text-center">
            Freelance Web and Mobile App Developer
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 py-10 justify-items-center">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
              
              <Image
                width={100}
                height={100}
                src="/images/flutter.png"
                
                
              />
            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
              <Image
                width={100}
                height={100}
                src="/images/tailwind.png"
                
              />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
      >
              <Image
                width={100}
                height={100}
                src="/images/react.png"
                layout="fixed"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
      >
              <Image
                width={100}
                height={100}
                src="/images/js.png"
                layout="fixed"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
      >
              <Image
                width={100}
                height={100}
                src="/images/next.jpg"
                layout="fixed"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
      >
              <Image
                width={100}
                height={100}
                src="/images/firebase.png"
                layout="fixed"
              />
            </motion.div>
          </div>
          <div className="flex my-2 justify-center">
            <Link href="/contact">
              <button className="bg-blue-500 hover:bg-indigo-700 hover:scale-105 transition ease-in m-3 mb-20 py-3 px-4 dark:text-white text-black font-bold rounded-md flex">
                Lets Get to Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 pl-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
