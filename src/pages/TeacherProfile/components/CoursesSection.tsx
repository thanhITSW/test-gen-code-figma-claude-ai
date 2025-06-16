/**
 * touch src/pages/TeacherProfile/components/CoursesSection.tsx
 */

import React from 'react';
import styles from '../../../styles/TeacherProfile/TeacherProfile.module.scss';

interface CoursesSectionProps {
  className?: string;
}

const CoursesSection: React.FC<CoursesSectionProps> = ({ className }) => {
  return (
    <div className={`${styles.aboutSection} ${className || ''}`}>
      <h2 className={styles.sectionTitle}>My Courses</h2>
      <p className={styles.aboutText}>Course content will be displayed here.</p>
      {/* TODO: Add courses grid/list component */}
    </div>
  );
};

export default CoursesSection;
