import { useEffect, useRef, useState } from 'react'
import { Smartphone, Activity, MapPin, Power } from 'lucide-react'

export default function LivePreview({ baseUrl, token, sessionId, onStart, onStop }) {
  const [coords, setCoords] = useState(null)
  const [wsStatus, setWsStatus] = useState('disconnected')
  const wsRef = useRef(null)
  const watchRef = useRef(null)

  const sendLocation = async (c) => {
    if (!sessionId || !token || !c) return
    try {
      await fetch(`${baseUrl}/track/location`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          session_id: sessionId,
          latitude: c.latitude,
          longitude: c.longitude,
          accuracy: c.accuracy,
          speed: c.speed,
          heading: c.heading,
          timestamp: new Date().toISOString(),
        }),
      })
    } catch (e) {
      // ignore
    }
  }

  useEffect(() => {
    if (!sessionId) return

    // Connect WebSocket to receive echoes/broadcasts
    const wsUrl = (baseUrl || window.location.origin).replace('http', 'ws') + `/ws/track/${sessionId}`
    const ws = new WebSocket(wsUrl)
    wsRef.current = ws
    ws.onopen = () => setWsStatus('connected')
    ws.onclose = () => setWsStatus('disconnected')
    ws.onerror = () => setWsStatus('error')
    ws.onmessage = (msg) => {
      try {
        const data = JSON.parse(msg.data)
        if (data?.type === 'location') {
          // could render path
        }
      } catch {}
    }

    return () => {
      ws.close()
    }
  }, [sessionId, baseUrl])

  useEffect(() => {
    if (!sessionId) {
      if (watchRef.current) {
        navigator.geolocation.clearWatch(watchRef.current)
        watchRef.current = null
      }
      return
    }
    if (!('geolocation' in navigator)) return
    watchRef.current = navigator.geolocation.watchPosition(
      (pos) => {
        setCoords(pos.coords)
        sendLocation(pos.coords)
      },
      () => {},
      { enableHighAccuracy: true, maximumAge: 1000, timeout: 10000 }
    )
    return () => {
      if (watchRef.current) navigator.geolocation.clearWatch(watchRef.current)
    }
  }, [sessionId])

  return (
    <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
      <div className="rounded-2xl border border-rose-100 bg-white p-6">
        <div className="flex items-center gap-2 mb-4">
          <Smartphone className="h-5 w-5 text-rose-600" />
          <h3 className="font-semibold">Live Tracking</h3>
        </div>
        <div className="text-sm text-slate-700 space-y-2">
          <div className="flex items-center gap-2"><Activity className="h-4 w-4" /> Status: {sessionId ? 'Active' : 'Idle'}</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Location: {coords ? `${coords.latitude.toFixed(5)}, ${coords.longitude.toFixed(5)}` : '—'}</div>
          <div className="flex items-center gap-2"><Activity className="h-4 w-4" /> WebSocket: {wsStatus}</div>
        </div>
        <div className="mt-4 flex gap-3">
          {!sessionId ? (
            <button onClick={onStart} className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Start</button>
          ) : (
            <button onClick={onStop} className="px-4 py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-700 inline-flex items-center gap-2"><Power className="h-4 w-4" /> Stop</button>
          )}
        </div>
      </div>
      <div className="rounded-2xl border border-rose-100 bg-gradient-to-br from-rose-50 to-white p-6 flex items-center justify-center">
        <div className="w-full max-w-xs aspect-[9/19] rounded-[2rem] border-8 border-slate-900/90 bg-white shadow-xl overflow-hidden">
          <div className="h-8 bg-slate-900/90" />
          <div className="p-4 text-xs text-slate-700 space-y-1">
            <div><strong>Session:</strong> {sessionId || '—'}</div>
            <div><strong>Lat:</strong> {coords ? coords.latitude.toFixed(5) : '—'}</div>
            <div><strong>Lng:</strong> {coords ? coords.longitude.toFixed(5) : '—'}</div>
            <div><strong>Acc:</strong> {coords?.accuracy ? `${Math.round(coords.accuracy)}m` : '—'}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
