

export default function Footer() {
  return (
    <div className="flex justify-center items-center h-24 ">
      <p className="dark:text-white text-center m-10">
        © {new Date().getFullYear()}, Built by Romaine Halstead with
        {` `}
        <a href="https://nextjs.org/">Next.js</a>
        <a href='https://tailwindcss.com/' className="ml-2">
          Tailwind CSS
        </a>
        {` `}and
        <a href='https://framer.com/motion/' className="ml-2">
          Framer Motion
        </a>
      </p>
    </div>

  )
}
