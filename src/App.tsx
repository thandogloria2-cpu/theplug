/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DualServices from './components/DualServices';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import AgeVerificationModal from './components/AgeVerificationModal';
import Dispensary from './components/Dispensary';
import Barbershop from './components/Barbershop';
import Gallery from './components/Gallery';

export default function App() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'main' | 'dispensary' | 'barbershop' | 'gallery'>('main');

  return (
    <div 
      className="min-h-screen text-white selection:bg-brand-olive selection:text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url("https://www.image2url.com/r2/default/images/1779560567035-01dcdf4c-ebf2-4889-b69d-12e41746eb32.jpg")' }}
    >
      <div className="min-h-screen bg-black/70">
        <Navbar 
          isDispensary={currentView === 'dispensary'} 
          onNavigateMain={() => { setCurrentView('main'); window.scrollTo(0,0); }} 
          onNavigateDispensary={() => { setCurrentView('dispensary'); window.scrollTo(0,0); }} 
        />
        
        {currentView === 'main' ? (
          <>
            <Hero onExploreProducts={() => setIsAgeModalOpen(true)} />
            <About />
            <DualServices onExploreProducts={() => setIsAgeModalOpen(true)} onViewServices={() => { setCurrentView('barbershop'); window.scrollTo(0,0); }} />
            <CallToAction />
          </>
        ) : currentView === 'dispensary' ? (
          <Dispensary />
        ) : currentView === 'gallery' ? (
          <Gallery onBack={() => { setCurrentView('barbershop'); window.scrollTo(0,0); }} />
        ) : (
          <Barbershop onViewGallery={() => { setCurrentView('gallery'); window.scrollTo(0,0); }} />
        )}

        <Footer isDispensary={currentView === 'dispensary'} />
        
        <AgeVerificationModal 
          isOpen={isAgeModalOpen} 
          onClose={() => setIsAgeModalOpen(false)} 
          onConfirm={() => {
            setIsAgeModalOpen(false);
            setCurrentView('dispensary');
            window.scrollTo(0, 0);
          }} 
        />
      </div>
    </div>
  );
}
