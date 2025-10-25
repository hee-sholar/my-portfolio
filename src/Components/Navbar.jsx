import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <nav
      className="fixed top-0 w-full bg-white/90 dark:bg-[#0f0f0f]/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50 transition-colors"
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">RayDev</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition">
              Home
            </a>
            <a href="#services" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition">
              Services
            </a>
            <a href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition">
              Projects
            </a>
            <a href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition">
              Contact Us
            </a>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/2349159329752?text=Hello%20RayDev%2C%20I%20would%20like%20to%20book%20a%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800 dark:text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4" data-aos="fade-down" data-aos-duration="600">
            <a href="#home" className="block text-gray-800 dark:text-gray-200 hover:text-blue-500">
              Home
            </a>
            <a href="#services" className="block text-gray-800 dark:text-gray-200 hover:text-blue-500">
              Services
            </a>
            <a href="#projects" className="block text-gray-800 dark:text-gray-200 hover:text-blue-500">
              Projects
            </a>
            <a href="#contact" className="block text-gray-800 dark:text-gray-200 hover:text-blue-500">
              Contact Us
            </a>

            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-6 py-2 rounded-full font-medium"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            {/* Mobile WhatsApp Button */}
            <a
              href="https://wa.me/2349159329752?text=Hello%20RayDev%2C%20I%20would%20like%20to%20book%20a%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
            >
              Book a Call
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
