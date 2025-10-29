import { useEffect, useMemo, useRef, useState } from 'react';
import { Play, Square, Activity } from 'lucide-react';

export default function LivePreview() {
  const [active, setActive] = useState(false);
  const [coords, setCoords] = useState(null);
  const watchIdRef = useRef(null);

  const canGeo = useMemo(() => typeof navigator !== 'undefined' && !!navigator.geolocation, []);

  useEffect(() => {
    if (!active || !canGeo) return;

    // Use low-power, throttled updates for performance
    watchIdRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCoords({ latitude, longitude, t: Date.now() });
      },
      () => {},
      {
        enableHighAccuracy: false,
        maximumAge: 10_000,
        timeout: 8_000,
      }
    );

    return () => {
      if (watchIdRef.current && navigator.geolocation) {
        navigator.geolocation.clearWatch(watchIdRef.current);
      }
    };
  }, [active, canGeo]);

  return (
    <section id="live" className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Live Tracking</h3>
              <div className={`inline-flex items-center gap-1 text-xs ${active ? 'text-green-600' : 'text-gray-500'}`}>
                <Activity className="h-4 w-4" />
                {active ? 'Active' : 'Idle'}
              </div>
            </div>

            <p className="mt-2 text-sm text-gray-600">
              This demo uses your browser location with battery-friendly settings. Start to preview updates.
            </p>

            <div className="mt-4 flex items-center gap-3">
              {active ? (
                <button onClick={() => setActive(false)} className="inline-flex items-center rounded-lg px-3 py-2 bg-gray-900 text-white hover:bg-black active:scale-[.99] transition">
                  <Square className="h-4 w-4 mr-2" /> Stop
                </button>
              ) : (
                <button onClick={() => setActive(true)} className="inline-flex items-center rounded-lg px-3 py-2 bg-pink-600 text-white hover:bg-pink-700 active:scale-[.99] transition">
                  <Play className="h-4 w-4 mr-2" /> Start
                </button>
              )}
            </div>

            <div className="mt-6 rounded-xl bg-gray-50 border border-gray-200 p-4 text-sm text-gray-700">
              {coords ? (
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-xs text-gray-500">Latitude</div>
                    <div className="font-mono">{coords.latitude.toFixed(6)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Longitude</div>
                    <div className="font-mono">{coords.longitude.toFixed(6)}</div>
                  </div>
                  <div className="col-span-2 text-xs text-gray-500 mt-2">Updated {new Date(coords.t).toLocaleTimeString()}</div>
                </div>
              ) : (
                <div>No location yet. {canGeo ? 'Press Start to begin.' : 'Geolocation not supported.'}</div>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">Why it’s fast</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc pl-5">
              <li>3D scene renders once and is GPU-accelerated.</li>
              <li>Components are memoized and lightweight.</li>
              <li>Location updates are throttled and low-power.</li>
              <li>Animations respect reduced-motion preferences.</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">Note: This is a visual demo. Connect to your API to enable alerts and sharing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
