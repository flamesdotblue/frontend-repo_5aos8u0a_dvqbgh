import HeaderNav from "./components/HeaderNav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import LivePreview from "./components/LivePreview";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeaderNav />
      <main>
        <Hero />
        <Features />
        <LivePreview />
      </main>
      <footer className="border-t border-slate-100 py-10">
        <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-slate-600">
            Built for a safer, more connected world. Designed with privacy in mind.
          </p>
          <div className="flex items-center gap-3">
            <button className="rounded-xl bg-slate-900 px-5 py-3 text-white font-semibold shadow-sm hover:bg-slate-800">
              Get the App
            </button>
            <button className="rounded-xl bg-white px-5 py-3 text-slate-900 font-semibold shadow-sm border border-slate-200 hover:bg-slate-50">
              Learn More
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
