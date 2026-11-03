import { useSelector } from 'react-redux'

const GroqDisplay = () => {
  const respuesta = useSelector(state => state.groq.respuesta)

  if (!respuesta) {
    return null
  }

  return (
    <div className="groq-response">
      <h3>Respuesta:</h3>
      <p>{respuesta}</p>
    </div>
  )
}

export default GroqDisplay
