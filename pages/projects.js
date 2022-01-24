import { useState } from "react";
import Layout from "../components/Layout";
import Project from "../components/Project";
import { projectsApi } from "../config";


export default function Projects({ projects }) {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <Layout title='Projects'>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-6 md:mb-5">
        {projects.map((project) => (
          <div key={project.id}>
            

                      <Project   id={project.id} image={project.image} name={project.name} description={project.description} link={project.link}/>
           

          </div>
        ))}
        
      </div>
    </Layout>
  );
}


export async function getServerSideProps() {
  const res = await fetch(projectsApi);
  const projectList = await res.json();
  const projects = projectList.projects;
  
  return {
    props: {
      projects,
    },
  };
}