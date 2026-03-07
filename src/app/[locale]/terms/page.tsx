import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service — DLG Tech",
  description:
    "Terms and conditions governing use of the DLG Tech website and services.",
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="March 4, 2026" path="/terms">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use
        of the website at{" "}
        <a href="https://dlgtech.io">dlgtech.io</a> (the &quot;Site&quot;)
        and the software engineering services (the &quot;Services&quot;) provided
        by <strong>Evgenii Dolgov PR Novi Sad</strong>, operating as{" "}
        <strong>DLG Tech</strong> (&quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;), registered in the Republic of Serbia.
      </p>
      <p>
        By accessing the Site or engaging our Services, you (&quot;you&quot;,
        &quot;your&quot;, or &quot;Client&quot;) agree to be bound by these
        Terms. If you do not agree, please do not use the Site or engage our
        Services.
      </p>

      <h2>1. Services Overview</h2>
      <p>
        DLG Tech provides software engineering, technical architecture, and
        development services. Our engagement models include:
      </p>
      <ul>
        <li>
          <strong>Full Delivery</strong> — end-to-end project execution with
          defined scope and deliverables.
        </li>
        <li>
          <strong>Dedicated Team</strong> — a team of engineers working
          exclusively on your project under our technical oversight.
        </li>
        <li>
          <strong>Team Extension</strong> — individual engineers integrated into
          your existing team, working under your day-to-day direction.
        </li>
      </ul>
      <p>
        The specific scope, deliverables, timeline, acceptance criteria, and
        pricing for each engagement are defined in a separate written agreement,
        such as a Statement of Work (SOW) or service contract, signed by both
        parties. These Terms apply generally; the applicable SOW or service
        contract takes precedence in case of conflict.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You must be at least 18 years old and have the legal authority to enter
        into binding agreements on behalf of yourself or your organization. By
        using the Site or engaging our Services, you represent and warrant that
        you meet these requirements.
      </p>

      <h2>3. Independent Contractor Relationship</h2>
      <p>
        DLG Tech and its team members are independent contractors. Nothing in
        these Terms or any SOW creates an employment, partnership, joint
        venture, or agency relationship between DLG Tech (or its personnel) and
        you. Our engineers, even when integrated into your team under the Team
        Extension model, remain contractors of DLG Tech. You are not responsible
        for providing employee benefits, insurance, or tax withholdings for our
        personnel.
      </p>

      <h2>4. Intellectual Property</h2>

      <h3>4.1 Site Content</h3>
      <p>
        All content on the Site — including text, design, graphics, logos,
        images, and underlying code — is owned by DLG Tech or its licensors and
        is protected by copyright, trademark, and other intellectual property
        laws. You may not reproduce, distribute, modify, reverse-engineer, or
        create derivative works from any Site content without our prior written
        consent.
      </p>

      <h3>4.2 Client Work Product</h3>
      <p>
        Ownership of work product created during a service engagement
        (deliverables, source code, documentation, designs) is defined in the
        applicable SOW or service contract. Unless otherwise agreed in writing:
      </p>
      <ul>
        <li>
          Upon full payment of all applicable fees, the Client receives all
          intellectual property rights to the custom work product created
          specifically for them (&quot;Client IP&quot;).
        </li>
        <li>
          Until full payment is received, all intellectual property rights in
          deliverables remain with DLG Tech.
        </li>
      </ul>

      <h3>4.3 Retained Rights</h3>
      <p>
        Notwithstanding the above, DLG Tech retains all rights to:
      </p>
      <ul>
        <li>
          General knowledge, skills, techniques, and experience gained during
          the engagement.
        </li>
        <li>
          Pre-existing tools, frameworks, libraries, and code owned or
          developed by DLG Tech independently of the engagement (&quot;DLG Tech
          Tools&quot;). If DLG Tech Tools are incorporated into deliverables, the
          Client receives a perpetual, non-exclusive, royalty-free license to use
          them as part of the delivered product.
        </li>
        <li>
          Open-source software components used in deliverables, which remain
          subject to their respective open-source licenses.
        </li>
      </ul>

      <h3>4.4 Portfolio Rights</h3>
      <p>
        Unless prohibited by the applicable SOW or a separate NDA, DLG Tech may
        reference the Client&apos;s company name and a general description of the
        engagement (without disclosing confidential information) in its
        portfolio, marketing materials, and case studies.
      </p>

      <h2>5. Confidentiality</h2>
      <p>
        Each party (&quot;Receiving Party&quot;) agrees to hold in strict
        confidence all non-public technical, business, or financial information
        disclosed by the other party (&quot;Disclosing Party&quot;) during the
        course of an engagement (&quot;Confidential Information&quot;).
      </p>
      <ul>
        <li>
          Confidential Information shall not be disclosed to any third party
          without the Disclosing Party&apos;s prior written consent, except to
          employees, contractors, or advisors who have a need to know and are
          bound by comparable confidentiality obligations.
        </li>
        <li>
          The Receiving Party shall protect Confidential Information with at
          least the same degree of care it uses for its own confidential
          information, but in no case less than reasonable care.
        </li>
        <li>
          This obligation does not apply to information that: (a) is or becomes
          publicly available through no fault of the Receiving Party; (b) was
          already known to the Receiving Party without restriction prior to
          disclosure; (c) is independently developed without use of Confidential
          Information; or (d) is required to be disclosed by law, regulation, or
          court order, provided the Receiving Party gives prompt notice to the
          Disclosing Party.
        </li>
      </ul>
      <p>
        This confidentiality obligation survives termination of these Terms and
        any related service agreement for a period of <strong>3 years</strong>.
      </p>

      <h2>6. Payment Terms</h2>
      <p>
        Payment terms, rates, currencies, and schedules are set out in each
        individual SOW or service contract. Unless otherwise specified in the
        applicable SOW:
      </p>
      <ul>
        <li>Invoices are due within 14 calendar days of issuance.</li>
        <li>
          Late payments incur a late fee of 1.5% per month (or the maximum rate
          permitted by applicable law, whichever is lower) on the outstanding
          balance, calculated from the due date.
        </li>
        <li>
          All fees are exclusive of applicable taxes (including VAT, sales tax,
          and withholding taxes), which are the responsibility of the Client.
        </li>
        <li>
          If payment is overdue by more than 30 days, DLG Tech reserves the
          right to suspend work until the outstanding balance is settled, without
          liability for any resulting delays.
        </li>
      </ul>

      <h2>7. Non-Solicitation</h2>
      <p>
        During the term of any service engagement and for a period of{" "}
        <strong>12 months</strong> following its completion, neither party shall
        directly solicit or hire any employee, contractor, or team member of the
        other party who was involved in the engagement, without the other
        party&apos;s prior written consent. This restriction does not apply to
        general public job postings or unsolicited applications.
      </p>

      <h2>8. Warranties &amp; Disclaimers</h2>

      <h3>8.1 Service Warranty</h3>
      <p>
        We warrant that our Services will be performed in a professional and
        workmanlike manner consistent with generally accepted industry
        standards. If any deliverable does not materially conform to the agreed
        specifications, we will re-perform the relevant work at no additional
        cost, provided you notify us in writing within <strong>30 days</strong>{" "}
        of delivery with a detailed description of the non-conformity. This
        re-performance is your sole and exclusive remedy for non-conforming
        deliverables.
      </p>

      <h3>8.2 Site Disclaimer</h3>
      <p>
        The Site and all its content are provided on an &quot;as is&quot; and
        &quot;as available&quot; basis, without warranties of any kind, whether
        express, implied, or statutory, including but not limited to implied
        warranties of merchantability, fitness for a particular purpose,
        non-infringement, and accuracy. We do not warrant that the Site will be
        uninterrupted, error-free, or free of harmful components.
      </p>

      <h3>8.3 No Legal, Tax, or Financial Advice</h3>
      <p>
        Nothing on the Site constitutes legal, tax, financial, or professional
        advice. Any information provided is for general informational purposes
        only.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>To the maximum extent permitted by applicable law:</p>
      <ul>
        <li>
          <strong>Aggregate cap</strong> — Our total aggregate liability arising
          from or related to these Terms, the Site, or the Services (where not
          separately capped in a SOW) shall not exceed the total amounts paid by
          you to us in the <strong>12 months</strong> preceding the event giving
          rise to the claim, or <strong>€1,000</strong>, whichever is greater.
        </li>
        <li>
          <strong>Exclusion of indirect damages</strong> — In no event shall
          either party be liable for any indirect, incidental, special,
          consequential, or punitive damages, including but not limited to loss
          of profits, revenue, data, goodwill, or business opportunities,
          regardless of whether such damages were foreseeable or whether the
          party was advised of the possibility of such damages.
        </li>
        <li>
          <strong>Exceptions</strong> — The limitations above do not apply to:
          (a) breaches of confidentiality obligations under Section 5; (b)
          intellectual property infringement under Section 4; (c) willful
          misconduct or gross negligence; or (d) liability that cannot be
          limited by applicable law.
        </li>
      </ul>
      <p>
        Liability caps for specific service engagements may be defined in the
        applicable SOW or service contract, which shall take precedence.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless DLG Tech and its
        owner, contractors, and agents from and against any third-party claims,
        damages, losses, liabilities, and expenses (including reasonable
        attorney&apos;s fees) arising from or related to: (a) your use of the
        Site in violation of these Terms; (b) your violation of any applicable
        law or regulation; or (c) any content, data, or materials you provide
        to DLG Tech in connection with a service engagement that infringe or
        misappropriate any third-party intellectual property rights.
      </p>

      <h2>11. Acceptable Use</h2>
      <p>When using the Site, you agree not to:</p>
      <ul>
        <li>
          Interfere with or disrupt the Site&apos;s infrastructure or security
          features.
        </li>
        <li>
          Attempt to gain unauthorized access to any part of the Site, server,
          or connected systems.
        </li>
        <li>
          Use automated tools (bots, scrapers, crawlers) to access the Site
          beyond what is permitted by our robots.txt file.
        </li>
        <li>
          Transmit any viruses, malware, or other harmful code.
        </li>
        <li>
          Use the Site for any purpose that is unlawful or prohibited by these
          Terms.
        </li>
      </ul>

      <h2>12. Force Majeure</h2>
      <p>
        Neither party shall be liable for any delay or failure to perform its
        obligations (other than payment obligations) to the extent that such
        delay or failure is caused by circumstances beyond its reasonable
        control, including but not limited to: acts of God, natural disasters,
        epidemics or pandemics, war, terrorism, civil unrest, government
        actions, sanctions, embargoes, labor disputes, power outages,
        telecommunications failures, cyberattacks, or disruption of critical
        third-party services. The affected party shall notify the other party
        promptly and use commercially reasonable efforts to mitigate the impact.
        If the force majeure event continues for more than <strong>60
        days</strong>, either party may terminate the affected SOW upon written
        notice.
      </p>

      <h2>13. Termination</h2>
      <ul>
        <li>
          <strong>Site access</strong> — We may suspend or terminate your access
          to the Site at any time, with or without cause and without prior
          notice.
        </li>
        <li>
          <strong>Service engagements</strong> — Termination of a service
          engagement is governed by the applicable SOW or service contract. In
          the absence of a specific termination clause, either party may
          terminate a service engagement with 30 days&apos; written notice. The
          Client shall pay for all work completed and expenses incurred up to
          the effective date of termination.
        </li>
        <li>
          <strong>Survival</strong> — The following sections survive
          termination: Intellectual Property (Section 4), Confidentiality
          (Section 5), Warranties &amp; Disclaimers (Section 8), Limitation of
          Liability (Section 9), Indemnification (Section 10), and Governing Law
          (Section 15).
        </li>
      </ul>

      <h2>14. Third-Party Links &amp; Services</h2>
      <p>
        The Site may contain links to third-party websites or services (e.g.,
        Calendly, LinkedIn, GitHub). These links are provided for convenience
        only. We do not endorse, control, or assume responsibility for the
        content, privacy practices, terms, or availability of any third-party
        sites. Your interaction with third-party sites is governed by their own
        terms and policies.
      </p>

      <h2>15. Governing Law &amp; Dispute Resolution</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of
        the Republic of Serbia, without regard to its conflict of law
        principles.
      </p>
      <p>
        Any dispute arising out of or in connection with these Terms shall first
        be attempted to be resolved through good-faith negotiation between the
        parties for a period of <strong>30 days</strong>. If the dispute is not
        resolved through negotiation, it shall be submitted to the exclusive
        jurisdiction of the competent courts in Novi Sad, Republic of Serbia.
      </p>
      <p>
        For clients located in the European Union, nothing in these Terms
        affects your mandatory statutory rights under applicable EU consumer
        protection laws, including the right to bring claims in the courts of
        your country of residence. For clients located in the United States,
        disputes may be subject to a separate arbitration clause if specified in
        the applicable SOW.
      </p>

      <h2>16. General Provisions</h2>

      <h3>16.1 Entire Agreement</h3>
      <p>
        These Terms, together with any applicable SOW, service contract, NDA,
        and our Privacy Policy, constitute the entire agreement between you and
        DLG Tech regarding the subject matter hereof and supersede all prior
        oral or written agreements, representations, and understandings.
      </p>

      <h3>16.2 Severability</h3>
      <p>
        If any provision of these Terms is found to be invalid, illegal, or
        unenforceable by a court of competent jurisdiction, that provision shall
        be modified to the minimum extent necessary to make it enforceable, or
        if modification is not possible, severed from these Terms. The remaining
        provisions shall continue in full force and effect.
      </p>

      <h3>16.3 Waiver</h3>
      <p>
        The failure of either party to enforce any right or provision of these
        Terms shall not constitute a waiver of that right or provision. Any
        waiver must be in writing and signed by the waiving party.
      </p>

      <h3>16.4 Assignment</h3>
      <p>
        You may not assign or transfer your rights or obligations under these
        Terms without our prior written consent. DLG Tech may assign its rights
        and obligations to a successor entity in connection with a merger,
        acquisition, or sale of substantially all of its assets, provided the
        assignee agrees to be bound by these Terms.
      </p>

      <h3>16.5 Notices</h3>
      <p>
        All formal notices under these Terms shall be in writing and sent by
        email. Notices to DLG Tech shall be sent to{" "}
        <a href="mailto:contact@dlgtech.io">contact@dlgtech.io</a>. Notices
        to you shall be sent to the email address provided in the applicable
        SOW or, for Site-related matters, posted on the Site. Notices are deemed
        received on the business day following the date of sending.
      </p>

      <h2>17. Changes to These Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. When we make
        material changes, we will update the &quot;Last updated&quot; date at
        the top of this page and may post a notice on the Site. Your continued
        use of the Site or Services after changes are posted constitutes
        acceptance of the revised Terms. If you do not agree to the modified
        Terms, you must stop using the Site and notify us in writing.
      </p>

      <h2>18. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:contact@dlgtech.io">contact@dlgtech.io</a>
        </li>
        <li>
          <strong>Entity:</strong> Evgenii Dolgov PR Novi Sad, Republic of Serbia
        </li>
      </ul>
    </LegalLayout>
  );
}
