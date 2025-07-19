import React from 'react';
import './ReturnCancellation.css';

const ReturnCancellation = () => {
  return (
    <div className="return-policy-container">
      <section className="policy-header">
        <div className="header-content">
          <h1>Return and Cancellation Policy</h1>
          <p className="effective-date">Effective Date: W.E.F. 20th July 2025</p>
        </div>
      </section>

      <section className="policy-main-content">
        <div className="policy-intro">
          <p>
            At Wild by Nature, we are dedicated to ensuring your satisfaction across all our services,
            including merchandise orders, wildlife tours, workshops and other offerings. This policy
            comprehensively outlines our approach to returns, cancellations and refunds across various
            verticals on our platform. By making a purchase or booking through our website, you expressly
            agree to abide by the terms set forth herein.
          </p>
        </div>

        <div className="policy-section">
          <h2>1. Merchandise Returns & Exchanges</h2>
          <p>1.1. Eligible Items: This policy applies exclusively to clothing, accessories and other merchandise purchased directly through our official website.</p>
          <p>1.2. Return Window: Eligible items may be returned or exchanged within seven (7) calendar days from the date of product delivery.</p>
          <p>1.3. Eligibility Criteria:</p>
          <ul>
            <li>Items must be returned in their original, unused, unwashed condition, with all original packaging, tags and labels intact.</li>
            <li>Only items found to have manufacturing defects or those that were incorrectly shipped (e.g., wrong item, wrong size) by Wild by Nature, are eligible for return or exchange.</li>
            <li>Any products that are used, soiled, damaged due to user mishandling or not in their original saleable condition will not be accepted for return or exchange.</li>
          </ul>
          <p>1.4. Process for Return/Exchange:</p>
          <ul>
            <li>Email info@wildbynature.co.in within the return window with your order ID, reason for return/exchange, and photographic evidence (if applicable).</li>
            <li>Upon approval, you will receive the return address. Securely package and ship the product. Return shipping costs are borne by the user unless due to our error.</li>
            <li>Refunds, if applicable, will be processed to the original payment method within 5–7 working days after successful inspection of the returned item.</li>
          </ul>
          <p>1.5. Non-Returnable Items: Customized items, personalized products, digital goods and gift cards are non-returnable and non-refundable.</p>
        </div>

        <div className="policy-section">
          <h2>2. Wildlife Tours & Safaris Cancellation</h2>
          <p>2.1. Customized Tours: Cancellation terms for customized tours are detailed in the bespoke tour agreement.</p>
          <p>2.2. Cancellation Timeline for Standard Tours:</p>
          <ul>
            <li>30+ days before departure: 90% refund</li>
            <li>15–29 days before departure: 50% refund</li>
            <li>7–14 days before departure: 25% refund</li>
            <li>Less than 7 days: No refund</li>
          </ul>
          <p>2.3. Exclusions: Refund includes only Wild by Nature's portion. Third-party costs (flight tickets, visas, etc.) are not covered.</p>
          <p>2.4. Official Booking: Book only through our official website. We are not liable for third-party interactions or purchases.</p>
          <p>2.5. Force Majeure: We are not liable for cancellations due to unforeseen events like natural calamities, unrest, pandemics, etc.</p>
        </div>

        <div className="policy-section">
          <h2>3. Workshops & Mentorship Sessions</h2>
          <p>3.1. Workshops:</p>
          <ul>
            <li>7+ days before session: 100% refund</li>
            <li>3–6 days before: 50% refund</li>
            <li>&lt;3 days before: Non-refundable</li>
          </ul>
          <p>3.2. Mentorship Sessions: Generally non-cancellable. One reschedule allowed if requested 48 hours in advance.</p>
        </div>

        <div className="policy-section">
          <h2>4. Competitions & Exhibitions</h2>
          <p>4.1. Entry fees are non-refundable unless Wild by Nature cancels the event.</p>
          <p>4.2. Disqualification due to plagiarism or rule violation forfeits entry fee and may cancel membership.</p>
          <p>4.3. Legal disputes are subject to Kolkata jurisdiction and costs borne by the defaulting participant.</p>
        </div>

        <div className="policy-section contact-section">
          <h2>5. Contact for Support</h2>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:info@wildbynature.co.in">info@wildbynature.co.in</a></li>
            <li><strong>Phone:</strong> 96744 52988</li>
            <li>
              <strong>Business Address:</strong><br />
              Wild by Nature Global Pvt Ltd<br />
              112, Chittaranjan Avenue<br />
              Kolkata 700073<br />
              India
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ReturnCancellation;