import React, { useState } from "react";
import Layout from "../components/Layout";
import Project from "../components/Project";
import ProjectModal from "../components/ProjectModal";
import { projectsApi } from "../config";

type ProjectItem = { id: string; name: string; slug: string; description: string; image: string; link: string };

export default function Projects({ projects }: { projects: ProjectItem[] }) {
  const [selectedItem, setSelectedItem] = useState<ProjectItem | null>(null);
  return (
    <Layout title='Projects'>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-6 md:mb-5">
        {projects.map((project) => (
          <div key={project.id}>
            <Project selectHandler={()=>setSelectedItem(project)}  id={project.id} image={project.image} name={project.name} description={project.description} link={project.link}/>
          </div>
        ))}
          {selectedItem && <ProjectModal selectHandler={()=>setSelectedItem(null)} id={selectedItem.id} image={selectedItem.image} name={selectedItem.name} description={selectedItem.description} link={selectedItem.link} />}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(projectsApi as string);
  const projectList = await res.json();
  const projects = projectList.projects as ProjectItem[];
  
  return {
    props: {
      projects
    },
  };
}


