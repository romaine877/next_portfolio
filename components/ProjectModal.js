import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';

export default function ProjectModal({ id, image, name, description, link, selectHandler }) {
    
    const handleClose = () => {
        selectHandler();
    };
  return (

    <div onClick={handleClose} className='bg-stone-500 h-full w-full z-40 flex fixed inset-0 bg-opacity-25 items-center justify-center'>

        
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

                <Image src={image} alt={name} width={200} height={200}/>
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