

function DecodedMessage({ decoded }) {
  if (!decoded) return null

  return (
    <div className="decoded-box">
      <h2>Decoded String:</h2>
      <p>{decoded}</p>
    </div>
  )
}

export default DecodedMessage
