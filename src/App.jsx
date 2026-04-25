import { useState, useEffect, useRef } from "react";
import "./App.css";

// ── DATA ──────────────────────────────────────────────────────────────────────

const skills = [
  { group: "Frontend",   items: ["HTML", "CSS", "JavaScript", "Bootstrap5", "React"] },
  { group: "Backend",    items: ["PHP", "Laravel 9", "MySQL", "MongoDB"] },
  { group: "Tools",      items: ["Git", "GitHub", "VS Code", "Xampp", "Postman"] },
  { group: "AI Tools",   items: ["ChatGPT", "Claude AI", "DeepSeek", "Perplexity"] },
  { group: "Soft Skills", items: ["Communication", "Presentation", "Team Collaboration"] },
];

const learningItems = new Set(["React", "MongoDB"]);

const projects = [
  {
    id: 2,
    title: "Wise Homes CRM",
    period: "Aug 2024 – Present",
    ongoing: true,
    url: "https://crm.wisehome.in/",
    tag: "CRM Platform",
    color: "#9d4fff",
    description:
      "CRM-based sales & marketing platform for real estate with end-to-end lead lifecycle management.",
    bullets: [
      "Inventory, booking, and payment module development",
      "Tele-calling based lead management system",
      "Project profiling with pricing and sales tracking tools",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap5", "JS"],
  },
  {
    id: 1,
    title: "Wise Homes Website",
    period: "Aug 2024 – Present",
    ongoing: true,
    url: "https://wisehome.in/",
    tag: "Real Estate",
    color: "#00e5c8",
    description:
      "Real estate booking inquiry platform showcasing available flats with online booking capabilities.",
    bullets: [
      "Responsive UI for browsing, inquiring, and booking flats",
      "Admin panel for managing listings and customer inquiries",
      "Integrated flat management and customer request handling",
    ],
    tech: ["Laravel", "HTML", "CSS", "PHP", "MySQL", "Bootstrap5", "JavaScript"],
  },
  {
    id: 4,
    title: "Wise Partner Club",
    period: "Feb 2026 – Present",
    ongoing: true,
    url: "https://partnerclub.wisehome.in/",
    tag: "Partner Mgmt",
    color: "#4fc3f7",
    description:
      "Real-estate channel partner management platform streamlining partner onboarding, bookings, commissions.",
    bullets: [
      "Channel partner registration & onboarding system",
      "Flat booking system with payment workflow integration",
      "Commission tracking and sales performance dashboard",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap5", "JavaScript"],
  },
  {
    id: 5,
    title: "Saarathi Healthcare",
    period: "Apr 2025 – Jun 2025",
    ongoing: false,
    url: "https://e4upap.saarathiprojects.com/",
    tag: "Healthcare",
    color: "#80ffdb",
    description:
      "Healthcare platform for patient vial purchase requests with role-based approvals and real-time status tracking.",
    bullets: [
      "Patient vial request system with admin/counsellor approval flows",
      "Role-based access for tracking and delivery updates",
      "Detailed reports for order history and performance analytics",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap5", "JavaScript"],
  },
  {
    id: 3,
    title: "Wise Realty Platform",
    period: "Dec 2024 – Jun 2025",
    ongoing: false,
    url: "https://wise.panvelcity.in/",
    tag: "HRMS + PMS",
    color: "#c9b8ff",
    description:
      "Comprehensive platform with HRMS and PMS modules for employee and society document management.",
    bullets: [
      "HRMS: attendance, leave, and salary management",
      "Society document tracking with deadlines and analytics",
      "Dynamic society site creation with member document portal",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap5", "Git"],
  },
];

const roadmap = [
  {
    type: "work",
    typeLbl: "Work · Current",
    bg: "rgba(0,229,200,.15)",
    col: "#00e5c8",
    iconBorder: "rgba(0,229,200,.4)",
    icon: "💻",
    date: "Jul 2024 – Present · 1+ yr",
    title: "Full-Stack Developer",
    place: "Wise Realty, Navi Mumbai",
    desc: (
      <>
        Building and delivering full-stack applications using Laravel & PHP. Contributed to real
        estate, CRM, HRMS, healthcare, and partner management platforms across the entire
        development lifecycle.
      </>
    ),
  },
  {
    type: "edu",
    typeLbl: "Education",
    bg: "rgba(157,79,255,.15)",
    col: "#9d4fff",
    iconBorder: "rgba(157,79,255,.4)",
    icon: "🎓",
    date: "May 2024",
    title: "B.E. in Computer Science",
    place: "Pillai HOC College of Engineering & Technology, Rasayani",
    desc: (
      <>
        Graduated with a CGPA of <strong>8.48</strong>. Developed strong fundamentals in
        algorithms, databases, and software engineering.
      </>
    ),
  },
  {
    type: "edu",
    typeLbl: "Education",
    bg: "rgba(79,195,247,.15)",
    col: "#4fc3f7",
    iconBorder: "rgba(79,195,247,.4)",
    icon: "📚",
    date: "Mar 2021",
    title: "Diploma in Computer Engineering",
    place: "Pillai HOC College of Engineering & Technology, Rasayani",
    desc: (
      <>
        Completed with an outstanding score of <strong>91.94%</strong>, building a strong
        technical foundation early on.
      </>
    ),
  },
];

// ── HOOKS ─────────────────────────────────────────────────────────────────────

function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1, ...options }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <div
      ref={ref}
      className={`fade-section ${inView ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ── STAR CANVAS ───────────────────────────────────────────────────────────────

function StarCanvas() {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let stars = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    function init() {
      resize();
      stars = Array.from({ length: 300 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
        twinkle: Math.random() * Math.PI * 2,
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.twinkle += 0.015;
        const a = 0.3 + 0.7 * ((Math.sin(s.twinkle) + 1) / 2);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,190,255,${a})`;
        ctx.fill();
        s.y -= s.speed;
        if (s.y < 0) { s.y = canvas.height; s.x = Math.random() * canvas.width; }
      });
      animId = requestAnimationFrame(draw);
    }
    window.addEventListener("resize", init);
    init(); draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", init); };
  }, []);
  return <canvas ref={canvasRef} className="star-canvas" />;
}

// ── GLITTER ───────────────────────────────────────────────────────────────────

function GlitterLayer() {
  const cols = ["#00e5c8", "#9d4fff", "#c9b8ff", "#4fc3f7", "#80ffdb", "#f472b6", "#fff"];
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    color: cols[Math.floor(Math.random() * cols.length)],
    dur: 3 + Math.random() * 5,
    delay: Math.random() * 6,
  }));
  return (
    <div className="glitter-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="glitter"
          style={{
            width: p.size, height: p.size,
            left: `${p.left}%`, top: `${p.top}%`,
            background: p.color,
            "--dur": `${p.dur}s`,
            "--delay": `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// ── MOUSE SPARKLE ─────────────────────────────────────────────────────────────

function useMouseSparkle() {
  useEffect(() => {
    const cols = ["#00e5c8", "#9d4fff", "#c9b8ff", "#4fc3f7", "#80ffdb"];
    const handler = (e) => {
      if (Math.random() > 0.85) {
        const spark = document.createElement("div");
        const size = Math.random() * 5 + 2;
        spark.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:${size}px;height:${size}px;background:${cols[Math.floor(Math.random() * cols.length)]};border-radius:50%;pointer-events:none;z-index:9999;transition:all .6s ease;opacity:1`;
        document.body.appendChild(spark);
        setTimeout(() => {
          spark.style.opacity = "0";
          spark.style.transform = `translate(${(Math.random() - 0.5) * 40}px,${-30 - Math.random() * 20}px) scale(0)`;
        }, 10);
        setTimeout(() => spark.remove(), 650);
      }
    };
    document.addEventListener("mousemove", handler);
    return () => document.removeEventListener("mousemove", handler);
  }, []);
}

// ── NAVBAR ────────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = ["About", "Skills", "Projects", "Journey", "Contact"];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-brand">S. Thombare</div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span style={menuOpen ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}} />
        <span style={menuOpen ? { opacity: 0 } : {}} />
        <span style={menuOpen ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}} />
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://github.com/Sayali-JT0003"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-github"
            onClick={() => setMenuOpen(false)}
          >
            GitHub ↗
          </a>
        </li>
      </ul>
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────

function TypedText() {
  const words = ["Full-Stack Developer", "Laravel Expert", "PHP Engineer", "UI Builder", "Problem Solver", "React Learner"];
  const [typed, setTyped] = useState("");
  const wordRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);
  useEffect(() => {
    const tick = () => {
      const word = words[wordRef.current];
      if (!deletingRef.current) {
        charRef.current++;
        setTyped(word.slice(0, charRef.current));
        if (charRef.current === word.length) {
          deletingRef.current = true;
          setTimeout(tick, 1400);
          return;
        }
      } else {
        charRef.current--;
        setTyped(word.slice(0, charRef.current));
        if (charRef.current === 0) {
          deletingRef.current = false;
          wordRef.current = (wordRef.current + 1) % words.length;
        }
      }
      setTimeout(tick, deletingRef.current ? 60 : 90);
    };
    const t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="hero-role">
      <span>{typed}</span>
      <span className="cursor">|</span>
    </div>
  );
}

function Avatar() {
  const [imgErr, setImgErr] = useState(false);
  return (
    <div className="avatar-wrap">
      <div className="avatar-ring" />
      <div className="avatar-ring-inner" />
      <div className="avatar-img">
        {imgErr ? (
          <div className="avatar-placeholder">ST</div>
        ) : (
          <img
            src="/profile.png"
            alt="Sayali Thombare"
            onError={() => setImgErr(true)}
          />
        )}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-left">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for Opportunities
        </div>
        <h1 className="hero-name">
          <span className="first">Sayali</span>
          <br />
          <span className="last">Thombare</span>
        </h1>
        <TypedText />
        <p className="hero-summary">
          Computer Science graduate with <strong>1+ year</strong> of full-stack experience.
          Building real estate, CRM, HRMS & healthcare platforms at Wise Realty with{" "}
          <strong>Laravel, PHP & MySQL</strong>. Now expanding into{" "}
          <strong>React & MongoDB</strong>.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-glow">View Projects</a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">5+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-div" />
          <div className="stat">
            <span className="stat-num">1+</span>
            <span className="stat-label">Year Exp.</span>
          </div>
          <div className="stat-div" />
          <div className="stat">
            <span className="stat-num">8.48</span>
            <span className="stat-label">CGPA</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <Avatar />
        <div className="floating-tag ft1">✦ Full-Stack Dev</div>
        <div className="floating-tag ft2">⬡ Laravel Expert</div>
        <div className="floating-tag ft3">◈ React Learner</div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

// ── SKILLS ────────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section className="section" id="skills">
      <AnimatedSection>
        <div className="section-label">What I Know</div>
        <h2 className="section-title">
          Skills &amp; <span className="gradient-text">Technologies</span>
        </h2>
      </AnimatedSection>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <AnimatedSection key={s.group} delay={i * 70}>
            <div className="skill-card">
              <div className="skill-group-label">{s.group}</div>
              <div className="skill-tags">
                {s.items.map((item) => {
                  const isLearning = learningItems.has(item);
                  return (
                    <span
                      key={item}
                      className={`skill-tag${isLearning ? " learning-tag" : ""}`}
                      title={isLearning ? "Currently Learning" : undefined}
                    >
                      {isLearning ? `✦ ${item}` : item}
                    </span>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

// ── CLOUD SVG ─────────────────────────────────────────────────────────────────

function CloudDecoration({ color }) {
  return (
    <svg
      className="cloud-deco"
      viewBox="0 0 340 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id={`glow-${color.replace("#", "")}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <ellipse cx="170" cy="90" rx="150" ry="38" fill={`${color}18`} />
      <circle cx="90"  cy="72" r="42" fill={`${color}18`} />
      <circle cx="170" cy="58" r="54" fill={`${color}1a`} />
      <circle cx="255" cy="70" r="44" fill={`${color}18`} />
      <ellipse cx="130" cy="67" rx="28" ry="22" fill={`${color}18`} />
      <ellipse cx="213" cy="65" rx="28" ry="22" fill={`${color}18`} />
      <circle
        cx="170" cy="58" r="54"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.25"
        filter={`url(#glow-${color.replace("#", "")})`}
      />
    </svg>
  );
}

// ── PROJECT CARD ──────────────────────────────────────────────────────────────

function ProjectCard({ project, index }) {
  const ref = useRef();
  const inView = useInView(ref);
  return (
    <div
      ref={ref}
      className={`project-card ${inView ? "visible" : ""}`}
      style={{
        transitionDelay: `${(index % 2) * 120}ms`,
        borderColor: inView ? `${project.color}33` : undefined,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${project.color}66`)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${project.color}33`)}
    >
      <CloudDecoration color={project.color} />
      <div className="project-card-header">
        <div style={{ display: "flex", alignItems: "center", gap: ".5rem", flexWrap: "wrap" }}>
          <span
            className="project-tag"
            style={{
              background: `${project.color}22`,
              color: project.color,
              borderColor: `${project.color}44`,
            }}
          >
            {project.tag}
          </span>
          {project.ongoing && (
            <span className="ongoing-badge">
              <span className="ongoing-dot" />
              Ongoing
            </span>
          )}
        </div>
        <span className="project-period">{project.period}</span>
      </div>
      <h3 className="project-title" style={{ color: project.color }}>{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <ul className="project-bullets">
        {project.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="project-footer">
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          style={{ color: project.color }}
        >
          Visit →
        </a>
      </div>
    </div>
  );
}

// ── PROJECTS SECTION ──────────────────────────────────────────────────────────

function Projects() {
  return (
    <section className="section" id="projects">
      <AnimatedSection>
        <div className="section-label">What I've Built</div>
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </AnimatedSection>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

// ── ROADMAP ───────────────────────────────────────────────────────────────────

function Journey() {
  return (
    <section className="section" id="journey">
      <AnimatedSection>
        <div className="section-label">My Roadmap</div>
        <h2 className="section-title">
          Education to <span className="gradient-text">Career</span>
        </h2>
      </AnimatedSection>
      <div className="roadmap">
        {roadmap.map((item, i) => (
          <AnimatedSection key={i} delay={i * 120}>
            <div className="roadmap-item">
              <div
                className="road-icon"
                style={{ background: item.bg, borderColor: item.iconBorder }}
              >
                {item.icon}
              </div>
              <div className="road-content">
                <div className="road-meta">
                  <span
                    className="road-type"
                    style={{ background: item.bg, color: item.col }}
                  >
                    {item.typeLbl}
                  </span>
                  <span className="road-date">{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <div className="road-place">{item.place}</div>
                <p>{item.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}

// ── CONTACT ───────────────────────────────────────────────────────────────────

function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText("thombare.sayali16@gmail.com").catch(() => {
      // Fallback for browsers without clipboard API
      const el = document.createElement("textarea");
      el.value = "thombare.sayali16@gmail.com";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section" id="contact">
      <AnimatedSection>
        <div className="section-label">Say Hello</div>
        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="contact-sub">
          Open to new opportunities, collaborations, and interesting projects.
        </p>
      </AnimatedSection>
      <AnimatedSection delay={100}>
        <div className="contact-card">
          {/* Email */}
          <button className="contact-item" onClick={copyEmail}>
            <div className="contact-icon" style={{ background: "rgba(0,229,200,.1)" }}>✉</div>
            <div className="contact-info">
              <span className="contact-label">Email</span>
              <span className="contact-value">thombare.sayali16@gmail.com</span>
            </div>
            <span className="contact-action">{copied ? "Copied!" : "Copy"}</span>
          </button>

          {/* Phone */}
          <a className="contact-item" href="tel:+918424823487">
            <div className="contact-icon" style={{ background: "rgba(157,79,255,.1)" }}>📱</div>
            <div className="contact-info">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+91 8424823487</span>
            </div>
            <span className="contact-action">Call</span>
          </a>

          {/* LinkedIn */}
          <a
            className="contact-item"
            href="https://linkedin.com/in/sayali-thombare-j3002/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon" style={{ background: "rgba(79,195,247,.1)" }}>🔗</div>
            <div className="contact-info">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">sayali-thombare-j3002</span>
            </div>
            <span className="contact-action">Visit</span>
          </a>

          {/* GitHub */}
          <a
            className="contact-item"
            href="https://github.com/Sayali-JT0003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon" style={{ background: "rgba(128,255,219,.1)" }}>⌨</div>
            <div className="contact-info">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">Sayali-JT0003</span>
            </div>
            <span className="contact-action">Visit</span>
          </a>

          {/* Location */}
          <div className="contact-item no-hover">
            <div className="contact-icon" style={{ background: "rgba(201,184,255,.1)" }}>📍</div>
            <div className="contact-info">
              <span className="contact-label">Location</span>
              <span className="contact-value">Navi Mumbai, Maharashtra</span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="footer">
      <span>Designed & Built by <strong>Sayali Thombare</strong></span>
      <span className="footer-year">© Copyright {new Date().getFullYear()}</span>
    </footer>
  );
}

// ── APP ROOT ──────────────────────────────────────────────────────────────────

export default function App() {
  useMouseSparkle();
  return (
    <>
      <StarCanvas />
      <div className="nebula neb1" />
      <div className="nebula neb2" />
      <div className="nebula neb3" />
      <GlitterLayer />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </>
  );
}