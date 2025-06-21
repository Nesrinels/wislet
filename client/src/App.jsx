import CoinStack from './assets/images/coins-stack.svg';
import Coins from './assets/images/2coins.svg';
import OblicCoin from './assets/images/oblic-coin.svg';
import CoinStack2 from './assets/images/coins-stack2.svg';

function App() {

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="text-xl font-nohemi font-regular">Wislet</div>
        <div className="flex gap-4">
          <button className="border border-white text-white px-4 py-1 rounded-full hover:bg-white hover:text-gray-900 transition">
            Log in
          </button>
          <button className="bg-white text-yellow-500 px-4 py-1 rounded-full hover:bg-yellow-400 hover:text-white transition">
            Sign up
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col justify-center min-h-[70vh] px-6 relative">
        {/* Title */}
        <div className="text-left max-w-4xl px-6 mb-20">
          <h1 className="text-6xl font-semibold leading-tight">
            Take Control Of Your<br />
            <span className="text-white">Finances</span>
          </h1>
        </div>

        {/* Coins */}
        <img
         src={CoinStack2}
         alt="Coin stack"
         className="absolute top-24 right-12 z-10"
        />


        {/* Navigation Buttons */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-8 bg-yellow-400 text-white px-8 py-3 rounded-full shadow-lg text-sm font-medium">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6M5 10v10h14V10" />
            </svg>
            <span>Features</span>
          </div>
          <span className="border-l border-white h-6"></span>
          <button>About</button>
        </div>
      </main>
    </div>
  );
}

export default App;
