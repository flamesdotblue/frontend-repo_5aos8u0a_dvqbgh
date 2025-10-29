import React from 'react';
import { Shield, Menu, Settings } from 'lucide-react';

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-pink-100 text-pink-600">
            <Shield className="w-5 h-5" />
          </div>
          <span className="font-semibold text-lg tracking-tight">Safegirl Pro</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#preview" className="hover:text-gray-900 transition-colors">Live Preview</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors">
            <Settings className="w-4 h-4" />
            Settings
          </button>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/10 text-gray-700 hover:bg-black/5">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
