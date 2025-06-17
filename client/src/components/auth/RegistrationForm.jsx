import { useState } from 'react'

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    agreeTerms: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Column - Form */}
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Wislet</h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Sign up</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-1">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!formData.email}
                  readOnly
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">Email</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!formData.password}
                  readOnly
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            {/* Name */}
            <div className="space-y-1">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!formData.name}
                  readOnly
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!formData.phone}
                  readOnly
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">Phone number</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="agreeTerms"
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  required
                />
              </div>
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I confirm that I have read and agree with Terms and Conditions and Privacy Policy
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Sign up
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            You have an account?{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Right Column - Banner */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 items-center justify-center p-12">
        <div className="max-w-md text-white">
          <h2 className="text-3xl font-bold mb-4">One Website</h2>
          <h3 className="text-2xl font-semibold">Take control of your finances</h3>
          <p className="mt-4 opacity-90">
            Wislet helps you track expenses, manage budgets, and achieve your financial goals.
          </p>
        </div>
      </div>
    </div>
  )
}