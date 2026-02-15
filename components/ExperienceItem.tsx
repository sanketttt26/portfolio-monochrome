import React from 'react';
import { Experience } from '../types';

interface ExperienceItemProps {
    data: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ data }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 relative">
            {/* Date Column */}
            <div className="md:col-span-1">

                <span className="text-sm text-secondary font-normal tabular-nums block">
                    {data.period}
                </span>
            </div>

            {/* Content Column */}
            <div className="md:col-span-3 space-y-4">
                <div>
                    <h3 className="text-base font-medium text-primary">
                        {data.company}
                    </h3>
                    <p className="text-sm text-secondary">{data.role}</p>
                </div>

                <ul className="space-y-2">
                    {data.description.map((item, idx) => (
                        <li key={idx} className="text-sm text-secondary/90 leading-relaxed flex gap-3">
                            <span className="text-border select-none">–</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1">
                    {data.techStack.map((tech) => (
                        <span key={tech} className="text-xs text-secondary/70 font-mono">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;