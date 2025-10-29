import { CheckCircle, ShieldAlert, MapPin, Bell, Wifi, Clock } from 'lucide-react';

const features = [
  {
    icon: ShieldAlert,
    title: 'Instant SOS',
    desc: 'One tap sends alerts with live location to trusted contacts.'
  },
  {
    icon: MapPin,
    title: 'Real-time Tracking',
    desc: 'Share your route securely with end-to-end session control.'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    desc: 'Subtle, context-aware updates keep you informed without noise.'
  },
  {
    icon: Wifi,
    title: 'Offline Ready',
    desc: 'Captures updates offline and syncs when back online.'
  },
  {
    icon: Clock,
    title: 'Battery Friendly',
    desc: 'Optimized intervals to reduce drain during long sessions.'
  },
  {
    icon: CheckCircle,
    title: 'Privacy First',
    desc: 'Your data, your control. Sessions can be ended anytime.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Everything you need to feel safe</h2>
          <p className="mt-3 text-gray-600">Designed for speed, clarity, and reliability—no clutter, just what matters.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow transition">
              <div className="h-10 w-10 rounded-lg bg-pink-50 text-pink-700 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
