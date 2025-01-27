import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectsListStyles from "./ProjectsList.module.scss";
import {projects} from "../../utils/projects"

const ProjectsList = () => {
    return (
        <section className={ProjectsListStyles.projects_section}>
            <h1 className={ProjectsListStyles.title}>Projects</h1>
      <ul className={ProjectsListStyles.project_list}>
        {projects.map((project) => (
          <li key={project.title} className={ProjectsListStyles.projects_item}>
            <ProjectCard 
              title={project.title}
              coverImageDesktop={project.coverImageDesktop}
              coverImageMobile={project.coverImageMobile}
              description={project.description}
              viewLink={project.viewLink}
              codeLink={project.codeLink}
              technologies={project.technologies}
            />
          </li>
        ))}
      </ul>
      </section>
    );
  };

  export default ProjectsList;
  