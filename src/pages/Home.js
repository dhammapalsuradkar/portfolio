import React, { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import myPhoto from "../IMG/my_photo.JPG";
import resumePdf from "../IMG/Dhammapal_Suradkar_React_FullStack_Developer_Resume.pdf";
import virtusaLogo from "../IMG/Virtusa-Logo.png";
import credentekLogo from "../IMG/credentek_logo1.jpg";
import commercePunditLogo from "../IMG/commercePunditLogo.png";
import CertificationsGrid from "../comps/CertificationsGrid";
import "../css/certDialogStyle.css";

// Certificate Gallery Images
import img1 from "../IMG/Certificates/meta_cert.jpg";
import img2 from "../IMG/Certificates/oracle_cert.jpg";
import img3 from "../IMG/Certificates/cert14.png";
import img4 from "../IMG/Certificates/microsoft_cert.jpg";
import img5 from "../IMG/Certificates/cert13.jpg";
import img6 from "../IMG/Certificates/cert15.jpg";
import img7 from "../IMG/Certificates/cert3.jpg";
import img8 from "../IMG/Certificates/cert1.png";
import img9 from "../IMG/Certificates/cert7.png";
import { getDevice } from "../comps/helper";

const Home = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAllCertsModal, setShowAllCertsModal] = useState(false);
  const [certTitle, setCertTitle] = useState("All Certificates & Credentials");
  const [readMoreLessBtn, setReadMoreLessBtn] = useState("Read More");
  const [projectReadMoreLess, setProjectReadMoreLess] = useState([
    { id: 0, value: "Read More" },
    { id: 1, value: "Read More" },
    { id: 2, value: "Read More" },
  ]);
  const device = getDevice();
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Dhammapal_Suradkar_React_FullStack_Developer_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const frontEnd = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
    "System Design",
    "Redux Toolkit",
    "Material UI",
    "Bootstrap",
    "AI Integration",
    "API Integration",
    "Performance Optimization",
    "REST APIs",
  ];
  const backEnd = [
    "Java",
    "Python",
    "Spring Boot",
    "Spring Security",
    "Hibernate",
  ];
  const database = ["MySQL", "Oracle"];
  const tools = [
    "Cursor AI",
    "Antigravity",
    "ChatGPT",
    "Gemini",
    "VS Code",
    "Eclipse",
    "STS",
    "Postman",
    "MySQL Workbench",
    "Git / GitHub",
  ];

  const experiences = [
    {
      company: "Commerce Pundit",
      role: "Software Engineer",
      period: "Nov 2024 - Present (1.5+ Years)",
      logo: commercePunditLogo,
      description:
        "Developed 15+ customer-facing modules including PDP, PLP, Cart, Checkout, and Dynamic Landing Pages, serving multiple international storefronts (US, UK, AU, NZ, CA). Engineered reusable component architectures and integrated RESTful APIs to build scalable, high-performance e-commerce applications. Leveraged Next.js features including Server-Side Rendering (SSR), Client-Side Rendering (CSR), Static Site Generation (SSG), and Dynamic Routing, along with efficient state management, lazy loading, and rendering optimizations to enhance application performance, SEO, and user experience.",
    },
    {
      company: "Credentek",
      role: "Software Engineer",
      period: "Feb 2023 - Aug 2024 (1.5+ Years)",
      logo: credentekLogo,
      description:
        "Migrated a legacy Struts application to Next.js and developed interactive workflow visualization using React Flow for enterprise business processes. Utilized React Hooks, TypeScript, SSR, CSR, SSG, Dynamic Routing, state management, and lazy loading to build scalable and responsive applications. collaborated with product, QA, and engineering teams to deliver high-quality enterprise applications.",
    },
    {
      company: "Virtusa",
      role: "Associate Engineer",
      period: "Jan 2022 - Dec 2022 (1 Year)",
      logo: virtusaLogo,
      description:
        "Contributed to the development of the Group Loan Processing System (GLPS), a responsive web application that streamlined loan processing for women in agriculture and small businesses by building intuitive, responsive user interfaces. Optimized application performance, resolved production issues, and participated in Agile sprints, code reviews, and feature delivery.",
    },
  ];

  const projects = [
    {
      name: "Exam Portal Application",
      tech: "React JS, Redux Toolkit, Material UI, Java, Spring Boot, Spring Security, MySQL",
      status: "Completed",
      link: "https://github.com/DhammapalSuradkar-123",
    },
    {
      name: "News Web Application",
      tech: "HTML5, CSS3, JavaScript, Bootstrap4, PHP, MySQL",
      status: "Completed",
      link: "https://github.com/DhammapalSuradkar-123/Dhammapal_Suradkar_News_Project.github.io",
    },
    {
      name: "ATM Banking Simulator in Python",
      tech: "Python, Oracle Database, SQL",
      status: "Completed",
      link: "https://github.com/DhammapalSuradkar-123/ATM-Application-In-Python",
    },
  ];

  const allCerts = [
    { img: img1, title: "Meta Front-End Developer Professional" },
    { img: img2, title: "Oracle Certified Associate, Java SE 8 Programmer" },
    { img: img3, title: "Python Data Science Certification" },
    { img: img4, title: "Microsoft Virtual Internship Certification" },
    { img: img5, title: "TATA Imagination challenge Certification" },
    { img: img6, title: "HTML5 & CSS3 Certification" },
    { img: img7, title: "Python Programming Certification" },
    { img: img8, title: "C/C++ Quiz Certification" },
    { img: img9, title: "Compiler Quiz Certification" },
  ];

  const multipleReadMoreLessHandle = (itemId) => {
    setProjectReadMoreLess((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? {
              ...item,
              value: item.value === "Read More" ? "Read Less" : "Read More",
            }
          : item,
      ),
    );
  };

  const getReadMoreLessProjectStatus = (idx) =>
    projectReadMoreLess.find((item) => item?.id === idx)?.value;

  return (
    <div>
      {/* 1. Hero Section — full-width gradient background */}
      <section className="hero-section-v2" id="home">
        {/* Dot grid top-center accent */}
        <svg
          className="hero-dot-grid-center"
          width="160"
          height="120"
          viewBox="0 0 160 120"
          fill="none"
        >
          <pattern
            id="dots-center"
            x="0"
            y="0"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="2.5" fill="#93c5fd" opacity="0.55" />
          </pattern>
          <rect width="160" height="120" fill="url(#dots-center)" />
        </svg>

        <div className="hero-inner-container">
          <div className="hero-grid-v2">
            {/* ── Left Column ── */}
            <div className="hero-content-v2">
              {/* Hello pill badge */}
              <div className="hero-greeting-pill">Hello 👋</div>

              {/* Main title */}
              <h1 className="hero-title-v2">
                I'm Dhammapal <br />
                <span className="name-blue-v2">Suradkar</span>
              </h1>

              {/* Role row: </> | Software Engineer + blue underline */}
              <div className="hero-role-row">
                <span className="hero-code-icon">&#60;/&#62;</span>
                <span className="hero-role-divider"></span>
                <span className="hero-role-label">Software Engineer</span>
              </div>
              <div className="hero-role-underline"></div>

              {/* Description */}
              <p className="hero-description-v2">
                A{" "}
                <strong>
                  software engineer with 4.5+ years of Full Stack development
                  experience
                </strong>{" "}
                in designing, developing, and maintaining scalable, responsive,
                and high-performance web applications.
              </p>

              {/* CTA Buttons */}
              <div className="hero-actions-v2">
                <button
                  className="btn-primary-v2"
                  onClick={handleDownloadResume}
                >
                  <DownloadIcon style={{ fontSize: 20 }} />
                  <span>View Resume</span>
                </button>
                <a
                  href="https://github.com/DhammapalSuradkar-123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn"
                  aria-label="GitHub"
                >
                  <GitHubIcon style={{ fontSize: 20 }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dhammapalsuradkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-social-btn"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon style={{ fontSize: 20 }} />
                </a>
                <a
                  href="mailto:dsuradkar111@gmail.com"
                  className="hero-social-btn"
                  aria-label="Email"
                >
                  <EmailIcon style={{ fontSize: 20 }} />
                </a>
              </div>

              {/* Inline Stats Row */}
              <div className="hero-stats-row">
                <div className="hero-stat-item">
                  <div className="hero-stat-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="1.8"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                    </svg>
                  </div>
                  <div className="hero-stat-number">4.5+</div>
                  <div className="hero-stat-label">Years Experience</div>
                </div>
                <div className="hero-stat-divider"></div>
                <div className="hero-stat-item">
                  <div className="hero-stat-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="1.8"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="hero-stat-number">3+</div>
                  <div className="hero-stat-label">Enterprise Projects</div>
                </div>
                <div className="hero-stat-divider"></div>
                <div className="hero-stat-item">
                  <div className="hero-stat-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="1.8"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div className="hero-stat-number">10+</div>
                  <div className="hero-stat-label">Technologies</div>
                </div>
                <div className="hero-stat-divider"></div>
                <div className="hero-stat-item">
                  <div className="hero-stat-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="1.8"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <div className="hero-stat-number">100%</div>
                  <div className="hero-stat-label">Productivity</div>
                </div>
              </div>
            </div>

            {/* ── Right Column: Photo ── */}
            <div className="hero-visual-v2">
              {/* Blue decorative block behind photo */}
              <div className="hero-photo-deco-block"></div>

              {/* Dot grid top-center area */}
              <svg
                className="hero-visual-dots"
                width="120"
                height="100"
                viewBox="0 0 120 100"
                fill="none"
              >
                <pattern
                  id="dots-visual"
                  x="0"
                  y="0"
                  width="14"
                  height="14"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="3" cy="3" r="2" fill="#a5b4fc" opacity="0.5" />
                </pattern>
                <rect width="120" height="100" fill="url(#dots-visual)" />
              </svg>

              <div className="photo-card-v2">
                <img src={myPhoto} alt="Dhammapal Suradkar" />
                {/* Available badge */}
                <div className="available-badge">
                  <span className="available-dot"></span>
                  <div>
                    <div className="available-for">Available for</div>
                    <div className="available-text">Opportunities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="main-container">
        {/* 4. About Me Section */}
        <section className="section-wrapper" id="about">
          <div className="section-eyebrow">ABOUT ME</div>
          <h2 className="section-title" style={{ marginBottom: "20px" }}>
            Full Stack Software Engineer
          </h2>
          <div className="info-card">
            <p
              className={`text-read-more-less ${readMoreLessBtn === "Read Less" && device === "mobile" ? "pMobileCss" : ""}`}
              style={{
                fontSize: "16px",
                color: "#334155",
                lineHeight: "1.7",
                marginBottom: "20px",
                textAlign: "justify",
              }}
            >
              <strong>
                Software Engineer with 4.5+ years of Full Stack development
                experience in designing, developing, and maintaining scalable,
                responsive, and high-performance web applications.
              </strong>{" "}
              Strong expertise in React.js, Next.js, TypeScript, JavaScript,
              Redux, HTML5, CSS3, and REST API integration, with a focus on
              building reusable components, responsive user interfaces, and
              optimizing application performance. Experienced working in
              Agile/Scrum environments, collaborating with cross-functional
              teams, participating in code reviews, debugging, and delivering
              high-quality, maintainable software.
            </p>
            {device === "mobile" && (
              <button
                className="mobileBtnText"
                onClick={() => {
                  if (readMoreLessBtn === "Read More")
                    setReadMoreLessBtn("Read Less");
                  else setReadMoreLessBtn("Read More");
                }}
              >
                {readMoreLessBtn}
              </button>
            )}

            <div
              style={{
                display: "grid",
                ...(device !== "mobile" && {
                  gridTemplateColumns: "1fr 1fr",
                }),
                gap: "20px",
                borderTop: "1px solid #f1f5f9",
                paddingTop: "20px",
              }}
            >
              <div>
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#2563eb",
                    marginBottom: "6px",
                  }}
                >
                  HIGHER EDUCATION
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#475569",
                    fontWeight: "600",
                  }}
                >
                  Bachelor of Engineering (B.E)
                </p>
                <p style={{ fontSize: "13px", color: "#64748b" }}>
                  (Information Technology)
                </p>
                <p style={{ fontSize: "13px", color: "#64748b" }}>
                  Anuradha Engineering College Chikhli, Maharashtra
                </p>
                <p style={{ fontSize: "13px", color: "#64748b" }}>
                  Sant Gadge Baba Amravati University (Graduated 2021)
                </p>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#2563eb",
                    marginBottom: "6px",
                  }}
                >
                  LOCATION & CONTACT
                </h4>
                <p style={{ fontSize: "14px", color: "#475569" }}>
                  📍 Buldhana, Maharashtra, India
                </p>
                <p style={{ fontSize: "14px", color: "#475569" }}>
                  ✉️ dsuradkar111@gmail.com
                </p>
                <p style={{ fontSize: "14px", color: "#475569" }}>
                  📞 +91 - 9657531971
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Work Experience Section */}
        <section className="section-wrapper" id="experience">
          <div className="section-eyebrow">CAREER PATH</div>
          <h2 className="section-title" style={{ marginBottom: "24px" }}>
            Work Experience
          </h2>
          <div>
            {experiences.map((exp, idx) => (
              <div className="exp-card" key={idx}>
                <img src={exp.logo} alt={exp.company} className="exp-logo" />
                <div className="exp-details">
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-date">📅 {exp.period}</div>
                  <p
                    className={
                      getReadMoreLessProjectStatus(idx) === "Read More" &&
                      device === "mobile"
                        ? `comp`
                        : ""
                    }
                    style={{
                      fontSize: "14px",
                      color: "#475569",
                      lineHeight: "1.6",
                      textAlign: "justify",
                    }}
                  >
                    {exp.description}
                  </p>
                  {device === "mobile" && (
                    <button
                      onClick={() => multipleReadMoreLessHandle(idx)}
                      className="mobileBtnText"
                    >
                      {getReadMoreLessProjectStatus(idx)}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Skills Section */}
        <section className="section-wrapper" id="skills">
          <div className="section-eyebrow">SKILLS & EXPERTISE</div>
          <h2 className="section-title" style={{ marginBottom: "24px" }}>
            Technical Stack
          </h2>
          <div className="info-card">
            <div className="skill-category-title">Frontend Technologies</div>
            <div className="skill-pills-row">
              {frontEnd.map((skill, i) => (
                <span className="skill-pill" key={i}>
                  {skill}
                </span>
              ))}
            </div>

            <div className="skill-category-title">Backend Technologies</div>
            <div className="skill-pills-row">
              {backEnd.map((skill, i) => (
                <span className="skill-pill" key={i}>
                  {skill}
                </span>
              ))}
            </div>

            <div className="skill-category-title">Databases</div>
            <div className="skill-pills-row">
              {database.map((skill, i) => (
                <span className="skill-pill" key={i}>
                  {skill}
                </span>
              ))}
            </div>

            <div className="skill-category-title">Tools & Environment</div>
            <div className="skill-pills-row">
              {tools.map((skill, i) => (
                <span className="skill-pill" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Featured Projects Section */}
        <section className="section-wrapper" id="projects">
          <div className="section-eyebrow">PERSONAL</div>
          <h2 className="section-title" style={{ marginBottom: "24px" }}>
            Featured Projects
          </h2>
          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div className="project-card" key={idx}>
                <div>
                  <h3 className="project-title">{proj.name}</h3>
                  <p className="project-tech">
                    <strong>Technologies:</strong> {proj.tech}
                  </p>
                </div>
                <div>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-card-link"
                  >
                    View Repository{" "}
                    <ArrowForwardIcon style={{ fontSize: 14 }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Featured Professional Certifications */}
        <CertificationsGrid onViewAll={() => setShowAllCertsModal(true)} />

        {/* 8. Full Certificates Gallery View */}
        {(showAllCertsModal || selectedCert) && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(15, 23, 42, 0.75)",
              backdropFilter: "blur(6px)",
              zIndex: 2000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "32px",
                maxWidth: "900px",
                width: "100%",
                maxHeight: "85vh",
                overflowY: "auto",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <h3
                  style={{
                    ...(device === "mobile"
                      ? {
                          fontSize: "18px",
                          marginTop: "8px",
                          textAlign: "center",
                        }
                      : { fontSize: "22px" }),
                    fontWeight: 800,
                    color: "#0f172a",
                  }}
                >
                  {certTitle}
                </h3>

                <div>
                  {selectedCert && (
                    <button
                      onClick={() => {
                        setCertTitle("All Certificates & Credentials");
                        setSelectedCert(null);
                      }}
                      id="certDialogBack"
                    >
                      ↩
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setShowAllCertsModal(false);
                      setSelectedCert(null);
                      setCertTitle("All Certificates & Credentials");
                    }}
                    id="certDialogClose"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {selectedCert ? (
                <div style={{ textAlign: "center" }}>
                  <img
                    src={selectedCert.img}
                    alt={selectedCert.title}
                    style={{
                      maxWidth: "100%",
                      borderRadius: "12px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(220px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {allCerts.map((cert, i) => (
                    <div
                      key={i}
                      style={{
                        border: "1px solid #e2e8f0",
                        borderRadius: "12px",
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "transform 0.2s",
                      }}
                      onClick={() => {
                        setCertTitle(cert.title);
                        setSelectedCert(cert);
                      }}
                    >
                      <img
                        src={cert.img}
                        alt={cert.title}
                        style={{
                          width: "100%",
                          height: "160px",
                          objectFit: "cover",
                        }}
                      />
                      <p
                        style={{
                          padding: "10px",
                          fontSize: "12px",
                          fontWeight: "600",
                          color: "#334155",
                          textAlign: "center",
                        }}
                      >
                        {cert.title}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
