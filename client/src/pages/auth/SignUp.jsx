import React from 'react';
import CoinStack3 from '@/assets/images/coins-stack3.svg';
import RegistrationForm from '@/components/auth/RegistrationForm';

function SignUp() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 px-6 sm:px-12 py-12 flex flex-col">
        <div className="mb-8">
          <h2 className="text-4xl font-light text-black mb-8 pt-5">Wislet</h2>
          <h1 className="text-5xl font-bold text-yellow mb-6 pt-10">Sign up</h1>
        </div>

        <RegistrationForm />

        <p className="text-center text-sm font-light text-gray-600 mt-6">
          You have an account?{' '}
          <span className="text-yellow cursor-pointer hover:underline">Sign in</span>
        </p>
      </div>

      <div className="hidden md:flex w-full md:w-1/2 bg-background text-seasalt relative items-end justify-start px-8 pb-8">
        <img
          src={CoinStack3}
          alt="Finance illustration"
          className="object-contain max-w-[550px] max-h-[550px] mx-auto"
        />
        <div className="absolute bottom-6 left-8 text-left">
          <h2 className="text-4xl font-bold text-seasalt mb-2">One Website</h2>
          <h2 className="text-seasalt font-bold text-4xl">Take control of your finances</h2>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
