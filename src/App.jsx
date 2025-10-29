import React, { Suspense, lazy, useCallback, useMemo, useState, Component } from 'react';
import HeaderNav from './components/HeaderNav.jsx';
import Features from './components/Features.jsx';
import LivePreview from './components/LivePreview.jsx';

// Lazy-load the heavy hero (contains Spline) to improve first paint
const Hero = lazy(() => import('./components/Hero.jsx'));

// Error boundary to prevent full-app blank if Hero or Spline throws
class HeroErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    if (this.props.onError) this.props.onError(error, info);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

export default function App() {
  const [liteMode, setLiteMode] = useState(false);

  const prefersReducedMotion = useMemo(
    () => typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const enableLite = useCallback(() => setLiteMode(true), []);

  const fallback = (
    <FallbackHero onEnableLite={enableLite} />
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeaderNav />
      <Suspense fallback={fallback}>
        <HeroErrorBoundary fallback={fallback} onError={enableLite}>
          <Hero lite={liteMode || prefersReducedMotion} />
        </HeroErrorBoundary>
      </Suspense>
      <Features />
      <LivePreview />
      <Footer liteMode={liteMode} onToggleLite={() => setLiteMode((v) => !v)} />
    </div>
  );
}

function FallbackHero({ onEnableLite }) {
  return (
    <section className="relative overflow-clip min-h-[100svh]">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-white pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        <div className="max-w-2xl">
          <div className="animate-pulse">
            <div className="h-9 w-40 rounded-lg bg-gray-200" />
            <div className="mt-4 h-6 w-3/4 rounded bg-gray-200" />
            <div className="mt-2 h-6 w-1/2 rounded bg-gray-200" />
          </div>
          <button
            onClick={onEnableLite}
            className="mt-6 inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 active:scale-[.99] transition"
          >
            Having issues loading 3D? Enable Lite Mode
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer({ liteMode, onToggleLite }) {
  return (
    <footer className="py-10 border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Safegirl Pro. All rights reserved.</p>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <span>Rendering:</span>
          <button onClick={onToggleLite} className="px-2 py-1 rounded border border-gray-200 hover:bg-gray-50">
            {liteMode ? 'Lite' : '3D'}
          </button>
        </div>
      </div>
    </footer>
  );
}
