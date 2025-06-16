import React, { useState } from 'react';
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import { TeacherProfileProps, Teacher } from '../../../types/TeacherProfile/teacherProfile.types';

// Import các component con
import { ProfileCard } from '@/components/ui';
import TabsNavigation from './TabsNavigation';
import AboutSection from './AboutSection';
import CoursesSection from './CoursesSection';
import SkillsSection from './SkillsSection';
import ArticlesSection from './ArticlesSection';
import CTASection from '../../../components/ui/CTASection';

const TeacherProfile: React.FC<TeacherProfileProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<string>('about');

  const teacher: Teacher = {
    id: '1',
    name: 'John Carter',
    title: 'Digital Marketer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit cursus blandit pellentesque lorem eius.',
    socialLinks: [
      {
        platform: 'Facebook',
        url: '#',
        icon: <FacebookOutlined />
      },
      {
        platform: 'Twitter',
        url: '#',
        icon: <TwitterOutlined />
      },
      {
        platform: 'Instagram',
        url: '#',
        icon: <InstagramOutlined />
      }
    ]
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const handleCourseClick = () => {
    console.log('Navigate to courses');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'courses':
        return <CoursesSection />;
      case 'skills':
        return <SkillsSection />;
      case 'articles':
        return <ArticlesSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className={`bg-white min-h-screen ${className || ''}`}>
      {/* Profile Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 md:gap-16">
          {/* Left Sidebar */}
          <div className="mb-8 md:mb-0">
            <ProfileCard teacher={teacher} />
          </div>

          {/* Main Content */}
          <div>
            {/* Tabs Navigation */}
            <div className="mb-8">
              <TabsNavigation
                activeTab={activeTab}
                onTabChange={handleTabChange}
              />
            </div>

            {/* Tab Content */}
            <div>
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12">
        <CTASection onButtonClick={handleCourseClick} />
      </div>
    </div>
  );
};

export default TeacherProfile;
