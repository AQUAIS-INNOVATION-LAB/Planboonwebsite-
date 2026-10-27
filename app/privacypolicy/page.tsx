import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms and Conditions | Planboon",
  description:
    "Read Planboon's Privacy Policy and Terms and Conditions for using our event-planning services.",
};

// const lastUpdated = "27 October 2026";

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <header className="mb-10 border-b border-neutral-200 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-lime-700">
            Planboon
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy &amp; Terms and Conditions
          </h1>
          {/* <p className="mt-4 text-sm text-neutral-500">Last updated: {lastUpdated}</p> */}
          <p className="mt-5 max-w-3xl leading-7 text-neutral-600">
            This page explains how information may be handled when you use Planboon
            and the terms that apply to your use of our event-planning services.
          </p>
          <nav aria-label="Legal sections" className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <a className="rounded-full border border-neutral-300 px-4 py-2 hover:border-lime-600" href="#privacy-policy">
              Privacy Policy
            </a>
            <a className="rounded-full border border-neutral-300 px-4 py-2 hover:border-lime-600" href="#terms-and-conditions">
              Terms and Conditions
            </a>
          </nav>
        </header>

        <section id="privacy-policy" className="scroll-mt-8 space-y-6 border-b border-neutral-200 pb-12">
          <h2 className="text-2xl font-bold sm:text-3xl">1. Privacy Policy</h2>
          <p className="leading-7 text-neutral-700">
            Planboon ("Planboon", "we", "us" or "our") provides tools to help people
            plan events and communicate with guests. This policy describes the types
            of information that may be processed when you use our website or services.
            Please update this draft so it accurately reflects the information Planboon
            actually collects and how it is used before publishing it.
          </p>

          <LegalSection title="1.1 Information we may collect">
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Account information:</strong> such as your name, email address, phone number and sign-in details.</li>
              <li><strong>Event information:</strong> such as event names, dates, preferences and details you choose to enter.</li>
              <li><strong>Guest and invitation information:</strong> such as guest contact details, invitation status and RSVP responses that you or other users submit.</li>
              <li><strong>Technical information:</strong> such as device, browser, diagnostic and usage information, where collected by the service.</li>
              <li><strong>Support messages:</strong> information you provide when contacting us for assistance.</li>
            </ul>
          </LegalSection>

          <LegalSection title="1.2 How information may be used">
            <p>Depending on the features you use, information may be used to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>create and manage accounts and events;</li>
              <li>send invitations, event updates, verification codes and service-related notifications;</li>
              <li>display guest lists, RSVP responses and event details to the relevant users;</li>
              <li>maintain, secure, troubleshoot and improve the service;</li>
              <li>respond to support requests and comply with applicable legal obligations.</li>
            </ul>
          </LegalSection>

          <LegalSection title="1.3 Sharing of information">
            <p className="leading-7">
              Information may be shared with other users when needed for an event or
              invitation, with service providers that help operate Planboon (for example,
              hosting, database, authentication or messaging providers), or when required
              by law or necessary to protect the rights and security of users and the service.
              Review your actual integrations and practices and add any other applicable
              sharing arrangements before publishing this policy.
            </p>
          </LegalSection>

          <LegalSection title="1.4 Messages and third-party services">
            <p className="leading-7">
              If you choose to send invitations or notifications through a third-party
              service, that service may process information under its own terms and privacy
              policy. Planboon does not control the privacy practices of independent
              third-party services. Only enable messaging integrations after reviewing
              their requirements and explaining the relevant processing to users.
            </p>
          </LegalSection>

          <LegalSection title="1.5 Data security and retention">
            <p className="leading-7">
              We use reasonable measures intended to protect information, but no method
              of storage or transmission can be guaranteed to be completely secure.
              Information should be retained only for as long as needed for the purposes
              described in this policy, service operation, dispute resolution and legal
              obligations, in accordance with our actual retention practices.
            </p>
          </LegalSection>

          <LegalSection title="1.6 Your choices and requests">
            <p className="leading-7">
              You may contact us to ask about, correct or request deletion of personal
              information, subject to identity verification and applicable legal or
              operational requirements. Some information may need to be retained where
              the law permits or requires it. We will handle requests according to
              applicable law and our implemented procedures.
            </p>
          </LegalSection>

          <LegalSection title="1.7 Children’s privacy">
            <p className="leading-7">
              Planboon is not intended to be used by children in ways prohibited by
              applicable law. If you believe a child has provided personal information
              inappropriately, contact us so we can review the request.
            </p>
          </LegalSection>

          <LegalSection title="1.8 Changes to this policy">
            <p className="leading-7">
              We may update this policy as our service or legal requirements change.
              We will update the date at the top of this page when a revised version
              is published. Where required, we will provide additional notice or obtain
              consent.
            </p>
          </LegalSection>
        </section>

        <section id="terms-and-conditions" className="scroll-mt-8 space-y-6 py-12">
          <h2 className="text-2xl font-bold sm:text-3xl">2. Terms and Conditions</h2>
          <p className="leading-7 text-neutral-700">
            By accessing or using Planboon, you agree to these Terms and Conditions.
            If you do not agree, please do not use the service.
          </p>

          <LegalSection title="2.1 Using Planboon">
            <p className="leading-7">
              Planboon provides event-planning and invitation-related features. You agree
              to provide information that is accurate to the best of your knowledge, keep
              your account credentials secure, and use the service only for lawful purposes.
              You are responsible for activity carried out through your account, subject to
              applicable law.
            </p>
          </LegalSection>

          <LegalSection title="2.2 Events, guests and invitations">
            <p className="leading-7">
              You are responsible for ensuring that event details and guest information
              you submit are accurate and that you have an appropriate basis or permission
              to use another person's contact details and send them invitations or messages.
              Do not use Planboon to send unlawful, deceptive, harassing or unsolicited
              communications in violation of applicable law or third-party platform rules.
            </p>
          </LegalSection>

          <LegalSection title="2.3 Acceptable use">
            <p>You must not:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>use the service for illegal, fraudulent or harmful activity;</li>
              <li>attempt to access another user's account or data without authorization;</li>
              <li>interfere with the service, bypass security controls or introduce malicious code;</li>
              <li>upload content that infringes another person's rights or violates applicable law;</li>
              <li>misuse contact information or messaging features to spam or harass people.</li>
            </ul>
          </LegalSection>

          <LegalSection title="2.4 Your content">
            <p className="leading-7">
              You retain any rights you have in content you submit. You give Planboon
              permission to host, store, process and display that content as reasonably
              necessary to provide and maintain the features you use. You are responsible
              for having the rights and permissions needed to submit that content.
            </p>
          </LegalSection>

          <LegalSection title="2.5 Third-party services">
            <p className="leading-7">
              Planboon may rely on or link to third-party services. Their products,
              availability and terms are controlled by those providers. Your use of a
              third-party service may be subject to its separate terms and privacy policy.
            </p>
          </LegalSection>

          <LegalSection title="2.6 Availability and changes">
            <p className="leading-7">
              We may update, suspend or discontinue features to maintain or improve the
              service, subject to applicable law. We do not guarantee uninterrupted or
              error-free availability. We will not exclude any responsibility that cannot
              legally be excluded.
            </p>
          </LegalSection>

          <LegalSection title="2.7 Disclaimer and liability">
            <p className="leading-7">
              To the extent permitted by law, Planboon is provided on an available basis
              and we do not guarantee that it will meet every user's requirements. Nothing
              in these terms limits liability or rights that cannot lawfully be limited
              or excluded. Any other limitation of liability must be reviewed for
              enforceability under the laws that apply to Planboon.
            </p>
          </LegalSection>

          <LegalSection title="2.8 Suspension or termination">
            <p className="leading-7">
              We may restrict or suspend access where reasonably necessary to protect
              users, investigate misuse, comply with law or enforce these terms. You may
              stop using the service at any time. Any account closure and data deletion
              will be handled under our applicable processes and legal obligations.
            </p>
          </LegalSection>

          <LegalSection title="2.9 Governing law and updates">
            <p className="leading-7">
              These terms are subject to applicable law. Before publishing, specify the
              governing law and courts or dispute-resolution process that legally apply
              to the business. We may revise these terms from time to time; continued use
              after updated terms take effect means you accept them where permitted by law.
            </p>
          </LegalSection>
        </section>

        <footer className="border-t border-neutral-200 pt-8 text-sm leading-6 text-neutral-600">
          <h2 className="text-lg font-bold text-neutral-900">Contact Planboon</h2>
          <p className="mt-2">
            For privacy questions or questions about these terms, email{" "}
            <a className="font-semibold text-neutral-900 underline decoration-lime-600 decoration-2 underline-offset-4" href="mailto:aquaisinnovationlab@gmail.com">
              aquaisinnovationlab@gmail.com
            </a>.
          </p>
          <p className="mt-4 text-xs text-neutral-500">
            This is a starting-point template, not legal advice. Before publishing, verify
            that it matches Planboon’s real data practices, add any required business
            details, and have it reviewed for the laws and markets where the service operates.
          </p>
        </footer>
      </div>
    </main>
  );
}

type LegalSectionProps = {
  title: string;
  children: React.ReactNode;
};

function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
      <div className="space-y-3 text-neutral-700">{children}</div>
    </div>
  );
}
