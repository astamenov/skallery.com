
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { 
    UserCircleIcon, 
    LinkIcon, 
    CheckBadgeIcon, 
    ArrowRightIcon, 
    ArrowLeftIcon,
    CommandLineIcon,
    SwatchIcon,
    DocumentTextIcon,
    ArrowPathIcon
} from '@heroicons/react/24/outline';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

interface ProfileBuilderProps {
    onBack: () => void;
}

type Skill = {
    id: string;
    name: string;
    category: 'tech' | 'design' | 'soft';
    verified: boolean;
    source?: string;
    score?: number;
};

export const ProfileBuilder: React.FC<ProfileBuilderProps> = ({ onBack }) => {
    const [step, setStep] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false);
    
    // Form State
    const [identity, setIdentity] = useState({
        name: 'Alex Morgan',
        role: 'Frontend Engineer',
        bio: 'Building pixel-perfect web experiences.'
    });

    const [connections, setConnections] = useState({
        github: false,
        behance: false,
        linkedin: false
    });

    const [skills, setSkills] = useState<Skill[]>([
        { id: '1', name: 'React.js', category: 'tech', verified: false, source: 'GitHub', score: 0 },
        { id: '2', name: 'TypeScript', category: 'tech', verified: false, source: 'GitHub', score: 0 },
        { id: '3', name: 'UI Design', category: 'design', verified: false, source: 'Behance', score: 0 },
        { id: '4', name: 'Project Mgmt', category: 'soft', verified: false, source: 'LinkedIn', score: 0 },
    ]);

    // Step 2: Simulate Connection
    const toggleConnection = (platform: keyof typeof connections) => {
        setIsLoading(true);
        setTimeout(() => {
            setConnections(prev => ({ ...prev, [platform]: !prev[platform] }));
            setIsLoading(false);
        }, 800);
    };

    // Step 3: Simulate Verification
    useEffect(() => {
        if (step === 2) {
            let delay = 500;
            skills.forEach((skill, index) => {
                setTimeout(() => {
                    setSkills(prev => prev.map(s => 
                        s.id === skill.id 
                            ? { ...s, verified: true, score: Math.floor(Math.random() * 20) + 80 } 
                            : s
                    ));
                }, delay);
                delay += 800;
            });
        }
    }, [step]);

    const steps = [
        { title: "Identity", icon: UserCircleIcon },
        { title: "Evidence", icon: LinkIcon },
        { title: "Verification", icon: CheckBadgeIcon },
        { title: "Profile", icon: ShieldCheckIcon }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                
                {/* Progress Header */}
                <div className="mb-12">
                    <button onClick={onBack} className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-2 mb-6 transition-colors">
                        <ArrowLeftIcon className="w-4 h-4" /> Back to Home
                    </button>
                    <div className="flex items-center justify-between relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full -z-10"></div>
                        <div 
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-lime-400 rounded-full -z-10 transition-all duration-500"
                            style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
                        ></div>
                        
                        {steps.map((s, i) => (
                            <div key={i} className={`flex flex-col items-center gap-2 bg-gray-50 px-2 ${i <= step ? 'text-lime-700' : 'text-gray-400'}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                                    ${i < step ? 'bg-lime-400 border-lime-400 text-white' : 
                                      i === step ? 'bg-white border-lime-400 text-lime-600 shadow-lg shadow-lime-200' : 
                                      'bg-white border-gray-200 text-gray-300'}`}>
                                    <s.icon className="w-5 h-5" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">{s.title}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-h-[500px] flex flex-col relative">
                    
                    {/* STEP 0: IDENTITY */}
                    {step === 0 && (
                        <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Claim your handle.</h2>
                            <p className="text-gray-500 mb-8">Start by setting up your public profile identity.</p>
                            
                            <div className="space-y-6 max-w-lg">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        value={identity.name}
                                        onChange={(e) => setIdentity({...identity, name: e.target.value})}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all"
                                        placeholder="e.g. Jane Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Role</label>
                                    <input 
                                        type="text" 
                                        value={identity.role}
                                        onChange={(e) => setIdentity({...identity, role: e.target.value})}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all"
                                        placeholder="e.g. Senior Product Designer"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Short Bio</label>
                                    <textarea 
                                        value={identity.bio}
                                        onChange={(e) => setIdentity({...identity, bio: e.target.value})}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all h-32 resize-none"
                                        placeholder="Briefly describe your expertise..."
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 1: EVIDENCE */}
                    {step === 1 && (
                        <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Connect evidence.</h2>
                            <p className="text-gray-500 mb-8">We scan your work history to validate your skills. We do not post on your behalf.</p>

                            <div className="grid gap-4">
                                {/* GitHub */}
                                <div className={`p-6 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between group
                                    ${connections.github ? 'border-lime-400 bg-lime-50' : 'border-gray-100 hover:border-gray-300'}`}
                                    onClick={() => toggleConnection('github')}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center">
                                            <CommandLineIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">GitHub</h3>
                                            <p className="text-sm text-gray-500">Verifies: Code Quality, Languages, Contributions</p>
                                        </div>
                                    </div>
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                                        ${connections.github ? 'bg-lime-400 border-lime-400 text-white' : 'border-gray-300'}`}>
                                        {connections.github && <CheckBadgeIcon className="w-4 h-4" />}
                                    </div>
                                </div>

                                {/* Behance */}
                                <div className={`p-6 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between group
                                    ${connections.behance ? 'border-lime-400 bg-lime-50' : 'border-gray-100 hover:border-gray-300'}`}
                                    onClick={() => toggleConnection('behance')}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                                            <SwatchIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Behance</h3>
                                            <p className="text-sm text-gray-500">Verifies: UX/UI, Graphic Design, Case Studies</p>
                                        </div>
                                    </div>
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                                        ${connections.behance ? 'bg-lime-400 border-lime-400 text-white' : 'border-gray-300'}`}>
                                        {connections.behance && <CheckBadgeIcon className="w-4 h-4" />}
                                    </div>
                                </div>

                                {/* LinkedIn */}
                                <div className={`p-6 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between group
                                    ${connections.linkedin ? 'border-lime-400 bg-lime-50' : 'border-gray-100 hover:border-gray-300'}`}
                                    onClick={() => toggleConnection('linkedin')}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-700 text-white rounded-lg flex items-center justify-center">
                                            <DocumentTextIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">LinkedIn</h3>
                                            <p className="text-sm text-gray-500">Verifies: Work History, Endorsements, Tenure</p>
                                        </div>
                                    </div>
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                                        ${connections.linkedin ? 'bg-lime-400 border-lime-400 text-white' : 'border-gray-300'}`}>
                                        {connections.linkedin && <CheckBadgeIcon className="w-4 h-4" />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: VERIFICATION */}
                    {step === 2 && (
                        <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Verifying skills...</h2>
                            <p className="text-gray-500 mb-8">Analyzing your connected accounts to generate cryptographic proofs.</p>

                            <div className="space-y-4 flex-grow">
                                {skills.map((skill) => (
                                    <div key={skill.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 bg-gray-50">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-500
                                                ${skill.verified ? 'bg-lime-100 text-lime-700' : 'bg-gray-200 text-gray-500'}`}>
                                                {skill.category === 'tech' ? 'DEV' : skill.category === 'design' ? 'DES' : 'MGT'}
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900">{skill.name}</div>
                                                <div className="text-xs text-gray-500">Source: {skill.source}</div>
                                            </div>
                                        </div>
                                        <div>
                                            {skill.verified ? (
                                                <div className="flex items-center gap-2 text-lime-600 bg-lime-50 px-3 py-1 rounded-full border border-lime-200 animate-in zoom-in duration-300">
                                                    <ShieldCheckIcon className="w-4 h-4" />
                                                    <span className="text-xs font-bold">VERIFIED {skill.score}%</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 text-gray-400 px-3 py-1">
                                                    <ArrowPathIcon className="w-4 h-4 animate-spin" />
                                                    <span className="text-xs">Checking...</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* STEP 3: RESULT */}
                    {step === 3 && (
                        <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center justify-center h-full">
                             <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden relative">
                                <div className="h-24 bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400"></div>
                                <div className="px-8 pb-8">
                                    <div className="relative -mt-12 mb-4 flex justify-between items-end">
                                        <div className="w-24 h-24 rounded-full border-4 border-white bg-gray-900 text-white flex items-center justify-center text-3xl font-bold shadow-md">
                                            {identity.name.charAt(0)}
                                        </div>
                                        <div className="bg-lime-100 text-lime-800 px-3 py-1 rounded-full text-xs font-bold border border-lime-200 flex items-center gap-1 mb-2">
                                            <ShieldCheckIcon className="w-3 h-3" />
                                            IDENTITY VERIFIED
                                        </div>
                                    </div>
                                    
                                    <h2 className="text-2xl font-bold text-gray-900">{identity.name}</h2>
                                    <p className="text-gray-600 font-medium mb-2">{identity.role}</p>
                                    <p className="text-gray-500 text-sm mb-6">{identity.bio}</p>

                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Verified Skills</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.map(skill => (
                                                <div key={skill.id} className="group relative cursor-help">
                                                    <div className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-1.5 hover:border-lime-400 hover:bg-lime-50 transition-colors">
                                                        {skill.name}
                                                        <ShieldCheckIcon className="w-3.5 h-3.5 text-lime-500" />
                                                    </div>
                                                    {/* Tooltip */}
                                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-gray-900 text-white text-xs p-2 rounded hidden group-hover:block z-10">
                                                        Validated via {skill.source} <br/>
                                                        Confidence Score: {skill.score}/100
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                                        <p className="text-xs text-gray-400 mb-4">Public Verification ID: 0x8F...3A21</p>
                                        <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-colors">
                                            Share Profile
                                        </button>
                                    </div>
                                </div>
                             </div>
                        </div>
                    )}

                    {/* Footer Navigation */}
                    <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-between items-center mt-auto">
                        {step > 0 && step < 3 ? (
                            <button onClick={() => setStep(s => s - 1)} className="text-gray-600 font-medium hover:text-gray-900 px-4 py-2">
                                Back
                            </button>
                        ) : (
                            <div></div>
                        )}

                        {step < 2 && (
                            <button 
                                onClick={() => setStep(s => s + 1)} 
                                disabled={isLoading}
                                className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lime-500/20"
                            >
                                {isLoading ? 'Processing...' : 'Continue'}
                                {!isLoading && <ArrowRightIcon className="w-4 h-4" />}
                            </button>
                        )}
                        
                        {step === 2 && (
                            <button 
                                onClick={() => setStep(s => s + 1)} 
                                className="bg-lime-400 hover:bg-lime-500 text-gray-900 px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lime-500/20"
                            >
                                View Profile
                                <ArrowRightIcon className="w-4 h-4" />
                            </button>
                        )}

                        {step === 3 && (
                             <button onClick={onBack} className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2">
                                Return Home
                             </button>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};
