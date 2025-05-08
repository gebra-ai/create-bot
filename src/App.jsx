import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this email to your backend
    console.log('Submitting email:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          <span className="gradient-text">Create Bot</span>
        </h1>
        <p className="text-gray-600 text-xl mt-2 text-center">AI-powered bot creation platform</p>
      </header>

      <main className="w-full max-w-3xl bg-white rounded-xl shadow-lg overflow-hidden mb-12">
        <div className="p-8 md:p-12">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            <h2 className="text-2xl font-semibold text-gray-800">Coming Soon</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            We're building a revolutionary platform that makes creating custom AI bots simple and accessible. 
            Our platform will allow you to design, train, and deploy AI assistants with no coding required.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1 border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Easy to Use</h3>
              <p className="text-gray-600 text-sm">Design your bot with our intuitive no-code interface</p>
            </div>
            <div className="flex-1 border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Powerful AI</h3>
              <p className="text-gray-600 text-sm">Leverage cutting-edge AI models for natural interactions</p>
            </div>
            <div className="flex-1 border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Quick Deploy</h3>
              <p className="text-gray-600 text-sm">Get your bot up and running in minutes, not days</p>
            </div>
          </div>
        </div>
      </main>

      <section className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Get Early Access</h2>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition duration-200"
              >
                Join Waitlist
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="mt-2 text-gray-600">Thank you! We'll notify you when we launch.</p>
            </div>
          )}
        </div>
      </section>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Create Bot. All rights reserved.
      </footer>
    </div>
  )
}

export default App
