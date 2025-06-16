/**
 * touch src/pages/TeacherProfile/components/TabsNavigation.tsx
 */

import React from 'react';
import { Tabs } from 'antd';
import {
  UserOutlined,
  BookOutlined,
  TrophyOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import type { TabsProps } from 'antd';

interface TabsNavigationProps {
  activeTab: string;
  onTabChange: (key: string) => void;
}

const TabsNavigation: React.FC<TabsNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabItems: TabsProps['items'] = [
    {
      key: 'about',
      label: (
        <span>
          <UserOutlined />
          ABOUT ME
        </span>
      ),
    },
    {
      key: 'courses',
      label: (
        <span>
          <BookOutlined />
          COURSES
        </span>
      ),
    },
    {
      key: 'skills',
      label: (
        <span>
          <TrophyOutlined />
          SKILLS
        </span>
      ),
    },
    {
      key: 'articles',
      label: (
        <span>
          <FileTextOutlined />
          ARTICLES
        </span>
      ),
    },
  ];

  return (
    <Tabs
      activeKey={activeTab}
      items={tabItems}
      onChange={onTabChange}
      size="large"
    />
  );
};

export default TabsNavigation;
