// src/components/common/AuthButtons.jsx
import { Link } from 'react-router-dom';

const AuthButtons = () => (
  <div className="flex gap-2">
    <Link to="/login" className="border px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition">
      Log in
    </Link>
    <Link to="/signup" className="bg-yellow-400 px-4 py-2 rounded-full text-black hover:bg-yellow-300 transition">
      Sign up
    </Link>
  </div>
);

export default AuthButtons;
