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

const weddingDate = new Date("2026-12-11T18:15:00+05:30");
const events = [
  {
    date: "THURSDAY · 10 DECEMBER 2026",
    title: "Mahila Sangeet",
    time: "12:15 PM",
    note: "Music, dance, and joyous celebrations with family and friends.",
    icon: "✦",
  },
  {
    date: "THURSDAY · 10 DECEMBER 2026",
    title: "Chaak & Bhaat",
    time: "04:15 PM",
    note: "Traditional maternal blessings and ritual ceremony.",
    icon: "❋",
  },
  {
    date: "FRIDAY · 11 DECEMBER 2026",
    title: "Baraat Aagman",
    time: "06:15 PM",
    note: "Grand arrival and welcome of the groom's procession (Baraat).",
    icon: "✧",
  },
  {
    date: "FRIDAY · 11 DECEMBER 2026",
    title: "Preetibhoj (Dinner)",
    time: "07:15 PM",
    note: "Join us for a delicious celebratory wedding feast.",
    icon: "❈",
  },
  {
    date: "FRIDAY · 11 DECEMBER 2026",
    title: "Gaurwa & Phere",
    time: "08:15 PM",
    note: "Auspicious wedding rituals and sacred wedding vows.",
    icon: "✦",
  },
  {
    date: "SATURDAY · 12 DECEMBER 2026",
    title: "Vidai",
    time: "Under Starlight",
    note: "Bidding a warm farewell to the bride (Taro Ki Chhanv Mein).",
    icon: "✧",
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
    const address = "V.P.O. Khatiwas, Tehsil Bawal, District Rewari, Haryana - 123501";
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
              <span className="alt-a">A</span> <small>&</small> <span className="alt-a">R</span>
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
          <span className="alt-a">A</span> <span>&</span> <span className="alt-a">R</span>
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
              <span className="alt-a">A</span>nita <span className="nickname">(<span className="alt-a">A</span>nnu)</span> <em>&</em> <span className="alt-a">R</span>avi
            </h1>
            <p className="hero-subtitle">
              Joyfully invite you to celebrate their wedding
            </p>
            <div className="hero-rule">
              <span>✦</span>
            </div>
            <p className="date-line">
              FRIDAY <b>·</b> 11 DECEMBER 2026
            </p>
            <p className="date-small">Gram Khatiwas, Bawal (Rewari), Haryana - 123501</p>
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
              <img src={brideImg} alt="Bride - Anita (Annu)" className="portrait" />
              <p className="script-name"><span className="alt-a">A</span>nita <span className="nickname">(<span className="alt-a">A</span>nnu)</span></p>
              <p className="family-label">GRANDDAUGHTER OF</p>
              <p className="family-name">
                Smt. Sumitra Devi
                <br />& Late Sh. Jagdish Chandra
              </p>
              <div className="thin-rule" />
              <p className="family-label">DAUGHTER OF</p>
              <p className="family-name">
                Smt. Sanjogatta Devi
                <br />& Sh. Naresh Kumar
              </p>
              <div className="thin-rule" />
              <p className="family-label">FROM</p>
              <p className="family-name">
                V.P.O. Khatiwas, Bawal
                <br />
                Dist. Rewari, Haryana - 123501
              </p>
            </article>
            <div className="ampersand">
              weds<span>♡</span>
            </div>
            <article className="person-card">
              <img src={groomImg} alt="Groom - Ravi" className="portrait" />
              <p className="script-name">Ravi</p>
              <p className="family-label">SON OF</p>
              <p className="family-name">
                Smt. Santosh Devi
                <br />& Sh. Kamal Master Ji
              </p>
              <div className="thin-rule" />
              <p className="family-label">FROM</p>
              <p className="family-name">
                Tosham Road, Bhiwani
                <br />
                (Haryana)
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
              <b>Venue for all wedding ceremonies</b>
              <span>
                At Our Residence · Gram Khatiwas, Tehsil Bawal, District Rewari, Haryana - 123501
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
            A place for the favourite memories together.
          </p>
          <div className="gallery-masonry">
            <div className="gallery-item"><img src={gallery1} alt="Gallery 1" /></div>
            <div className="gallery-item"><img src={gallery2} alt="Gallery 2" /></div>
            <div className="gallery-item"><img src={photo2} alt="Photo 2" /></div>
            <div className="gallery-item"><img src={gallery4} alt="Gallery 4" /></div>
            <div className="gallery-item"><img src={photo3} alt="Photo 3" /></div>
            <div className="gallery-item"><img src={gallery5} alt="Gallery 5" /></div>
            <div className="gallery-item"><img src={photo4} alt="Photo 4" /></div>
            <div className="gallery-item"><img src={photo1} alt="Photo 1" /></div>
            <div className="gallery-item"><img src={photo5} alt="Photo 5" /></div>
            <div className="gallery-item"><img src={gallery3} alt="Gallery 3" /></div>
            <div className="gallery-item"><img src={photo6} alt="Photo 6" /></div>
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
              Gram Khatiwas, Tehsil Bawal
              <br />
              District Rewari, Haryana - 123501, India
            </p>
            <div className="venue-actions">
              <button className="outline-button" onClick={copyAddress}>
                {copied ? <Check size={15} /> : <Copy size={15} />}{" "}
                {copied ? "Copied" : "Copy address"}
              </button>
              <a
                className="gold-button"
                href="https://maps.app.goo.gl/btpmq961J7Dqt2nq9"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps <ArrowUpRight size={15} />
              </a>
            </div>
            <p className="venue-note">
              We cordially invite you to grace the occasion with your presence at our residence in
              <br />
              <b>Gram Khatiwas, Tehsil Bawal, District Rewari (Haryana) - 123501</b>.
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
            <span className="alt-a">A</span>nita <span className="nickname">(<span className="alt-a">A</span>nnu)</span> <span>&</span> <span className="alt-a">R</span>avi
          </p>
          <div className="rsvp-divider">
            <span>✦</span>
          </div>
          <p className="family-label">PRESHAK (HOST)</p>
          <h3 className="rsvp-name">Sh. Naresh Kumar</h3>
          <p className="family-label" style={{ marginTop: "0.25rem", fontStyle: "italic" }}>
            (Son of Late Sh. Jagdish Chandra)
          </p>
          <p className="rsvp-address">
            Gram Khatiwas, Tehsil Bawal
            <br />
            District Rewari, Haryana - 123501
          </p>
          <a className="phone-link" href="tel:+917056236171">
            <Phone size={15} /> +91 70562 36171 (Sh. Naresh Kumar)
          </a>
          <br />
          <a className="phone-link" href="tel:+919991987246">
            <Phone size={15} /> +91 99919 87246
          </a>
          <br />
          <a className="phone-link" href="tel:+919991987241">
            <Phone size={15} /> +91 99919 87241
          </a>
          <br />
          <a className="phone-link" href="tel:+918491964825">
            <Phone size={15} /> +91 84919 64825
          </a>

          <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <p className="little-stars">DARSHANABHILASHI (WITH BEST REGARDS)</p>
              <p className="stars-quote" style={{ fontSize: "1.05rem", fontStyle: "normal", color: "var(--color-cream-light)" }}>
                Sh. Dinesh (Dhanna), Sh. Virendra, Harish, Sachin
              </p>
            </div>
            <div>
              <p className="little-stars">VISHESH AAGRAH (SPECIAL REQUEST)</p>
              <p className="stars-quote" style={{ fontSize: "1.05rem", fontStyle: "normal", color: "var(--color-cream-light)" }}>
                Sonu & Priyanka Jangda
                <br />
                <span style={{ fontSize: "0.85rem", opacity: 0.85 }}>(Sarpanch, Gram Khatiwas, Dhani Ahiran - 123501)</span>
              </p>
            </div>
            <div>
              <p className="little-stars">SWAGATKARTA (WELCOMING GUESTS)</p>
              <p className="stars-quote" style={{ fontSize: "1.05rem", fontStyle: "normal", color: "var(--color-cream-light)" }}>
                Manish, Praveen, Jitendra (Jeete)
              </p>
            </div>
          </div>

          <p className="little-stars" style={{ marginTop: "2rem" }}>BAL AAGRAH (LITTLE ONES' REQUEST)</p>
          <p className="stars-quote">
            “मीठी-मीठी सर्दी है, सर्दी से ना घबराना।<br/>मेरी बुआ व दीदी की शादी में, जरूर-जरूर आना।।”
          </p>
          <p className="family-name" style={{ fontSize: "0.95rem", color: "var(--color-gold-light)", marginTop: "0.5rem" }}>
            Gunnul, Himanshi, Vaishnavi, Krish, Yash, Dipanshi, Harshita, Parisha, Kiyara
          </p>

          <p className="little-stars" style={{ marginTop: "2rem" }}>VINEET</p>
          <p className="stars-quote" style={{ fontSize: "1.1rem", fontStyle: "normal" }}>
            With best compliments from Baberwal Family, relatives & friends
          </p>
          <p style={{ fontSize: "0.85rem", opacity: 0.8, marginTop: "0.25rem" }}>
            (समस्त बबेरवाल परिवार व स्नेही मित्रगण)
          </p>
          <p style={{ fontSize: "0.85rem", fontStyle: "italic", opacity: 0.9, marginTop: "1.25rem", color: "var(--color-gold-light)" }}>
            * Note: Please accept the invitation of Grihalakshmi through this card as well.
            <br />
            (कृप्या गृहलक्ष्मी का बुलावा भी इसी कार्ड द्वारा स्वीकार करे।)
          </p>
        </section>
      </main>
      <footer>
        <a className="brand" href="#home">
          <span className="alt-a">A</span> <span>&</span> <span className="alt-a">R</span>
        </a>
        <div className="footer-right">
          <a href="#home" aria-label="Back to top">
            <ArrowDown className="up-arrow" />
          </a>
          <p>MADE WITH LOVE FOR ANITA AND RAVI<br/>BY AMIT</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
