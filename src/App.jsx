import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

const App = () => {
  const [theme, setTheme] = useState('default')

  const themes = {
    default: {
      gradient: 'from-purple-50 via-blue-50 to-purple-50',
      blobs: ['bg-purple-200', 'bg-blue-200', 'bg-pink-200']
    },
    sunset: {
      gradient: 'from-orange-50 via-pink-50 to-purple-50',
      blobs: ['bg-orange-200', 'bg-pink-200', 'bg-yellow-200']
    },
    ocean: {
      gradient: 'from-blue-50 via-cyan-50 to-teal-50',
      blobs: ['bg-blue-200', 'bg-cyan-200', 'bg-teal-200']
    }
  }

  const currentTheme = themes[theme]

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.gradient} animate-gradient-shift`}></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${currentTheme.blobs[0]} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob`}></div>
          <div className={`absolute top-1/3 right-1/4 w-72 h-72 ${currentTheme.blobs[1]} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000`}></div>
          <div className={`absolute bottom-1/4 left-1/3 w-80 h-80 ${currentTheme.blobs[2]} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000`}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <Card />
        </div>
      </div>

      {/* Add custom animations to tailwind config */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-gradient-shift {
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  )
}

export default App
