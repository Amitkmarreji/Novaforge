import { useState, useEffect, useRef } from "react";

const SERVICES = [
  { icon: "⚡", title: "AI App Building", desc: "Full production apps built with AI — from concept to App Store. Flutter, React Native, web apps.", price: "From £2,000" },
  { icon: "🔄", title: "AI Business Automation", desc: "n8n + Make workflows that save hours daily. Lead gen, email, CRM, data processing — all automated.", price: "From £500" },
  { icon: "💬", title: "Custom AI Chatbots", desc: "Intelligent chatbots trained on your business. Embedded on your website, handling customers 24/7.", price: "From £800" },
  { icon: "🧠", title: "AI Strategy Consulting", desc: "I'll audit your business and show you exactly where AI saves time and money. Actionable, not theoretical.", price: "From £300" },
];

const SKILLS = [
  { name: "AI-Directed Development", pct: 95 },
  { name: "Prompt Engineering", pct: 92 },
  { name: "Product Design & UX", pct: 88 },
  { name: "AI Tool Orchestration", pct: 90 },
  { name: "Business Automation", pct: 85 },
  { name: "Mobile App Development", pct: 82 },
];

const TOOLS = ["Claude Code", "Cursor AI", "Flutter", "Supabase", "n8n", "Make.com", "React", "Next.js", "Figma", "CapCut AI", "Google AI Studio", "Zapier"];

const NOVA_FEATURES = [
  { label: "8+ Designed Screens", detail: "PathSelect, Hub, JourneyMap, WeeklyProtocol, DailyProtocol, BossBattle, NovaAge, SkillTree" },
  { label: "Gamification Engine", detail: "XP system, streaks, boss battles, skill trees, variable reward chests, identity-based commitment" },
  { label: "AI Coaching System", detail: "Personalised training protocols, readiness scoring, adaptive difficulty, protein cycling" },
  { label: "NOVA Age Algorithm", detail: "8-factor biological age calculation: sleep, exercise, nutrition, body comp, stress, fasting, supplements, lifestyle" },
  { label: "Dark Luxury Design System", detail: "Semantic colour coding, glass morphism, 3-layer glows, staggered animations, ambient particle effects" },
  { label: "Full Backend", detail: "Supabase with real-time sync, authentication, cloud functions, and cross-tab state management" },
];

function NovaForge() {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState({});
  const [activeFeature, setActiveFeature] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", msg: "" });
  const [sparkles, setSparkles] = useState([]);
  const sectionRefs = useRef({});

  useEffect(() => {
    const s = [];
    for (let i = 0; i < 40; i++) {
      s.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        dur: Math.random() * 4 + 3,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }
    setSparkles(s);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setVisible(p => ({ ...p, [e.target.id]: true }));
      });
    }, { threshold: 0.15 });
    Object.values(sectionRefs.current).forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveFeature(p => (p + 1) % NOVA_FEATURES.length), 4000);
    return () => clearInterval(t);
  }, []);

  const ref = (id) => (el) => { if (el) { el.id = id; sectionRefs.current[id] = el; } };
  const isVis = (id) => visible[id];

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif", background: "#060608", color: "rgba(255,255,255,0.87)", minHeight: "100vh", overflow: "hidden", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,140,66,0.3); border-radius: 2px; }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes glow { 0%,100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes sparkle { 0% { opacity: 0; transform: scale(0); } 50% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes forgeGlow { 0%,100% { text-shadow: 0 0 20px rgba(255,140,66,0.3); } 50% { text-shadow: 0 0 40px rgba(255,140,66,0.6), 0 0 80px rgba(255,140,66,0.2); } }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(255,140,66,0.4); } 70% { box-shadow: 0 0 0 12px rgba(255,140,66,0); } }
        @keyframes barFill { from { width: 0%; } }
        .nav-link { color: rgba(255,255,255,0.45); text-decoration: none; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; transition: color 0.3s; cursor: pointer; }
        .nav-link:hover { color: #FF8C42; }
        .service-card { transition: all 0.4s ease; cursor: default; }
        .service-card:hover { transform: translateY(-4px); border-color: rgba(255,140,66,0.3) !important; background: rgba(255,140,66,0.04) !important; }
        .tool-tag { transition: all 0.3s; }
        .tool-tag:hover { background: rgba(255,140,66,0.15) !important; color: #FFB347 !important; transform: scale(1.05); }
        .cta-btn { transition: all 0.3s ease; cursor: pointer; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(255,140,66,0.4) !important; }
        .feat-dot { transition: all 0.4s; cursor: pointer; }
      `}</style>

      {/* Sparkle particles */}
      {sparkles.map((s, i) => (
        <div key={i} style={{
          position: "fixed", left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size,
          borderRadius: "50%", background: "#FF8C42", opacity: s.opacity, pointerEvents: "none",
          animation: `sparkle ${s.dur}s ease-in-out ${s.delay}s infinite`, zIndex: 0,
        }} />
      ))}

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(6,6,8,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.04)",
        padding: "14px 24px", display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div onClick={() => scrollTo("hero")} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #FF8C42, #FF6B1A)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15,
            boxShadow: "0 0 20px rgba(255,140,66,0.3)",
          }}>🔥</div>
          <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: -0.5 }}>Nova<span style={{ color: "#FF8C42" }}>Forge</span></span>
        </div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          {[["Work", "nova"], ["Services", "services"], ["About", "about"], ["Contact", "contact"]].map(([l, id]) => (
            <span key={id} className="nav-link" onClick={() => scrollTo(id)} style={{ display: "none" }}>{l}</span>
          ))}
          <button onClick={() => scrollTo("contact")} className="cta-btn" style={{
            background: "linear-gradient(135deg, #FF8C42, #FF6B1A)", border: "none", color: "#fff",
            padding: "8px 18px", borderRadius: 8, fontSize: 12, fontWeight: 700, letterSpacing: 0.5,
            boxShadow: "0 4px 20px rgba(255,140,66,0.3)",
          }}>Hire Me</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" style={{
        minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "100px 24px 60px", position: "relative",
      }}>
        <div style={{
          position: "absolute", top: "20%", right: "-10%", width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,140,66,0.08) 0%, transparent 70%)", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", left: "-5%", width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,26,0.05) 0%, transparent 70%)", pointerEvents: "none",
        }} />

        <div style={{ fontSize: 12, color: "#FF8C42", textTransform: "uppercase", letterSpacing: 4, fontWeight: 700, marginBottom: 20, animation: "slideUp 0.8s ease" }}>
          AI Product Builder
        </div>
        <h1 style={{
          fontSize: "clamp(36px, 8vw, 64px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: -2,
          marginBottom: 24, animation: "slideUp 0.8s ease 0.1s both",
        }}>
          I forge products<br />
          <span style={{ color: "#FF8C42", animation: "forgeGlow 3s ease infinite" }}>with AI.</span>
        </h1>
        <p style={{
          fontSize: 17, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 520,
          marginBottom: 36, animation: "slideUp 0.8s ease 0.2s both",
        }}>
          Full production apps, business automations, and AI systems — built by directing artificial intelligence, not writing code line by line. The future of software is here.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", animation: "slideUp 0.8s ease 0.3s both" }}>
          <button onClick={() => scrollTo("nova")} className="cta-btn" style={{
            background: "linear-gradient(135deg, #FF8C42, #FF6B1A)", border: "none", color: "#fff",
            padding: "14px 32px", borderRadius: 12, fontSize: 15, fontWeight: 700,
            boxShadow: "0 4px 30px rgba(255,140,66,0.3)", animation: "pulse 2s infinite",
          }}>See My Work →</button>
          <button onClick={() => scrollTo("services")} style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.7)", padding: "14px 32px", borderRadius: 12, fontSize: 15,
            fontWeight: 600, cursor: "pointer", transition: "all 0.3s",
          }}>Services & Pricing</button>
        </div>

        <div style={{
          display: "flex", gap: 32, marginTop: 60, animation: "slideUp 0.8s ease 0.4s both", flexWrap: "wrap",
        }}>
          {[
            { val: "1+", label: "Year with AI Tools" },
            { val: "8+", label: "Production Screens" },
            { val: "10+", label: "AI Tools Mastered" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#FF8C42", fontFamily: "'JetBrains Mono', monospace" }}>{s.val}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: 1, textTransform: "uppercase", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* NOVA PROJECT */}
      <section ref={ref("nova")} style={{
        padding: "80px 24px", position: "relative",
        background: "linear-gradient(180deg, transparent 0%, rgba(255,140,66,0.03) 50%, transparent 100%)",
      }}>
        <div style={{
          opacity: isVis("nova") ? 1 : 0, transform: isVis("nova") ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{ fontSize: 12, color: "#FF8C42", textTransform: "uppercase", letterSpacing: 4, fontWeight: 700, marginBottom: 12 }}>Featured Project</div>
          <h2 style={{ fontSize: "clamp(28px, 6vw, 44px)", fontWeight: 900, letterSpacing: -1, marginBottom: 12 }}>
            NOVA <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400 }}>— Fitness RPG</span>
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", marginBottom: 32, maxWidth: 600, lineHeight: 1.7 }}>
            A gamified fitness app with AI coaching, biological age tracking, and RPG progression — built entirely by directing Claude Code. Dark-themed, animation-rich, production-grade Flutter application.
          </p>

          {/* Feature Carousel */}
          <div style={{
            background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20, padding: 28, marginBottom: 24,
          }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {NOVA_FEATURES.map((f, i) => (
                <div key={i} onClick={() => setActiveFeature(i)} className="feat-dot" style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: i === activeFeature ? "#FF8C42" : "rgba(255,255,255,0.1)",
                  boxShadow: i === activeFeature ? "0 0 12px rgba(255,140,66,0.5)" : "none",
                }} />
              ))}
            </div>
            <div style={{ minHeight: 70 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#FF8C42", marginBottom: 8, transition: "all 0.4s" }}>
                {NOVA_FEATURES[activeFeature].label}
              </div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, transition: "all 0.4s" }}>
                {NOVA_FEATURES[activeFeature].detail}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["Flutter/Dart", "Claude Code", "Supabase", "Custom Animations", "AI Coaching", "Provider State"].map((t, i) => (
              <span key={i} style={{
                padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600,
                background: "rgba(255,140,66,0.08)", color: "#FFB347", border: "1px solid rgba(255,140,66,0.15)",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section ref={ref("about")} style={{ padding: "80px 24px" }}>
        <div style={{
          opacity: isVis("about") ? 1 : 0, transform: isVis("about") ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{ fontSize: 12, color: "#FF8C42", textTransform: "uppercase", letterSpacing: 4, fontWeight: 700, marginBottom: 12 }}>Capabilities</div>
          <h2 style={{ fontSize: "clamp(28px, 6vw, 40px)", fontWeight: 900, letterSpacing: -1, marginBottom: 32 }}>
            What I Bring <span style={{ color: "rgba(255,255,255,0.3)" }}>to the Table</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
            {SKILLS.map((s, i) => (
              <div key={s.name}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{s.name}</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: "#FF8C42", fontFamily: "'JetBrains Mono', monospace" }}>{s.pct}%</span>
                </div>
                <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
                  <div style={{
                    height: "100%", borderRadius: 3,
                    background: `linear-gradient(90deg, #FF8C42, #FFB347)`,
                    width: isVis("about") ? `${s.pct}%` : "0%",
                    transition: `width 1.2s ease ${i * 0.15}s`,
                  }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: 3, fontWeight: 700, marginBottom: 14 }}>Tools I Orchestrate</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {TOOLS.map((t, i) => (
              <span key={i} className="tool-tag" style={{
                padding: "8px 16px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "default",
                background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section ref={ref("process")} style={{
        padding: "80px 24px",
        background: "linear-gradient(180deg, transparent, rgba(255,140,66,0.02), transparent)",
      }}>
        <div style={{
          opacity: isVis("process") ? 1 : 0, transform: isVis("process") ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{ fontSize: 12, color: "#FF8C42", textTransform: "uppercase", letterSpacing: 4, fontWeight: 700, marginBottom: 12 }}>The Forge Process</div>
          <h2 style={{ fontSize: "clamp(28px, 6vw, 40px)", fontWeight: 900, letterSpacing: -1, marginBottom: 36 }}>
            How I Build <span style={{ color: "rgba(255,255,255,0.3)" }}>With AI</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { step: "01", title: "Understand", desc: "Deep dive into what you need. The problem, the users, the goals. No AI yet — just listening.", color: "#FF8C42" },
              { step: "02", title: "Architect", desc: "Design the solution. Screen mockups, user flows, data models, technical decisions. The blueprint before the build.", color: "#FFB347" },
              { step: "03", title: "Forge", desc: "Direct AI to build the product. Claude Code, Cursor, n8n — I orchestrate the right AI for each task. Rapid iteration.", color: "#FF6B1A" },
              { step: "04", title: "Polish", desc: "Testing, refinement, animation tuning, edge cases. The difference between a demo and a product.", color: "#FF8C42" },
              { step: "05", title: "Ship", desc: "Deployed, live, working. Not a prototype — a real product your users can touch.", color: "#FFB347" },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 20, padding: "24px 0", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                <div style={{
                  fontSize: 28, fontWeight: 900, color: s.color, fontFamily: "'JetBrains Mono', monospace",
                  opacity: 0.6, flexShrink: 0, width: 50,
                }}>{s.step}</div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "rgba(255,255,255,0.9)", marginBottom: 6 }}>{s.title}</div>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section ref={ref("services")} style={{ padding: "80px 24px" }}>
        <div style={{
          opacity: isVis("services") ? 1 : 0, transform: isVis("services") ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{ fontSize: 12, color: "#FF8C42", textTransform: "uppercase", letterSpacing: 4, fontWeight: 700, marginBottom: 12 }}>Services</div>
          <h2 style={{ fontSize: "clamp(28px, 6vw, 40px)", fontWeight: 900, letterSpacing: -1, marginBottom: 36 }}>
            What I Can Build <span style={{ color: "rgba(255,255,255,0.3)" }}>For You</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card" style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 18, padding: 24,
              }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{s.icon}</div>
                <div style={{ fontSize: 17, fontWeight: 800, color: "rgba(255,255,255,0.9)", marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#FF8C42", fontFamily: "'JetBrains Mono', monospace" }}>{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH STATEMENT */}
      <section ref={ref("approach")} style={{
        padding: "80px 24px",
        background: "linear-gradient(180deg, transparent, rgba(255,140,66,0.04), transparent)",
      }}>
        <div style={{
          opacity: isVis("approach") ? 1 : 0, transform: isVis("approach") ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease", maxWidth: 600,
        }}>
          <div style={{
            fontSize: "clamp(24px, 5vw, 36px)", fontWeight: 800, lineHeight: 1.4, marginBottom: 20,
          }}>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>"</span>I don't memorise syntax.<br />
            I <span style={{ color: "#FF8C42" }}>orchestrate AI</span> to build<br />
            what you need.<span style={{ color: "rgba(255,255,255,0.3)" }}>"</span>
          </div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, maxWidth: 500 }}>
            Traditional developers write code. I direct AI systems to build production software — faster, with more creative UX, and at a fraction of the cost. The output is what matters: working products that solve real problems.
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section ref={ref("contact")} style={{ padding: "80px 24px 100px" }}>
        <div style={{
          opacity: isVis("contact") ? 1 : 0, transform: isVis("contact") ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{ fontSize: 12, color: "#FF8C42", textTransform: "uppercase", letterSpacing: 4, fontWeight: 700, marginBottom: 12 }}>Get In Touch</div>
          <h2 style={{ fontSize: "clamp(28px, 6vw, 40px)", fontWeight: 900, letterSpacing: -1, marginBottom: 12 }}>
            Let's Build <span style={{ color: "#FF8C42" }}>Something</span>
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", marginBottom: 36, lineHeight: 1.7 }}>
            Have a project in mind? Need AI automation for your business? Let's talk.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 480 }}>
            {[
              { key: "name", placeholder: "Your Name", type: "text" },
              { key: "email", placeholder: "your@email.com", type: "email" },
            ].map(f => (
              <input key={f.key} type={f.type} placeholder={f.placeholder}
                value={contactForm[f.key]}
                onChange={e => setContactForm(p => ({ ...p, [f.key]: e.target.value }))}
                style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12, padding: "14px 18px", fontSize: 14, color: "rgba(255,255,255,0.8)",
                  outline: "none", fontFamily: "inherit", transition: "border-color 0.3s",
                }}
                onFocus={e => e.target.style.borderColor = "rgba(255,140,66,0.4)"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
              />
            ))}
            <textarea placeholder="Tell me about your project..."
              value={contactForm.msg}
              onChange={e => setContactForm(p => ({ ...p, msg: e.target.value }))}
              rows={4}
              style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12, padding: "14px 18px", fontSize: 14, color: "rgba(255,255,255,0.8)",
                outline: "none", fontFamily: "inherit", resize: "vertical", transition: "border-color 0.3s",
              }}
              onFocus={e => e.target.style.borderColor = "rgba(255,140,66,0.4)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
            />
            <button className="cta-btn" style={{
              background: "linear-gradient(135deg, #FF8C42, #FF6B1A)", border: "none", color: "#fff",
              padding: "16px 32px", borderRadius: 12, fontSize: 16, fontWeight: 700,
              boxShadow: "0 4px 30px rgba(255,140,66,0.3)", width: "fit-content",
            }}>Send Message 🔥</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px 24px", borderTop: "1px solid rgba(255,255,255,0.04)",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontWeight: 800, fontSize: 15 }}>Nova<span style={{ color: "#FF8C42" }}>Forge</span></span>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>© 2026</span>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          {["GitHub", "YouTube", "LinkedIn", "Upwork"].map(l => (
            <span key={l} style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", cursor: "pointer", transition: "color 0.3s" }}
              onMouseEnter={e => e.target.style.color = "#FF8C42"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.3)"}
            >{l}</span>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default NovaForge;
