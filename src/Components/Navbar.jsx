import React, { useState, useEffect } from 'react'

const Navbar = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const themes = [
    { name: 'default', label: 'Default' },
    { name: 'sunset', label: 'Sunset' },
    { name: 'ocean', label: 'Ocean' }
  ]

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-300
      ${isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' 
        : 'bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 py-5'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="relative group">
            <h1 className={`
              text-3xl font-extrabold tracking-tight
              transition-all duration-300
              ${isScrolled 
                ? 'text-gray-800' 
                : 'text-white'
              }
              group-hover:scale-105
            `}>
              <span className="inline-block transform hover:rotate-12 transition-transform duration-300">Q</span>
              <span className="inline-block transform hover:-rotate-12 transition-transform duration-300">u</span>
              <span className="inline-block transform hover:rotate-12 transition-transform duration-300">o</span>
              <span className="inline-block transform hover:-rotate-12 transition-transform duration-300">t</span>
              <span className="inline-block transform hover:rotate-12 transition-transform duration-300">e</span>
              <span className="inline-block transform hover:-rotate-12 transition-transform duration-300">s</span>
              <span className="inline-block mx-2">•</span>
              <span className="inline-block transform hover:rotate-12 transition-transform duration-300">A</span>
              <span className="inline-block transform hover:-rotate-12 transition-transform duration-300">p</span>
              <span className="inline-block transform hover:rotate-12 transition-transform duration-300">p</span>
            </h1>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* Theme Toggle Button */}
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`
                px-4 py-2 rounded-lg
                transition-all duration-300
                ${isScrolled 
                  ? 'bg-gray-100 hover:bg-gray-200 text-gray-800' 
                  : 'bg-white/20 hover:bg-white/30 text-white'
                }
                backdrop-blur-sm
              `}
            >
              Theme
            </button>

            {/* Theme Dropdown Menu */}
            {isMenuOpen && (
              <div className={`
                absolute right-0 mt-2 w-48 rounded-lg shadow-lg
                transition-all duration-300
                ${isScrolled 
                  ? 'bg-white' 
                  : 'bg-white/90 backdrop-blur-md'
                }
              `}>
                <div className="py-1">
                  {themes.map((t) => (
                    <button
                      key={t.name}
                      onClick={() => {
                        setTheme(t.name)
                        setIsMenuOpen(false)
                      }}
                      className={`
                        w-full text-left px-4 py-2
                        transition-colors duration-200
                        ${theme === t.name 
                          ? 'bg-purple-100 text-purple-700' 
                          : 'hover:bg-gray-100 text-gray-700'
                        }
                      `}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
