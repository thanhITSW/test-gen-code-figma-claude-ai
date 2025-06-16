import React from 'react';
import { UserOutlined, BookOutlined, TrophyOutlined, FileTextOutlined } from '@ant-design/icons';
import styles from '../../../styles/CoursesPage/CoursesPage.module.scss';
import { CoursesHeaderProps } from '../../../types/CoursesPage/coursesPage.types';

const CoursesHeader: React.FC<CoursesHeaderProps> = ({ activeTab, onTabChange }) => {
    const tabs = [
        { key: 'about', label: 'ABOUT ME', icon: <UserOutlined /> },
        { key: 'courses', label: 'COURSES', icon: <BookOutlined /> },
        { key: 'skills', label: 'SKILLS', icon: <TrophyOutlined /> },
        { key: 'articles', label: 'ARTICLES', icon: <FileTextOutlined /> },
    ];

    return (
        <div className={styles.coursesHeader}>
            <div className={styles.tabsContainer}>
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        className={`${styles.tabButton} ${activeTab === tab.key ? styles.active : ''}`}
                        onClick={() => onTabChange(tab.key)}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CoursesHeader;