import './App.css'

import { useEffect, useState } from 'react'

function App() {
  const [allowed, setAllowed] = useState<boolean | null>(null)

  useEffect(() => {
    fetch('/api/guard')
      .then(res => {
        if (res.status === 200) setAllowed(true)
        else setAllowed(false)
      })
      .catch(() => setAllowed(false))
  }, [])

  if (allowed === null) return <p>Checking access...</p>

  if (!allowed)
    return <h1>Access Denied ❌</h1>
  return (
    <div className="container">
      <h1>Welcome to My Site</h1>
      <p>
        This is my first React + Vite frontend application.
      </p>
      <p>
        Built with ❤️ using Vite and React.
      </p>
    </div>
  )
}

export default App
