import React, { useState } from "react";
import ProjectCardStyles from "./ProjectCard.module.scss";
import { mediaBreakpoints } from "../../utils/media-breakpoints";

interface IProjectCardProps {
  title: string;
  coverImageDesktop: string;
  coverImageMobile: string;
  description: string;
  viewLink: string;
  codeLink: string;
  technologies: string;
}

const ProjectCard: React.FC<IProjectCardProps> = ({
  title,
  coverImageDesktop,
  coverImageMobile,
  description,
  technologies,
  viewLink,
  codeLink,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={ProjectCardStyles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <div className={ProjectCardStyles.imageCoverWrapper}>
      <picture>
        <source
          media={`(min-width: ${mediaBreakpoints.minDesktopWidth}px)`}
          srcSet={coverImageDesktop}
        />
        <source
          media={`(min-width: ${mediaBreakpoints.minTabletWidth}px)`}
          srcSet={coverImageMobile}
        />
        <img src={coverImageDesktop} alt={`${title} cover`} className={ProjectCardStyles.imageContainer}/>
      </picture>
      

      <div className={`${ProjectCardStyles.overlay} ${isHovered ? ProjectCardStyles.show : ''}`}>
        <div className={ProjectCardStyles.links}>
          <a href={viewLink} target="_blank" rel="noopener noreferrer">View Project</a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
        </div>
      </div>

      <div className={ProjectCardStyles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{technologies}</p>
      </div>

    </div>
  );
};

export default ProjectCard;
