import { useState } from 'react'
import { Shield, Settings, Menu, User, LogOut } from 'lucide-react'

export default function HeaderNav({ onLogin, onSignup, onLogout, isAuthed }) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const quickLogin = async () => {
    const email = prompt('Email')
    const password = prompt('Password')
    if (!email || !password) return
    setLoading(true)
    try {
      await onLogin(email, password)
      alert('Logged in')
    } catch (e) {
      alert('Login failed')
    } finally {
      setLoading(false)
    }
  }

  const quickSignup = async () => {
    const name = prompt('Name')
    const email = prompt('Email')
    const password = prompt('Password (min 4 chars)')
    if (!name || !email || !password) return
    setLoading(true)
    try {
      await onSignup(name, email, password)
      alert('Account created and logged in')
    } catch (e) {
      alert('Signup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-rose-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-rose-600" />
          <span className="font-semibold">Safegirl Pro</span>
        </div>
        <div className="flex items-center gap-3">
          {!isAuthed ? (
            <>
              <button onClick={quickSignup} className="px-3 py-1.5 rounded-md bg-rose-600 text-white text-sm hover:bg-rose-700 disabled:opacity-50" disabled={loading}>
                Sign up
              </button>
              <button onClick={quickLogin} className="px-3 py-1.5 rounded-md border border-slate-300 text-sm hover:bg-slate-50 disabled:opacity-50" disabled={loading}>
                Log in
              </button>
            </>
          ) : (
            <button onClick={onLogout} className="px-3 py-1.5 rounded-md border border-slate-300 text-sm hover:bg-slate-50 flex items-center gap-1">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          )}
          <Settings className="h-5 w-5 text-slate-500 hidden sm:block" />
          <button onClick={() => setOpen(!open)} className="sm:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
