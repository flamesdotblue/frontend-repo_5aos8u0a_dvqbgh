import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Bell, Users, Activity, Lock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Smart SOS",
    desc: "Trigger silent or audible SOS with one tap. Auto-calls emergency contacts with live context.",
    accent: "from-fuchsia-500 to-rose-500",
  },
  {
    icon: MapPin,
    title: "Live Tracking",
    desc: "Share precise, continuous location with ETA and battery status to your trusted circle.",
    accent: "from-indigo-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Trusted Circle",
    desc: "Invite friends and family. Proximity alerts and check‑in reminders keep everyone in the loop.",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Activity,
    title: "Incident Recording",
    desc: "Auto‑record audio snippets and securely back them up when SOS is active.",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: Bell,
    title: "Geofenced Alerts",
    desc: "Get alerts when entering unsafe zones and suggest safer routes instantly.",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: Lock,
    title: "Privacy First",
    desc: "End‑to‑end encrypted sharing with full control over who sees what, and when.",
    accent: "from-slate-700 to-slate-900",
  },
];

export default function Features() {
  return (
    <section className="py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Built for real‑world safety
          </h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            A compact, modern toolkit that adapts to your day and gives your circle peace of mind.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md"
            >
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${f.accent} text-white grid place-items-center shadow`}> 
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
