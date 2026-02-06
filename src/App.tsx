import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [allowed, setAllowed] = useState<boolean | null>(null)

  useEffect(() => {
    fetch('/api/guard', { cache: 'no-store' })
      .then(res => {
        if (res.status === 200) setAllowed(true)
        else setAllowed(false)
      })
      .catch(() => setAllowed(false))
  }, [])

  if (allowed === null) {
    return (
      <div className="center">
        <h2>Checking access…</h2>
        <p>Please wait</p>
      </div>
    )
  }

  if (!allowed) {
    return (
      <div className="restricted">
        <h1>🚫 Access Restricted</h1>
        <p>
          This website is only accessible from an authorized IP address.
        </p>
        <p className="small">
          Please connect to the approved VPN and try again.
        </p>
      </div>
    )
  }

  // ✅ Allowed
  return (
    <div className="container">
      <h1>Welcome to My Site</h1>
      <p>This site is protected by IP-based access control.</p>
      <p>Access granted ✅</p>
    </div>
  )
}

export default App
