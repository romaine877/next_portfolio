

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex justify-center items-center h-24 ">
      <p className="dark:text-white text-center m-10">
        © {new Date().getFullYear()}, Built by Romaine Halstead with
        {` `}
        <Link href="https://nextjs.org/">Next.js</Link>
        <Link href='https://tailwindcss.com/' className="ml-2">
          Tailwind CSS
        </Link>
        {` `}and
        <Link href='https://framer.com/motion/' className="ml-2">
          Framer Motion
        </Link>
      </p>
    </footer>

  )
}
