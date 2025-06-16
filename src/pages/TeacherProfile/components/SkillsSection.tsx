/**
 * touch src/pages/TeacherProfile/components/SkillsSection.tsx
 */

import React from 'react';

interface SkillsSectionProps {
  className?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ className }) => {
  return (
    <div className={`w-full ${className || ''}`}>
      <h2 className="text-2xl font-semibold text-gray-900 mb-5">My Skills</h2>
      <p className="text-base text-gray-500 mb-8">Skills content will be displayed here.</p>
      {/* TODO: Add skills progress bars or badges */}
    </div>
  );
};

export default SkillsSection;
