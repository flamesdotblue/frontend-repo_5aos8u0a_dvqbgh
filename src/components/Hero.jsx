import Spline from '@splinetool/react-spline'
import { MapPin, Send } from 'lucide-react'

export default function Hero({ isAuthed, onQuickSos, onStartTrack }) {
  const quickSOS = async () => {
    if (!isAuthed) {
      alert('Please log in first')
      return
    }
    let coords
    try {
      coords = await new Promise((resolve, reject) => {
        if (!navigator.geolocation) return resolve(null)
        navigator.geolocation.getCurrentPosition(
          (pos) => resolve(pos.coords),
          () => resolve(null),
          { enableHighAccuracy: true, timeout: 5000 }
        )
      })
    } catch {}
    try {
      const res = await onQuickSos(coords)
      alert('SOS sent')
    } catch (e) {
      alert('Failed to send SOS')
    }
  }

  const startTrack = async () => {
    if (!isAuthed) {
      alert('Please log in first')
      return
    }
    try {
      await onStartTrack()
    } catch (e) {
      alert('Failed to start tracking')
    }
  }

  return (
    <section className="relative w-full h-[420px] rounded-2xl overflow-hidden mt-6">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6o4-6hVgQhRmQpIk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="relative z-10 p-8 sm:p-12 flex flex-col gap-4 max-w-xl">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">Safety, on your terms.</h1>
        <p className="text-slate-600">Real-time tracking and instant SOS, designed to keep you connected and protected.</p>
        <div className="flex gap-3 mt-2">
          <button onClick={quickSOS} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-700">
            <Send className="h-4 w-4" /> Quick SOS
          </button>
          <button onClick={startTrack} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50">
            <MapPin className="h-4 w-4" /> Start Live Track
          </button>
        </div>
      </div>
    </section>
  )
}
