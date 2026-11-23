import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
  Heart,
  Menu,
  X,
  Flower2,
  Sparkles,
  Camera,
  Copy,
  Check,
} from "lucide-react";
import groomImg from "./assets/groom.jpg";
import brideImg from "./assets/bride.jpg";
import gallery1 from "./assets/gallery1.jpg";
import gallery2 from "./assets/gallery2.jpg";
import gallery3 from "./assets/gallery3.jpg";
import gallery4 from "./assets/gallery4.jpg";
import gallery5 from "./assets/gallery5.jpg";
import photo1 from "./assets/photo1.jpg";
import photo2 from "./assets/photo2.jpg";
import photo3 from "./assets/photo3.jpg";
import photo4 from "./assets/photo4.jpg";
import photo5 from "./assets/photo5.jpg";
import photo6 from "./assets/photo6.jpg";
import photo7 from "./assets/photo7.jpg";

const weddingDate = new Date("2026-12-11T16:15:00+05:30");
const events = [
  {
    date: "WEDNESDAY · 09 DECEMBER 2026",
    title: "Chaak-Bhaat",
    time: "10:15 AM",
    note: "A traditional family celebration to begin the wedding festivities.",
    icon: "✦",
  },
  {
    date: "WEDNESDAY · 09 DECEMBER 2026",
    title: "Lunch",
    time: "12:15 PM",
    note: "Join us for lunch at our residence.",
    icon: "❋",
  },
  {
    date: "WEDNESDAY · 09 DECEMBER 2026",
    title: "Lagan & Tikka",
    time: "02:15 PM",
    note: "Blessings and rituals with family and friends.",
    icon: "✧",
  },
  {
    date: "FRIDAY · 11 DECEMBER 2026",
    title: "Ghurchari",
    time: "11:15 AM",
    note: "The wedding-day celebrations begin.",
    icon: "❈",
  },
  {
    date: "FRIDAY · 11 DECEMBER 2026",
    title: "Departure of Baraat",
    time: "04:15 PM",
    note: "The baraat departs from our residence for Khatiwas, Bawal, Rewari.",
    icon: "✦",
  },
];

function Countdown() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);
  const diff = Math.max(0, weddingDate.getTime() - now);
  const parts = [
    ["Days", Math.floor(diff / 86400000)],
    ["Hours", Math.floor(diff / 3600000) % 24],
    ["Minutes", Math.floor(diff / 60000) % 60],
    ["Seconds", Math.floor(diff / 1000) % 60],
  ];
  return (
    <div className="countdown">
      {parts.map(([label, value]) => (
        <div className="count-box" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

function Floral({ className = "" }) {
  return (
    <div className={`floral ${className}`} aria-hidden="true">
      <span>✿</span>
      <i>✧</i>
      <b>❋</b>
    </div>
  );
}

function App() {
  const [opened, setOpened] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);
  const openInvite = () => {
    setOpened(true);
    setTimeout(
      () =>
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
      150,
    );
  };
  const copyAddress = async () => {
    const address = "Dabur Colony, Tosham Bypass Road, Bhiwani, Haryana - 127021";
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy venue address:", address);
    }
  };
  const navItems = [
    ["Story", "#story"],
    ["Celebrations", "#celebrations"],
    ["Venue", "#venue"],
    ["RSVP", "#rsvp"],
  ];
  return (
    <div className="site-shell">
      {!opened && (
        <div className="intro-screen">
          <div className="intro-glow" />
          <div className="intro-ornament">ॐ</div>
          <p className="eyebrow">SHRI GANESHAY NAMAH</p>
          <p className="intro-kicker">An invitation for you</p>
          <button
            className="envelope"
            onClick={openInvite}
            aria-label="Open wedding invitation"
          >
            <span className="envelope-flap" />
            <span className="envelope-seal">
              <span className="alt-a">R</span> <small>&</small> <span className="alt-a">A</span>
            </span>
            <span className="envelope-label">OPEN INVITATION</span>
          </button>
          <button className="open-hint" onClick={openInvite}>
            Tap the envelope to begin <ArrowDown size={14} />
          </button>
        </div>
      )}

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="alt-a">R</span> <span>&</span> <span className="alt-a">A</span>
        </a>
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links show" : "nav-links"}>
          {navItems.map(([name, href]) => (
            <a key={name} href={href} onClick={() => setMenuOpen(false)}>
              {name}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="side-garland left-garland">
            ✺<span>✧</span>❋<span>✧</span>✺
          </div>
          <div className="side-garland right-garland">
            ✺<span>✧</span>❋<span>✧</span>✺
          </div>
          <div className="hero-content">
            <div className="ganesha">ॐ</div>
            <p className="eyebrow">WITH THE BLESSINGS OF THE ALMIGHTY</p>
            <h1 className="script-title">
              <span className="alt-a">R</span>avi <em>&</em> <span className="alt-a">A</span>nita <span className="nickname">(<span className="alt-a">A</span>nnu)</span>
            </h1>
            <p className="hero-subtitle">
              joyfully invite you to celebrate their wedding
            </p>
            <div className="hero-rule">
              <span>✦</span>
            </div>
            <p className="date-line">
              FRIDAY <b>·</b> 11 DECEMBER 2026
            </p>
            <p className="date-small">Bhiwani, Haryana - 127021</p>
            <a className="text-link" href="#story">
              EXPLORE THE INVITATION <ArrowDown size={14} />
            </a>
          </div>
          <div className="hero-bottom-note">
            A CELEBRATION OF LOVE · FAMILY · FOREVER
          </div>
        </section>

        <section className="blessing section" id="story">
          <Floral />
          <p className="eyebrow">A NEW CHAPTER BEGINS</p>
          <h2 className="section-title">
            Two families, <i>one celebration</i>
          </h2>
          <p className="blessing-copy">
            With the blessings of our elders and the love of our families, we
            invite you to be part of the beautiful beginning of a new journey.
          </p>
          <div className="couple-grid">
            <article className="person-card">
              <img src={groomImg} alt="Groom - Ravi" className="portrait" />
              <p className="script-name">Ravi</p>
              <p className="family-label">GRANDSON OF</p>
              <p className="family-name">
                Sh. Rameshwar Jangra
                <br />& Late Smt. Chander Devi
              </p>
              <div className="thin-rule" />
              <p className="family-label">SON OF</p>
              <p className="family-name">
                Smt. Santosh Devi
                <br />& Sh. Kamal Singh Jangra
              </p>
            </article>
            <div className="ampersand">
              weds<span>♡</span>
            </div>
            <article className="person-card">
              <img src={brideImg} alt="Bride - Anita (Annu)" className="portrait" />
              <p className="script-name"><span className="alt-a">A</span>nita <span className="nickname">(<span className="alt-a">A</span>nnu)</span></p>
              <p className="family-label">DAUGHTER OF</p>
              <p className="family-name">
                Smt. Sanjogatta Devi
                <br />& Retd. Subedar Naresh Kumar
              </p>
              <div className="thin-rule" />
              <p className="family-label">FROM</p>
              <p className="family-name">
                V.P.O. Khatiwas
                <br />
                Bawal, Rewari
              </p>
            </article>
          </div>
          <p className="elders-note">
            Your presence and blessings will make our celebration complete.
          </p>
        </section>

        <section className="date-feature section">
          <div className="date-feature-inner">
            <p className="eyebrow">SAVE THE DATE</p>
            <div className="date-number">
              11<span>th</span>
            </div>
            <p className="date-month">
              DECEMBER <b>2026</b>
            </p>
            <p className="date-weekday">FRIDAY</p>
            <div className="countdown-heading">COUNTING DOWN TO FOREVER</div>
            <Countdown />
          </div>
        </section>

        <section className="celebrations section" id="celebrations">
          <Floral />
          <p className="eyebrow">JOIN US FOR THE FESTIVITIES</p>
          <h2 className="section-title">
            The <i>celebrations</i>
          </h2>
          <p className="section-intro">
            A few beautiful moments, traditions and memories. We would love to
            celebrate each one with you.
          </p>
          <div className="event-list">
            {events.map((event, index) => (
              <article className="event-card" key={event.title}>
                <div className="event-icon">{event.icon}</div>
                <div className="event-info">
                  <p className="event-date">{event.date}</p>
                  <h3>{event.title}</h3>
                  <p>{event.note}</p>
                </div>
                <div className="event-time">
                  <Clock3 size={15} />
                  {event.time}
                </div>
              </article>
            ))}
          </div>
          <div className="venue-callout">
            <MapPin size={18} />
            <div>
              <b>Lunch & wedding preparations venue</b>
              <span>
                At Our Residence · Dabur Colony, Tosham Bypass Road, Bhiwani
              </span>
            </div>
          </div>
        </section>

        <section className="gallery section">
          <p className="eyebrow">MOMENTS TO REMEMBER</p>
          <h2 className="section-title">
            Our <i>little gallery</i>
          </h2>
          <p className="section-intro">
            A place for your favourite memories together.
          </p>
          <div className="gallery-grid">
            <img src={gallery2} alt="Gallery 2" className="gallery-photo wide-frame" />
            <img src={gallery1} alt="Gallery 1" className="gallery-photo tall-frame" />
            <img src={gallery3} alt="Gallery 3" className="gallery-photo tall-frame" />
            <img src={gallery4} alt="Gallery 4" className="gallery-photo normal-frame" />
            <img src={gallery5} alt="Gallery 5" className="gallery-photo wide-frame" />
            <img src={photo1} alt="Photo 1" className="gallery-photo wide-frame" />
            <img src={photo2} alt="Photo 2" className="gallery-photo tall-frame" />
            <img src={photo3} alt="Photo 3" className="gallery-photo normal-frame" />
            <img src={photo4} alt="Photo 4" className="gallery-photo normal-frame" />
            <img src={photo7} alt="Photo 7" className="gallery-photo full-frame" />
            <img src={photo5} alt="Photo 5" className="gallery-photo tall-frame" />
            <img src={photo6} alt="Photo 6" className="gallery-photo wide-tall-frame" />
          </div>
        </section>

        <section className="venue section" id="venue">
          <div className="venue-card">
            <p className="eyebrow">COME CELEBRATE WITH US</p>
            <h2 className="section-title">
              The <i>venue</i>
            </h2>
            <div className="venue-icon">
              <MapPin size={28} />
            </div>
            <h3>At Our Residence</h3>
            <p>
              Dabur Colony, Tosham Bypass Road
              <br />
              Bhiwani, Haryana - 127021, India
            </p>
            <div className="venue-actions">
              <button className="outline-button" onClick={copyAddress}>
                {copied ? <Check size={15} /> : <Copy size={15} />}{" "}
                {copied ? "Copied" : "Copy address"}
              </button>
              <a
                className="gold-button"
                href="https://maps.app.goo.gl/LDERaCan2znCrsfW6"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps <ArrowUpRight size={15} />
              </a>
            </div>
            <p className="venue-note">
              The baraat will depart from our residence for
              <br />
              <b>V.P.O. Khatiwas, Bawal, Rewari</b>.
            </p>
          </div>
        </section>

        <section className="rsvp section" id="rsvp">
          <div className="rsvp-ornament">❋</div>
          <p className="eyebrow">WITH LOVE & BLESSINGS</p>
          <h2 className="section-title">
            We can't wait to <i>celebrate with you</i>
          </h2>
          <p className="rsvp-copy">
            Your presence will make our special day even more memorable. Please
            join us and bless the couple.
          </p>
          <p className="script-signoff">
            <span className="alt-a">R</span>avi <span>&</span> <span className="alt-a">A</span>nita <span className="nickname">(<span className="alt-a">A</span>nnu)</span>
          </p>
          <div className="rsvp-divider">
            <span>✦</span>
          </div>
          <p className="family-label">RSVP</p>
          <h3 className="rsvp-name">Kamal Singh Jangra</h3>
          <p className="rsvp-address">
            Jangra Bhawan, Gali No. 09
            <br />
            Tosham Bypass Road, Dabur Colony
            <br />
            Near Chara Mandi, Bhiwani (Haryana) - 127021
          </p>
          <a className="phone-link" href="tel:+918295327700">
            <Phone size={15} /> +91 82953 27700 (Kamal Singh Jangra)
          </a>
          <br />
          <a className="phone-link" href="tel:+919991038113">
            <Phone size={15} /> +91 99910 38113 (Rameshwar Jangra)
          </a>
          <br />
          <a className="phone-link" href="tel:+918571808859">
            <Phone size={15} /> +91 85718 08859 (Ravi Jangra)
          </a>
          <p className="little-stars">A SWEET NOTE FROM YASHIKA</p>
          <p className="stars-quote">
            “Mele Mamu Ki Shaddi Me Julul-Julul Aana”
          </p>
          <p className="little-stars">
            With best compliments from the Jangra family, friends & relatives
          </p>
        </section>
      </main>
      <footer>
        <a className="brand" href="#home">
          <span className="alt-a">R</span> <span>&</span> <span className="alt-a">A</span>
        </a>
        <div className="footer-right">
          <a href="#home" aria-label="Back to top">
            <ArrowDown className="up-arrow" />
          </a>
          <p>MADE WITH LOVE FOR RAVI AND ANITA<br/>BY AMIT</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
