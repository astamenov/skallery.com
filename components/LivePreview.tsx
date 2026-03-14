/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';

// Repurposing LivePreview.tsx to be FAQ.tsx
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-0">
            <button 
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg font-semibold pr-8 transition-colors ${isOpen ? 'text-lime-600' : 'text-gray-800 group-hover:text-gray-900'}`}>
                    {question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'bg-lime-400 text-black rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                    {isOpen ? <MinusIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
                </span>
            </button>
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-600 leading-relaxed text-base">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export const FAQ: React.FC = () => {
    const faqs = [
        {
            q: "How is Skallery different from LinkedIn?",
            a: "LinkedIn is primarily a professional social network based on self-reported claims and simple endorsements. Skallery is a verification engine. Every skill on a Skallery profile is linked to a piece of evidence—a project, a certificate, or a context-rich testimonial—that a third party can inspect. We focus on verifiable proof, not just connections."
        },
        {
            q: "What kinds of skills can I prove on Skallery?",
            a: "Our system is designed to be highly granular. Instead of just listing 'Marketing,' you can prove 'A/B Testing in Google Optimize' by linking to a case study with verified results. We focus on technical skills (software development, data science) as well as proven soft skills like Team Leadership through verified examples."
        },
        {
            q: "Who controls my data?",
            a: "You do. This is a core principle. Your Skallery profile is yours. You have granular control over who can see your profile and which pieces of evidence are visible. We use technologies like Verifiable Credentials to ensure that you hold the keys to your own validated achievements."
        },
        {
            q: "How do you prevent cheating on skill assessments?",
            a: "We take assessment integrity very seriously. Our system employs a multi-layered approach, including plagiarism detection on submitted code, identity verification checks, and options for proctoring on high-stakes assessments. For peer-validated challenges, a consensus model ensures multiple experts review a submission."
        },
        {
            q: "What does Skallery cost?",
            a: "It is free for individuals to create a profile, connect their accounts, and showcase their verified skills. We will offer premium features for individuals in the future. For employers and recruiters, we offer subscription-based plans to access the talent marketplace."
        }
    ];

  return (
    <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
             <p className="text-gray-500 text-lg">Everything you need to know about the verification platform.</p>
        </div>
        <div className="space-y-2 bg-white rounded-2xl p-2 md:p-8 border border-gray-100 shadow-sm">
            {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
        </div>
    </div>
  );
};