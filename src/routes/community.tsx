import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Free ENT WhatsApp Community | Dr. Hasnain Haider" },
      { name: "description", content: "Join Dr. Hasnain Haider's free WhatsApp community for practical tips and guidance about common ear, nose and throat problems in Lahore." },
    ],
  }),
  component: CommunityPage,
});

const phone = "0311-4632164";
const whatsapp = "923114632164";
const communityJoinUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi Dr. Hasnain, I would like to join the free ENT WhatsApp community.")}`;

function CommunityPage() {
  return (
    <div className="community-page">
      <header className="community-nav">
        <div className="container community-nav-inner">
          <a className="brand" href="/">
            <img className="brand-logo" src="/ent-logo.svg" alt="Dr. Hasnain ENT logo" />
            <span><strong>Dr. Hasnain</strong><small>ENT • Head & Neck Surgical Care</small></span>
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
              <div className="community-badge"><MessageCircle size={14} /> FREE WHATSAPP COMMUNITY</div>
              <p className="section-kicker">FOR LAHORE RESIDENTS</p>
              <h1>Living in Lahore and having <span>ear, nose or throat problems?</span></h1>
              <p className="community-lead">
                Join our <strong>free WhatsApp community</strong> to receive practical ENT health tips, helpful guidance and educational information about common ear, nose and throat concerns.
              </p>
              <a className="community-join-button" href={communityJoinUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={19} /> Join the Free WhatsApp Community <ArrowRight size={17} />
              </a>
              <p className="community-note">Free to join • Educational tips • For Lahore residents</p>
            </div>

            <div className="community-visual">
              <div className="community-logo-card">
                <div className="community-card-top"><span>DR. HASNAIN HAIDER</span><span>ENT</span></div>
                <img src="/ent-logo.svg" alt="Dr. Hasnain ENT logo" />
                <strong>ENT Health Tips<br />for Lahore</strong>
                <span className="community-card-caption">Ear • Nose • Throat</span>
              </div>
              <div className="community-location">
                <MapPin size={19} />
                <span><strong>Lahore</strong><small>Local ENT community</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="community-benefits">
          <div className="container">
            <div className="community-section-heading">
              <p className="section-kicker">WHAT YOU'LL GET</p>
              <h2>Useful ENT information, shared simply.</h2>
            </div>
            <div className="community-benefit-grid">
              <article className="community-benefit">
                <CheckCircle2 />
                <div><h3>Practical ENT Tips</h3><p>Learn simple, educational tips related to common ear, nose and throat concerns.</p></div>
              </article>
              <article className="community-benefit">
                <CheckCircle2 />
                <div><h3>Helpful Health Guidance</h3><p>Get easy-to-understand information that can help you better understand ENT symptoms.</p></div>
              </article>
              <article className="community-benefit">
                <CheckCircle2 />
                <div><h3>Lahore-Focused Community</h3><p>Stay connected with an ENT health community created for people living in Lahore.</p></div>
              </article>
              <article className="community-benefit">
                <ShieldCheck />
                <div><h3>Educational Content</h3><p>Receive general health education and awareness content. Personal medical advice requires a consultation.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="community-cta">
          <div className="container community-cta-card">
            <div>
              <MessageCircle />
              <p className="section-kicker light">JOIN THE COMMUNITY</p>
              <h2>Get helpful ENT tips on WhatsApp.</h2>
              <p>Join the free community and stay informed about ear, nose and throat health.</p>
            </div>
            <a className="button light-community-button" href={communityJoinUrl} target="_blank" rel="noreferrer">
              Join Community <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="/">
              <img className="brand-logo" src="/ent-logo.svg" alt="Dr. Hasnain ENT logo" />
              <span><strong>Dr. Hasnain Haider</strong><small>ENT Specialist</small></span>
            </a>
            <p className="footer-description">ENT & Head Neck Surgical Care in Lahore with specialist training in Head & Neck Surgical Oncology.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/#about">About</a>
            <a href="/#care">Care Areas</a>
            <a href="/community">WhatsApp Community</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={`tel:${phone.replace(/-/g, "")}`}>{phone}</a>
            <a href={communityJoinUrl} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Join Community</a>
            <span className="social-label"><MapPin size={15} /> 9 E2, WAPDA Town, Lahore</span>
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
