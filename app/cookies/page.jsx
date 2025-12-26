'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/ui/PageHero';

export default function CookiesPage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        subtitle="How we use cookies and similar technologies on our website."
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

            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device 
              when you visit a website. They are widely used to make websites work more 
              efficiently and to provide information to website owners.
            </p>

            <h2>2. How We Use Cookies</h2>
            <p>
              Leeds and District Amalgamated Society of Anglers uses cookies to improve your 
              experience on our website. We use the following types of cookies:
            </p>

            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable 
              basic functions like page navigation and access to secure areas of the website. 
              The website cannot function properly without these cookies.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>session_id</td>
                  <td>Maintains user session</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td>csrf_token</td>
                  <td>Security - prevents cross-site request forgery</td>
                  <td>Session</td>
                </tr>
              </tbody>
            </table>

            <h3>Functional Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and 
              personalization, such as remembering your preferences.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>preferences</td>
                  <td>Stores user preferences</td>
                  <td>1 year</td>
                </tr>
              </tbody>
            </table>

            <h3>Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website by 
              collecting and reporting information anonymously.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_ga</td>
                  <td>Google Analytics - distinguishes users</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Google Analytics - distinguishes users</td>
                  <td>24 hours</td>
                </tr>
              </tbody>
            </table>

            <h2>3. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third-party services that appear on our pages. 
              We use the following third-party services:
            </p>
            <ul>
              <li>
                <strong>PayPal:</strong> For processing payments. PayPal sets its own cookies 
                during the payment process.
              </li>
              <li>
                <strong>Google Analytics:</strong> For website analytics. You can opt out of 
                Google Analytics by installing the{' '}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sunset-700 hover:text-sunset-800"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </li>
            </ul>

            <h2>4. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul>
              <li>View cookies stored on your computer</li>
              <li>Delete individual or all cookies</li>
              <li>Block all or certain types of cookies</li>
              <li>Set preferences for specific websites</li>
            </ul>
            <p>
              Please note that blocking some types of cookies may impact your experience on 
              our website and limit the services we can offer.
            </p>

            <h3>Browser-Specific Instructions</h3>
            <ul>
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-sunset-700 hover:text-sunset-800">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-sunset-700 hover:text-sunset-800">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-sunset-700 hover:text-sunset-800">
                  Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-sunset-700 hover:text-sunset-800">
                  Microsoft Edge
                </a>
              </li>
            </ul>

            <h2>5. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in 
              technology or legislation. Any changes will be posted on this page with an 
              updated revision date.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at:
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

