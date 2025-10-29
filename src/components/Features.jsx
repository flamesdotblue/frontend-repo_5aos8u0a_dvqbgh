import { Bell, MapPin, Siren, Shield, MessageCircle, Phone } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Shield, title: 'Guardian Mode', desc: '24/7 safety toolkit with quick access actions.' },
    { icon: Siren, title: 'Instant SOS', desc: 'One-tap alerts to your trusted contacts.' },
    { icon: MapPin, title: 'Live Tracking', desc: 'Share your route in real-time with loved ones.' },
    { icon: Phone, title: 'Emergency Dial', desc: 'Auto-dial local emergency numbers fast.' },
    { icon: Bell, title: 'Smart Alerts', desc: 'Proactive notifications based on your location.' },
    { icon: MessageCircle, title: 'Secure Chat', desc: 'Coordinate safely with verified contacts.' },
  ]
  return (
    <section className="py-10">
      <h2 className="text-xl font-semibold mb-4">What you can do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-rose-100 bg-white p-4 hover:shadow-sm transition">
            <div className="flex items-center gap-3">
              <it.icon className="h-5 w-5 text-rose-600" />
              <div>
                <div className="font-medium">{it.title}</div>
                <div className="text-sm text-slate-600">{it.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
