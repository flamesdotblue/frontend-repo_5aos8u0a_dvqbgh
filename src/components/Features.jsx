import React from 'react';
import { ShieldCheck, Bell, MapPin, Activity, Lock, Phone } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Panic SOS',
    desc: 'Instant alert to trusted contacts with your live location and audio snapshot.'
  },
  {
    icon: MapPin,
    title: 'Live Location',
    desc: 'Share precise, continuous location updates with ETA and route overview.'
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    desc: 'Auto-escalation, low-battery reminders, and inactivity detection.'
  },
  {
    icon: Activity,
    title: 'Safety Checks',
    desc: 'Scheduled check-ins with countdown and auto-SOS on missed confirmations.'
  },
  {
    icon: Lock,
    title: 'Privacy First',
    desc: 'End-to-end encryption for sensitive data and granular sharing controls.'
  },
  {
    icon: Phone,
    title: 'Emergency Dial',
    desc: 'One-tap calling to local emergency services and hotlines.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Designed for safety, built for speed</h2>
          <p className="mt-3 text-gray-600">Everything you need to stay connected and protected during commutes, late nights, or new adventures.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-black/10 p-5 bg-white hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-pink-50 text-pink-600">
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
