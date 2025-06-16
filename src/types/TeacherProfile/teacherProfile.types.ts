export interface TeacherProfileProps {
  className?: string;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  avatar: string;
  description: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface TabItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
}

export interface Experience {
  description: string;
}

export interface Project {
  title: string;
  description: string;
}

export interface CTASection {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  backgroundImage: string;
}

// Thêm interface cho các component con
export interface ProfileCardProps {
  teacher: Teacher;
}

export interface TabsNavigationProps {
  activeTab: string;
  onTabChange: (key: string) => void;
}

export interface AboutSectionProps {
  className?: string;
}

export interface CoursesSectionProps {
  className?: string;
}

export interface SkillsSectionProps {
  className?: string;
}

export interface ArticlesSectionProps {
  className?: string;
}

export interface CTASectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}
