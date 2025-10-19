
export default function Footer() {
  return (
    <footer className="relative bg-gray-50 border-t border-gray-200 overflow-hidden">
     

    
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
        
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
            <div className="bg-white shadow-lg p-1 rounded-md bg-gray-200">
              <div className="w-6 h-6 sm:w-8 sm:h-8  rounded-lg flex items-center justify-center ">
                <img src="logo.png" alt="logoImg" className='w-full h-auto'/>
              </div>
              </div>
              <div>
                <img src="/LaunchPad.png" alt="LaunchPadImg" className='h-5 sm:h-6 w-auto'/>
              </div>
            </div>
            <p className="text-[#525252] font-jakarta font-medium text-sm leading-relaxed mb-6 max-w-xs">
              We build high-quality MVPs to transform your ideas into reality.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white-50 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors shadow-md"
                aria-label="Twitter"
              >
                <img src="/x.png" alt="Twitter" className="w-4 h-4 sm:w-5 sm:h-5 hover:-translate-y-0.5 transition-all duration-300 ease-in-out" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-white-50 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors shadow-md"
                aria-label="LinkedIn"
              >
                <img src="/li.png" alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5 hover:-translate-y-0.5 transition-all duration-300 ease-in-out" />
              </a>
            </div>
          </div>

          
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

   
      <div className="absolute inset-0 flex items-center sm: justify-center pointer-events-none mt-74 sm:mt-54 md:mt-66 lg:mt-74">
        <img src="footerText.png" alt="footerImage" className='w-full max-w-7xl h-auto px-4'/>
      </div>
      
     
      <div className="relative z-10 pt-8 border-t border-gray-200 mt-60 sm:mt-44 md:mt-60 lg:mt-60">
        <p className="text-gray-500 text-sm text-center">
          © 2025 LinkVerse. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  )
}