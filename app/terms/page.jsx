'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/ui/PageHero';

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services."
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

            <h2>1. Acceptance of Terms</h2>
            <p>
              By purchasing membership or using the Leeds and District Amalgamated Society of 
              Anglers ("Leeds DASA") website and services, you agree to be bound by these Terms 
              and Conditions. If you do not agree with any part of these terms, you should not 
              use our services.
            </p>

            <h2>2. Membership</h2>
            <h3>Eligibility</h3>
            <p>
              Membership is open to all persons who agree to abide by the society's rules and 
              regulations. Junior members (under 18) must have parental or guardian consent.
            </p>

            <h3>Membership Period</h3>
            <p>
              Membership runs from January 1st to December 31st each year. There is no 
              pro-rata reduction for memberships purchased part-way through the year.
            </p>

            <h3>Membership Cards and Yearbooks</h3>
            <p>
              Upon payment, you may use your PayPal receipt as proof of membership until your 
              membership card and yearbook arrive by post. Membership materials remain the 
              property of Leeds DASA.
            </p>

            <h2>3. Fishing Rules</h2>
            <h3>General Rules</h3>
            <ul>
              <li>Members must carry their membership card/proof at all times when fishing</li>
              <li>Members must comply with all rules specific to individual waters</li>
              <li>All fishing must be conducted in accordance with Environment Agency regulations</li>
              <li>A valid Environment Agency rod licence is required</li>
              <li>Close seasons must be observed</li>
            </ul>

            <h3>Conduct</h3>
            <p>
              Members are expected to conduct themselves responsibly and respectfully. Any member 
              found to be behaving in an unacceptable manner, damaging the society's reputation, 
              or breaking rules may have their membership revoked without refund.
            </p>

            <h3>Fish Care</h3>
            <p>
              All fish must be handled with care and returned to the water promptly and safely. 
              Appropriate landing nets, unhooking mats, and handling practices must be used.
            </p>

            <h2>4. Matches and Competitions</h2>
            <ul>
              <li>Match rules are set by the match committee and must be followed</li>
              <li>Entry fees are non-refundable unless the match is cancelled</li>
              <li>The match committee's decisions are final</li>
              <li>Unsporting behavior may result in disqualification</li>
            </ul>

            <h2>5. The Anglers Club</h2>
            <p>
              Social membership to The Anglers Club is included with Leeds DASA membership. 
              Members must abide by the club's rules and licensing regulations. The club 
              reserves the right to refuse admission.
            </p>

            <h2>6. Liability</h2>
            <p>
              Leeds DASA accepts no responsibility for any injury, loss, or damage to persons 
              or property arising from fishing activities on society waters. Members fish at 
              their own risk and are advised to carry appropriate insurance.
            </p>

            <h2>7. Website Use</h2>
            <h3>Intellectual Property</h3>
            <p>
              All content on this website, including text, images, logos, and designs, is the 
              property of Leeds DASA and is protected by copyright law. You may not reproduce, 
              distribute, or use any content without our written permission.
            </p>

            <h3>Accuracy</h3>
            <p>
              While we strive to keep information accurate and up to date, we make no warranties 
              about the completeness, reliability, or accuracy of information on this website.
            </p>

            <h2>8. Refunds</h2>
            <p>
              Membership fees are non-refundable except in exceptional circumstances at the 
              discretion of the committee. Requests for refunds must be made in writing.
            </p>

            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Changes 
              will be posted on this page with an updated revision date. Continued use of our 
              services after changes constitutes acceptance of the new terms.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the 
              laws of England and Wales. Any disputes arising from these terms shall be subject 
              to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2>11. Contact</h2>
            <p>
              For questions about these Terms and Conditions, please contact us at:
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

