import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  data: Project;
}

// will add this in future
const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <div className="border border-border rounded-2xl p-5 bg-surface/60 backdrop-blur">
      <div className="flex justify-between items-start gap-3">
        <div>
          <h3 className="text-base font-semibold text-primary font-sans">
            {data.title}
          </h3>
          <p className="text-xs uppercase tracking-[0.2em] mt-1 text-secondary/80 font-mono">
            {data.period}
          </p>
        </div>
        {data.link && (
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-primary hover:text-secondary transition-colors"
          >
            View ↗
          </a>
        )}
      </div>
      <div className="mt-4 space-y-2">
        {data.description.map((item, idx) => (
          <p key={idx} className="text-sm text-secondary/90 leading-relaxed">
            {item}
          </p>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {data.techStack.map((tech) => (
          <span key={tech} className="px-2 py-1 text-xs font-mono rounded-full bg-primary/10 text-secondary/80">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
