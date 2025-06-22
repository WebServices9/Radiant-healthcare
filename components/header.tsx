"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import ThemeSwitcher from "@/components/theme-switcher"
import LanguageSwitcher from "@/components/language-switcher"
import { useLanguage } from "@/components/language-context"
import { FaWhatsapp } from "react-icons/fa"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { language, setLanguage, translate } = useLanguage()

  const handleLanguageChange = (newLanguage: "english" | "hindi") => {
    setLanguage(newLanguage)
  }

  const menuItems = [
    {
      english: "Home",
      hindi: "होम",
      href: "/",
    },
    {
      english: "Doctors",
      hindi: "डॉक्टर्स",
      href: "/doctors",
    },
    {
      english: "Contact",
      hindi: "संपर्क",
      href: "/footer",
    }
  ]

  // Detect scroll and screen size
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && window.innerWidth < 768) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      {/* Top info bar - conditional visibility */}
      <div 
        className={`w-full bg-white text-sm sm:text-base transition-all duration-300 ${
          scrolled ? "opacity-0 translate-y-[-20px]" : "opacity-100"
        }`}
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 py-1 px-4">
          <p className="font-medium"><Link href="/doctors">Find a Doctor</Link></p>
          <Link href="https://wa.me/6389021255"  target="_blank" rel="noopener noreferrer">
            <p className="font-medium flex items-center gap-2">
              <FaWhatsapp className="text-green-500" />
              <span>WhatsApp Us (24/7)</span>
            </p>
          </Link>
          <p className="font-medium">Contact Us: <a href="tel:6389021255" className="underline hover:text-gray-200">6389021255</a></p>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 shadow-md dark:border-gray-800">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-18 md:px-6 lg:h-20">
          <div className="flex items-center flex-1 md:flex-none">
            <Link href="/" className="flex items-center group">
              <img
                src="/Radiant.png"
                alt="Radiant Healthcare Hospital Logo"
                className="h-10 w-auto sm:h-12 object-contain transition-all duration-300 group-hover:shadow-cyan-400/30"
              />
              <span className="ml-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-base font-bold text-transparent transition-all duration-300 sm:text-lg truncate max-w-[150px] sm:max-w-none">
                {translate("Radiant Healthcare Hospital", "रेडिएंट हेल्थकेयर हॉस्पिटल")}
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-xs font-medium text-blue-100 transition-colors duration-200 hover:text-white lg:text-sm"
              >
                {translate(item.english, item.hindi)}
              </Link>
            ))}
            <Link href="/appointment" passHref>
              <Button
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs lg:text-sm shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                onClick={() => console.log("Appointment button clicked")}
              >
                {translate("Make Appointment", "अपॉइंटमेंट बुक करें")}
              </Button>
            </Link>
          </nav>

          {/* Mobile menu toggle button with white icons */}
          <div className="md:hidden ml-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-white border-white hover:bg-blue-800/50 hover:border-white focus:outline-none focus:ring-2 focus:ring-white p-2"

            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="container mx-auto px-4 pb-4 md:hidden bg-gradient-to-b from-blue-800 to-white">
            <nav className="flex flex-col space-y-2 py-3">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-xs font-medium text-blue-100 transition-colors duration-200 hover:text-white px-2 py-1.5 rounded-md hover:bg-blue-800/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translate(item.english, item.hindi)}
                </Link>
              ))}
              <Link href="/appointment" passHref className="w-full mt-2">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                  {translate("Make Appointment", "अपॉइंटमेंट बुक करें")}
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}