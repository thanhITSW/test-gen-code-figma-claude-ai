import React from 'react';
import CourseCard from './CourseCard';
import styles from '../../../styles/CoursesPage/CoursesPage.module.scss';
import { CoursesGridProps } from '../../../types/CoursesPage/coursesPage.types';

const CoursesGrid: React.FC<CoursesGridProps> = ({ courses, onCourseClick }) => {
  return (
    <div className={styles.coursesGrid}>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onCourseClick={onCourseClick}
        />
      ))}
    </div>
  );
};

export default CoursesGrid;