import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Layout from "../components/Layout";
import Project from "../components/project";

export default function projects() {
  const [isSelected, setisSelected] = useState(false);
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div
          className="bg-indigo-50 rounded-xl flex p-3 m-5"
          onClick={() => setisSelected(!isSelected)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.9 }}
          layoutId="weather app"
        >
          <motion.div className="m-1">
            <Image
              src="/images/weather.png"
              alt="Weather App"
              width={135}
              height={240}
            />
          </motion.div>
          <motion.div>
            <motion.div className="m-3 font-bold">
              Mobile Weather App
            </motion.div>
            <motion.div className="m-3">
              Developed a mobile weather app that displays the weather and a
              background picture based on the weather. The app uses the devices
              GPS reciever to get the co-ordinates and send it to an API. The
              data from this API is used to show the weather and is also used to
              make another API call to get a picture based on the weather at
              that location.
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="bg-indigo-50 rounded-xl flex p-3 m-5"
          onClick={() => setisSelected(!isSelected)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.9 }}
          layoutId="weather app"
        >
          <motion.div className="m-1">
            <Image
              src="/images/weather.png"
              alt="Weather App"
              width={135}
              height={240}
            />
          </motion.div>
          <motion.div>
            <motion.div className="m-3 font-bold">
              Mobile Weather App
            </motion.div>
            <motion.div className="m-3">
              Developed a mobile weather app that displays the weather and a
              background picture based on the weather. The app uses the devices
              GPS reciever to get the co-ordinates and send it to an API. The
              data from this API is used to show the weather and is also used to
              make another API call to get a picture based on the weather at
              that location.
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="bg-indigo-50 rounded-xl flex p-3 m-5"
          onClick={() => setisSelected(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.9 }}
          layoutId="weather app"
        >
          <motion.div className="m-1">
            <Image
              src="/images/weather.png"
              alt="Weather App"
              width={135}
              height={240}
            />
          </motion.div>
          <motion.div>
            <motion.div className="m-3 font-bold">
              Mobile Weather App
            </motion.div>
            <motion.div className="m-3">
              Developed a mobile weather app that displays the weather and a
              background picture based on the weather. The app uses the devices
              GPS reciever to get the co-ordinates and send it to an API. The
              data from this API is used to show the weather and is also used to
              make another API call to get a picture based on the weather at
              that location.
            </motion.div>
          </motion.div>
        </motion.div>
        <AnimatePresence>
            {isSelected && (
                <Project title='Mobile Weather App' body="Developed a mobile weather app that displays the weather and a
                background picture based on the weather. The app uses the devices
                GPS reciever to get the co-ordinates and send it to an API. The
                data from this API is used to show the weather and is also used to
                make another API call to get a picture based on the weather at
                that location." img='/images/weather.png' closeModal={()=>setisSelected(false)} id='weather app'/>)}
        </AnimatePresence>
      </div>
    </Layout>
  );
}
