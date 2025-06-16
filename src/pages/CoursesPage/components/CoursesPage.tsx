import React, { useState } from 'react';
import styles from '../../../styles/CoursesPage/CoursesPage.module.scss';
import { CoursesPageProps, Course } from '../../../types/CoursesPage/coursesPage.types';
import { ProfileCard } from '@/components/ui';
import CoursesHeader from './CoursesHeader';
import CoursesGrid from './CoursesGrid';
import CTASection from '../../../components/ui/CTASection';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';

const CoursesPage: React.FC<CoursesPageProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<string>('courses');

  const teacher = {
    id: '1',
    name: 'John Carter',
    title: 'DIGITAL MARKETER',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit cursus blandit pellentesque lorem eius.',
    socialLinks: [
      { platform: 'Facebook', url: '#', icon: <FacebookOutlined /> },
      { platform: 'Twitter', url: '#', icon: <TwitterOutlined /> },
      { platform: 'Instagram', url: '#', icon: <InstagramOutlined /> }
    ]
  };

  const courses: Course[] = [
    {
      id: '1',
      title: 'Brand & Identity Design for Marketers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat feugiat congue viverra facilisis.',
      thumbnail: '',
      level: 'Beginner',
      price: 399,
      category: 'design'
    },
    {
      id: '2',
      title: 'Advanced Funnels with Google Analytics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat feugiat congue viverra facilisis.',
      thumbnail: '',
      level: 'Advanced',
      price: 399,
      category: 'analytics'
    },
    {
      id: '3',
      title: 'Email Marketing for E-Commerce',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat feugiat congue viverra facilisis.',
      thumbnail: '',
      level: 'Intermediate',
      price: 399,
      category: 'marketing'
    },
    {
      id: '4',
      title: 'Growth Marketing: Build High Converting Funnels',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat feugiat congue viverra facilisis.',
      thumbnail: '',
      level: 'Advanced',
      price: 399,
      category: 'marketing'
    }
  ];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleCourseClick = (courseId: string) => {
    console.log('Navigate to course:', courseId);
  };

  return (
    <div className={`${styles.coursesPage} ${className || ''}`}>
      <div className={styles.coursesContainer}>
        <div className={styles.leftSidebar}>
          <ProfileCard teacher={teacher} stylesOverride={styles} className={styles.leftSidebar} />
        </div>

        <div className={styles.mainContent}>
          <CoursesHeader
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          <h2 className={styles.coursesTitle}>Courses</h2>

          <CoursesGrid
            courses={courses}
            onCourseClick={handleCourseClick}
          />
        </div>
      </div>
      <CTASection onButtonClick={() => {}} />
    </div>
  );
};

export default CoursesPage;