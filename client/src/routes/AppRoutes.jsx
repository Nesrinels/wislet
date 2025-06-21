// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import SignUp from '@/pages/auth/SignUp';
import LoginForm from '@/components/auth/LoginForm';
import App from '@/App'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LoginForm />} />
      {/* Add more routes as you build more pages */}
    </Routes>
  );
};

export default AppRoutes;
