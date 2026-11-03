
import { BrowserRouter, Routes, Route } from "react-router"
import './App.css'
import  "./styles.css"
import ContainerPage from './pages/ContainerPage'
import LoginPage from './pages/login/LoginPage'
import DashboardPage from './pages/dashboard/DashboardPage'
import RegisterPage from './pages/register/RegisterPage'
import GroqPage from './pages/groq/GroqPage'
import UploadsPage from './pages/uploads/UploadsPage'
import ProtectedRoute from './app/guards/ProtectedRoute'
import { Provider } from "react-redux"
import store from "./store/store"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
function App() {
  

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContainerPage />}>
            <Route index element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="uploads" element={<UploadsPage />} />
            <Route element={<ProtectedRoute/>}>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="groq" element={<GroqPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  )
}

export default App
