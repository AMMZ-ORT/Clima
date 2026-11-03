import { useId } from 'react'
import { Link } from 'react-router'

const RegisterForm = () => {
  const usernameId = useId()
  const passwordId = useId()

  return (
    <>
    <form>
            <div className="form-group">
                <label htmlFor={usernameId}>Usuario:</label>
                <input type="text" id={usernameId} required />
            </div>

            <div className="form-group">
                <label htmlFor={passwordId}>Contraseña:</label>
                <input type="password" id={passwordId} required />
            </div>

            <button type="submit">Registrarse</button>

            
        </form>
        <p className="login-link">
                ¿Ya tienes cuenta? <Link to="/">Ingresa aquí</Link>
        </p>
    </>
  )
}

export default RegisterForm
