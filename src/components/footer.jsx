import { School, Facebook, Twitter, Linkedin, Instagram, ChevronRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-5">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <School className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl text-white">Esprit Systems</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Bridging the digital divide for small businesses and students through innovation, education, and
              collaboration.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5 text-gray-300" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5 text-gray-300" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#what-we-do" className="text-gray-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> What We Do
                </a>
              </li>
              <li>
                <a href="/#courses" className="text-gray-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Courses
                </a>
              </li>
              <li>
                <a href="/#events" className="text-gray-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Events
                </a>
              </li>
              <li>
                <a
                  href="/#success-stories"
                  className="text-gray-400 hover:text-white flex items-center transition-colors"
                >
                  <ChevronRight className="h-4 w-4 mr-1" /> Success Stories
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-5">For Students</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Apply for Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Project Showcase
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Student Community
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Certifications
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-5">For Businesses</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Digital Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Partner With Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Request a Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="h-4 w-4 mr-1" /> Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Esprit Systems. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">Proudly powered by Sri Brij Bhushan Sahai University</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
