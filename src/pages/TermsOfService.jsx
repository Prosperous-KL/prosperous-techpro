import LegalHeader from '../components/LegalHeader'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <LegalHeader />
      
      <div className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: May 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") constitute a binding agreement between you ("User," "you," or "Customer") and Prosperous TechPro ("Company," "we," "us," or "our"). By accessing and using our website, mobile application, and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="mt-4">
                If you do not agree with any part of these Terms, you may not use our Services. We reserve the right to modify these Terms at any time. Continued use of our Services constitutes acceptance of updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Description of Services</h2>
              <p>Prosperous TechPro provides the following VTU (Virtual Top-Up) and digital services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Data bundle purchases and delivery</li>
                <li>Mobile airtime top-up services</li>
                <li>Utility bill payments (electricity, water)</li>
                <li>SMS Verification API for third-party developers</li>
                <li>Other digital services as may be offered from time to time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">3. User Eligibility & Account Registration</h2>
              <div className="space-y-3 ml-4">
                <div>
                  <strong>3.1 Eligibility:</strong>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>You must be at least 18 years old or of legal age in your jurisdiction</li>
                    <li>You must be a resident of Ghana or have a valid Ghana phone number</li>
                    <li>You must have the legal authority to enter into binding agreements</li>
                  </ul>
                </div>

                <div>
                  <strong>3.2 Account Registration:</strong>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>You must provide accurate, complete, and current information during registration</li>
                    <li>You are responsible for maintaining the confidentiality of your password and account</li>
                    <li>You agree to accept responsibility for all activities on your account</li>
                    <li>You must notify us immediately of any unauthorized account access</li>
                    <li>We reserve the right to refuse service or suspend accounts at our discretion</li>
                  </ul>
                </div>

                <div>
                  <strong>3.3 Verification:</strong>
                  <p className="mt-2">
                    We may require identity verification and documentation to comply with anti-money laundering (AML) and know-your-customer (KYC) regulations. Failure to provide required documentation may result in account suspension or termination.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">4. User Responsibilities & Prohibited Activities</h2>
              <p>You agree NOT to use our Services for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Illegal activities or services prohibited by Ghana law</li>
                <li>Money laundering, terrorist financing, or fraud</li>
                <li>Harassment, abuse, or threatening communications</li>
                <li>Intellectual property infringement</li>
                <li>Unauthorized access to systems or networks</li>
                <li>Circumventing payment verification processes</li>
                <li>Reverse engineering or attempting to access source code</li>
                <li>Reselling or redistributing our services without authorization</li>
                <li>Creating multiple accounts for fraudulent purposes</li>
                <li>Any activity that violates Ghana's laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Payment Terms & Conditions</h2>
              <div className="space-y-3 ml-4">
                <div>
                  <strong>5.1 Payment Methods:</strong>
                  <p className="mt-2">
                    We accept payments through PayStack and other authorized payment gateways. By providing payment information, you authorize us to charge your account for services rendered.
                  </p>
                </div>

                <div>
                  <strong>5.2 Transaction Fees:</strong>
                  <p className="mt-2">
                    All transaction fees and charges are clearly displayed before you complete a transaction. These fees are non-refundable except as required by law.
                  </p>
                </div>

                <div>
                  <strong>5.3 Failed Transactions:</strong>
                  <p className="mt-2">
                    If a transaction fails, your account will not be charged. We will make reasonable efforts to process successful transactions, but we are not liable for delays or failures beyond our control.
                  </p>
                </div>

                <div>
                  <strong>5.4 Payment Security:</strong>
                  <p className="mt-2">
                    Payment information is processed securely through PCI DSS-compliant payment gateways. We do not store full credit card details on our servers.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Service Delivery & Guarantees</h2>
              <div className="space-y-3 ml-4">
                <div>
                  <strong>6.1 Delivery Timeframes:</strong>
                  <p className="mt-2">
                    Services are typically delivered immediately upon successful payment. However, we do not guarantee instant delivery due to network conditions, service provider limitations, and technical issues beyond our control.
                  </p>
                </div>

                <div>
                  <strong>6.2 Service Limitations:</strong>
                  <p className="mt-2">
                    Services depend on third-party providers (telecom networks, utilities). We are not liable for delays or failures caused by service providers or network infrastructure.
                  </p>
                </div>

                <div>
                  <strong>6.3 Refunds Policy:</strong>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Refunds are issued only if services are not delivered within 24 hours or as per service provider guidelines</li>
                    <li>Refund requests must be submitted within 30 days of transaction</li>
                    <li>Refunds are processed to the original payment method within 5-7 business days</li>
                    <li>We reserve the right to refuse refunds for transactions initiated by unauthorized users</li>
                  </ul>
                </div>

                <div>
                  <strong>6.4 No Warranty:</strong>
                  <p className="mt-2">
                    Services are provided "AS IS" without warranties of any kind. We do not guarantee uninterrupted, error-free service or specific results.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Limitations of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY GHANA LAW, PROSPEROUS TECHPRO SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Service interruptions or network failures</li>
                <li>Third-party service provider failures</li>
                <li>Unauthorized account access or data breach due to user negligence</li>
              </ul>
              <p className="mt-4">
                Our total liability for any claim shall not exceed the amount you paid for the service in question, or 100 Ghana Cedis (GHS), whichever is greater.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Prosperous TechPro, its officers, employees, and partners from any claims, damages, or costs (including legal fees) arising from:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Your violation of these Terms</li>
                <li>Your misuse of our Services</li>
                <li>Your violation of Ghana law or third-party rights</li>
                <li>Unauthorized use of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Intellectual Property Rights</h2>
              <p>
                All content, logos, trademarks, and intellectual property on our website are owned by Prosperous TechPro or licensed partners. You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Reverse engineer or attempt to gain unauthorized access</li>
                <li>Use our trademarks or logos without written consent</li>
                <li>Claim ownership of our services or intellectual property</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Suspension & Termination</h2>
              <div className="space-y-3 ml-4">
                <div>
                  <strong>10.1 Suspension:</strong>
                  <p className="mt-2">
                    We may suspend your account immediately if we suspect fraudulent activity, violation of these Terms, or illegal conduct.
                  </p>
                </div>

                <div>
                  <strong>10.2 Termination:</strong>
                  <p className="mt-2">
                    We may terminate your account at any time, with or without cause. We will provide written notice where possible. Upon termination, your right to use Services ceases immediately.
                  </p>
                </div>

                <div>
                  <strong>10.3 Account Data:</strong>
                  <p className="mt-2">
                    Upon termination, we will retain transaction records as required by law. Other account data will be deleted in accordance with our Privacy Policy.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Third-Party Services & Links</h2>
              <p>
                Our platform integrates with third-party services (payment processors, telecom providers, utility companies). We are not responsible for third-party service failures or disputes. You agree to comply with third-party terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Dispute Resolution & Governing Law</h2>
              <div className="space-y-3 ml-4">
                <div>
                  <strong>12.1 Informal Resolution:</strong>
                  <p className="mt-2">
                    In case of disputes, you agree to contact us first and attempt informal resolution.
                  </p>
                </div>

                <div>
                  <strong>12.2 Governing Law:</strong>
                  <p className="mt-2">
                    These Terms are governed by the laws of the Republic of Ghana, without regard to conflicts of law principles.
                  </p>
                </div>

                <div>
                  <strong>12.3 Jurisdiction:</strong>
                  <p className="mt-2">
                    You agree to submit to the exclusive jurisdiction of the Courts of Ghana for any legal proceedings.
                  </p>
                </div>

                <div>
                  <strong>12.4 Arbitration:</strong>
                  <p className="mt-2">
                    For disputes, the parties may agree to binding arbitration in Ghana as an alternative to litigation.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">13. Regulatory Compliance</h2>
              <p>
                Prosperous TechPro operates in compliance with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                <li>Ghana's Data Protection Act, 2012</li>
                <li>Anti-Money Laundering (AML) regulations</li>
                <li>Know-Your-Customer (KYC) requirements</li>
                <li>E-Commerce regulations</li>
                <li>National Communications Authority (NCA) regulations</li>
                <li>Bank of Ghana regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">14. Severability</h2>
              <p>
                If any part of these Terms is found invalid or unenforceable, the remaining provisions remain in full effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">15. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and Prosperous TechPro and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-900">16. Contact Information</h2>
              <p>For questions about these Terms, please contact us:</p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4 space-y-2">
                <p><strong>Prosperous TechPro</strong></p>
                <p>📧 Email: <a href="mailto:support@prosperoustechpro.com" className="text-primary-600 hover:underline">support@prosperoustechpro.com</a></p>
                <p>📞 Phone: <a href="tel:+233248699146" className="text-primary-600 hover:underline">+233 248 699 146</a></p>
                <p>💬 WhatsApp: <a href="https://wa.me/233248699146" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">+233 248 699 146</a></p>
                <p>🌍 Jurisdiction: Ghana</p>
              </div>
            </section>

            <section className="border-t pt-8 mt-8">
              <p className="text-sm text-gray-600">
                <strong>Compliance Notice:</strong> These Terms of Service comply with Ghana's consumer protection laws, e-commerce regulations, and international best practices. By using our Services, you acknowledge you have read and understood these Terms.
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
