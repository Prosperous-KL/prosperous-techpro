import LegalHeader from '../components/LegalHeader'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <LegalHeader />
      
      <div className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: Oct 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Introduction</h2>
              <p>
                Prosperous TechPro ("we," "us," "our," or "Company") is committed to protecting your privacy and ensuring you have a positive experience on our website and when using our services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in compliance with Ghana's Data Protection Act, 2012, and other applicable regulations.
              </p>
              <p className="mt-4">
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">2.1 Information You Provide Directly</h3>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li><strong>Contact Information:</strong> Name, email address, phone number, and physical address</li>
                    <li><strong>Account Information:</strong> Username, password, and account preferences</li>
                    <li><strong>Transaction Information:</strong> Details of VTU services purchased (airtime, data, utilities)</li>
                    <li><strong>Payment Information:</strong> Payment method details (processed securely through PayStack)</li>
                    <li><strong>Communication Data:</strong> Messages, inquiries, and support requests</li>
                    <li><strong>Identity Verification:</strong> Government-issued ID or other verification documents required for compliance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">2.2 Information Collected Automatically</h3>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li><strong>Device Information:</strong> Device type, operating system, browser type, and IP address</li>
                    <li><strong>Usage Information:</strong> Pages visited, time spent on pages, links clicked, and referral sources</li>
                    <li><strong>Cookies:</strong> We use cookies and similar technologies to enhance your experience</li>
                    <li><strong>Location Data:</strong> Approximate location based on IP address (not GPS tracking)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">2.3 Information from Third Parties</h3>
                  <ul className="list-disc list-inside space-y-2 ml-2">
                    <li><strong>Payment Processors:</strong> Transaction information from PayStack</li>
                    <li><strong>Service Providers:</strong> VTU service providers and telecom networks</li>
                    <li><strong>Business Partners:</strong> Information shared through partnerships</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">3. How We Use Your Information</h2>
              <p>We use collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Service Delivery:</strong> Processing VTU transactions, airtime top-ups, and utility payments</li>
                <li><strong>Account Management:</strong> Creating and maintaining your account</li>
                <li><strong>Compliance & Fraud Prevention:</strong> Verifying identity, detecting fraud, and meeting regulatory requirements</li>
                <li><strong>Communication:</strong> Sending transaction confirmations, updates, and customer support responses</li>
                <li><strong>Marketing & Notifications:</strong> Informing you about new services, promotions (with your consent)</li>
                <li><strong>Website Optimization:</strong> Improving user experience and troubleshooting technical issues</li>
                <li><strong>Legal Compliance:</strong> Complying with Ghana's laws including the Data Protection Act, 2012</li>
                <li><strong>Analytics:</strong> Understanding user behavior to improve our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">4. How We Protect Your Information</h2>
              <p>We implement industry-standard security measures to protect your data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>SSL/TLS encryption for all data transmission</li>
                <li>Secure password storage using encryption</li>
                <li>Limited access to personal information (staff need-to-know basis)</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Compliance with PCI DSS standards for payment data</li>
                <li>Secure deletion of personal data when no longer needed</li>
              </ul>
              <p className="mt-4">
                <strong>Note:</strong> While we strive to protect your information, no system is 100% secure. We are not responsible for unauthorized access due to circumstances beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Data Sharing & Disclosure</h2>
              <p>We may share your information in the following circumstances:</p>
              <div className="space-y-3 ml-4 mt-3">
                <div>
                  <strong>5.1 Service Providers:</strong> With payment processors, telecom networks, and VTU providers necessary to deliver services
                </div>
                <div>
                  <strong>5.2 Legal Requirements:</strong> When required by Ghana law, court orders, or regulatory authorities
                </div>
                <div>
                  <strong>5.3 Business Transfers:</strong> In case of merger, acquisition, or sale of assets
                </div>
                <div>
                  <strong>5.4 User Consent:</strong> When you explicitly consent to share information
                </div>
                <div>
                  <strong>5.5 No Selling of Data:</strong> We do NOT sell your personal data to third parties for marketing purposes
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Your Rights Under Ghana's Data Protection Act, 2012</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Deletion:</strong> Request deletion of your data (subject to legal obligations)</li>
                <li><strong>Right to Object:</strong> Object to processing of your data for certain purposes</li>
                <li><strong>Right to Data Portability:</strong> Request your data in a portable format</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for specific processing activities</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact us at <a href="mailto:privacy@prosperoustechpro.com" className="text-primary-600 hover:underline">privacy@prosperoustechpro.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Data Retention</h2>
              <p>
                We retain your personal data for as long as necessary to provide services and comply with legal obligations. Specifically:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li><strong>Transaction Records:</strong> Retained for 7 years (Ghana tax compliance)</li>
                <li><strong>Account Information:</strong> Retained while account is active</li>
                <li><strong>Communication Records:</strong> Retained for 3 years</li>
                <li><strong>Identity Verification Data:</strong> Retained as required by anti-money laundering regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Cookies & Similar Technologies</h2>
              <p>
                We use cookies to enhance your experience. You can control cookie settings in your browser. However, disabling cookies may affect site functionality.
              </p>
              <div className="space-y-3 ml-4 mt-3">
                <div>
                  <strong>Essential Cookies:</strong> Required for site operation and security
                </div>
                <div>
                  <strong>Preference Cookies:</strong> Remember your choices (language, theme)
                </div>
                <div>
                  <strong>Analytics Cookies:</strong> Help us understand how users interact with our site
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. Please review their privacy policies independently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Children's Privacy</h2>
              <p>
                Our Services are not directed to children under 18. We do not knowingly collect personal data from children. If we become aware that a child has provided us information, we will take steps to delete such data and terminate the child's account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">11. International Data Transfers</h2>
              <p>
                We primarily process data in Ghana. If data is transferred internationally, we ensure appropriate safeguards are in place to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be effective upon posting. Your continued use of our Services constitutes acceptance of the updated policy. We will notify you of significant changes via email or prominent notice on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">13. Contact Information</h2>
              <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
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
                <strong>Compliance Notice:</strong> This Privacy Policy complies with Ghana's Data Protection Act, 2012 (GDPA), the Copyright Office's e-commerce guidelines, and international privacy standards. By using our Services, you acknowledge you have read and understood this Privacy Policy.
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
