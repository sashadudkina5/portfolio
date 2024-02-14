import React from 'react';
import MainContentStyles from "./MainContent.module.scss";
import ProjectsList from "../ProjectsList/ProjectsList";


function MainContent() {
  return (
    <div className={MainContentStyles.body_wrapper}>
        <ProjectsList />
    </div>
  );
}

export default MainContent;