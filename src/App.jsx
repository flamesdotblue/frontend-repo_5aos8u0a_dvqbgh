import { useState } from 'react'
import HeaderNav from './components/HeaderNav'
import Hero from './components/Hero'
import Features from './components/Features'
import LivePreview from './components/LivePreview'

function App() {
  const [token, setToken] = useState(localStorage.getItem('sgp_token') || '')
  const [sessionId, setSessionId] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

  const withAuthHeaders = (headers = {}) => ({
    ...headers,
    Authorization: token ? `Bearer ${token}` : '',
    'Content-Type': 'application/json',
  })

  const handleSignup = async (name, email, password) => {
    const res = await fetch(`${baseUrl}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
    if (!res.ok) throw new Error('Signup failed')
    const data = await res.json()
    localStorage.setItem('sgp_token', data.token)
    setToken(data.token)
    return data
  }

  const handleLogin = async (email, password) => {
    const res = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    if (!res.ok) throw new Error('Login failed')
    const data = await res.json()
    localStorage.setItem('sgp_token', data.token)
    setToken(data.token)
    return data
  }

  const handleLogout = () => {
    localStorage.removeItem('sgp_token')
    setToken('')
    setSessionId('')
  }

  const triggerQuickSOS = async (coords) => {
    const res = await fetch(`${baseUrl}/sos`, {
      method: 'POST',
      headers: withAuthHeaders(),
      body: JSON.stringify({
        latitude: coords?.latitude,
        longitude: coords?.longitude,
        message: 'Quick SOS triggered from app',
      }),
    })
    if (!res.ok) throw new Error('SOS failed')
    return res.json()
  }

  const startLiveTracking = async () => {
    const res = await fetch(`${baseUrl}/track/start`, {
      method: 'POST',
      headers: withAuthHeaders(),
      body: JSON.stringify({}),
    })
    if (!res.ok) throw new Error('Start tracking failed')
    const data = await res.json()
    setSessionId(data.session_id)
    return data
  }

  const stopLiveTracking = async () => {
    if (!sessionId) return
    const res = await fetch(`${baseUrl}/track/stop`, {
      method: 'POST',
      headers: withAuthHeaders(),
      body: JSON.stringify({ session_id: sessionId }),
    })
    if (!res.ok) throw new Error('Stop tracking failed')
    setSessionId('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50 text-slate-900">
      <HeaderNav onLogin={handleLogin} onSignup={handleSignup} onLogout={handleLogout} isAuthed={!!token} />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero
          isAuthed={!!token}
          onQuickSos={triggerQuickSOS}
          onStartTrack={startLiveTracking}
        />
        <Features />
        <LivePreview
          baseUrl={baseUrl}
          token={token}
          sessionId={sessionId}
          onStart={startLiveTracking}
          onStop={stopLiveTracking}
        />
      </main>
      <footer className="text-center py-8 text-sm text-slate-500">© {new Date().getFullYear()} Safegirl Pro</footer>
    </div>
  )
}

export default App
