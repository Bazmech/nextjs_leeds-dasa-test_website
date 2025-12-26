'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/ui/PageHero';

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />

      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-4xl mx-auto prose-headings:font-display prose-headings:text-river-900 prose-p:text-river-600 prose-li:text-river-600"
          >
            <p className="text-river-500 text-sm mb-8">
              Last updated: January 2026
            </p>

            <h2>1. Introduction</h2>
            <p>
              Leeds and District Amalgamated Society of Anglers ("Leeds DASA", "we", "our", or "us") 
              is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or become a member.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul>
              <li>Name and contact details (email address, phone number, postal address)</li>
              <li>Date of birth (for membership category verification)</li>
              <li>Payment information (processed securely through PayPal)</li>
              <li>Membership number and history</li>
              <li>Emergency contact details</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information including 
              your IP address, browser type, operating system, and browsing behavior through cookies 
              and similar technologies.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and manage your membership</li>
              <li>Send you membership materials (yearbook, membership card)</li>
              <li>Communicate important society updates</li>
              <li>Send monthly newsletters (if you've opted in)</li>
              <li>Process match bookings and entries</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information with:
            </p>
            <ul>
              <li>Payment processors (PayPal) for secure transaction processing</li>
              <li>Affiliated clubs (only if you are a member through club affiliation)</li>
              <li>Legal authorities if required by law</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect 
              your personal information against unauthorized access, alteration, disclosure, or 
              destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes 
              for which it was collected, including to satisfy legal, accounting, or reporting 
              requirements. Membership records are typically retained for 7 years after membership 
              lapses.
            </p>

            <h2>7. Your Rights</h2>
            <p>Under data protection law, you have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Request restriction of processing</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2>8. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. For more information, 
              please see our <a href="/cookies" className="text-sunset-700 hover:text-sunset-800">Cookie Policy</a>.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for 
              the privacy practices of these external sites. We encourage you to read their 
              privacy policies.
            </p>

            <h2>10. Children's Privacy</h2>
            <p>
              We collect personal information about junior members (under 18) with parental 
              consent. Parents/guardians may request to access, modify, or delete their 
              child's information.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any 
              changes by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your rights, 
              please contact us at:
            </p>
            <p>
              Leeds and District Amalgamated Society of Anglers<br />
              The Anglers Club<br />
              75 Stoney Rock Lane<br />
              Beckett Street<br />
              Leeds LS9 7TB<br />
              Email: info@leedsdasa.co.uk
            </p>
          </motion.article>
        </div>
      </section>
    </>
  );
}

