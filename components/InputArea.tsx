/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { CodeBracketIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

// Repurposing InputArea.tsx to be Features.tsx based on instructions to replace app
export const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
            <h2 className="text-lime-600 font-mono text-sm font-bold uppercase tracking-widest mb-4">How Skallery Works</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Build a rich, trusted profile.</h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                We aggregate and verify skills from multiple sources to bridge the "trust gap" in hiring.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-lime-100 hover:border-lime-300 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-lime-50 rounded-xl flex items-center justify-center mb-6 text-lime-600 group-hover:scale-110 transition-transform duration-300">
                    <CodeBracketIcon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Project-Based Proof</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                    Connect platforms like GitHub, Behance, or personal blogs. Skallery analyzes code repositories for quality and links to technical articles, turning project work into validated skill points.
                </p>
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                    <AcademicCapIcon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Assessment-Based Proof</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                    Integrate with official certification bodies like AWS and Google Cloud, plus interactive challenges. All achievements are displayed as verifiable, tamper-proof credentials.
                </p>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 text-yellow-600 group-hover:scale-110 transition-transform duration-300">
                    <BriefcaseIcon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Experience-Based Proof</h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                    Enable managers and clients to provide context-rich testimonials tied to specific project outcomes, creating a verified record of on-the-job performance.
                </p>
            </div>
        </div>
    </div>
  );
};