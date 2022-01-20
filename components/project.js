import { motion } from 'framer-motion';
import React from 'react';

export default function Project({ title, body, img, closeModal, id }) {
    const handleClose = () => {
        closeModal();
    };
  return (

    <div onClick={handleClose} className=' bg-stone-500 h-full w-full z-40 flex fixed inset-0 bg-opacity-25 items-center justify-center'>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e)=> e.stopPropagation()}
                layoutId={id}
                className="absolute p-5 m-8 bg-white rounded-lg  w-9/12 h-auto z-50"
              >
                <motion.div className='flex'>
                <motion.img src={img} alt='Weather App' width={135} height={240} />
                <motion.div>
                     <motion.h3 className="font-bold text-xl m-2 py-2">
                    {title}
                  </motion.h3>
                <motion.div className='m-3'>{body}</motion.div>
              </motion.div>
                </motion.div>
                 
                </motion.div>
            
        </div>

  )
}
