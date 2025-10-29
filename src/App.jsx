import { Suspense, lazy } from 'react';
import HeaderNav from './components/HeaderNav.jsx';
import Features from './components/Features.jsx';
import LivePreview from './components/LivePreview.jsx';

// Lazy-load the heavy hero (contains Spline) to improve first paint
const Hero = lazy(() => import('./components/Hero.jsx'));

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeaderNav />
      <Suspense fallback={<FallbackHero />}> 
        <Hero />
      </Suspense>
      <Features />
      <LivePreview />
      <Footer />
    </div>
  );
}

function FallbackHero() {
  return (
    <section className="relative overflow-clip min-h-[100svh]">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-white pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        <div className="max-w-2xl animate-pulse">
          <div className="h-9 w-40 rounded-lg bg-gray-200" />
          <div className="mt-4 h-6 w-3/4 rounded bg-gray-200" />
          <div className="mt-2 h-6 w-1/2 rounded bg-gray-200" />
          <div className="mt-6 h-10 w-64 rounded-lg bg-gray-200" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Safegirl Pro. All rights reserved.</p>
        <div className="text-xs text-gray-500">Built with performance-first patterns.</div>
      </div>
    </footer>
  );
}
