import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/whatsapp-community")({
  head: () => ({
    meta: [
      { title: "Free ENT WhatsApp Community | Dr. Hasnain Haider" },
      {
        name: "description",
        content:
          "Join Dr. Hasnain Haider's free WhatsApp community for useful ear, nose and throat health tips for Lahore residents.",
      },
    ],
  }),
  component: WhatsAppCommunity,
});

const communityLink = "https://chat.whatsapp.com/HWFaDcRfgLcCBdcvCFUESY";

function WhatsAppCommunity() {
  return (
    <div className="community-page">
      <header className="community-nav">
        <div className="container community-nav-inner">
          <a className="brand" href="/">
            <img className="brand-logo" src="/ent-logo.svg" alt="Dr. Hasnain ENT logo" />
            <span>
              <strong>Dr. Hasnain</strong>
              <small>ENT • Head & Neck Surgical Care</small>
            </span>
          </a>
          <a className="community-back" href="/">Back to Website</a>
        </div>
      </header>

      <main>
        <section className="community-hero">
          <div className="community-orb community-orb-one" />
          <div className="community-orb community-orb-two" />
          <div className="container community-hero-grid">
            <div className="community-copy">
              <div className="community-badge">
                <MessageCircle size={15} /> FREE WHATSAPP COMMUNITY
              </div>
              <p className="section-kicker">FOR LAHORE RESIDENTS</p>
              <h1>
                Are you a resident of Lahore and experiencing an{" "}
                <span>Ear, Nose & Throat</span> problem?
              </h1>
              <p className="community-lead">
                Join our <strong>Free WhatsApp Community</strong>. Get useful ear,
                nose and throat health tips, awareness information, and practical
                guidance to help you better understand common ENT concerns.
              </p>
              <a
                className="community-join-button"
                href={communityLink}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={20} />
                Join Free WhatsApp Community
                <ArrowRight size={18} />
              </a>
              <p className="community-note">
                Free to join • ENT health awareness for Lahore residents
              </p>
            </div>

            <div className="community-visual">
              <div className="community-logo-card">
                <div className="community-card-top">
                  <span>DR. HASNAIN HAIDER</span>
                  <span>ENT</span>
                </div>
                <img src="/ent-logo.svg" alt="Dr. Hasnain ENT" />
                <strong>
                  ENT HEALTH
                  <br />
                  COMMUNITY
                </strong>
                <span className="community-card-caption">Ear • Nose • Throat</span>
              </div>
              <div className="community-location">
                <MapPin size={17} />
                <span>
                  <strong>Lahore</strong>
                  <small>For local residents</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="community-benefits">
          <div className="container">
            <div className="community-section-heading">
              <p className="section-kicker">WHAT YOU'LL GET</p>
              <h2>Useful ENT health information, delivered on WhatsApp.</h2>
            </div>
            <div className="community-benefit-grid">
              <div className="community-benefit">
                <CheckCircle2 />
                <div>
                  <h3>Ear Health Tips</h3>
                  <p>Helpful awareness tips for common ear problems and symptoms.</p>
                </div>
              </div>
              <div className="community-benefit">
                <CheckCircle2 />
                <div>
                  <h3>Nose & Sinus Guidance</h3>
                  <p>Learn more about common nasal, sinus and allergy-related concerns.</p>
                </div>
              </div>
              <div className="community-benefit">
                <CheckCircle2 />
                <div>
                  <h3>Throat Health Awareness</h3>
                  <p>Useful information about common throat and voice-related problems.</p>
                </div>
              </div>
              <div className="community-benefit">
                <CheckCircle2 />
                <div>
                  <h3>Health Awareness Updates</h3>
                  <p>Simple medical education to help you understand ENT symptoms better.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="community-cta">
          <div className="container community-cta-card">
            <div>
              <ShieldCheck size={28} />
              <p className="section-kicker light">JOIN THE COMMUNITY</p>
              <h2>Stay connected with reliable ENT health tips.</h2>
              <p>
                Join the free WhatsApp community and receive useful ear, nose and
                throat awareness content.
              </p>
            </div>
            <a
              className="community-join-button light-community-button"
              href={communityLink}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={19} /> Join Now <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="/">
              <img className="brand-logo" src="/ent-logo.svg" alt="Dr. Hasnain ENT logo" />
              <span>
                <strong>Dr. Hasnain Haider</strong>
                <small>ENT Specialist</small>
              </span>
            </a>
            <p className="footer-description">
              ENT & Head Neck Surgical Care in Lahore with specialist training in
              Head & Neck Surgical Oncology.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/#care">Care Areas</a>
            <a href="/#contact">Contact</a>
            <a href="/whatsapp-community">Free WhatsApp Community</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:03114632164">0311-4632164</a>
            <span className="social-label">
              <MapPin size={15} /> 9 E2, WAPDA Town, Lahore
            </span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Dr. Hasnain Haider. All rights reserved.</span>
          <span>ENT • Head & Neck Surgical Care</span>
        </div>
      </footer>
    </div>
  );
}
