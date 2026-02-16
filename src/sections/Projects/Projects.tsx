import React from "react";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

type Project = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A real-time analytics dashboard for online stores with dynamic charts, order tracking, and inventory management.",
    image: "📊 Dashboard Preview",
    techStack: ["React", "TypeScript", "Recharts"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "AI Chat Interface",
    description:
      "A sleek conversational UI powered by streaming AI responses with markdown rendering and code highlighting.",
    image: "🤖 Chat Preview",
    techStack: ["Next.js", "OpenAI", "Framer Motion"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Design System Library",
    description:
      "A comprehensive component library with 50+ accessible, themeable components and interactive documentation.",
    image: "🎨 Components Preview",
    techStack: ["React", "Storybook", "CSS Variables"],
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A kanban-style project manager with drag-and-drop, real-time collaboration, and smart notifications.",
    image: "✅ Kanban Preview",
    techStack: ["React", "DnD Kit", "Supabase"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <h2>Projects</h2>
      <p>A selection of things I've built recently.</p>

      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
