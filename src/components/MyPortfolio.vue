
<template>
  <div class="portfolio">
    <!-- Hero Section -->
    <section class="hero">
      <!-- Add the organic pattern -->
      <OrganicPattern />
      
      <div class="hero-content">
        <div class="avatar-section">
          <div class="avatar">
            <svg class="avatar-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <div class="status-indicator">
            <span class="status-dot"></span>
            <span class="status-text">Available for opportunities</span>
          </div>
        </div>
        
        <h1 class="hero-title">
          <span class="greeting">Hello, I'm</span>
          <span class="name">{{ name }}</span>
        </h1>
        <p class="hero-subtitle">Data Science Student & Full Stack Developer</p>
        <div class="hero-badges">
          <span class="badge">IIT Madras</span>
          <span class="badge">Data Science</span>
          <span class="badge">Machine Learning</span>
        </div>
        
        <!-- Action Buttons -->
        <div class="hero-actions">
          <router-link to="/about" class="cta-button primary">
            <svg class="button-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span>About Me</span>
          </router-link>
          <a href="#contact" class="cta-button secondary">
            <svg class="button-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="section-icon">📞</span>
          Get In Touch
        </h2>
        <p class="section-subtitle">Let's connect and discuss opportunities</p>
      </div>
      
      <div class="contact-grid">
        <div class="contact-card">
          <div class="contact-icon">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <div class="contact-info">
            <h3>Email</h3>
            <a :href="'mailto:' + contact.email" class="contact-link">{{ contact.email }}</a>
          </div>
        </div>
        
        <div class="contact-card">
          <div class="contact-icon">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          <div class="contact-info">
            <h3>Phone</h3>
            <a :href="'tel:' + contact.phone" class="contact-link">{{ contact.phone }}</a>
          </div>
        </div>
        
        <div class="contact-card">
          <div class="contact-icon">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <div class="contact-info">
            <h3>Location</h3>
            <span class="contact-text">{{ contact.address }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Academic Section -->
    <section class="academic-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="section-icon">🎓</span>
          Academic Journey
        </h2>
        <p class="section-subtitle">My educational background and achievements</p>
      </div>
      
      <div class="academic-toggle">
        <button class="toggle-btn" @click="toggleAcademicDetails" :class="{ active: showAcademic }">
          <span>{{ showAcademic ? 'Hide Details' : 'Show Details' }}</span>
          <svg class="toggle-icon" :class="{ rotated: showAcademic }" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </button>
      </div>
      
      <transition name="slide-fade">
        <div v-if="showAcademic" class="academic-details">
          <div class="timeline">
            <div v-for="(detail, index) in academicDetails" :key="index" class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3 class="degree-title">{{ detail.degree }}</h3>
                <p class="institution">{{ detail.institution }}</p>
                <span class="year-badge">{{ detail.year }}</span>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </section>

    <!-- Projects Section -->
    <section class="projects-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="section-icon">💻</span>
          Featured Projects
        </h2>
        <p class="section-subtitle">Showcasing my technical skills and creativity</p>
      </div>
      
      <div class="project-tabs">
        <button 
          class="tab-btn" 
          :class="{ active: activeProjectTab === 'academic' }" 
          @click="activeProjectTab = 'academic'"
        >
          <span class="tab-icon">🎓</span>
          Academic Projects
        </button>
        <button 
          class="tab-btn" 
          :class="{ active: activeProjectTab === 'nonAcademic' }" 
          @click="activeProjectTab = 'nonAcademic'"
        >
          <span class="tab-icon">🚀</span>
          Personal Projects
        </button>
      </div>

      <transition name="fade" mode="out-in">
        <div v-if="activeProjectTab === 'academic'" key="academic" class="project-content">
          <div class="project-grid">
            <div class="project-card featured">
              <div class="project-header">
                <h3 class="project-title">Banking Marketing Campaign Analysis</h3>
                <div class="project-badges">
                  <span class="badge success">Kaggle Competition</span>
                  <span class="badge">Rank 35/1256</span>
                </div>
              </div>
              <p class="project-description">
                A comprehensive machine learning project analyzing customer response to telemarketing campaigns. 
                Implemented advanced data preprocessing, feature engineering, and ensemble methods.
              </p>
              <div class="project-stats">
                <div class="stat">
                  <span class="stat-value">0.77</span>
                  <span class="stat-label">Accuracy</span>
                </div>
                <div class="stat">
                  <span class="stat-value">35</span>
                  <span class="stat-label">Rank</span>
                </div>
              </div>
              <div class="project-footer">
                <div class="tech-stack">
                  <span class="tech-tag">Python</span>
                  <span class="tech-tag">Scikit-learn</span>
                  <span class="tech-tag">Pandas</span>
                </div>
                <a href="https://github.com/Varadavnm/Kaggle_competition" target="_blank" class="project-link">
                  <svg class="link-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Project
                </a>
              </div>
            </div>
            
            <div class="project-card">
              <div class="project-header">
                <h3 class="project-title">Grocery App</h3>
                <div class="project-badges">
                  <span class="badge">Academic</span>
                </div>
              </div>
              <p class="project-description">
                A full-featured grocery shopping application developed as part of academic curriculum, 
                focusing on user experience and modern web technologies.
              </p>
              <div class="project-footer">
                <div class="tech-stack">
                  <span class="tech-tag">Vue.js</span>
                  <span class="tech-tag">Flask</span>
                </div>
                <a href="https://github.com/Varadavnm/Grocery-App" target="_blank" class="project-link">
                  <svg class="link-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Projeccts
                </a>
              </div>
            </div>
          </div>
        </div>

        <div v-else key="personal" class="project-content">
          <div class="project-grid">
            <div class="project-card">
              <div class="project-header">
                <h3 class="project-title">Receipt Generator</h3>
                <div class="project-badges">
                  <span class="badge personal">Personal</span>
                </div>
              </div>
              <p class="project-description">
                An automated receipt generation system designed to streamline business operations 
                and improve efficiency in transaction processing.
              </p>
              <div class="project-footer">
                <div class="tech-stack">
                  <span class="tech-tag">JavaScript</span>
                  <span class="tech-tag">HTML/CSS</span>
                </div>
                <a href="https://github.com/Varadavnm/Receipt_generator" target="_blank" class="project-link">
                  <svg class="link-icon" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
import OrganicPattern from './OrganicPattern.vue';

export default {
  name: "MyPortfolio",
  components: {
    OrganicPattern
  },
  data() {
    return {
      name: "Varada N M",
      contact: {
        email: "varadavnm@gmail.com",
        phone: "9930756031",
        address: "Thane, Mumbai",
      },
      showAcademic: false,
      academicDetails: [
        { degree: "Diploma in Data Science", institution: "IIT Madras", year: "Present" },
        { degree: "Diploma in Programming", institution: "IIT Madras", year: "Present" },
        { degree: "Pursuing B.Sc in Data Science", institution: "IIT Madras", year: "Present" },
      ],
      activeProjectTab: "academic",
    };
  },
  methods: {
    toggleAcademicDetails() {
      this.showAcademic = !this.showAcademic;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.portfolio {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 2rem 1rem;
}

/* Hero Section */
.hero {
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 4rem 3rem;
  margin-bottom: 3rem;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.avatar-section {
  margin-bottom: 2rem;
}

.avatar {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #dc2626, #991b1b);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  box-shadow: 0 10px 30px rgba(220, 38, 38, 0.3);
}

.avatar-icon {
  width: 60px;
  height: 60px;
  color: white;
}

.status-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #059669;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #059669;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-title {
  margin: 0 0 1rem 0;
}

.greeting {
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.name {
  display: block;
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #dc2626, #1e40af);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.hero-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.badge {
  background: rgba(220, 38, 38, 0.1);
  color: #dc2626;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(220, 38, 38, 0.2);
}

.badge.success {
  background: rgba(5, 150, 105, 0.1);
  color: #059669;
  border-color: rgba(5, 150, 105, 0.2);
}

.badge.personal {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  border-color: rgba(139, 92, 246, 0.2);
}

/* Hero Actions */
.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cta-button.primary {
  background: linear-gradient(135deg, #dc2626, #991b1b);
  color: white;
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);
}

.cta-button.secondary {
  background: rgba(255, 255, 255, 0.9);
  color: #1e40af;
  border: 2px solid rgba(30, 64, 175, 0.2);
}

.cta-button.secondary:hover {
  background: rgba(30, 64, 175, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(30, 64, 175, 0.2);
}

.button-icon {
  width: 20px;
  height: 20px;
}

/* Section Styles */
section {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 1rem 0;
}

.section-icon {
  font-size: 2rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #6b7280;
  margin: 0;
}

/* Contact Section */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.contact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #1e40af, #1e3a8a);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon svg {
  width: 24px;
  height: 24px;
  color: white;
}

.contact-info h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
}

.contact-link {
  color: #1e40af;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #1e3a8a;
}

.contact-text {
  color: #6b7280;
  font-weight: 500;
}

/* Academic Section */
.academic-toggle {
  text-align: center;
  margin-bottom: 2rem;
}

.toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
}

.toggle-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.4);
}

.toggle-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.toggle-icon.rotated {
  transform: rotate(180deg);
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 2rem;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0.5rem;
  width: 12px;
  height: 12px;
  background: #f59e0b;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);
}

.timeline-content {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #f59e0b;
}

.degree-title {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
}

.institution {
  margin: 0 0 1rem 0;
  color: #6b7280;
  font-weight: 500;
}

.year-badge {
  background: #f59e0b;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

/* Projects Section */
.project-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #f1f5f9;
  color: #64748b;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn.active {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
}

.tab-icon {
  font-size: 1.2rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: #f8fafc;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
}

.project-card.featured {
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.05), rgba(30, 64, 175, 0.05));
  border-color: rgba(220, 38, 38, 0.2);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.project-header {
  margin-bottom: 1rem;
}

.project-title {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
}

.project-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.project-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #dc2626;
}

.stat-label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.tech-stack {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-tag {
  background: rgba(30, 64, 175, 0.1);
  color: #1e40af;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1e40af;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.project-link:hover {
  color: #1e3a8a;
  transform: translateX(4px);
}

.link-icon {
  width: 18px;
  height: 18px;
}

/* Transitions */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .portfolio {
    padding: 1rem;
  }
  
  section {
    padding: 2rem;
  }
  
  .hero {
    padding: 3rem 2rem;
  }
  
  .name {
    font-size: 2.5rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .project-tabs {
    flex-direction: column;
    align-items: center;
  }
  
  .project-grid {
    grid-template-columns: 1fr;
  }
  
  .project-footer {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .timeline {
    padding-left: 1rem;
  }
  
  .timeline-item {
    padding-left: 1.5rem;
  }
  
  .timeline-marker {
    left: -1.5rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-button {
    width: 200px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .name {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .hero-badges {
    justify-content: center;
  }
  
  .project-stats {
    justify-content: center;
  }
}
</style>
