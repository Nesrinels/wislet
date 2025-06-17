import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import SignUp from './pages/auth/SignUp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        {/* Add more routes here as needed */}
        <Route path="/login" element={<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center"><h1>Login Page - Coming Soon</h1></div>} />
      </Routes>
    </Router>
  </StrictMode>,
)