import React from 'react';
import { EyeOutlined, BarChartOutlined, PieChartOutlined, FunnelPlotOutlined } from '@ant-design/icons';
import styles from '../../../styles/CoursesPage/CoursesPage.module.scss';
import { CourseCardProps } from '../../../types/CoursesPage/coursesPage.types';

const CourseCard: React.FC<CourseCardProps> = ({ course, onCourseClick }) => {
    const handleClick = () => {
        if (onCourseClick) {
            onCourseClick(course.id);
        }
    };

    const getIcon = (category: string) => {
        switch (category) {
            case 'design':
                return <EyeOutlined />;
            case 'analytics':
                return <BarChartOutlined />;
            case 'marketing':
                return <FunnelPlotOutlined />;
            default:
                return <PieChartOutlined />;
        }
    };

    const getLevelIcon = (level: string) => {
        switch (level) {
            case 'Beginner':
                return '●';
            case 'Intermediate':
                return '●●';
            case 'Advanced':
                return '●●●';
            default:
                return '●';
        }
    };

    return (
        <div className={styles.courseCard} onClick={handleClick}>
            <div className={styles.courseImage}>
                <div className={styles.courseIcon}>
                    {getIcon(course.category)}
                </div>
            </div>
            <div className={styles.courseContent}>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDescription}>{course.description}</p>
                <div className={styles.courseFooter}>
                    <div className={styles.courseLevel}>
                        <span className={styles.levelIcon}>{getLevelIcon(course.level)}</span>
                        <span>{course.level}</span>
                    </div>
                    <div className={styles.coursePrice}>${course.price}</div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;