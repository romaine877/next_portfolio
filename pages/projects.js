import { AnimatePresence, motion } from "framer-motion";

import React, { useState } from "react";
import Layout from "../components/Layout";
import Project from "../components/Project";
import ProjectModal from "../components/ProjectModal";
import {API_URL} from "../utils/api";

export default function Projects({ projects }) {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <Layout title='Projects'>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-6 gap-2">
        {projects.map((project) => (
          <motion.div key={project.id}>
            

                      <Project selectHandler={()=>setSelectedItem(project)}  id={project.id} image={project.image} name={project.name} description={project.description} link={project.link}/>
           

          </motion.div>
        ))}
        <AnimatePresence>
          {selectedItem && <motion.div><ProjectModal selectHandler={()=>setSelectedItem(null)} id={selectedItem.id} image={selectedItem.image} name={selectedItem.name} description={selectedItem.description} link={selectedItem.link} /></motion.div>}
        </AnimatePresence>
      </div>
    </Layout>
  );
}


export async function getServerSideProps() {
  const res = await fetch(API_URL);
  const projectList = await res.json();
  const projects = projectList.projects;
  
  return {
    props: {
      projects,
    },
  };
}