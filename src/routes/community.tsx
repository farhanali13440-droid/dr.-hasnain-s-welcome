import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import entLogoAsset from "../assets/ent-logo.jpg.asset.json";
import drHasnainEnt2Asset from "../assets/dr-hasnain-ent-2.png.asset.json";


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
const communityJoinUrl = "https://chat.whatsapp.com/HWFaDcRfgLcCBdcvCFUESY";

function CommunityPage() {
  return (
    <div className="community-page">
      <header className="community-nav">
        <div className="container community-nav-inner">
          <div className="brand">
            <img className="brand-logo" src={entLogoAsset.url} alt="Dr. Hasnain ENT logo" />
            <span><strong>Dr. Hasnain</strong><small>ENT • Head & Neck Surgical Care</small></span>
          </div>
        </div>
      </header>

      <main>
        <section className="community-hero">
          <div className="community-orb community-orb-one" />
          <div className="community-orb community-orb-two" />
          <div className="community-hero-glow" />
          <div className="container community-hero-grid">
            <div className="community-copy">
              <div className="community-badge"><MessageCircle size={14} /> FREE WHATSAPP COMMUNITY</div>
              <p className="section-kicker">LAHORE KE REHAISHIYON KE LIYE</p>
              <h1>Agar aap Lahore mein rehte hain aur aapko <span>ear, nose ya throat ka issue hai?</span></h1>
              <p className="community-lead">
                Hamari <strong>free WhatsApp community</strong> join karein jahan Dr. Hasnain ke through ear, nose aur throat se related useful tips, awareness aur practical guidance share ki jati hai.
              </p>
              <div className="community-benefit-row">
                <span><CheckCircle2 size={15} /> ENT Health Tips</span>
                <span><CheckCircle2 size={15} /> Free to Join</span>
                <span><CheckCircle2 size={15} /> Lahore</span>
              </div>
              <a className="community-join-button" href={communityJoinUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={20} /> Community Join Karein <ArrowRight size={17} />
              </a>
              <p className="community-note">No fee • Educational content • Join anytime</p>
            </div>

            <div className="community-visual">
              <div className="community-logo-card community-hero-card">
                <div className="community-card-top"><span>DR. HASNAIN HAIDER</span><span>ENT</span></div>
                <div className="community-whatsapp-mark"><MessageCircle size={24} /></div>
                <img className="community-hero-photo" src={drHasnainEnt2Asset.url} alt="Dr. Hasnain Haider in clinic" />
                <strong>ENT Tips & Guidance<br /><span>For Lahore</span></strong>
                <span className="community-card-caption">Ear • Nose • Throat</span>
                <div className="community-card-pill">100% FREE COMMUNITY</div>
              </div>

            </div>
          </div>
        </section>

        <section className="community-benefits">
          <div className="container">
            <div className="community-section-heading">
              <p className="section-kicker">AAPKO KYA MILEGA</p>
              <h2>ENT se related useful information, simple andaaz mein.</h2>
            </div>
            <div className="community-benefit-grid">
              <article className="community-benefit">
                <CheckCircle2 />
                <div><h3>Practical ENT Tips</h3><p>Ear, nose aur throat ke common issues ke hawale se simple aur useful tips hasil karein.</p></div>
              </article>
              <article className="community-benefit">
                <CheckCircle2 />
                <div><h3>Useful Health Guidance</h3><p>Asaan zubaan mein information hasil karein taake aap ENT symptoms ko behtar samajh saken.</p></div>
              </article>
              <article className="community-benefit">
                <CheckCircle2 />
                <div><h3>Lahore Ke Liye Community</h3><p>Lahore mein rehne walon ke liye banayi gayi ENT health community se connected rahen.</p></div>
              </article>
              <article className="community-benefit">
                <ShieldCheck />
                <div><h3>Health Education</h3><p>General health education aur awareness content hasil karein. Personal medical advice ke liye consultation zaroori hai.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="community-cta">
          <div className="container community-cta-card">
            <div>
              <MessageCircle />
              <p className="section-kicker light">COMMUNITY JOIN KAREIN</p>
              <h2>WhatsApp par useful ENT tips hasil karein.</h2>
              <p>Free community join karein aur ear, nose aur throat health ke bare mein useful information hasil karte rahen.</p>
            </div>
            <a className="button light-community-button" href={communityJoinUrl} target="_blank" rel="noreferrer">
              Community Join Karein <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>


    </div>
  );
}
