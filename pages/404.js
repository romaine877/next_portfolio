import Layout from "../components/Layout"
import Link from "next/link"



export default function NotFound() {
  return (
    <Layout title={'404'}>
        <div className="md:h-5/6 flex items-center">
            <div className=" w-5/6 mx-auto ">
                <h1 className="text-5xl font-bold pb-6 dark:text-white text-black text-center">
                    404
                </h1>
                <p className="dark:text-white text-black text-center">
                    The page you are looking for does not exist.
                </p>
                <div className="flex justify-center my-5">

                <Link href="/">
                    <a className="bg-blue-500 hover:bg-indigo-700 hover:scale-105 transition ease-in m-3 mb-20 py-3 px-4 dark:text-white text-black font-bold rounded-md flex">
                        Go Home
                    </a>
                </Link>
                </div>
            </div>
        </div>
    </Layout>

  )
}
