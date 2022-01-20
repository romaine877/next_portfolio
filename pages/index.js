import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    
      <Layout>
        
        <div className="md:h-5/6 flex items-center">
        <div className=" w-2/3 mx-auto ">
          <h1 className="text-5xl font-bold pb-6 text-white text-center">Freelance Web and Mobile App Developer</h1>
          <p className=" text-lg my-5 text-slate-500 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus mollitia temporibus odit, nesciunt quaerat facere provident corrupti </p>
          <div className="flex my-2 justify-center">
          <Link href="/contact">
          <button className="bg-blue-500 hover:bg-indigo-700 hover:scale-105 transition ease-in m-3 py-2 px-5 text-white rounded-md flex">
            Let's Get to Work <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pl-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
          </button>
          
        </Link>
        
          </div>
        </div>
        </div>
       
        
      </Layout>
      
  )
}
