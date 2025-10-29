import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

export default function HeaderNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-pink-600 text-white flex items-center justify-center shadow-sm">
            <Shield className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">Safegirl Pro</span>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: 'Home', href: '#' },
            { label: 'Features', href: '#features' },
            { label: 'Live', href: '#live' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex px-3 py-2 rounded-lg text-sm border border-gray-200 hover:bg-gray-50 active:scale-[.99] transition">
            Log in
          </button>
          <button className="inline-flex px-3 py-2 rounded-lg text-sm bg-pink-600 text-white hover:bg-pink-700 active:scale-[.99] transition shadow-sm">
            Get Started
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-gray-100" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-1">
            <a href="#" className="px-3 py-2 rounded-lg text-sm hover:bg-gray-50">Home</a>
            <a href="#features" className="px-3 py-2 rounded-lg text-sm hover:bg-gray-50">Features</a>
            <a href="#live" className="px-3 py-2 rounded-lg text-sm hover:bg-gray-50">Live</a>
          </div>
        </div>
      )}
    </header>
  );
}
