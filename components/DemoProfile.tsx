
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { 
    MapPinIcon, 
    BriefcaseIcon, 
    LinkIcon, 
    CalendarDaysIcon,
    CommandLineIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline';
import { ShieldCheckIcon, StarIcon } from '@heroicons/react/24/solid';

interface DemoProfileProps {
    onBack: () => void;
    onStart: () => void;
}

export const DemoProfile: React.FC<DemoProfileProps> = ({ onBack, onStart }) => {
    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Breadcrumb / Back */}
                <div className="mb-6 flex items-center justify-between">
                    <button onClick={onBack} className="text-sm text-gray-500 hover:text-gray-900 font-medium flex items-center gap-2 transition-colors">
                        ← Back to Home
                    </button>
                    <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                        Public Profile Preview
                    </div>
                </div>

                {/* Profile Header Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
                    {/* Cover Banner */}
                    <div className="h-48 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                        <div className="absolute top-0 right-0 p-6">
                            <div className="bg-black/30 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                                <ShieldCheckIcon className="w-4 h-4 text-lime-400" />
                                IDENTITY VERIFIED
                            </div>
                        </div>
                    </div>

                    <div className="px-8 pb-8">
                        {/* Avatar */}
                        <div className="-mt-16 mb-6 relative">
                            <div className="w-32 h-32 rounded-full border-4 border-white bg-white shadow-md relative">
                                <img 
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=c0aede&mouth=smile" 
                                    alt="Profile" 
                                    className="w-full h-full rounded-full object-cover"
                                />
                                <div className="absolute bottom-1 right-1 w-8 h-8 bg-lime-400 rounded-full border-4 border-white flex items-center justify-center text-white shadow-sm" title="Verified Profile">
                                    <ShieldCheckIcon className="w-5 h-5 text-gray-900" />
                                </div>
                            </div>
                        </div>

                        {/* Header Info */}
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                                    Sarah Jenkins
                                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md border border-gray-200 align-middle">she/her</span>
                                </h1>
                                <p className="text-lg text-gray-600 font-medium mt-1">Senior Full Stack Engineer</p>
                                <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
                                    <div className="flex items-center gap-1.5">
                                        <MapPinIcon className="w-4 h-4" />
                                        San Francisco, CA
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <BriefcaseIcon className="w-4 h-4" />
                                        Open to offers
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <CalendarDaysIcon className="w-4 h-4" />
                                        Joined March 2024
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 min-w-[200px]">
                                <button 
                                    onClick={onStart}
                                    className="w-full py-2.5 px-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-lg transition-all shadow-lg shadow-gray-900/20 text-sm"
                                >
                                    Hire Sarah
                                </button>
                                <button className="w-full py-2.5 px-4 bg-white border border-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all text-sm">
                                    Download Verified PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Skills & Stats */}
                    <div className="space-y-8">
                        {/* Verified Skills */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <ShieldCheckIcon className="w-5 h-5 text-lime-500" />
                                Verified Skills
                            </h3>
                            <div className="space-y-4">
                                <SkillRow name="React.js" score={98} source="GitHub Analysis" />
                                <SkillRow name="TypeScript" score={95} source="GitHub Analysis" />
                                <SkillRow name="Node.js" score={92} source="GitHub Analysis" />
                                <SkillRow name="AWS Architecture" score={100} source="AWS Certification" />
                                <SkillRow name="System Design" score={88} source="Peer Review" />
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                            <h3 className="font-bold text-gray-900 mb-4">Certifications</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="text-orange-600 font-bold text-xs">AWS</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm">Solutions Architect</div>
                                        <div className="text-xs text-gray-500">Issued Aug 2023 • Exp Aug 2026</div>
                                        <div className="mt-1 flex items-center gap-1 text-xs text-lime-600 font-medium">
                                            <CheckCircleIcon className="w-3.5 h-3.5" />
                                            Verified via Credly
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                                        <span className="text-blue-600 font-bold text-xs">GCP</span>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 text-sm">Professional Data Engineer</div>
                                        <div className="text-xs text-gray-500">Issued Jan 2024</div>
                                        <div className="mt-1 flex items-center gap-1 text-xs text-lime-600 font-medium">
                                            <CheckCircleIcon className="w-3.5 h-3.5" />
                                            Verified via Google
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Evidence Locker */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Project Evidence */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-gray-900">Proof of Work</h3>
                                <span className="text-xs font-mono text-gray-400 uppercase">Immutable Records</span>
                            </div>

                            <div className="space-y-6">
                                {/* Project 1 */}
                                <div className="group rounded-xl border border-gray-200 p-5 hover:border-lime-400 transition-colors relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-lime-100 text-lime-700 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wide">
                                        Code Quality: Top 5%
                                    </div>
                                    
                                    <div className="flex gap-4 mb-3">
                                        <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white shrink-0">
                                            <CommandLineIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">E-commerce Microservices</h4>
                                            <a href="#" className="text-sm text-gray-500 hover:text-lime-600 flex items-center gap-1">
                                                <LinkIcon className="w-3.5 h-3.5" /> github.com/sarahj/ecommerce-v2
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        A high-scale microservices architecture built with Node.js and Kubernetes. Handles 10k+ concurrent users.
                                    </p>

                                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                                        <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Skallery Analysis</div>
                                        <div className="flex gap-4 text-sm">
                                            <div>
                                                <span className="text-gray-900 font-bold">98%</span>
                                                <span className="text-gray-500 ml-1">Test Coverage</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-900 font-bold">A+</span>
                                                <span className="text-gray-500 ml-1">Security Rating</span>
                                            </div>
                                            <div>
                                                <span className="text-gray-900 font-bold">45</span>
                                                <span className="text-gray-500 ml-1">Contributors Managed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project 2 */}
                                <div className="group rounded-xl border border-gray-200 p-5 hover:border-lime-400 transition-colors relative overflow-hidden">
                                     <div className="absolute top-0 right-0 bg-lime-100 text-lime-700 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wide">
                                        Impact Verified
                                    </div>
                                    
                                    <div className="flex gap-4 mb-3">
                                        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white shrink-0">
                                            <StarIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">SaaS Dashboard Redesign</h4>
                                            <div className="text-sm text-gray-500">UX Case Study</div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        Led the complete redesign of the customer analytics dashboard, resulting in a 40% increase in daily active usage.
                                    </p>

                                    <div className="flex items-center gap-3">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white" title="Product Manager"></div>
                                            <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white" title="VP of Engineering"></div>
                                        </div>
                                        <span className="text-xs text-lime-700 font-medium bg-lime-50 px-2 py-0.5 rounded-full border border-lime-100">
                                            Verified by 2 Stakeholders
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Work History */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Verified Experience</h3>
                            <div className="relative pl-6 border-l-2 border-gray-100 space-y-8">
                                {/* Job 1 */}
                                <div className="relative">
                                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-lime-400 border-4 border-white shadow-sm"></div>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h4 className="font-bold text-gray-900">Senior Software Engineer</h4>
                                            <div className="text-gray-600 text-sm">TechCorp Inc.</div>
                                        </div>
                                        <span className="text-xs font-mono text-gray-400">2021 - PRESENT</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-3">
                                        Spearheaded the migration to a micro-frontend architecture.
                                    </p>
                                    <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded border border-emerald-100">
                                        <CheckCircleIcon className="w-3 h-3" />
                                        Employment Verified via HR System
                                    </div>
                                </div>

                                {/* Job 2 */}
                                <div className="relative">
                                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-gray-300 border-4 border-white shadow-sm"></div>
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h4 className="font-bold text-gray-900">Full Stack Developer</h4>
                                            <div className="text-gray-600 text-sm">StartupX</div>
                                        </div>
                                        <span className="text-xs font-mono text-gray-400">2018 - 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="mt-12 bg-gray-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want a profile like Sarah's?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Stop relying on a static resume. Build your verifiable skill profile in minutes and stand out to top employers.
                        </p>
                        <button 
                            onClick={onStart}
                            className="px-8 py-3 bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold rounded-lg transition-all shadow-lg shadow-lime-500/20"
                        >
                            Create My Free Profile
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

const SkillRow = ({ name, score, source }: { name: string, score: number, source: string }) => (
    <div>
        <div className="flex justify-between items-end mb-1">
            <span className="font-medium text-gray-700 text-sm">{name}</span>
            <span className="font-bold text-gray-900 text-sm">{score}/100</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
            <div 
                className="bg-lime-500 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${score}%` }}
            ></div>
        </div>
        <div className="text-[10px] text-gray-400 uppercase tracking-wide text-right">
            Source: {source}
        </div>
    </div>
);
