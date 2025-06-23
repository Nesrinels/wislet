// src/components/common/AuthButtons.jsx
import { Link } from 'react-router-dom';

const AuthButtons = () => (
  <div className="flex gap-2">
    <Link to="/login" className="border px-4 py-2 rounded-3xl text-white hover:bg-white hover:text-black transition font-light">
      Log in
    </Link>
    <Link to="/signup" className="bg-seasalt px-4 py-2 rounded-3xl text-yellow hover:bg-yellow-300 transition font-light">
      Sign up
    </Link>
  </div>
);

export default AuthButtons;
