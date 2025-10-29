import { memo, useMemo } from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = memo(function Hero() {
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  return (
    <section className="relative overflow-clip min-h-[100svh]">
      <div
        className="absolute inset-0"
        style={{ transform: 'translateZ(0)', willChange: 'transform', contain: 'strict' }}
      >
        {/* 3D scene kept lightweight and hardware-accelerated */}
        <Spline
          scene="https://prod.spline.design/0qjYtbpwQohb6mXu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* gradient overlay without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/75 to-white" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Feel safe. Move freely.
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Safegirl Pro brings instant SOS, trusted live tracking, and calm design—so help is always a tap away.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-pink-600 text-white hover:bg-pink-700 active:scale-[.99] transition shadow-sm">
              <AlertTriangle className="h-4 w-4 mr-2" /> Quick SOS
            </button>
            <a
              href="#live"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 active:scale-[.99] transition"
            >
              Start Live Track <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </div>
          {!prefersReducedMotion && (
            <p className="mt-3 text-xs text-gray-500">Tip: Allow location access for the best experience.</p>
          )}
        </div>
      </div>
    </section>
  );
});

export default Hero;
