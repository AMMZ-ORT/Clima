
import { useId } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { setImagen } from '../../features/uploads/uploads.slice'
const UploadForm = () => {

  const formId = useId()

  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const subirImagen = async (data) => {
    console.log(data)
    try {
      const archivo = data.imagen?.[0]

      const formData = new FormData()
      formData.append('imagen', archivo)

      const res = await axios.post('https://servidor-dfs-8c11.vercel.app/v1/uploads', formData)
      console.log(res.data)
      dispatch(setImagen(res.data))
    } catch (error) {
      console.error('Error al subir la imagen:', error)
    }
  }
  return (
    <div className="search-box">
      <form onSubmit={handleSubmit(subirImagen)}>
        <label htmlFor={formId}>Seleccione una imagen:</label>
        <input type="file" id={formId} accept="image/*" {...register('imagen', { required: 'Debe seleccionar una imagen' })} />
        {errors.imagen && <span className="error">{errors.imagen.message}</span>}

        <button type="submit">{isSubmitting ? <i className="fas fa-spinner fa-spin"></i> : 'Subir'}</button>

      </form>
    </div>
  )
}

export default UploadForm
