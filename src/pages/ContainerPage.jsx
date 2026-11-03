
import { Outlet, Link, NavLink, useNavigate, useLocation } from "react-router";

const ContainerPage = () => {
  const navigate = useNavigate()
  // useLocation fuerza el re-render al navegar, para que el navbar refleje el estado de login actualizado
  useLocation()
  const isAuthenticated = localStorage.getItem('usuario') !== null

  const handleLogout = () => {
    localStorage.removeItem('usuario')
    navigate('/')
  }

  return (
    <>
      <header className="main-header">
        <div className="header-content">
            <Link to="/" className="app-logo">🌤️
                <span>Weather App</span></Link>

            <nav className="main-nav">
              <NavLink to="/uploads">Imágenes</NavLink>
              {isAuthenticated && (
                <>
                  <NavLink to="/dashboard">Pronóstico</NavLink>
                  <NavLink to="/groq">Consulta IA</NavLink>
                  <button type="button" className="logout-btn" onClick={handleLogout} title="Cerrar sesión">
                    <i className="fas fa-right-from-bracket"></i>
                  </button>
                </>
              )}
            </nav>
        </div>
        </header>

        <Outlet/>
    </>
  )
}

export default ContainerPage
