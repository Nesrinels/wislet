import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

function RegistrationForm() {
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_URL;

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    agreeToTerms: false,
  });

  const isFormValid =
    formData.email.trim() !== '' &&
    formData.password.trim() !== '' &&
    formData.name.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.agreeToTerms;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/auth/register`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: formData.phone, // Already in full international format
      });

      console.log('Registration successful:', response.data);
      navigate('/home');
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 pl-12 bg-jasmine-20 border-0 rounded-lg text-black placeholder-black-50 focus:ring-2 focus:ring-jasmine-50 focus:outline-none hover:bg-jasmine-50 transition-all"
        />
      </div>

      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full px-4 py-3 pl-12 pr-12 bg-jasmine-20 border-0 rounded-lg text-black placeholder-black-50 focus:ring-2 focus:ring-jasmine-50 focus:outline-none hover:bg-jasmine-50 transition-all"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="!pl-12 w-full bg-jasmine-20 border-0 rounded-lg px-4 py-3 text-black placeholder-black-50 focus:ring-2 focus:ring-jasmine-50 focus:outline-none hover:bg-jasmine-50 transition-all"
        />
      </div>

      <div className="relative">
        <PhoneInput
  international
  defaultCountry="DZ"
  placeholder="Phone"
  value={formData.phone}
  onChange={(value) => setFormData({ ...formData, phone: value })}
  className="w-full bg-jasmine-20 border-0 rounded-lg px-4 py-3 text-black placeholder-black-50 focus:ring-2 focus:ring-jasmine-50 focus:outline-none hover:bg-jasmine-50 transition-all"
/>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <input
          type="checkbox"
          id="terms"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleInputChange}
          className="w-4 h-4 accent-yellow rounded"
        />
        <label htmlFor="terms" className="text-base font-extralight text-black">
          I agree to the <span className="text-yellow">Terms</span> and <span className="text-yellow">Privacy Policy</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-3 ${
          isFormValid ? 'bg-yellow text-seasalt' : 'bg-jasmine-20 text-yellow cursor-not-allowed'
        } font-light rounded-lg transition-all mt-6`}
      >
        Create Account
      </button>
    </form>
  );
}

export default RegistrationForm;