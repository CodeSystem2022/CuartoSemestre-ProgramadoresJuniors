import { Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import TareaFormPage from './pages/TareaFormPage'
import TareasPage from './pages/TareasPage'
import NotFound from './pages/NotFound'
import Navbar from "./components/navbar/Navbar"
import { Container } from './components/ui/Container'
import { useAuth } from './context/AuthContext'
import { ProtectedRoute } from "./components/ProtectedRoute"
import { TareasProvider } from './context/TareasContext'



function App() {
  const { isAuth, loading } = useAuth();

  if (loading) {
      return <h1>Cargando...</h1>;
  }


  return (
    <>
    <Navbar />
    <Container className="py-5">
      <Routes>
        <Route
          element={<ProtectedRoute isAllowed={!isAuth} redirecTo="tareas" />}
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route
          element={<ProtectedRoute isAllowed={isAuth} redirecTo="/login" />}
        >
          <Route path="/perfil" element={<ProfilePage />} />

          <Route
            element={
              <TareasProvider>
                <Outlet />
              </TareasProvider>
            }>
              <Route path="/tareas" element={<TareasPage />} />
              <Route path="/tareas/crear" element={<TareaFormPage />} />
              <Route path="/tareas/:id/editar" element={<TareaFormPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;

