import React from 'react';
import styles from '../../../styles/TeachersPage/TeachersPage.module.scss';
import { TeachersPageProps, Teacher } from '../../../types/TeachersPage/teachersPage.types';
import TeachersHeader from './TeachersHeader';
import TeachersGrid from './TeachersGrid';
import RecruitmentSection from './RecruitmentSection';
import CTASection from '../../../components/ui/CTASection';

const TeachersPage: React.FC<TeachersPageProps> = ({ className }) => {
  const teachers: Teacher[] = [
    {
      id: '1',
      name: 'John Carter',
      title: 'DIGITAL MARKETER',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque pellentesque, tincidunt maecenas urna Hac.'
    },
    {
      id: '2',
      name: 'Elon Musk',
      title: 'UI/UX DESIGNER',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/USAFA_Hosts_Elon_Musk_%28Image_1_of_17%29_%28cropped%29.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque pellentesque, tincidunt maecenas urna Hac.'
    },
    {
      id: '3',
      name: 'Norma Hicks',
      title: 'DATA OFFICER',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque pellentesque, tincidunt maecenas urna Hac.'
    },
    {
      id: '4',
      name: 'Kellie Burns',
      title: 'SEO SPECIALIST',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque pellentesque, tincidunt maecenas urna Hac.'
    },
    {
      id: '5',
      name: 'Alex Paul',
      title: 'BRAND DESIGNER',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque pellentesque, tincidunt maecenas urna Hac.'
    },
    {
      id: '6',
      name: 'Fred Owen',
      title: 'ENTREPRENEUR',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque pellentesque, tincidunt maecenas urna Hac.'
    }
  ];

  const handleLearnMore = (teacherId: string) => {
    console.log('Navigate to teacher profile:', teacherId);
  };

  const handleRecruitmentClick = () => {
    console.log('Open recruitment form');
  };

  const handleCTAClick = () => {
    console.log('Navigate to courses');
  };

  return (
    <div className={`${styles.teachersPage} ${className || ''}`}>
      <TeachersHeader />
      
      <div className={styles.teachersContent}>
        <div className={styles.teachersContainer}>
          <TeachersGrid 
            teachers={teachers}
            onLearnMore={handleLearnMore}
          />
        </div>
      </div>

      <RecruitmentSection onButtonClick={handleRecruitmentClick} />
      <CTASection onButtonClick={handleCTAClick} />
    </div>
  );
};

export default TeachersPage;
