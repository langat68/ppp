//import React from "react";

const Skills = () => {
  const skillGroups = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "HTML", "CSS", "Vite"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
    },
    {
      category: "Tools",
      skills: ["Git", "Figma", "VS Code", "Docker"],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <h2>Skills</h2>
        <p>Technologies and tools I work with every day.</p>

        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group">
            
            <h3>{group.category}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill} className="skill">
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;

