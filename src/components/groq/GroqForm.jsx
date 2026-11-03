
import { useId } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { setRespuesta } from '../../features/groq/groq.slice'
const GroqForm = () => {

    const formId = useId()


  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors, isSubmitting, isValid, isDirty } } = useForm()

  const obtenerConsulta = async(data) => {
    console.log(data)
    try {
        
      const res = await axios.post('https://servidor-dfs-8c11.vercel.app/v1/groq', {
        messages: data.messages
      })
      console.log(res.data)
      dispatch(setRespuesta( res.data))
    } catch (error) {
      console.error('Error al obtener el pronóstico:', error)
    }
  }
  return (
    <div className="search-box">
      <form onSubmit={handleSubmit(obtenerConsulta)}>
        <label htmlFor={formId}>Ingrese su consulta:</label>
        <input type="text" id={formId} placeholder="escriba aqui" step="any" {...register('messages')} />
        {errors.messages && <span className="error">{errors.messages.message}</span>}
        
        <button type="submit">{isSubmitting ? <i className="fas fa-spinner fa-spin"></i> : 'Buscar'}</button>
        
      </form>
    </div>

    
  )
}

export default GroqForm
