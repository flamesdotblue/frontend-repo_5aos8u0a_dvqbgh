import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function LivePreview() {
  return (
    <section id="preview" className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Live tracking preview</h2>
            <p className="mt-3 text-gray-600">See your route, speed, and ETA as you move. Share tracking links securely with trusted contacts and revoke anytime.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs">•</span> Encrypted link sharing</li>
              <li className="flex items-center gap-2"><span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 text-xs">•</span> Background tracking optimized for battery</li>
              <li className="flex items-center gap-2"><span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pink-100 text-pink-600 text-xs">•</span> Auto stop at destination</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="relative w-72 h-[520px] rounded-[2rem] bg-white border border-black/10 shadow-xl overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-10 bg-gray-50 flex items-center justify-center text-xs text-gray-500 border-b border-black/5">
                Safegirl Pro • Live Track
              </div>
              <div className="pt-10 h-full flex flex-col">
                <div className="flex-1 relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE2MjYwMjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
                  <div className="absolute inset-0 bg-white/60" />
                  <div className="absolute inset-0 p-4">
                    <div className="flex items-center justify-between text-xs text-gray-700">
                      <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Current route</span>
                      <span>ETA 12:45</span>
                    </div>
                    <div className="mt-3 h-56 rounded-lg bg-gradient-to-br from-pink-100 via-white to-blue-100 border border-black/10" />
                  </div>
                </div>
                <div className="p-4 border-t border-black/5 bg-white">
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <div className="text-gray-900 font-medium">2.8 km • 14 min</div>
                      <div className="text-gray-500 text-xs">Sharing with 2 contacts</div>
                    </div>
                    <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-pink-600 text-white text-sm font-medium hover:bg-pink-700">
                      <Navigation className="w-4 h-4" /> Share link
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
