import React from 'react';
import { Button } from 'antd';
import styles from '../../../styles/TeachersPage/TeachersPage.module.scss';
import { TeacherCardProps } from '../../../types/TeachersPage/teachersPage.types';

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher, onLearnMore }) => {
  const handleLearnMore = () => {
    if (onLearnMore) {
      onLearnMore(teacher.id);
    }
  };

  return (
    <div className={styles.teacherCard}>
      <img
        src={teacher.avatar}
        alt={teacher.name}
        className={styles.teacherAvatar}
      />
      <h3 className={styles.teacherName}>{teacher.name}</h3>
      <p className={styles.teacherTitle}>{teacher.title}</p>
      <p className={styles.teacherDescription}>{teacher.description}</p>
      <Button
        className={styles.learnMoreBtn}
        onClick={handleLearnMore}
      >
        LEARN MORE
      </Button>
    </div>
  );
};

export default TeacherCard;
