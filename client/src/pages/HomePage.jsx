// src/pages/HomePage.jsx
import Navbar from '@/components/common/Navbar';
import Menu from '@/components/common/Menu';
import CoinStack2 from '@/assets/images/coins-stack2.svg';

function HomePage() {
  return (
    <>
    <div className=' bg-background'>
      <Navbar />
      <main className="h-screen flex items-center justify-between bg-background text-seasalt px-12">
        <div>
          <h1 className="text-8xl font-normal">Take Control Of Your <br/> Finances</h1>
        </div>
        <img
         src={CoinStack2}
         alt="Coin stack"
         className="absolute top-24 right-12 z-10"
        />      
        </main>
      <Menu />
      </div>
    </>
  );
}
export default HomePage;
