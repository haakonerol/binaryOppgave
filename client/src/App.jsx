import { useState } from 'react'
import Main from './components/Main.jsx'
import DecodedMessage from './components/DecodedMessage.jsx'
import './index.css'

function App() {
  const [decoded, setDecoded] = useState('')

  return (
    <div className="app-container">
      <Main setDecoded={setDecoded} />
      <DecodedMessage decoded={decoded} />
    </div>
  )
}

export default App
