// src/components/common/Navbar.jsx
import AuthButtons from './AuthButtons';

const Navbar = () => (
  <nav className=" top-0 z-50 flex justify-between items-center p-4 bg-transparent text-seasalt">
    <h1 className="text-4xl font-normal">Wislet</h1>
    <AuthButtons />
  </nav>
);

export default Navbar;
