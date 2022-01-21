import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

export default function ProjectModal({ id, image, name, description, link, selectHandler }) {
    
    const handleClose = () => {
        selectHandler();
    };
  return (

    <div onClick={handleClose} className=' bg-stone-500 h-full w-full z-40 flex fixed inset-0 bg-opacity-25 items-center justify-center'>

{/* <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:shrink-0">
      <Image  className="h-48 w-full object-cover md:h-full md:w-48" src={image} alt="Man looking at item at a store" width={100} height={200}/>
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div> */}












        
             <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            exit={{ opacity: 1 }}
            key={id}
            onClick={(e)=> e.stopPropagation()}
                layoutId={id}
                className="md:absolute md:p-5 mx-8 md:m-8 text-center bg-white rounded-lg md:w-9/12 md:h-auto z-50"
              >
                <motion.div className='md:flex'>
                <motion.div className='p-5'>

                <Image src={image} alt={name} width={100} height={200}/>
                </motion.div>
                <motion.div>
                     <motion.h3 className="font-bold text-xl m-2 py-2">
                    {name}
                  </motion.h3>
                  <motion.p className="m-3">{description}</motion.p>
               <motion.button onClick={handleClose} className='m-5 px-6 py-2 bg-indigo-600 rounded-md'>Close</motion.button>
              </motion.div>
                </motion.div>
                 
                </motion.div> 
            
        </div>

  )
}