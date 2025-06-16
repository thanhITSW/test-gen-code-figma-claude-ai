export interface CoursesPageProps {
    className?: string;
}

export interface Course {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    price: number;
    category: string;
}

export interface CourseCardProps {
    course: Course;
    onCourseClick?: (courseId: string) => void;
}

export interface CoursesGridProps {
    courses: Course[];
    onCourseClick?: (courseId: string) => void;
}

export interface CoursesHeaderProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}