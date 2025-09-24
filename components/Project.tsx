import Image from "next/legacy/image";

type ProjectProps = {
  id: string;
  image: string;
  name: string;
  description: string;
  link: string;
  selectHandler: () => void;
};

export default function Project({
  id,
  image,
  name,
  description,
  link,
  selectHandler,
}: ProjectProps) {
  return (
    <div
      onClick={selectHandler}
      className="bg-white dark:bg-indigo-50 rounded-xl flex flex-col text-center md:flex-row p-3 m-7 cursor-pointer shadow-lg dark:shadow-none "
    >
      <div className="m-2 w-full md:w-max mx-auto ">
        <Image src={image} alt={name} width={200} height={200} layout="fixed" priority={true}/>
      </div>
      <div className="flex flex-col justify-between md:w-1/2">
        <h3 className="font-bold text-xl m-2 py-2 text-center">{name}</h3>
        <p className="m-3 hidden md:inline">{description}</p>
        <div className="bg-indigo-500 hover:bg-indigo-700 hover:scale-105 transition ease-in text-white font-bold py-2 px-3 rounded-md  m-4 text-center bottom-2 ">
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}


