import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import UploadForm from '../../components/uploads/UploadForm'
import UploadDisplay from '../../components/uploads/UploadDisplay'
import { resetImagen } from '../../features/uploads/uploads.slice'

const UploadsPage = () => {
  const dispatch = useDispatch()

  // Al salir de esta página se limpia la imagen guardada en el store,
  // para no mostrar la de la visita anterior al volver a entrar
  useEffect(() => {
    return () => {
      dispatch(resetImagen())
    }
  }, [dispatch])

  return (
    <div className="container">
      <UploadForm />
      <UploadDisplay />
    </div>
  )
}

export default UploadsPage
