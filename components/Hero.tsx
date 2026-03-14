
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { ShieldCheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { ShieldCheckIcon as ShieldCheckSolid } from '@heroicons/react/24/solid';

interface HeroProps {
    onStart: () => void;
    onViewDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart, onViewDemo }) => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime-200/40 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 mt-16 lg:mt-0 pb-16 lg:pb-0">
        
        {/* Text Content */}
        <div className="text-center lg:text-left relative order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 shadow-sm rounded-full px-3 py-1 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">The new standard for talent</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Replace your <br className="hidden lg:block"/>
                resume with <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-emerald-600">verifiable proof.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
                Move beyond static documents and unverified claims. Create a dynamic, living profile where every skill is backed by concrete, verifiable evidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button 
                    onClick={onStart}
                    className="w-full sm:w-auto h-12 px-8 bg-lime-400 text-gray-900 hover:bg-lime-500 font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg shadow-lime-500/20"
                >
                    Start Building Your Profile
                    <ArrowPathIcon className="w-4 h-4 stroke-2" />
                </button>
                <button 
                    onClick={onViewDemo}
                    className="w-full sm:w-auto h-12 px-8 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg transition-all shadow-sm hover:shadow"
                >
                    View Demo Profile
                </button>
            </div>
        </div>

        {/* Static Visual (Mockup) */}
        <div className="relative h-auto w-full flex items-center justify-center order-1 lg:order-2 p-6 lg:p-0">
            <div className="relative w-full max-w-[440px] transform transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1">
                {/* Decorative elements behind */}
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-dashed border-gray-200 rounded-2xl -z-10"></div>
                
                {/* Main Card */}
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                    {/* Header Banner */}
                    <div className="h-32 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative">
                         <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full border border-white/10 flex items-center gap-1">
                            <ShieldCheckSolid className="w-3 h-3 text-lime-400" />
                            IDENTITY VERIFIED
                        </div>
                    </div>
                    
                    {/* Profile Content */}
                    <div className="px-6 pb-8 relative">
                        {/* Avatar */}
                        <div className="-mt-12 mb-4 flex justify-between items-end">
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-md overflow-hidden">
                                    <img 
                                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=c0aede&mouth=smile" 
                                        alt="Profile" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute bottom-0 right-0 w-7 h-7 bg-lime-400 rounded-full border-4 border-white flex items-center justify-center text-white shadow-sm">
                                    <ShieldCheckSolid className="w-4 h-4 text-gray-900" />
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900">Sarah Jenkins</h2>
                        <p className="text-gray-500 font-medium mb-6">Senior Full Stack Engineer</p>

                        <div className="space-y-4">
                             <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-gray-700 text-sm">React.js</span>
                                    <div className="flex items-center gap-1 text-lime-600 text-xs font-bold">
                                        <ShieldCheckSolid className="w-3 h-3" />
                                        VERIFIED
                                    </div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                    <div className="bg-lime-500 h-1.5 rounded-full w-[98%]"></div>
                                </div>
                             </div>

                             <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-gray-700 text-sm">AWS Architecture</span>
                                    <div className="flex items-center gap-1 text-lime-600 text-xs font-bold">
                                        <ShieldCheckSolid className="w-3 h-3" />
                                        VERIFIED
                                    </div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                    <div className="bg-lime-500 h-1.5 rounded-full w-[100%]"></div>
                                </div>
                             </div>
                        </div>

                        {/* Fake "View Details" link */}
                        <div className="mt-6 pt-4 border-t border-gray-50 text-center">
                             <span className="text-xs text-gray-400 font-medium">View verified evidence chain →</span>
                        </div>
                    </div>
                </div>

                {/* Floating Badge */}
                 <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                    <div className="w-10 h-10 bg-lime-100 rounded-lg flex items-center justify-center">
                        <ArrowPathIcon className="w-5 h-5 text-lime-600" />
                    </div>
                    <div>
                        <div className="text-xs text-gray-500 font-medium">Last Verified</div>
                        <div className="text-sm font-bold text-gray-900">Just now</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
