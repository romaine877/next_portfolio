import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-5">
      <div>
        <h3 className="text-xl text-white font-bold md:text-left text-center">Romaine Halstead</h3>
        <p className=" text-white md:text-left text-center">Full Stack Developer</p>
      </div>

      <nav className="md:space-x-5 md:space-y-0 space-y-1 py-3 flex flex-col md:flex-row text-center">
          <Link href='/'>
            <a className="text-white hover:text-indigo-500">Home</a>
          </Link>
            <Link href='/projects'>
            <a className="text-white hover:text-indigo-500">Projects</a>
            </Link>
            <Link href='/contact'>
            <a className="text-white hover:text-indigo-500">Contact</a>
            </Link>

      </nav>
    </header>
  );
}
