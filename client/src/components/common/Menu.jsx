import {Home} from 'react-feather';

const Menu = () => (
  
  
  <nav className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-12 bg-yellow text-seasalt rounded-full shadow-lg w-[350px] h-[45px]">
    
    {/* Home icon with goldenrod background */}
    <div className="relative flex items-center justify-center px-5 py-3 rounded-full bg-goldenrod-40 w-[80px] h-[44px]">
      <Home size={24} stroke="#FAFAF8" />
    </div>

    {/* Navigation Buttons */}
    {/* Features Button */}
      <button
       className="relative font-light text-base px-4 py-2 rounded-full transition-all duration-300 hover:bg-goldenrod-40 h-[44px]"
       >
       Features
      </button>
    {/* About Button */}
      <button
       className="relative font-light text-base px-4 py-2 rounded-full transition-all duration-300 hover:bg-goldenrod-40 h-[44px]"
       >
       About
      </button>
  </nav>
);

export default Menu;