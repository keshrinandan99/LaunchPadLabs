"use client"

import { Rocket } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 border-t border-gray-200 overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-blue-100 whitespace-nowrap select-none">
          LaunchPad Labs
        </h2>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Branding section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold">
                <span className="text-blue-500">LaunchPad</span>{" "}
                <span className="text-gray-900">Labs</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">
              We build high-quality MVPs to transform your ideas into reality.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors"
                aria-label="Twitter"
              >
                <img src="/twitter-icon.svg" alt="Twitter" className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors"
                aria-label="LinkedIn"
              >
                <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  MVP Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* About column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Portfolio column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Portfolio</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  MVP Showcase
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Terms of Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
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