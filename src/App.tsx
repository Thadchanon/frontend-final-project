import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import ContentDetail from './pages/ContentDetail'
import CreateContent from './pages/CreateContent'
import Edit from './pages/Edit'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/content/:id" element={<ContentDetail />} />
        <Route path="/create" element={<CreateContent />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App
