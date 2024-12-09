'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy | Your Company Name',
    description: 'Our privacy policy outlines how we collect, use, and protect your personal information in accordance with Saudi Arabian laws and regulations.',
    keywords: 'privacy policy, personal information, data protection, Saudi Arabian laws',
};

const Privacy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-6">
                <Link
                    href="/"
                    className="inline-flex items-center text-gray-600 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </Link>
            </div>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 sm:p-12"
                >
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                    <div className="mb-8 text-sm text-gray-500">
                        Last updated: {new Date().toLocaleDateString()}
                    </div>

                    <div className="space-y-8 text-gray-600">
                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                            <p className="mb-4">We may collect the following types of personal data:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Personal Identification Information: Name, email address, phone number, address, etc.</li>
                                <li>Payment Information: Credit/debit card details and billing information for transactions.</li>
                                <li>Technical Information: IP address, browser type, device information, and usage data.</li>
                                <li>Other Information: Any data you voluntarily provide (e.g., when filling out forms or surveys).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                            <p className="mb-4">We collect and use your information for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To provide and improve our services.</li>
                                <li>To process your orders and transactions.</li>
                                <li>To send you updates, notifications, and marketing communications (with your consent).</li>
                                <li>To comply with legal obligations and resolve disputes.</li>
                                <li>To enhance website security and functionality.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Sharing Your Information</h2>
                            <p className="mb-4">
                                We do not sell, rent, or trade your personal data to third parties. However, we may share your data with:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Service Providers: To process payments, host the Website, or provide customer support.</li>
                                <li>Authorities: To comply with Saudi Arabian laws and regulations.</li>
                                <li>Business Partners: In cases of joint promotions or collaborations (with your consent).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>
                            <p className="mb-4">Under the Saudi Personal Data Protection Law (PDPL), you have the following rights:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access and Correction: Request access to your personal data and correct any inaccuracies.</li>
                                <li>Erasure: Request the deletion of your personal data when no longer necessary.</li>
                                <li>Withdraw Consent: Revoke your consent to processing personal data at any time.</li>
                                <li>Restriction of Processing: Limit how your data is used in certain circumstances.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
                            <p className="mb-4">
                                Our Website is not intended for children under the age of 18. We do not knowingly collect personal data from children without parental consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
                            <p className="mb-4">
                                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy regularly.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                <p>[Your Company Name]</p>
                                <p>Email: [Insert Email Address]</p>
                                <p>Phone: [Insert Phone Number]</p>
                                <p>Address: [Insert Address]</p>
                            </div>
                        </section>

                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-800">
                                By using our Website, you agree to the terms of this Privacy Policy. Thank you for trusting us with your personal data.
                            </p>
                        </div>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
                            <p>
                                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations of the Kingdom of Saudi Arabia.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
                            <p>
                                For any privacy-related inquiries or to exercise your rights, please contact our Data Protection Officer at:
                            </p>
                            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                <p>Email: privacy@yourcompany.com</p>
                                <p>Phone: +966 XX XXX XXXX</p>
                                <p>Address: [Your Saudi Arabian Address]</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cookie Policy</h2>
                            <p className="mb-4">
                                Our website uses cookies and similar technologies to enhance your browsing experience. By using our website, you consent to our use of cookies in accordance with this privacy policy.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="text-sm text-blue-800">
                                    You can manage your cookie preferences through your browser settings at any time.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
                            <p className="mb-4">
                                Any transfer of personal data outside the Kingdom of Saudi Arabia will be conducted in compliance with the PDPL and other applicable regulations, ensuring adequate protection measures are in place.
                            </p>
                        </section>

                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            This privacy policy is governed by the laws of the Kingdom of Saudi Arabia. We reserve the right to update this policy as needed to comply with relevant regulations and best practices.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;