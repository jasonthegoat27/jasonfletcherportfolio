
import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Personal Growth", href: "#personal-growth" },
  { label: "Professional Development", href: "#professional-development" },
  { label: "CTE Work Samples", href: "#cte-work" },
  { label: "Reflections/Writing", href: "#reflections" },
  { label: "LinkedIn", href: "#linkedin" },
  { label: "Recognition", href: "#recognition" },
];

const imagePaths = {
  headshot: "/jasonfletcherportfolio/images/headshot.png",
  linkedinTop: "/jasonfletcherportfolio/images/linkedin-profile-top.png",
  linkedinAbout: "/jasonfletcherportfolio/images/linkedin-about.png",
  linkedinExperience: "/jasonfletcherportfolio/images/linkedin-experience.png",
  linkedinSkills: "/jasonfletcherportfolio/images/linkedin-skills.png",
  scrp1: "/jasonfletcherportfolio/images/scrp-standards-1.png",
  scrp2: "/jasonfletcherportfolio/images/scrp-standards-2.png",
equinox: "/jasonfletcherportfolio/images/equinox-work-sample.png",
inklings: "/jasonfletcherportfolio/images/inklings-work-sample.png",
};

const scrpStandards = [
  "SCRP 1", "SCRP 2", "SCRP 3", "SCRP 4", "SCRP 5", "SCRP 7", "SCRP 8", "SCRP 9", "SCRP 10", "SCRP 11", "SCRP 12"
];

const linkedInHighlights = [
  "Aspiring Engineer, Student of Amador Valley High School, Track Athlete",
  "Summer Intern at OPTERRA Energy Services",
  "Amador Valley High School, 2022–2026",
  "Volunteer experience with FIRST and YMCA Santa Cruz",
  "Skills: Revit, Windows 10, Microsoft Excel, Canva, Autodesk Fusion 360",
];

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function Badge({ children, className = "" }) {
  return <span className={`badge ${className}`}>{children}</span>;
}

function ButtonLink({ href, children, variant = "dark" }) {
  return <a href={href} className={`button ${variant}`}>{children}</a>;
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </motion.div>
        <div className="section-content">{children}</div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="stat">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function PortfolioImage({ src, alt, caption, tall = false }) {
  return (
    <figure className="portfolio-image">
      <img src={src} alt={alt} className={tall ? "tall" : ""} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="nav-wrap">
          <a href="#home" className="brand">
            <div className="brand-mark">JF</div>
            <div>
              <div className="brand-title">Jason Fletcher</div>
              <div className="brand-subtitle">Career Portfolio</div>
            </div>
          </a>
          <nav>
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="blob blob-one" />
          <div className="blob blob-two" />
          <div className="container hero-grid">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <Badge>Amador Valley Student • OPTERRA Intern • Track Athlete</Badge>
              <h1>Professional portfolio for engineering, business, leadership, and career growth.</h1>
              <p className="hero-text">I am Jason Fletcher, an aspiring engineer and business-minded student from Pleasanton, California. This portfolio highlights my professional development, CTE projects, LinkedIn profile, leadership growth, and work experience.</p>
              <div className="hero-actions">
                <ButtonLink href="#cte-work">View Work Samples</ButtonLink>
                <ButtonLink href="#linkedin" variant="light">LinkedIn Section</ButtonLink>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
              <Card className="profile-card">
                <div className="profile-top">
                  <img src={imagePaths.headshot} alt="Jason Fletcher professional headshot" className="headshot" />
                  <h3>Jason Fletcher</h3>
                  <p>Aspiring engineer • OPTERRA intern • DECA member</p>
                </div>
                <div className="stats-grid">
                  <Stat value="2026" label="Graduation" />
                  <Stat value="OPTERRA" label="Internship" />
                  <Stat value="4th" label="DECA SCDC" />
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <Section id="personal-growth" eyebrow="Category 1" title="Personal Growth">
          <div className="grid three">
            <Card className="span-two">
              <h3>About Me / Letter of Introduction</h3>
              <p>My name is Jason Fletcher. I am a hardworking and outgoing student whose interests span business, athletics, and engineering. I am known for strategic thinking, innovative ideas, and a strong drive to lead my team to success in regional competitions.</p>
              <p>Engineering is one of my biggest passions. I enjoy hands-on problem solving, from tinkering with gadgets to building projects and learning how technology can solve real-world problems. My goal is to pursue a degree in engineering and continue developing as a leader, teammate, and future professional.</p>
            </Card>
            <Card className="dark-card">
              <div className="icon">👥</div>
              <h3>DECA Leadership Style</h3>
              <p>My strongest leadership style is Energizer, shown through optimism, motivation, teamwork, and a strong drive to help others succeed.</p>
              <div className="mini-grid">
                <div><b>8.7</b><span>Energizer</span></div>
                <div><b>7.3</b><span>Caretaker</span></div>
              </div>
            </Card>
          </div>

          <div className="grid two">
            <Card>
              <div className="icon blue">🎯</div>
              <h3>SMART Goals</h3>
              <p><b>Short-term personal:</b> Build study habits to achieve a 3.6 GPA.</p>
              <p><b>Long-term personal:</b> Graduate college with an engineering degree.</p>
              <p><b>Short-term career:</b> Create strong professional materials and gain more work experience.</p>
              <p><b>Long-term career:</b> Build a high-paying career in a large city with flexible hours and room for growth.</p>
            </Card>
            <Card>
              <h3>Career Ready Practice Standards</h3>
              <p>These standards connect my portfolio to professional workplace expectations.</p>
              <div className="badge-row">
                {scrpStandards.map((standard) => <Badge key={standard}>{standard}</Badge>)}
              </div>
            </Card>
          </div>

          <div className="grid two image-grid">
            <PortfolioImage src={imagePaths.scrp1} alt="Standards for Career Ready Practice page one" caption="Standards for Career Ready Practice, page 1: standards 1–5." tall />
            <PortfolioImage src={imagePaths.scrp2} alt="Standards for Career Ready Practice page two" caption="Standards for Career Ready Practice, page 2: standards 6–12." tall />
          </div>
        </Section>

        <Section id="professional-development" eyebrow="Category 2" title="Professional Development">
          <div className="grid three">
            <Card>
              <div className="icon blue">📄</div>
              <h3>Resume & Career Identity</h3>
              <p>My professional materials highlight education, experience, leadership, skills, and career direction.</p>
              <ul>
                <li>Amador Valley High School, 2022–2026</li>
                <li>OPTERRA Energy Services Summer Intern</li>
                <li>DECA, track, engineering, and business interests</li>
              </ul>
            </Card>
            <Card>
              <div className="icon blue">💼</div>
              <h3>OPTERRA Internship</h3>
              <p>During my internship, I studied green energy, environmental regulations, geothermal implementation, and solar panel solutions.</p>
              <div className="note">Capstone focus: solar panels in under-used spaces to reduce carbon emissions and lower electrical bills by 30–50%.</div>
            </Card>
            <Card>
              <div className="icon blue">🛠️</div>
              <h3>Skills</h3>
              <div className="badge-row">
                {["Revit", "Autodesk Fusion 360", "Canva", "Microsoft Excel", "Windows 10"].map((skill) => <Badge key={skill}>{skill}</Badge>)}
              </div>
            </Card>
          </div>

          <Card className="recommendation">
            <h3>Letter of Recommendation</h3>
            <p>Katy Moulthrop, Senior Sales Advisor at OPTERRA Energy Services, recommended me as an intellectually curious, driven, bright, inquisitive, and innovative intern. She highlighted my collaboration, leadership, green energy learning, and capstone project on solar panels in under-used spaces.</p>
            <blockquote>“I am confident that Jason Fletcher will bring the same level of innovation, rigor, and leadership to any workplace environment.”</blockquote>
          </Card>
        </Section>

        <Section id="cte-work" eyebrow="Category 3" title="CTE Work Samples">
          <div className="grid two">
            <Card className="work-card">
              <div className="work-header">
                <Badge>Work Sample #1</Badge>
                <h3>DECA Franchise Business Plan</h3>
                <p>Equinox Fitness expansion plan for Bangalore, India.</p>
              </div>
              <PortfolioImage src={imagePaths.equinox} alt="Equinox franchise business plan screenshot" />
              <p>I created and pitched a 20-page franchising plan to an industry professional. The project focused on opening an exclusive high-end gym in India based on market growth and Equinox’s premium brand.</p>
              <div className="note"><b>SCRP Standards:</b> SCRP 2, SCRP 4, SCRP 5, SCRP 9, SCRP 10, SCRP 11, SCRP 12</div>
            </Card>

            <Card className="work-card">
              <div className="work-header">
                <Badge>Work Sample #2</Badge>
                <h3>Business Operations Research Plan</h3>
                <p>Research and improvement proposal for Inklings Coffee Shop.</p>
              </div>
              <PortfolioImage src={imagePaths.inklings} alt="Inklings business operations research plan screenshot" />
              <p>This project researched hiring policy problems at Inklings. My group gathered information from a company liaison, built charts to show the issue, and created a practical solution.</p>
              <div className="note"><b>SCRP Standards:</b> SCRP 2, SCRP 4, SCRP 5, SCRP 9, SCRP 11</div>
            </Card>
          </div>
        </Section>

        <Section id="reflections" eyebrow="Category 4" title="Reflections / Writing Samples">
          <div className="grid two">
            <Card>
              <h3>Leadership Development Reflection</h3>
              <p>Through DECA, track, and my internship experience, I learned that leadership is more than having ideas. It requires planning, communication, adaptability, and making sure every team member feels supported. My Energizer leadership style helps me bring energy and optimism into team settings.</p>
              <div className="note"><b>SCRP Connection:</b> SCRP 2, SCRP 8, SCRP 9, and SCRP 10.</div>
            </Card>
            <Card>
              <h3>Self-Assessment Reflection</h3>
              <p>My self-assessment showed that I am strongest when I can motivate others, create momentum, and bring enthusiasm to a group. It also showed me that I can continue improving by slowing down, listening carefully, and balancing energy with organization.</p>
              <p>These reflections help me understand how my personality, goals, and leadership style connect to my future career plans in engineering, business, and entrepreneurship.</p>
            </Card>
          </div>
        </Section>

        <Section id="linkedin" eyebrow="Required Section" title="LinkedIn Profile">
          <Card className="linkedin-card">
            <div className="linkedin-left">
              <div className="linkedin-logo">in</div>
              <h3>Designed LinkedIn Section</h3>
              <p>This section integrates screenshots and key information from my LinkedIn profile.</p>
              <a className="button white" href="https://www.linkedin.com/in/jasonfletcher27" target="_blank" rel="noreferrer">Visit LinkedIn ↗</a>
              <div className="linkedin-url">
                <b>LinkedIn URL</b>
                <span>www.linkedin.com/in/jasonfletcher27</span>
              </div>
            </div>
            <div className="linkedin-right">
              <PortfolioImage src={imagePaths.linkedinTop} alt="LinkedIn profile top section screenshot" caption="Profile header, headline, location, school, and OPTERRA connection." />
              <div className="highlight-grid">
                {linkedInHighlights.map((item) => <div key={item}>{item}</div>)}
              </div>
            </div>
          </Card>

          <div className="grid three image-grid">
            <PortfolioImage src={imagePaths.linkedinAbout} alt="LinkedIn about and top skills screenshot" caption="About section and top skills." />
            <PortfolioImage src={imagePaths.linkedinExperience} alt="LinkedIn experience education and volunteering screenshot" caption="Experience, education, and volunteering." />
            <PortfolioImage src={imagePaths.linkedinSkills} alt="LinkedIn skills screenshot" caption="Skills section." />
          </div>
        </Section>

        <Section id="recognition" eyebrow="Optional Category" title="Recognition">
          <div className="grid three">
            <Card><div className="icon gold">🏆</div><h3>DECA Achievement</h3><p>Placed 4th overall at DECA SCDC in Automotive Marketing Services.</p></Card>
            <Card><div className="icon blue">⚡</div><h3>OPTERRA Internship</h3><p>Recognized by my supervisor for curiosity, leadership, collaboration, and innovation.</p></Card>
            <Card><div className="icon green">🤝</div><h3>Community Involvement</h3><p>Volunteer experience with FIRST and YMCA Santa Cruz shows service, responsibility, and teamwork.</p></Card>
          </div>
        </Section>
      </main>

      <footer>
        <div className="container footer-inner">
          <p>© 2026 Jason Fletcher. Career Portfolio.</p>
          <p>Built around personal growth, professional development, CTE work samples, LinkedIn, and reflection.</p>
        </div>
      </footer>
    </div>
  );
}
