import { Outlet, Navigate } from "react-router";


const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('usuario') !== null;

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;

}

export default ProtectedRoute
