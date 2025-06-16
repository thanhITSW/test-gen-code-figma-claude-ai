/**
 * touch src/pages/TeacherProfile/components/AboutSection.tsx
 */

import React from 'react';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <div className={`w-full ${className || ''}`}>
      <h2 className="text-2xl font-semibold text-gray-900 mb-5">About Me</h2>
      <p className="text-base text-gray-500 mb-8 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet habitassa orci convallis <span className="text-blue-600 font-semibold">sodales augue</span>.
      </p>
      <p className="text-base text-gray-500 mb-8 leading-relaxed">
        Ac, pellentesque proin <span className="text-blue-600 font-semibold">tincidunt lobortis sit</span> velit vel dui eget. Massa, lectus orci ornctor morbi. A met vitae, sagittis elementum placerat nullam id imperdiet leo. Diam venenatis amet diam orci <span className="text-blue-600 font-semibold">ultrices auctor</span>.
      </p>

      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">My Past Experience</h3>
        <p className="text-base text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta massa, eget natoque{' '}
          <span className="text-blue-600 font-semibold">tincidunt quis</span>. Suspendisse vitae vestibulum scelerisque egestas. Volutpat, adipiscing a elit placerat amet et. At et metus egestas nunc eget. Tempus sapien, augue laceret morbi{' '}
          <span className="text-blue-600 font-semibold">habitasse leo</span> mauris arcu amet. Sapien lectus auctor quis id at morbi risus. Ornare aliquam phaseolus consequat amet velit risus. Amet, diam cras morbi hendrerit vitae potenti ut nequeе.
        </p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop"
        alt="Workplace"
        className="w-full h-64 object-cover rounded-xl my-8"
      />
      <p className="text-center text-gray-500 text-sm mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">My Past Projects</h3>
        <ul className="list-none pl-0 mb-6">
          <li className="relative pl-4 mb-2 text-base text-gray-500 leading-relaxed before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum.</li>
          <li className="relative pl-4 mb-2 text-base text-gray-500 leading-relaxed before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing.</li>
          <li className="relative pl-4 mb-2 text-base text-gray-500 leading-relaxed before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li className="relative pl-4 mb-2 text-base text-gray-500 leading-relaxed before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing amet.</li>
        </ul>
        <p className="text-base text-gray-500 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta massa, eget natoque{' '}
          <span className="text-blue-600 font-semibold">tincidunt quis</span>. Suspendisse vitae vestibulum scelerisque egestas. Volutpat, adipiscing a elit placerat amet et. At et metus egestas nunc eget. Tempus sapien, augue laceret morbi{' '}
          <span className="text-blue-600 font-semibold">habitasse leo</span> mauris arcu amet. Sapien lectus auctor quis id at morbi risus. Ornare aliquam phaseolus consequat amet velit risus. Amet, diam cras morbi hendrerit vitae potenti ut neque.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
