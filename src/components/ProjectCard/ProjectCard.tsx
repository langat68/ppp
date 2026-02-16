//import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  githubUrl,
  liveUrl,
}: any) => {
  return (
    <div className="project-card">

      {/* Image */}
      <div className="project-image">
        <span>{image}</span>
      </div>

      {/* Content */}
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>

        {/* Tech Stack */}
        <div className="project-tech">
          {techStack.map((tech: string) => (
            <span key={tech} className="tech">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="project-links">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <Github size={14} /> Code
            </a>
          )}

          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink size={14} /> Live
            </a>
          )}
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;
