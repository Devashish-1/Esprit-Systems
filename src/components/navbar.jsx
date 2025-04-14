"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown, GraduationCap, Building2, Calendar, Users, School } from "lucide-react"
import { Button } from "./ui/button"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-lg flex items-center justify-center mr-2 shadow-lg">
              <School className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl text-white">Esprit Systems</span>
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink href="/#what-we-do" label="What We Do" />
          <NavDropdown
            label="For Students"
            items={[
              { label: "Courses", href: "/#courses", icon: <GraduationCap className="h-4 w-4 mr-2" /> },
              { label: "Projects", href: "/#projects", icon: <Building2 className="h-4 w-4 mr-2" /> },
              { label: "Events", href: "/#events", icon: <Calendar className="h-4 w-4 mr-2" /> },
              { label: "Community", href: "/#community", icon: <Users className="h-4 w-4 mr-2" /> },
            ]}
          />
          <NavDropdown
            label="For Businesses"
            items={[
              { label: "Digital Solutions", href: "/#solutions", icon: <Building2 className="h-4 w-4 mr-2" /> },
              { label: "Case Studies", href: "/#case-studies", icon: <GraduationCap className="h-4 w-4 mr-2" /> },
              { label: "Partner With Us", href: "/#partner", icon: <Users className="h-4 w-4 mr-2" /> },
            ]}
          />
          <NavLink href="/#events" label="Events" />
          <NavLink href="/#contact" label="Contact" />
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-all">
            Login
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all">Get Started</Button>
        </div>

        <button className="lg:hidden text-white p-2" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-gray-900 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a
                href="/#what-we-do"
                className="text-white py-2 border-b border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                What We Do
              </a>
              <div className="border-b border-gray-800 pb-2">
                <div className="text-white py-2 font-medium">For Students</div>
                <div className="pl-4 space-y-2 mt-1">
                  <a href="/#courses" className="text-gray-300 py-1 block text-sm" onClick={() => setIsOpen(false)}>
                    Courses
                  </a>
                  <a href="/#projects" className="text-gray-300 py-1 block text-sm" onClick={() => setIsOpen(false)}>
                    Projects
                  </a>
                  <a href="/#events" className="text-gray-300 py-1 block text-sm" onClick={() => setIsOpen(false)}>
                    Events
                  </a>
                  <a href="/#community" className="text-gray-300 py-1 block text-sm" onClick={() => setIsOpen(false)}>
                    Community
                  </a>
                </div>
              </div>
              <div className="border-b border-gray-800 pb-2">
                <div className="text-white py-2 font-medium">For Businesses</div>
                <div className="pl-4 space-y-2 mt-1">
                  <a href="/#solutions" className="text-gray-300 py-1 block text-sm" onClick={() => setIsOpen(false)}>
                    Digital Solutions
                  </a>
                  <a
                    href="/#case-studies"
                    className="text-gray-300 py-1 block text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Case Studies
                  </a>
                  <a href="/#partner" className="text-gray-300 py-1 block text-sm" onClick={() => setIsOpen(false)}>
                    Partner With Us
                  </a>
                </div>
              </div>
              <a href="/#events" className="text-white py-2 border-b border-gray-800" onClick={() => setIsOpen(false)}>
                Events
              </a>
              <a href="/#contact" className="text-white py-2 border-b border-gray-800" onClick={() => setIsOpen(false)}>
                Contact
              </a>
              <div className="pt-2 flex flex-col space-y-2">
                <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/10">
                  Login
                </Button>
                <Button className="w-full duration-300 bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const NavLink = ({ href, label }) => {
  return (
    <a href={href} className="text-slate-200 duration-300 hover:text-slate-400 text-sm font-medium transition-colors">
      {label}
    </a>
  )
}

const NavDropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className="flex items-center text-gray-300 hover:text-white text-sm font-medium transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <ChevronDown className="h-4 w-4 ml-1 opacity-70" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
          >
            <div className="py-1" role="menu" aria-orientation="vertical">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
