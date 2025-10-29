import { motion } from "framer-motion";
import { Navigation, Phone, AlertCircle } from "lucide-react";

export default function LivePreview() {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Live tracking that feels effortless
            </h3>
            <p className="mt-2 text-slate-600">
              Share your trip in real time with a secure link. Your circle sees your route, ETA, and safety status without installing anything.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-slate-600">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100"><Navigation className="h-4 w-4"/> Precise route</div>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100"><Phone className="h-4 w-4"/> One‑tap call</div>
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100"><AlertCircle className="h-4 w-4"/> Smart SOS</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto w-full max-w-sm rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl">
              <div className="rounded-[1.5rem] bg-slate-900 p-3">
                <div className="rounded-[1rem] bg-white overflow-hidden">
                  {/* Mock map */}
                  <div className="relative h-80 w-full bg-[radial-gradient(circle_at_20%_20%,#e9e7ff,transparent_40%),radial-gradient(circle_at_80%_30%,#e7f7ff,transparent_35%),linear-gradient(180deg,#f7fafc,#f8fafc)]">
                    {/* route */}
                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 350 C 120 300, 160 200, 240 220 S 360 160, 370 60" stroke="#4f46e5" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="370" cy="60" r="8" fill="#ef4444" />
                      <circle cx="30" cy="350" r="8" fill="#22c55e" />
                    </svg>
                    {/* live pulse */}
                    <div className="absolute left-[52%] top-[46%] -translate-x-1/2 -translate-y-1/2">
                      <div className="h-5 w-5 rounded-full bg-indigo-600 shadow"></div>
                      <div className="absolute inset-0 -z-0 animate-ping rounded-full bg-indigo-400 opacity-60" />
                    </div>
                  </div>

                  {/* bottom controls */}
                  <div className="border-t border-slate-200 p-3">
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <div className="font-semibold text-slate-900">Trip to Home</div>
                        <div className="text-slate-500">ETA 12m • Battery 78%</div>
                      </div>
                      <button className="rounded-xl bg-slate-900 px-4 py-2 text-white font-semibold">Share</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
