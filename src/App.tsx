import { useState, useEffect } from 'react';
import Navigation from './components/Navbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LaunchIcon from '@mui/icons-material/Launch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './App.css';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <Navigation parentToChild={{ mode }} modeChange={toggleMode} />

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <span className="hero-label">Software Engineer</span>
          <h1 className="hero-name">Cyrce Salinas </h1>
          <p className="hero-title">
            <LocationOnIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
            Monterrey, Mexico
          </p>
          <p className="hero-bio">
            B.S. Computer Science student at Tec de Monterrey. I build scalable web
            platforms, data pipelines, and cloud-based solutions. Passionate about
            open source, AI integrations, and creating social impact through technology.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              <EmailIcon fontSize="small" /> Get in Touch
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/danaxsax" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/cyrce-salinas" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section section-alt" id="expertise">
        <div className="section-content">
          <h2 className="section-title">Expertise</h2>
          <p className="section-subtitle">Technologies and domains I work with on a daily basis.</p>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">🖥️</div>
              <h3>Frontend</h3>
              <p>Building responsive, accessible interfaces with modern frameworks.</p>
              <div className="tag-list">
                <span className="tag">React</span>
                <span className="tag">Vue</span>
                <span className="tag">Next.js</span>
                <span className="tag">TypeScript</span>
              </div>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">⚙️</div>
              <h3>Backend</h3>
              <p>Designing APIs and services that are reliable and maintainable.</p>
              <div className="tag-list">
                <span className="tag">Python</span>
                <span className="tag">FastAPI</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Go</span>
              </div>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">☁️</div>
              <h3>Cloud &amp; DevOps</h3>
              <p>Deploying and managing infrastructure in the cloud.</p>
              <div className="tag-list">
                <span className="tag">AWS</span>
                <span className="tag">GCP</span>
                <span className="tag">Docker</span>
                <span className="tag">CI/CD</span>
              </div>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🗄️</div>
              <h3>Database</h3>
              <p>Working with relational and NoSQL data stores at scale.</p>
              <div className="tag-list">
                <span className="tag">PostgreSQL</span>
                <span className="tag">MongoDB</span>
                <span className="tag">SQL</span>
                <span className="tag">Pandas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section" id="history">
        <div className="section-content">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey so far.</p>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">Oct 2025 — Present</span>
              <h3 className="timeline-role">Lead Engineer</h3>
              <p className="timeline-company">BridgeUs Mexico</p>
              <p className="timeline-desc">
                Leading a team of student interns, providing technical guidance, code reviews,
                and training. Defined the system architecture and deployed AWS infrastructure
                for scalable, maintainable delivery.
              </p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">Aug 2025 — Oct 2025</span>
              <h3 className="timeline-role">Software Engineer</h3>
              <p className="timeline-company">VIF Academy (Remote)</p>
              <p className="timeline-desc">
                Developed and maintained robust web scraping pipelines to collect and structure
                large-scale job market data. Enhanced quality and processing efficiency through
                modular pipeline design and asynchronous requests.
              </p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">Jul 2024 — Apr 2025</span>
              <h3 className="timeline-role">Junior Software Engineer</h3>
              <p className="timeline-company">Saptiva (Remote)</p>
              <p className="timeline-desc">
                Developed secure web platforms with OAuth auth and Stripe payment integration.
                Built AI features using OpenAI/Groq APIs for enterprise clients including RAG
                chatbots. Migrated tools to open-source frameworks reducing costs by 30%.
              </p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">Feb 2024 — Nov 2024</span>
              <h3 className="timeline-role">Software Engineer</h3>
              <p className="timeline-company">The Gate Education (Remote)</p>
              <p className="timeline-desc">
                Gathered client requirements and translated business problems into cloud-based
                software solutions. Led email infrastructure overhaul while preserving credential
                integrity and minimizing downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section section-alt" id="projects">
        <div className="section-content">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A selection of things I've built.</p>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                {/* Replace src with your actual screenshot */}
                <img src="/images/ecobici.png" alt="Ecobici Mobility Platform screenshot" />
              </div>
              <div className="project-body">
                <div className="project-header">
                  <h3>Ecobici Mobility Platform</h3>
                  <div className="project-links">
                    <a href="https://github.com/danaxsax" target="_blank" rel="noreferrer" className="project-link" aria-label="Source code">
                      <GitHubIcon />
                    </a>
                  </div>
                </div>
                <p>
                  Automated data ingestion from public sources via web scraping, enabling
                  dynamic datasets for urban mobility analytics using GCP.
                </p>
                <div className="tag-list">
                  <span className="tag">Python</span>
                  <span className="tag">GCP</span>
                  <span className="tag">Web Scraping</span>
                  <span className="tag">Data Analytics</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                {/* Replace src with your actual screenshot */}
                <img src="/images/ayuda-dinero.png" alt="Ayuda debo dinero screenshot" />
              </div>
              <div className="project-body">
                <div className="project-header">
                  <h3>Ayuda debo dinero</h3>
                  <div className="project-links">
                    <a href="https://github.com/danaxsax" target="_blank" rel="noreferrer" className="project-link" aria-label="Source code">
                      <GitHubIcon />
                    </a>
                    <a href="https://example.com" target="_blank" rel="noreferrer" className="project-link" aria-label="Live demo">
                      <LaunchIcon />
                    </a>
                  </div>
                </div>
                <p>
                  HackMTY project — an optimizer-first personal finance system that computes
                  optimal credit card payments using compound interest and budget constraints
                  to minimize interest.
                </p>
                <div className="tag-list">
                  <span className="tag">FastAPI</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">React</span>
                  <span className="tag">Finance</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                {/* Replace src with your actual screenshot */}
                <img src="/images/ecoscan.png" alt="EcoSCAN iOS app screenshot" />
              </div>
              <div className="project-body">
                <div className="project-header">
                  <h3>EcoSCAN</h3>
                  <div className="project-links">
                    <a href="https://github.com/danaxsax" target="_blank" rel="noreferrer" className="project-link" aria-label="Source code">
                      <GitHubIcon />
                    </a>
                  </div>
                </div>
                <p>
                  Swift iOS app promoting UN SDG 3 by scanning product barcodes and suggesting
                  healthier alternatives. Integrated Apple Vision Kit and external nutritional
                  databases.
                </p>
                <div className="tag-list">
                  <span className="tag">Swift</span>
                  <span className="tag">iOS</span>
                  <span className="tag">Vision Kit</span>
                  <span className="tag">HealthTech</span>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                {/* Replace src with your actual screenshot */}
                <img src="/images/deepracer.png" alt="AWS DeepRacer robot screenshot" />
              </div>
              <div className="project-body">
                <div className="project-header">
                  <h3>AWS DeepRacer Robot</h3>
                  <div className="project-links">
                    <a href="https://github.com/danaxsax" target="_blank" rel="noreferrer" className="project-link" aria-label="Source code">
                      <GitHubIcon />
                    </a>
                  </div>
                </div>
                <p>
                  Leading a team developing an omnidirectional robot for AWS DeepRacer using
                  reinforcement learning and autonomous vehicle technologies.
                </p>
                <div className="tag-list">
                  <span className="tag">Python</span>
                  <span className="tag">AWS</span>
                  <span className="tag">RL</span>
                  <span className="tag">Robotics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="section-content">
          <div className="contact-content">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
            <a href="mailto:cyrcedeveloper@gmail.com" className="btn-primary">
              <EmailIcon fontSize="small" /> Send an Email
            </a>
            <div className="contact-socials">
              <a href="https://github.com/danaxsax" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="https://linkedin.com/in/cyrce-salinas" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Cyrce Danae Salinas Rojas. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
