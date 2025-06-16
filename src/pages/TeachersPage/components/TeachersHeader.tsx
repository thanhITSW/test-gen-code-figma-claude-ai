import React from 'react';
import styles from '../../../styles/TeachersPage/TeachersPage.module.scss';
import { TeachersHeaderProps } from '../../../types/TeachersPage/teachersPage.types';

const TeachersHeader: React.FC<TeachersHeaderProps> = ({
  title = "Meet our Teachers.",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique placerat in massa consectetur.",
  className
}) => {
  return (
    <div className={`${styles.teachersHeader} ${className || ''}`}>
      <h1 className={styles.headerTitle}>
        Meet our <span className={styles.highlight}>Teachers</span>.
      </h1>
      <p className={styles.headerDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Viverra tristique placerat in massa consectetur nulla a.
      </p>
    </div>
  );
};

export default TeachersHeader;
