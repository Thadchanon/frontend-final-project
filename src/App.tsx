import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import ContentDetail from './pages/ContentDetail'
import CreateContent from './pages/CreateContent'
import Edit from './pages/Edit'
import GuardedRoute from './guards/GuardedRoute'
import { useAuth } from './providers/AuthProvider'
import { Toaster } from 'react-hot-toast'
import Register from './pages/Register'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <div className="App">
      <Navbar />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content/:id" element={<ContentDetail />} />
        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
          <Route path="/create" element={<CreateContent />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
