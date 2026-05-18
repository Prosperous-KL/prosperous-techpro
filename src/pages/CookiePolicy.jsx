import LegalHeader from '../components/LegalHeader'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <LegalHeader />
      
      <div className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: May 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Introduction</h2>
              <p>
                This Cookie Policy ("Policy") explains how Prosperous TechPro uses cookies and similar tracking technologies on our website and services. We are committed to transparency and compliance with Ghana's Data Protection Act, 2012, and international privacy standards.
              </p>
              <p className="mt-4">
                By continuing to use our website and services, you consent to our use of cookies as described in this Policy. You may withdraw consent by adjusting your browser settings or contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">2. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device (computer, smartphone, or tablet) that enable websites to recognize you and remember your preferences. They contain information about your browsing activity and are transmitted between your device and our servers.
              </p>
              <p className="mt-4">
                <strong>Types of Cookies:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</li>
                <li><strong>First-Party Cookies:</strong> Set by our website domain</li>
                <li><strong>Third-Party Cookies:</strong> Set by external services (analytics, payment processors)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Types of Cookies We Use</h2>
              <div className="space-y-4 ml-4">
                <div className="border-l-4 border-primary-600 pl-4 py-2">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">3.1 Essential/Strictly Necessary Cookies</h3>
                  <p>
                    These cookies are required for the website to function properly and enable core services. We do not need your consent to use these cookies.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li><strong>Session Management:</strong> Tracks your login session and authentication status</li>
                    <li><strong>Security:</strong> Detects and prevents fraudulent activities and unauthorized access</li>
                    <li><strong>Site Navigation:</strong> Remembers page preferences and navigation state</li>
                    <li><strong>Payment Processing:</strong> Maintains transaction security (PayStack integration)</li>
                    <li><strong>CSRF Protection:</strong> Protects against cross-site request forgery attacks</li>
                  </ul>
                </div>

                <div className="border-l-4 border-secondary-600 pl-4 py-2">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">3.2 Functional Cookies</h3>
                  <p>
                    These cookies remember your choices to enhance your user experience. We require your consent to use these cookies.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li><strong>User Preferences:</strong> Language selection, theme preference (light/dark mode)</li>
                    <li><strong>Account Settings:</strong> Remember your account information and preferences</li>
                    <li><strong>Saved Data:</strong> Store form data to avoid re-entry</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-600 pl-4 py-2">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">3.3 Analytics Cookies</h3>
                  <p>
                    These cookies help us understand how users interact with our website. We collect anonymous, aggregated data to improve our services. We require your consent.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li><strong>Page Views:</strong> Track which pages are visited and how often</li>
                    <li><strong>User Journey:</strong> Understand navigation patterns and user flow</li>
                    <li><strong>Performance Metrics:</strong> Monitor page load times and technical performance</li>
                    <li><strong>Traffic Sources:</strong> Identify referral sources and campaign effectiveness</li>
                    <li><strong>Device Information:</strong> Understand which devices/browsers access our site</li>
                  </ul>
                  <p className="mt-2">
                    <strong>Tools Used:</strong> Google Analytics (if implemented), Vercel Analytics
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4 py-2">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">3.4 Marketing & Advertising Cookies</h3>
                  <p>
                    These cookies are used for marketing purposes to display relevant advertisements. We require your explicit consent.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li><strong>Targeted Ads:</strong> Show advertisements relevant to your interests</li>
                    <li><strong>Campaign Tracking:</strong> Measure effectiveness of marketing campaigns</li>
                    <li><strong>Retargeting:</strong> Display ads based on your previous visits</li>
                    <li><strong>Social Media Integration:</strong> Enable social sharing and pixel tracking</li>
                  </ul>
                  <p className="mt-2">
                    <strong>Current Status:</strong> We do not currently use marketing cookies but may enable them in the future. You will be notified and given the option to opt-out.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-4 py-2">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">3.5 Third-Party Cookies</h3>
                  <p>
                    These cookies are set by our third-party service providers:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li><strong>PayStack Cookies:</strong> For payment processing and fraud prevention</li>
                    <li><strong>Vercel Cookies:</strong> For hosting analytics and performance monitoring</li>
                    <li><strong>Analytics Cookies:</strong> From analytics providers we may partner with</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Cookie Consent & Control</h2>
              <div className="space-y-3 ml-4">
                <div>
                  <strong>4.1 Consent Banner:</strong>
                  <p className="mt-2">
                    When you first visit our website, you will see a cookie consent banner. You can:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li><strong>Accept All:</strong> Consent to all cookie types</li>
                    <li><strong>Reject Non-Essential:</strong> Accept only essential cookies</li>
                    <li><strong>Customize:</strong> Choose which cookie types to accept</li>
                  </ul>
                </div>

                <div>
                  <strong>4.2 Browser Settings:</strong>
                  <p className="mt-2">
                    You can manage cookies through your browser settings:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                    <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies</li>
                    <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                    <li><strong>Edge:</strong> Settings → Privacy → Cookies and site permissions</li>
                  </ul>
                </div>

                <div>
                  <strong>4.3 Do Not Track (DNT):</strong>
                  <p className="mt-2">
                    Some browsers include a "Do Not Track" option. We respect this preference and will attempt to honor DNT requests where feasible.
                  </p>
                </div>

                <div>
                  <strong>4.4 Opt-Out Links:</strong>
                  <p className="mt-2">
                    You can opt out of specific analytics services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Analytics Opt-Out</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Cookie Duration</h2>
              <p>
                Our cookies are retained for different periods depending on their function:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Authentication Cookies:</strong> Retained for 30 days (unless you log out)</li>
                <li><strong>Analytics Cookies:</strong> Retained for up to 2 years</li>
                <li><strong>Preference Cookies:</strong> Retained for 1 year or until deleted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Similar Technologies Beyond Cookies</h2>
              <p>
                In addition to cookies, we may use other tracking technologies:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Web Beacons/Pixels:</strong> Tiny images in emails or pages that track views</li>
                <li><strong>Local Storage:</strong> Data stored locally in your browser for enhanced functionality</li>
                <li><strong>Session Storage:</strong> Temporary storage of session-specific data</li>
                <li><strong>Log Files:</strong> IP addresses, browser information, and access times</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Data Security & Privacy</h2>
              <p>
                We treat cookie data with the same security measures as personal data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Cookies are transmitted over secure SSL/TLS connections</li>
                <li>We do not store sensitive information (passwords, card details) in cookies</li>
                <li>Cookie data is protected from unauthorized access</li>
                <li>We comply with Ghana's Data Protection Act, 2012</li>
                <li>We regularly audit and update security protocols</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Children's Cookies</h2>
              <p>
                Our website is not designed for children under 18. We do not knowingly set cookies for children. If you believe a child has cookies on our site, please contact us immediately for removal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Third-Party Links & External Websites</h2>
              <p>
                Our website may contain links to external websites and services. These third parties have their own cookie policies and privacy practices. We are not responsible for third-party cookies or data collection. Please review their policies independently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">10. International Data Transfers</h2>
              <p>
                Some of our service providers (e.g., Vercel, Google Analytics) may process cookies internationally. We ensure appropriate safeguards are in place to protect your data as per Ghana's Data Protection Act, 2012.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Cookie Policy Updates</h2>
              <p>
                We may update this Cookie Policy periodically. Significant changes will be notified via email or prominent website notice. Continued use of our website constitutes acceptance of updated policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Request information about which cookies we use</li>
                <li>Request deletion of cookies and data</li>
                <li>Withdraw consent at any time</li>
                <li>File a complaint with Ghana's Data Protection Authority</li>
                <li>Exercise rights under Ghana's Data Protection Act, 2012</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">13. Cookie Audit Table</h2>
              <div className="overflow-x-auto mt-4">
                <table className="w-full border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border p-3 text-left">Cookie Name</th>
                      <th className="border p-3 text-left">Purpose</th>
                      <th className="border p-3 text-left">Duration</th>
                      <th className="border p-3 text-left">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border p-3">session_id</td>
                      <td className="border p-3">User session management</td>
                      <td className="border p-3">Session/30 days</td>
                      <td className="border p-3">Essential</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border p-3">auth_token</td>
                      <td className="border p-3">Authentication verification</td>
                      <td className="border p-3">30 days</td>
                      <td className="border p-3">Essential</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border p-3">csrf_token</td>
                      <td className="border p-3">CSRF protection</td>
                      <td className="border p-3">Session</td>
                      <td className="border p-3">Essential</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border p-3">language_preference</td>
                      <td className="border p-3">Language selection</td>
                      <td className="border p-3">1 year</td>
                      <td className="border p-3">Functional</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="border p-3">_ga</td>
                      <td className="border p-3">Google Analytics tracking</td>
                      <td className="border p-3">2 years</td>
                      <td className="border p-3">Analytics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">14. Contact Information</h2>
              <p>For questions about our Cookie Policy, please contact us:</p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4 space-y-2">
                <p><strong>Prosperous TechPro</strong></p>
                <p>📧 Email: <a href="mailto:privacy@prosperoustechpro.com" className="text-primary-600 hover:underline">privacy@prosperoustechpro.com</a></p>
                <p>📞 Phone: <a href="tel:+233248699146" className="text-primary-600 hover:underline">+233 248 699 146</a></p>
                <p>💬 WhatsApp: <a href="https://wa.me/233248699146" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">+233 248 699 146</a></p>
                <p>🌍 Jurisdiction: Ghana</p>
              </div>
            </section>

            <section className="border-t pt-8 mt-8">
              <p className="text-sm text-gray-600">
                <strong>Compliance Notice:</strong> This Cookie Policy complies with Ghana's Data Protection Act, 2012, the Copyright Office's e-commerce guidelines, and international cookie standards (GDPR, CCPA benchmarks). We are committed to transparency and respecting user privacy choices.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            &copy; 2026 Prosperous TechPro. All rights reserved. | <a href="/" className="text-primary-400 hover:underline">Home</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
