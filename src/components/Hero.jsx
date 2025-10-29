import { motion } from "framer-motion";
import { AlertCircle, MapPin, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-fuchsia-400/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-[-10%] h-[420px] w-[420px] rounded-full bg-indigo-400/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            Next‑gen Women’s Safety Platform
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Feel safe, seen and supported — anywhere
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Real‑time location sharing, smart SOS, and a trusted circle that is always a tap away. Designed for modern life with privacy at its core.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white font-semibold shadow-sm hover:bg-slate-800">
              <AlertCircle className="h-4 w-4" /> Quick SOS
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-900 font-semibold shadow-sm border border-slate-200 hover:bg-slate-50">
              <MapPin className="h-4 w-4" /> Live Track
            </button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2"><Users className="h-4 w-4" /> Trusted Circle</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Precise Location</div>
            <div className="flex items-center gap-2"><AlertCircle className="h-4 w-4" /> Silent Alerts</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
