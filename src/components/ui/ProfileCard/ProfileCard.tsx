import React from 'react';
import { Teacher } from '../../../types/TeacherProfile/teacherProfile.types';

interface ProfileCardProps {
    teacher: Teacher;
    className?: string;
    stylesOverride?: { [key: string]: string };
}

const ProfileCard: React.FC<ProfileCardProps> = ({ teacher, className = '', stylesOverride }) => {
    return (
        <div className={`bg-white rounded-2xl shadow-md p-6 flex flex-col items-center ${className}`}>
            <div className="mb-6 flex flex-col items-center">
                <img
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-gray-100 mb-4"
                />
            </div>
            <div className="w-full flex flex-col items-center">
                <h1 className="text-lg font-semibold text-gray-900 mb-1 text-center">{teacher.name}</h1>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3 text-center">{teacher.title}</p>
                <p className="text-sm text-gray-500 mb-4 text-center">{teacher.description}</p>
                <div className="flex justify-center gap-3">
                    {teacher.socialLinks.map((social) => (
                        <a
                            key={social.platform}
                            href={social.url}
                            className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-200"
                            aria-label={social.platform}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard; 