import React from 'react';
import { Button } from 'antd';
import styles from '../../../styles/TeachersPage/TeachersPage.module.scss';
import { RecruitmentSectionProps } from '../../../types/TeachersPage/teachersPage.types';

const RecruitmentSection: React.FC<RecruitmentSectionProps> = ({
  title = "We're Looking for New Teachers",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit cursus blandit pellentesque lorem eius mauris.",
  buttonText = "SEND US A MAIL",
  onButtonClick,
  className
}) => {
  return (
    <div className={`${styles.recruitmentSection} ${className || ''}`}>
      <div className={styles.recruitmentContent}>
        <h2 className={styles.recruitmentTitle}>{title}</h2>
        <p className={styles.recruitmentDescription}>{description}</p>
        <Button
          className={styles.recruitmentBtn}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default RecruitmentSection;
