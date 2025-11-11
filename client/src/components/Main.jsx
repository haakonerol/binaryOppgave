import { useState } from 'react'

function Main({ setDecoded }) {
  const [binary, setBinary] = useState(
    '01001001 01101110 01100110 01101001 01101110 01101001 01110100 01100101 00100000 01101100 01100101 01100001 01110010 01101110 01101001 01101110 01100111 00100001'
  )
  const [error, setError] = useState('')

  
  const handleChange = (e) => {
    const value = e.target.value
    if (/^[01 \n]*$/.test(value)) {
      setBinary(value)
      setError('')
    } else {
      setError('Only binary please.')
    }
  }

 
  const handleDecode = async () => {
    if (!binary.trim()) {
      setError('Enter a binary')
      return
    }

    setError('')

    try {
      const decodedStr = binary
        .split(' ')
        .map((b) => String.fromCharCode(parseInt(b, 2)))
        .join('')

      setDecoded(decodedStr)

      await fetch(`${import.meta.env.VITE_API_URL}/meldinger`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ binary, melding: decodedStr }),
      })
    } catch (err) {
      console.error(err)
      setError('Failed to connect to the server or an error occurred.')
    }
  }

  return (
    <div>
      <label htmlFor="binaryInput">Binary Input:</label>
      <textarea
        id="binaryInput"
        value={binary}
        onChange={handleChange}
        placeholder="Exp: 01001000 01101001"
        rows={5}
        style={{
          width: '100%',
          resize: 'vertical',
          overflowY: 'auto',
        }}
      />
      {error && <p className="error">{error}</p>}

      <button onClick={handleDecode}>Decode</button>
    </div>
  )
}

export default Main
