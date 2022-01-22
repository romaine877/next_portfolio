import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-5">
      <Link href="/">
      <a className=" text-white p-3 hover:text-indigo-500 hover:bg-violet-50 rounded-lg transition ease-in text-xl font-bold md:text-left text-center">
       Romaine Halstead <br/>
        <span className=" text-base font-normal md:text-left text-center">Full Stack Developer</span>
      </a>
      </Link>
      <nav className="md:space-x-7 md:space-y-0 space-y-1 py-3 flex flex-col md:flex-row text-center">
          <Link href='/'>
            <a className="text-white p-3 hover:text-indigo-500 hover:bg-violet-50 rounded-lg transition ease-in ">Home</a>
          </Link>
            <Link href='/projects'>
            <a className="text-white p-3 hover:text-indigo-500 hover:bg-violet-50 rounded-lg transition ease-in ">Projects</a>
            </Link>
            <Link href='/contact'>
            <a className="text-white p-3 hover:text-indigo-500 hover:bg-violet-50 rounded-lg transition ease-in ">Contact</a>
            </Link>

      </nav>
    </header>
  );
}
