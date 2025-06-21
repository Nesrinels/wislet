// src/components/common/Navbar.jsx
import AuthButtons from './AuthButtons';

const Navbar = () => (
  <nav className="sticky top-0 z-50 flex justify-between items-center p-4 bg-black text-white">
    <h1 className="text-xl font-bold">Wislet</h1>
    <AuthButtons />
  </nav>
);

export default Navbar;
