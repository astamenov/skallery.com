
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/InputArea';
import { FAQ } from './components/LivePreview';
import { Testimonials } from './components/CreationHistory';
import { ProfileBuilder } from './components/ProfileBuilder';
import { DemoProfile } from './components/DemoProfile';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = ({ onStart, isBuilding, goHome, onNavigate }: { 
    onStart: () => void, 
    isBuilding: boolean, 
    goHome: () => void,
    onNavigate: (id: string) => void 
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNav = (id: string) => {
        onNavigate(id);
        setMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onClick={goHome}>
                    <div className="w-6 h-6 bg-lime-400 rounded-sm rotate-45 flex items-center justify-center shadow-sm">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-lg font-bold tracking-tight text-gray-900">Skallery</span>
                </div>

                {!isBuilding && (
                    <>
                        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                            <button onClick={() => onNavigate('how-it-works')} className="hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md transition-all">How it Works</button>
                            <button onClick={() => onNavigate('how-it-works')} className="hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md transition-all">Features</button>
                            <button onClick={() => onNavigate('faq')} className="hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md transition-all">FAQ</button>
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Log In</button>
                            <button 
                                onClick={onStart}
                                className="text-sm font-bold bg-lime-400 text-gray-900 px-5 py-2 rounded-full hover:bg-lime-500 transition-colors shadow-sm hover:shadow-md"
                            >
                                Start Building
                            </button>
                        </div>
                        
                        <div className="md:hidden">
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600">
                                {mobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                            </button>
                        </div>
                    </>
                )}
            </div>

             {/* Mobile Menu */}
             {mobileMenuOpen && !isBuilding && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 p-4 flex flex-col gap-4 shadow-xl">
                    <button onClick={() => handleNav('how-it-works')} className="text-left text-gray-600 hover:text-gray-900">How it Works</button>
                    <button onClick={() => handleNav('how-it-works')} className="text-left text-gray-600 hover:text-gray-900">Features</button>
                    <button onClick={() => handleNav('faq')} className="text-left text-gray-600 hover:text-gray-900">FAQ</button>
                    <div className="h-px bg-gray-200 my-2"></div>
                    <button className="text-left text-gray-600 hover:text-gray-900">Log In</button>
                    <button 
                        onClick={() => { onStart(); setMobileMenuOpen(false); }}
                        className="bg-lime-400 text-gray-900 px-4 py-2 rounded-full font-bold text-center"
                    >
                        Start Building
                    </button>
                </div>
            )}
        </nav>
    );
};

const Footer = () => (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-5 h-5 bg-lime-400 rounded-sm rotate-45"></div>
                    <span className="text-lg font-bold text-white">Skallery</span>
                </div>
                <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
                    The verification engine for the modern workforce. Replace static claims with cryptographic proof of ability.
                </p>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Platform</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-lime-400 transition-colors">Individuals</a></li>
                    <li><a href="#" className="hover:text-lime-400 transition-colors">Employers</a></li>
                    <li><a href="#" className="hover:text-lime-400 transition-colors">Pricing</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-lime-400 transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-lime-400 transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-lime-400 transition-colors">Security</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Skallery Inc. All rights reserved.
        </div>
    </footer>
);

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'builder' | 'demo'>('landing');

  const startBuilding = () => {
    window.scrollTo(0, 0);
    setView('builder');
  };

  const viewDemo = () => {
    window.scrollTo(0, 0);
    setView('demo');
  };

  const goHome = () => {
    window.scrollTo(0, 0);
    setView('landing');
  };

  const scrollToSection = (id: string) => {
    if (view !== 'landing') {
        setView('landing');
        // Wait for render to complete before scrolling
        setTimeout(() => {
            const el = document.getElementById(id);
            el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-lime-300 selection:text-black flex flex-col">
      <Navbar 
        onStart={startBuilding} 
        isBuilding={view === 'builder'} 
        goHome={goHome}
        onNavigate={scrollToSection}
      />
      
      <main className="relative pt-16 flex-grow">
        {view === 'landing' ? (
            <>
                <Hero onStart={startBuilding} onViewDemo={viewDemo} />
                
                <section id="how-it-works" className="py-24 relative bg-gray-50">
                    <Features />
                </section>

                <section className="py-24 bg-white">
                    <Testimonials />
                </section>

                <section id="faq" className="py-24 bg-gray-50">
                    <FAQ />
                </section>
                
                {/* CTA Section */}
                <section className="py-32 px-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-lime-50/80 pointer-events-none"></div>
                    {/* Decorative Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-200/30 blur-[80px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
                            Ready to prove your worth?
                        </h2>
                        <p className="text-xl text-gray-600 mb-10">
                            Join thousands of developers, designers, and professionals building their verifiable skill profiles today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button 
                                onClick={startBuilding}
                                className="w-full sm:w-auto px-8 py-4 bg-lime-400 hover:bg-lime-500 text-gray-950 font-bold rounded-lg transition-all hover:scale-105 shadow-lg shadow-lime-500/20"
                            >
                                Create Free Profile
                            </button>
                            <button 
                                onClick={viewDemo}
                                className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-semibold rounded-lg transition-all shadow-sm"
                            >
                                For Employers
                            </button>
                        </div>
                    </div>
                </section>
            </>
        ) : view === 'builder' ? (
            <ProfileBuilder onBack={goHome} />
        ) : (
            <DemoProfile onBack={goHome} onStart={startBuilding} />
        )}
      </main>

      {view === 'landing' && <Footer />}
    </div>
  );
};

export default App;
