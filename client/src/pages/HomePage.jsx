// src/pages/HomePage.jsx
import Navbar from '@/components/common/Navbar';

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="h-screen flex items-center justify-between bg-black text-white px-12">
        <div>
          <h1 className="text-5xl font-bold">Take Control Of Your Finances</h1>
          <div className="mt-8 flex gap-4">
            <button className="bg-yellow-400 rounded-full py-2 px-6">Features</button>
            <button className="bg-yellow-400 rounded-full py-2 px-6">About</button>
          </div>
        </div>
        <img src="/path/to/coins-stack2.svg" alt="Coins" className="w-40" />
      </main>
    </>
  );
}

export default HomePage;
