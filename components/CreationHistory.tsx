/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

// Repurposing CreationHistory.tsx to be Testimonials.tsx
const TestimonialCard = ({ quote, author, role, avatarColor }: { quote: string, author: string, role: string, avatarColor: string }) => (
    <div className="relative bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-lime-300 to-emerald-300 rounded-t-2xl"></div>
        <div className="flex gap-1 text-lime-500 mb-6">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
        </div>
        <blockquote className="text-lg md:text-xl text-gray-800 mb-8 font-medium leading-relaxed">
            "{quote}"
        </blockquote>
        <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full ${avatarColor} flex items-center justify-center text-white font-bold text-lg shadow-inner`}>
                {author.charAt(0)}
            </div>
            <div>
                <div className="font-bold text-gray-900">{author}</div>
                <div className="text-sm text-gray-500 font-medium">{role}</div>
            </div>
        </div>
    </div>
);

export const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900">Trusted by industry leaders</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TestimonialCard 
            quote="The resume is a 100-year-old technology in a 21st-century world. It's a list of claims, not a demonstration of ability. We built Skallery to solve this 'trust gap'."
            author="Jane Doe"
            role="CEO and Founder, Skallery"
            avatarColor="bg-indigo-500"
        />
        <TestimonialCard 
            quote="With Skallery, I'm no longer just a list of bullet points. Recruiters can see my actual code contributions, my problem-solving process in a coding challenge, and a client testimonial from a major project."
            author="John Smith"
            role="Software Developer"
            avatarColor="bg-emerald-500"
        />
      </div>
    </div>
  );
};