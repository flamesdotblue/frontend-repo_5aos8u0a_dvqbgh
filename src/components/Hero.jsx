import React from 'react';
import { AlertCircle, Navigation } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/9kCv5J7j3d4M9eJ3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
              Feel safer, move freely
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Safegirl Pro empowers you with real-time tracking, advanced SOS alerts, and trusted contacts — designed for peace of mind wherever you go.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-pink-600 text-white font-medium shadow-sm hover:bg-pink-700 transition-colors">
                <AlertCircle className="w-5 h-5" />
                Quick SOS
              </button>
              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-gray-900 border border-black/10 hover:bg-gray-50 transition-colors">
                <Navigation className="w-5 h-5" />
                Start Live Track
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              One tap can share your live location with trusted contacts and notify nearby responders.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
