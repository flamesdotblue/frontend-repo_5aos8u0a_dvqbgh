import { Menu, Shield, Settings } from "lucide-react";

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-600 grid place-items-center shadow-sm">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight text-slate-900">Aegis</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition">
            <Settings className="h-4 w-4" />
            Settings
          </button>
          <button className="inline-flex sm:hidden items-center justify-center h-10 w-10 rounded-lg hover:bg-slate-50">
            <Menu className="h-5 w-5 text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
