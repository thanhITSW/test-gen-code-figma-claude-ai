export interface TeachersPageProps {
  className?: string;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  avatar: string;
  description: string;
}

export interface TeacherCardProps {
  teacher: Teacher;
  onLearnMore?: (teacherId: string) => void;
}

export interface TeachersGridProps {
  teachers: Teacher[];
  onLearnMore?: (teacherId: string) => void;
}

export interface TeachersHeaderProps {
  title?: string;
  description?: string;
  className?: string;
}

export interface RecruitmentSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}
