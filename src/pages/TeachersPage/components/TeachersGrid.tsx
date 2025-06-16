import React from 'react';
import TeacherCard from './TeacherCard';
import styles from '../../../styles/TeachersPage/TeachersPage.module.scss';
import { TeachersGridProps } from '../../../types/TeachersPage/teachersPage.types';

const TeachersGrid: React.FC<TeachersGridProps> = ({ teachers, onLearnMore }) => {
  return (
    <div className={styles.teachersGrid}>
      {teachers.map((teacher) => (
        <TeacherCard
          key={teacher.id}
          teacher={teacher}
          onLearnMore={onLearnMore}
        />
      ))}
    </div>
  );
};

export default TeachersGrid;
