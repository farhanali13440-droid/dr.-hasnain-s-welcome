import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Award, CalendarCheck, ChevronDown, Clock3, Ear, Facebook,
  Headphones, Instagram, MapPin, Menu, MessageCircle, Phone, ShieldCheck,
  Stethoscope, Syringe, UserRound, X,
} from "lucide-react";
import { useState } from "react";
import entLogoAsset from "../assets/ent-logo.jpg.asset.json";
import drHasnainAsset from "../assets/dr-hasnain.jpg.asset.json";
import drHasnainEntAsset from "../assets/dr-hasnain-ent.png.asset.json";
import careEarImg from "../assets/care-ear.jpg";
import careNoseImg from "../assets/care-nose.jpg";
import careThroatImg from "../assets/care-throat.jpg";
import careHeadNeckImg from "../assets/care-head-neck.jpg";
import careSurgicalImg from "../assets/care-surgical.jpg";
import careOncologyImg from "../assets/care-oncology.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Hasnain Haider | ENT & Head & Neck Surgical Care" },
      { name: "description", content: "Dr. Hasnain Haider — ENT Specialist and Head & Neck Surgical Oncology Fellow in Lahore." },
      { property: "og:title", content: "Dr. Hasnain Haider | ENT & Head & Neck Surgical Care" },
      { property: "og:description", content: "Expert ENT, Head & Neck Surgical Care in Lahore. Book a consultation with Dr. Hasnain Haider." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const phone = "0311-4632164";
const whatsapp = "923114632164";

const concerns = [
  { icon: Ear, img: careEarImg, title: "Ear Problems", text: "Ear pain, infections, blocked ears and hearing-related concerns." },
  { icon: Stethoscope, img: careNoseImg, title: "Nose & Sinus", text: "Nasal blockage, sinus symptoms, allergies and breathing concerns." },
  { icon: Headphones, img: careThroatImg, title: "Throat & Voice", text: "Throat discomfort, tonsil concerns, voice and swallowing problems." },
  { icon: UserRound, img: careHeadNeckImg, title: "Head & Neck", text: "Assessment of head and neck lumps, swellings and related concerns." },
  { icon: Syringe, img: careSurgicalImg, title: "Surgical Care", text: "ENT and head & neck surgical assessment with a patient-focused approach." },
  { icon: ShieldCheck, img: careOncologyImg, title: "Oncology Care", text: "Specialized head & neck surgical oncology assessment and care." },
];

const faqs = [
  { q: "How can I book an appointment?", a: "Call 0311-4632164 or send a WhatsApp message to request an appointment." },
  { q: "Where is the clinic located?", a: "Dr. Hasnain Haider sees patients at 9 E2, WAPDA Town, Lahore." },
  { q: "What areas does Dr. Hasnain specialize in?", a: "His practice focuses on ENT care along with Head & Neck Surgical Oncology." },
  { q: "Can I contact the clinic through WhatsApp?", a: "Yes. Use the WhatsApp button on this website for a quick appointment enquiry." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="topbar"><div className="container topbar-inner">
        <p><Clock3 size={15} /> Consultation enquiries: <strong>{phone}</strong></p>
        <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp Appointment</a>
      </div></div>

      <header className="navbar"><div className="container nav-inner">
        <a className="brand" href="#home" onClick={closeMenu}>
          <img className="brand-logo" src={entLogoAsset.url} alt="Dr. Hasnain ENT logo" />
          <span><strong>Dr. Hasnain</strong><small>ENT • Head & Neck Surgical Care</small></span>
        </a>
        <button className="mobile-menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[["Home", "#home"], ["About", "#about"], ["Care Areas", "#care"], ["Why Dr. Hasnain", "#why"], ["FAQs", "#faq"], ["Contact", "#contact"]].map(([label, href]) =>
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          )}
          <a className="nav-cta" href={`tel:${phone.replace(/-/g, "")}`}><Phone size={16} /> Call Now</a>
        </nav>
      </div></header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> ENT • Head & Neck Surgical Oncology</div>
              <p className="script-kicker">Meet</p>
              <h1>Dr. Hasnain<span>Haider</span></h1>
              <p className="hero-title">Expert ENT & Head Neck Surgical Care</p>
              <p className="hero-text">Focused, compassionate care for ear, nose, throat, head and neck concerns — with advanced surgical oncology training.</p>
              <div className="credentials">
                <div className="credential"><Award /><div><strong>MBBS — Gold Medalist</strong><span>Academic distinction</span></div></div>
                <div className="credential"><Award /><div><strong>FCPS (ENT) & MRCS</strong><span>Specialist qualifications</span></div></div>
                <div className="credential"><ShieldCheck /><div><strong>Fellow, Head & Neck Surgical Oncology</strong><span>Shaukat Khanum Hospital, Lahore</span></div></div>
              </div>
              <div className="hero-actions">
                <a className="button primary" href="#contact">Book an Appointment <ArrowRight size={17} /></a>
                <a className="button secondary" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Dr. Hasnain Haider profile">
              <div className="portrait-card brand-aligned-card">
                <div className="portrait-topline"><span>DR. HASNAIN HAIDER</span><span>ENT</span></div>
                <div className="portrait-art portrait-art-photo">
                  <img className="hero-photo" src={drHasnainAsset.url} alt="Dr. Hasnain Haider" loading="eager" />
                  <div className="portrait-copy"><span>HEAD & NECK</span><strong>SURGICAL ONCOLOGY</strong></div>
                </div>
                <div className="portrait-badge"><ShieldCheck size={17} /><span>Specialist ENT Care</span></div>
              </div>
              <div className="floating-card floating-card-one"><Award size={19} /><span><strong>Gold Medalist</strong> MBBS</span></div>
              <div className="floating-card floating-card-two"><MapPin size={18} /><span><strong>Lahore</strong> WAPDA Town</span></div>
            </div>
          </div>
        </section>

        <section className="trust-strip"><div className="container trust-grid">
          <div><Award /><span>MBBS<br /><strong>Gold Medalist</strong></span></div>
          <div><Stethoscope /><span>FCPS (ENT)<br /><strong>& MRCS</strong></span></div>
          <div><ShieldCheck /><span>Fellow<br /><strong>Head & Neck Surgical Oncology</strong></span></div>
          <div><CalendarCheck /><span>Easy<br /><strong>Appointment Booking</strong></span></div>
        </div></section>

        <section className="section" id="care"><div className="container">
          <div className="section-heading centered"><p className="section-kicker">FIND YOUR CARE</p><h2>Medical Services</h2><p>Explore the main areas of ENT and Head & Neck care covered by Dr. Hasnain Haider.</p></div>
          <div className="concern-grid">{concerns.map(({ icon: Icon, img, title, text }) =>
            <article className="care-card" key={title}>
              <img className="care-img" src={img} alt={title} loading="lazy" width={1024} height={640} />
              <div className="icon-box"><Icon size={24} /></div>
              <h3>{title}</h3><p>{text}</p><a href="#contact">Book Consultation <ArrowRight size={15} /></a>
            </article>
          )}</div>
        </div></section>

        <section className="section about-section" id="about"><div className="container about-grid">
          <div className="about-visual">
            <div className="about-photo-card">
              <img src={drHasnainEntAsset.url} alt="Dr. Hasnain Haider in clinic" loading="lazy" />
              <div className="about-photo-overlay"><span>DR. HASNAIN HAIDER</span><strong>ENT SPECIALIST</strong><small>Head & Neck Surgical Oncology</small></div>
            </div>
            <div className="about-accent"><Award size={18} /><span>Gold Medalist<br /><strong>MBBS</strong></span></div>
          </div>
          <div className="section-heading">
            <p className="section-kicker">ABOUT DR. HASNAIN</p><h2>Specialist care with a focus on your ENT health.</h2>
            <p>Dr. Hasnain Haider is an ENT Specialist with specialist training in Head & Neck Surgical Oncology. His approach combines careful clinical assessment, clear communication and patient-focused treatment planning.</p>
            <div className="check-list"><div><ShieldCheck /> ENT specialist assessment</div><div><ShieldCheck /> Head & neck surgical oncology training</div><div><ShieldCheck /> Clear, patient-focused guidance</div></div>
            <a className="text-link" href="#contact">Book an appointment <ArrowRight size={17} /></a>
          </div>
        </div></section>

        <section className="section services-section" id="why"><div className="container">
          <div className="section-heading centered"><p className="section-kicker">WHY DR. HASNAIN</p><h2>Care built around expertise, clarity and trust.</h2></div>
          <div className="benefit-grid">
            <div className="benefit-card"><div className="benefit-number">01</div><h3>Specialist Expertise</h3><p>FCPS (ENT), MRCS and fellowship training in Head & Neck Surgical Oncology.</p></div>
            <div className="benefit-card"><div className="benefit-number">02</div><h3>Focused Assessment</h3><p>Structured evaluation of ear, nose, throat, head and neck concerns.</p></div>
            <div className="benefit-card"><div className="benefit-number">03</div><h3>Patient-Centred Guidance</h3><p>Clear explanations and treatment discussions designed around each patient's needs.</p></div>
          </div>
        </div></section>

        <section className="appointment-section"><div className="container appointment-card">
          <div><p className="section-kicker light">READY TO GET STARTED?</p><h2>Book your ENT consultation in Lahore.</h2><p>Call or WhatsApp to request an appointment with Dr. Hasnain Haider.</p></div>
          <div className="appointment-actions">
            <a className="button light-button" href={`tel:${phone.replace(/-/g, "")}`}><Phone size={17} /> {phone}</a>
            <a className="button outline-light" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a>
          </div>
        </div></section>

        <section className="section faq-section" id="faq"><div className="container faq-grid">
          <div className="section-heading"><p className="section-kicker">FAQ'S</p><h2>Everything you need to know.</h2><p>Quick answers to common appointment and care questions.</p></div>
          <div className="faq-list">{faqs.map((faq, index) => {
            const open = openFaq === index;
            return <div className={open ? "faq-item open" : "faq-item"} key={faq.q}><button onClick={() => setOpenFaq(open ? null : index)}><span>{faq.q}</span><ChevronDown size={19} /></button>{open && <p>{faq.a}</p>}</div>;
          })}</div>
        </div></section>

        <section className="contact-section" id="contact"><div className="container contact-grid">
          <div className="contact-copy"><p className="section-kicker light">CONTACT DR. HASNAIN</p><h2>Connect with your ENT specialist today.</h2><p>For appointments and consultation enquiries, use the contact options below.</p></div>
          <div className="contact-details">
            <a href={`tel:${phone.replace(/-/g, "")}`} className="contact-item"><Phone /><span><small>Call for appointments</small><strong>{phone}</strong></span></a>
            <div className="contact-item"><MapPin /><span><small>Clinic Address</small><strong>9 E2, WAPDA Town, Lahore</strong></span></div>
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="contact-item"><MessageCircle /><span><small>WhatsApp</small><strong>Message Dr. Hasnain</strong></span></a>
          </div>
        </div></section>
      </main>

      <footer><div className="container footer-grid">
        <div><a className="brand footer-brand" href="#home"><img className="brand-logo" src={entLogoAsset.url} alt="Dr. Hasnain ENT logo" /><span><strong>Dr. Hasnain Haider</strong><small>ENT Specialist</small></span></a><p className="footer-description">ENT & Head Neck Surgical Care in Lahore with specialist training in Head & Neck Surgical Oncology.</p></div>
        <div><h4>Quick Links</h4><a href="#about">About</a><a href="#care">Care Areas</a><a href="#why">Why Dr. Hasnain</a><a href="#faq">FAQs</a><a href="/community">Free WhatsApp Community</a></div>
        <div><h4>Connect</h4><a href={`tel:${phone.replace(/-/g, "")}`}><Phone size={15} /> {phone}</a><a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a><span className="social-label"><Facebook size={15} /> Dr. Hasnain Haider - ENT Specialist</span><a href="https://instagram.com/dr.hasnain_haider" target="_blank" rel="noreferrer"><Instagram size={15} /> @dr.hasnain_haider</a></div>
      </div><div className="container footer-bottom"><span>© 2026 Dr. Hasnain Haider. All rights reserved.</span><span>ENT • Head & Neck Surgical Care</span></div></footer>

      <a className="floating-whatsapp" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a>
    </div>
  );
}
