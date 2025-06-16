/**
 * touch src/pages/TeacherProfile/components/ArticlesSection.tsx
 */

import React from 'react';

interface ArticlesSectionProps {
  className?: string;
}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({ className }) => {
  return (
    <div className={`w-full ${className || ''}`}>
      <h2 className="text-2xl font-semibold text-gray-900 mb-5">My Articles</h2>
      <p className="text-base text-gray-500 mb-8">Articles content will be displayed here.</p>
      {/* TODO: Add articles list component */}
    </div>
  );
};

export default ArticlesSection;
