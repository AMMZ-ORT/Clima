import { useId } from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { forecastSchema } from '../../validators/forecast.validators'
import api from '../../api/api'
import { useDispatch } from 'react-redux'
import { setPronosticos } from '../../features/forecast/forecast.slice'


const ForecastForm = () => {
  const latitudeId = useId()
  const longitudeId = useId()

  //el isSubmitting indica si el formulario se está enviando
  //isValid indica si el formulario es válido
  //isDirty indica si el formulario ha sido modificado

  //el formsate es donde cuando lo desestructuro 
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors, isSubmitting, isValid, isDirty } } = useForm({resolver: joiResolver(forecastSchema)})

  const obtenerPronostico = async(data) => {
    console.log(data)
    try {
      const res = await api.get('/forecast', {
        params: {
          latitude: data.latitude,
          longitude: data.longitude,
          daily: 'temperature_2m_max,temperature_2m_min',
          timezone: 'auto'
          }
      })
      console.log(res.data)
      dispatch(setPronosticos( res.data.daily))
    } catch (error) {
      console.error('Error al obtener el pronóstico:', error)
    }
  }
  return (
    <div className="search-box">
      <form onSubmit={handleSubmit(obtenerPronostico)}>
        <label htmlFor={latitudeId}>Latitud:</label>
        <input type="number" id={latitudeId} placeholder="-34.9011" step="any" {...register('latitude')} />
        {errors.latitude && <span className="error">{errors.latitude.message}</span>}
        <label htmlFor={longitudeId}>Longitud:</label>
        <input type="number" id={longitudeId} placeholder="-56.1645" step="any" {...register('longitude')} />
        {errors.longitude && <span className="error">{errors.longitude.message}</span>}
        <button type="submit">{isSubmitting ? <i className="fas fa-spinner fa-spin"></i> : 'Buscar'}</button>
        
      </form>
    </div>
  )
}

export default ForecastForm
