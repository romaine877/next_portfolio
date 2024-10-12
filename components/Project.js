import { motion } from "framer-motion";
import Image from "next/legacy/image";

export default function Project({
  id,
  image,
  name,
  description,
  link,
  selectHandler,
}) {
  return (
    <motion.div
      onClick={selectHandler}
      layoutId={id}
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-indigo-50 rounded-xl flex flex-col text-center md:flex-row p-3 m-7 cursor-pointer shadow-lg dark:shadow-none "
    >
      <motion.div className="m-2 w-full md:w-max mx-auto ">
        <Image src={image} alt={name} width={200} height={200} layout="fixed" priority={true}/>
      </motion.div>
      <motion.div className="flex flex-col justify-between md:w-1/2">
        <motion.h3 className="font-bold text-xl m-2 py-2 text-center">{name}</motion.h3>
        <motion.p className="m-3 hidden md:inline">{description}</motion.p>
        <motion.div className="bg-indigo-500 hover:bg-indigo-700 hover:scale-105 transition ease-in text-white font-bold py-2 px-3 rounded-md  m-4 text-center bottom-2 ">
          <motion.a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
