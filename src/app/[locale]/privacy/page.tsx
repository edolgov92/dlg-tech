import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy — DLG Tech",
  description: "How DLG Tech collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 4, 2026" path="/privacy">
      <p>
        This Privacy Policy explains how{" "}
        <strong>Evgenii Dolgov PR Novi Sad</strong>, operating as{" "}
        <strong>DLG Tech</strong> (&quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;), registered in the Republic of Serbia, collects, uses,
        and protects your personal information when you visit our website at{" "}
        <a href="https://dlgtech.io">dlgtech.io</a> (the &quot;Site&quot;).
      </p>
      <p>
        We are committed to protecting your privacy in compliance with the
        European Union General Data Protection Regulation (EU 2016/679,
        &quot;GDPR&quot;), the California Consumer Privacy Act as amended by the
        California Privacy Rights Act (&quot;CCPA/CPRA&quot;), the Serbian Law
        on Personal Data Protection (Zakon o zaštiti podataka o ličnosti), and
        other applicable data protection laws.
      </p>

      <h2>1. Data Controller</h2>
      <p>
        The data controller responsible for your personal data is:
      </p>
      <ul>
        <li><strong>Entity:</strong> Evgenii Dolgov PR Novi Sad</li>
        <li><strong>Country:</strong> Republic of Serbia</li>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:contact@dlgtech.io">contact@dlgtech.io</a>
        </li>
      </ul>
      <p>
        We have not appointed a Data Protection Officer (DPO) as we are a small
        business that does not engage in large-scale systematic monitoring or
        processing of special categories of data. For any data protection
        inquiries, please contact us at the email above.
      </p>

      <h2>2. Information We Collect</h2>

      <h3>2.1 Information You Provide Directly</h3>
      <ul>
        <li>
          <strong>Contact information</strong> — name, email address, company
          name, phone number (if provided), and any details you share when
          emailing us at{" "}
          <a href="mailto:contact@dlgtech.io">contact@dlgtech.io</a> or
          booking a call through our scheduling tool.
        </li>
        <li>
          <strong>Scheduling data</strong> — when you book a consultation via
          Calendly, your name, email, and chosen time slot are processed by
          Calendly Inc. as a data processor under their own privacy policy.
        </li>
        <li>
          <strong>Communication records</strong> — the content of emails,
          messages, or other correspondence you send to us.
        </li>
      </ul>

      <h3>2.2 Information Collected Automatically</h3>
      <ul>
        <li>
          <strong>Device &amp; browser data</strong> — IP address (anonymized
          where required by law), browser type and version, operating system,
          screen resolution, and language preferences.
        </li>
        <li>
          <strong>Usage data</strong> — pages visited, time spent on pages,
          referring URL, click patterns, and session duration, collected via
          Google Analytics.
        </li>
        <li>
          <strong>Cookies &amp; tracking technologies</strong> — cookies,
          pixels, and similar technologies from analytics and marketing
          platforms. See Section 6 for full details.
        </li>
      </ul>

      <h3>2.3 Information We Do Not Collect</h3>
      <p>
        We do not knowingly collect sensitive personal data (also known as
        &quot;special categories&quot; under GDPR), such as racial or ethnic
        origin, political opinions, religious beliefs, health data, biometric
        data, or sexual orientation.
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>We use the collected information for the following purposes:</p>
      <ul>
        <li>
          <strong>Service delivery</strong> — to respond to your inquiries,
          schedule consultations, and provide our services.
        </li>
        <li>
          <strong>Site improvement</strong> — to understand how visitors use our
          Site, identify issues, and improve content and user experience.
        </li>
        <li>
          <strong>Marketing measurement</strong> — to measure the reach and
          effectiveness of advertising campaigns on platforms such as LinkedIn
          and Meta.
        </li>
        <li>
          <strong>Legal compliance</strong> — to comply with applicable laws,
          regulations, and legal processes.
        </li>
        <li>
          <strong>Security</strong> — to detect, prevent, and address fraud,
          abuse, or security issues.
        </li>
      </ul>
      <p>
        We do <strong>not</strong> sell, rent, or trade your personal
        information to third parties. We do <strong>not</strong> use your
        personal data for automated decision-making or profiling that produces
        legal or similarly significant effects.
      </p>

      <h2>4. Legal Basis for Processing (GDPR)</h2>
      <p>
        If you are located in the European Economic Area (EEA), the United
        Kingdom, or Serbia, we process your personal data under the following
        legal bases:
      </p>
      <ul>
        <li>
          <strong>Consent (Art. 6(1)(a) GDPR)</strong> — for non-essential
          cookies, marketing tracking pixels, and newsletter subscriptions (if
          applicable). You may withdraw consent at any time without affecting the
          lawfulness of processing carried out before withdrawal.
        </li>
        <li>
          <strong>Legitimate interest (Art. 6(1)(f) GDPR)</strong> — to analyze
          aggregated, anonymized Site usage data to improve our services and
          ensure Site security. We have conducted a balancing test to ensure
          these interests do not override your fundamental rights and freedoms.
        </li>
        <li>
          <strong>Contractual necessity (Art. 6(1)(b) GDPR)</strong> — to
          respond to your inquiry, schedule a consultation you requested, or
          perform a service agreement.
        </li>
        <li>
          <strong>Legal obligation (Art. 6(1)(c) GDPR)</strong> — to comply
          with applicable laws, such as tax and accounting requirements.
        </li>
      </ul>

      <h2>5. Third-Party Services &amp; Data Processors</h2>
      <p>
        We share data with the following categories of service providers, who
        act as data processors or independent controllers:
      </p>
      <ul>
        <li>
          <strong>Hosting &amp; infrastructure</strong> — our Site is hosted on{" "}
          <strong>Vercel Inc.</strong> (San Francisco, CA, USA), which processes
          server logs and request data.{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel Privacy Policy
          </a>
        </li>
        <li>
          <strong>Calendly Inc.</strong> — appointment scheduling (data
          processor).{" "}
          <a
            href="https://calendly.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calendly Privacy Policy
          </a>
        </li>
        <li>
          <strong>Google LLC</strong> — website analytics via Google Analytics
          (data processor). We use IP anonymization where required.{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>
        </li>
        <li>
          <strong>Meta Platforms Inc.</strong> — marketing measurement via Meta
          Pixel (independent controller for its own purposes).{" "}
          <a
            href="https://www.facebook.com/privacy/policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meta Privacy Policy
          </a>
        </li>
        <li>
          <strong>LinkedIn Corporation</strong> — marketing measurement via
          LinkedIn Insight Tag (independent controller for its own purposes).{" "}
          <a
            href="https://www.linkedin.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Privacy Policy
          </a>
        </li>
      </ul>

      <h3>5.1 International Data Transfers</h3>
      <p>
        Several of our service providers are based in the United States. When
        personal data is transferred outside the EEA, UK, or Serbia, we ensure
        adequate safeguards are in place, including:
      </p>
      <ul>
        <li>
          EU-U.S. Data Privacy Framework (DPF) certification of the recipient.
        </li>
        <li>
          Standard Contractual Clauses (SCCs) approved by the European
          Commission.
        </li>
        <li>
          Adequacy decisions issued by the European Commission or the Serbian
          Commissioner.
        </li>
      </ul>
      <p>
        You may request a copy of the applicable transfer safeguards by
        contacting us.
      </p>

      <h2>6. Cookies &amp; Tracking Technologies</h2>
      <p>Our Site uses the following categories of cookies:</p>
      <ul>
        <li>
          <strong>Strictly necessary cookies</strong> — essential for the Site
          to function (e.g., security tokens, session management). Legal basis:
          legitimate interest. These cannot be disabled.
        </li>
        <li>
          <strong>Analytics cookies</strong> — help us understand traffic
          patterns and Site usage (Google Analytics: <code>_ga</code>,{" "}
          <code>_ga_*</code> cookies, retention up to 14 months). Legal basis:
          consent.
        </li>
        <li>
          <strong>Marketing cookies</strong> — allow us to measure ad campaign
          performance and deliver relevant content (Meta Pixel:{" "}
          <code>_fbp</code>, <code>_fbc</code>; LinkedIn Insight Tag:{" "}
          <code>li_sugr</code>, <code>bcookie</code>). Legal basis: consent.
        </li>
      </ul>
      <p>
        You can manage cookie preferences through your browser settings or by
        using opt-out mechanisms provided by each service:
      </p>
      <ul>
        <li>
          Google Analytics:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browser opt-out add-on
          </a>
        </li>
        <li>
          Meta:{" "}
          <a
            href="https://www.facebook.com/adpreferences"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ad preferences
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/psettings/guest-controls"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guest controls
          </a>
        </li>
      </ul>

      <h3>6.1 Do Not Track Signals</h3>
      <p>
        Some browsers transmit a &quot;Do Not Track&quot; (DNT) signal. There is
        currently no industry standard for how websites should respond to DNT
        signals. Our Site does not currently respond to DNT signals, but we
        respect your cookie preferences as described above.
      </p>

      <h2>7. Your Rights</h2>

      <h3>7.1 EEA, UK &amp; Serbian Residents (GDPR)</h3>
      <p>Under the GDPR and the Serbian data protection law, you have the right to:</p>
      <ul>
        <li>
          <strong>Access</strong> — obtain confirmation of whether we process
          your data and request a copy of it.
        </li>
        <li>
          <strong>Rectification</strong> — correct inaccurate or incomplete
          personal data.
        </li>
        <li>
          <strong>Erasure (&quot;right to be forgotten&quot;)</strong> — request
          deletion of your personal data under certain conditions.
        </li>
        <li>
          <strong>Restriction</strong> — request that we limit the processing
          of your data in specific circumstances.
        </li>
        <li>
          <strong>Portability</strong> — receive your data in a structured,
          commonly used, machine-readable format.
        </li>
        <li>
          <strong>Object</strong> — object to processing based on legitimate
          interest or direct marketing.
        </li>
        <li>
          <strong>Withdraw consent</strong> — withdraw consent at any time for
          consent-based processing.
        </li>
      </ul>
      <p>
        We will respond to your request within <strong>30 days</strong>. In
        complex cases, we may extend this by an additional 60 days, with prior
        notice. To exercise any of these rights, email us at{" "}
        <a href="mailto:contact@dlgtech.io">contact@dlgtech.io</a>. We may
        ask you to verify your identity before processing your request.
      </p>
      <p>
        You also have the right to lodge a complaint with your local supervisory
        authority. In Serbia, this is the Commissioner for Information of Public
        Importance and Personal Data Protection (Poverenik za informacije od
        javnog značaja i zaštitu podataka o ličnosti).
      </p>

      <h3>7.2 California Residents (CCPA/CPRA)</h3>
      <p>
        If you are a California resident, the CCPA/CPRA provides you with
        specific rights regarding your personal information:
      </p>
      <ul>
        <li>
          <strong>Right to know</strong> — the categories and specific pieces of
          personal information we have collected, the sources, the business
          purposes, and the categories of third parties with whom we share it.
        </li>
        <li>
          <strong>Right to delete</strong> — request deletion of your personal
          information, subject to certain exceptions.
        </li>
        <li>
          <strong>Right to correct</strong> — request correction of inaccurate
          personal information.
        </li>
        <li>
          <strong>Right to opt out of sale/sharing</strong> — we do{" "}
          <strong>not</strong> sell your personal information. We may
          &quot;share&quot; data (as defined by CPRA) with advertising partners
          for cross-context behavioral advertising through cookies. You can opt
          out via the cookie controls described in Section 6.
        </li>
        <li>
          <strong>Right to limit use of sensitive PI</strong> — we do not
          collect sensitive personal information as defined by CPRA.
        </li>
        <li>
          <strong>Non-discrimination</strong> — we will not discriminate against
          you for exercising your privacy rights.
        </li>
      </ul>
      <p>
        <strong>Categories of personal information collected</strong> (per CCPA
        definitions): Identifiers (name, email, IP address); Internet or
        electronic network activity (browsing history, interactions with the
        Site); Professional or employment-related information (company name, job
        title, if provided).
      </p>
      <p>
        To submit a request, email{" "}
        <a href="mailto:contact@dlgtech.io">contact@dlgtech.io</a>. We will
        verify your identity and respond within 45 days.
      </p>

      <h2>8. Data Retention</h2>
      <p>
        We retain your personal data only for as long as necessary for the
        purposes described in this policy, or as required by law:
      </p>
      <ul>
        <li>
          <strong>Analytics data</strong> — up to 14 months (Google Analytics
          default retention period).
        </li>
        <li>
          <strong>Contact &amp; communication records</strong> — for the
          duration of our business relationship and up to 3 years after last
          contact, unless a longer retention period is required by tax,
          accounting, or legal obligations.
        </li>
        <li>
          <strong>Marketing cookies</strong> — as set by each platform (typically
          90 days to 2 years). See Section 6 for specifics.
        </li>
      </ul>
      <p>
        When data is no longer needed, we securely delete or anonymize it.
      </p>

      <h2>9. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to
        protect your personal data against unauthorized access, alteration,
        disclosure, or destruction. These measures include:
      </p>
      <ul>
        <li>Encrypted data transmission (TLS/HTTPS) for all Site traffic.</li>
        <li>Access controls limiting data access to authorized personnel only.</li>
        <li>Secure hosting infrastructure with industry-standard protections.</li>
        <li>Regular review of data processing practices and security measures.</li>
      </ul>
      <p>
        However, no method of transmission over the internet or electronic
        storage is 100% secure. While we strive to use commercially acceptable
        means to protect your data, we cannot guarantee its absolute security.
      </p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        Our Site and services are intended for business professionals and are
        not directed at individuals under the age of 16 (or the applicable age
        of digital consent in your jurisdiction). We do not knowingly collect
        personal information from children. If you believe we have inadvertently
        collected data from a minor, please contact us immediately and we will
        delete it within 30 days.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices, technologies, or legal requirements. When we make
        material changes, we will:
      </p>
      <ul>
        <li>Update the &quot;Last updated&quot; date at the top of this page.</li>
        <li>
          Post a notice on our Site for a reasonable period following the change.
        </li>
      </ul>
      <p>
        We encourage you to review this page periodically. Your continued use of
        the Site after changes are posted constitutes your acceptance of the
        updated policy.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, wish to exercise
        your data rights, or want to file a complaint about our data practices,
        please contact us:
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
      <p>
        We aim to resolve all complaints internally. If you are not satisfied
        with our response, you have the right to lodge a complaint with the
        relevant supervisory authority in your jurisdiction.
      </p>
    </LegalLayout>
  );
}
