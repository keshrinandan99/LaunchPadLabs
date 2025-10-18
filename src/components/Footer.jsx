"use client"

import { Rocket } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 border-t border-gray-200 overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-60">
        <img src="footerText.png" alt="footerImage"/>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Branding section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shadow-md">
                <img src="logo.png" alt="logoImg"/>
              </div>
              <div >
                <img src="/LaunchPad.png" alt="LaunchPadImg"/>
              </div>
            </div>
            <p className="text-[#525252] font-jakarta font-medium text-sm leading-relaxed mb-6 max-w-xs w-[284px] h-[64px]">
              We build high-quality MVPs to transform your ideas into reality.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white-50 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors shadow-md"
                aria-label="Twitter"
              >
                <img src="/x.png" alt="Twitter" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white-50 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors shadow-md"
                aria-label="LinkedIn"
              >
                <img src="/li.png" alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-jakarta font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  MVP Development
                </a>
              </li>
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* About column */}
          <div>
            <h3 className=" font-jakarta  font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Portfolio column */}
          <div>
            <h3 className="font-jakarta font-semibold mb-4">Portfolio</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  MVP Showcase
                </a>
              </li>
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="font-jakarta font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  Terms of Services
                </a>
              </li>
              <li>
                <a href="#" className="text-[#616161] font-medium font-jakarta hover:text-gray-800 text-sm transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © 2025 LinkVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}