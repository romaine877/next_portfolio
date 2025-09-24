import React from 'react';
import Image from "next/legacy/image";

type ProjectModalProps = { id: string; image: string; name: string; description: string; link: string; selectHandler: () => void };

export default function ProjectModal({ id, image, name, description, link, selectHandler }: ProjectModalProps) {
    const handleClose = () => {
        selectHandler();
    };
  return (
    <div onClick={handleClose} className='bg-stone-500 backdrop-blur-sm h-full w-full z-40 flex fixed inset-0 bg-opacity-25 items-center justify-center'>
             <div
            onClick={(e)=> e.stopPropagation()}
                className="md:absolute md:p-5 mx-8 md:m-8 text-center bg-white rounded-lg md:w-9/12 md:h-auto z-50"
              >
                <div className='md:flex'>
                <div className='p-5'>
                <Image src={image} alt={name} width={200} height={200}/>
                </div>
                <div>
                     <h3 className="font-bold text-xl m-2 py-2">
                    {name}
                  </h3>
                  <p className="m-3">{description}</p>
               <button onClick={handleClose} className='m-5 px-6 py-2 bg-indigo-600 rounded-md'>Close</button>
              </div>
                </div>
                </div> 
        </div>
  )
}


