import { useSelector } from 'react-redux'

const UploadDisplay = () => {
  const url = useSelector(state => state.uploads.url)

  if (!url) {
    return null
  }

  return (
    <div className="upload-response">
      <h3>Imagen subida:</h3>
      <img src={url} alt="Imagen subida" />
    </div>
  )
}

export default UploadDisplay
