import React from 'react';
import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import Features from './components/Features';
import LivePreview from './components/LivePreview';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeaderNav />
      <main>
        <Hero />
        <Features />
        <LivePreview />
      </main>
      <footer id="contact" className="border-t border-black/5 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Safegirl Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
