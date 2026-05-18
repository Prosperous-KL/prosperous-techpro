import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Prosperous TechPro" className="h-10 w-auto" />
              <span className="text-xl font-bold gradient-text hidden sm:block">Prosperous TechPro</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary-600 transition">About</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary-600 transition">Services</button>
              <button onClick={() => scrollToSection('why')} className="text-gray-700 hover:text-primary-600 transition">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary-600 transition">Contact</button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">About</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Services</button>
              <button onClick={() => scrollToSection('why')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Contact</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-hero pt-32 pb-20 px-4 md:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Prosperous TechPro</h1>
          <p className="text-xl md:text-2xl mb-4 opacity-95">Your Gateway to Seamless Digital Transactions</p>
          <p className="text-lg md:text-xl mb-8 opacity-90">VTU • Data Bundles • Airtime • Utility Payments • SMS Verification</p>
          <button
            onClick={() => scrollToSection('services')}
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="section-title">About Prosperous TechPro</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Prosperous TechPro is Ghana's leading ICT and VTU platform, dedicated to revolutionizing digital transactions. 
            We provide reliable, fast, and secure solutions for businesses and individuals across West Africa.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Mission</h3>
              <p className="text-gray-600">
                To empower businesses and individuals with seamless access to digital services and payment solutions.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Vision</h3>
              <p className="text-gray-600">
                To become Africa's most trusted VTU and digital transaction platform.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Commitment</h3>
              <p className="text-gray-600">
                Excellence in service delivery and customer satisfaction through innovation.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-600 mb-3">Coverage</h3>
              <p className="text-gray-600">
                Serving MTN, Telecel, AT, and other major service providers in Ghana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-container bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive VTU and digital solutions for all your needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Data Bundles */}
            <div className="card">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Bundles</h3>
              <p className="text-gray-600 mb-4">
                Fast data delivery for MTN, Telecel, and AT. Instant activation on all devices.
              </p>
              <p className="text-sm text-primary-600 font-semibold">Available 24/7</p>
            </div>

            {/* Airtime */}
            <div className="card">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Airtime Top-up</h3>
              <p className="text-gray-600 mb-4">
                Instant credit to all networks. Lowest rates and highest reliability.
              </p>
              <p className="text-sm text-primary-600 font-semibold">Real-time Processing</p>
            </div>

            {/* Utility Payments */}
            <div className="card">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Utility Payments</h3>
              <p className="text-gray-600 mb-4">
                Pay electricity, water, and other bills securely in one place.
              </p>
              <p className="text-sm text-primary-600 font-semibold">Secure Transactions</p>
            </div>

            {/* SMS Verification */}
            <div className="card">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SMS Verification</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade SMS API for OTP and business communications.
              </p>
              <p className="text-sm text-primary-600 font-semibold">99.9% Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="section-container max-w-6xl mx-auto">
        <h2 className="section-title">Why Choose Prosperous TechPro</h2>
        <p className="section-subtitle">
          We deliver excellence in every transaction
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                <span className="text-xl">⚡</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Transactions</h3>
              <p className="text-gray-600">
                Real-time processing ensures instant delivery of services. No delays, no waiting.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-600 text-white">
                <span className="text-xl">🔒</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure System</h3>
              <p className="text-gray-600">
                Enterprise-grade encryption and security protocols protect your data and funds.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                <span className="text-xl">📡</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable API</h3>
              <p className="text-gray-600">
                99.9% uptime guarantee with dedicated technical support for seamless integration.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-600 text-white">
                <span className="text-xl">💰</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Affordable Services</h3>
              <p className="text-gray-600">
                Competitive pricing and best market rates. No hidden charges or surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            We're here to support your business growth
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a href="mailto:kwawulucky@gmail.com" className="text-primary-600 hover:text-primary-700 text-lg">
                  kwawulucky@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <a href="tel:0248699146" className="text-primary-600 hover:text-primary-700 text-lg">
                  0248699146
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">
                  Accra, Ghana
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
                <a
                  href="https://wa.me/233248699146"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
                >
                  <span>💬</span> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form UI */}
            <div className="card">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Your message here..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="Prosperous TechPro" className="h-10 w-auto" />
                <span className="text-white font-bold">Prosperous TechPro</span>
              </div>
              <p className="text-sm">Your trusted VTU and digital solutions partner in Ghana.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition">About Us</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition">Services</button></li>
                <li><button onClick={() => scrollToSection('why')} className="hover:text-white transition">Why Choose Us</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:support@prosperoustechpro.com" className="hover:text-white transition">Support</a></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition">Contact</button></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="/cookie-policy" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">
                &copy; 2026 Prosperous TechPro. All rights reserved.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition text-sm">Facebook</a>
                <a href="#" className="hover:text-white transition text-sm">Twitter</a>
                <a href="#" className="hover:text-white transition text-sm">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
