<template>
  <section class="about-me">
    <div class="container">
      <!-- Back Navigation -->
      <div class="back-navigation">
        <router-link to="/" class="back-button">
          <svg class="back-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          <span>Back to Portfolio</span>
        </router-link>
      </div>
      
      <!-- Decorative background elements -->
      <div class="bg-decoration">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
      
      <!-- Profile section -->
      <div class="profile-section">
        <div class="avatar">
          <div class="avatar-placeholder">
            <svg class="avatar-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        </div>
        
        <div class="intro">
          <h1 class="name">
            <span class="greeting">Hi, I'm</span>
            <span class="highlight">Varada!</span>
          </h1>
          <div class="title-badge">
            <span>Full Stack Developer</span>
          </div>
        </div>
      </div>

      <!-- Content section -->
      <div class="content">
        <div class="description">
          <p class="lead">
            I'm a passionate developer who loves building beautiful and functional web applications.
            I specialize in modern web technologies and enjoy solving complex problems with elegant solutions.
          </p>
          <p class="secondary">
            Outside of coding, I enjoy exploring new technologies, reading, and spending time with family and friends.
          </p>
        </div>

        <!-- Skills showcase -->
        <div class="skills-preview">
          <div class="skill-tag">Vue.js</div>
          <div class="skill-tag">React</div>
          <div class="skill-tag">Node.js</div>
          <div class="skill-tag">TypeScript</div>
        </div>

        <!-- Social links -->
        <div class="social-links">
          <a href="https://github.com/Varadavnm" target="_blank" class="social-btn github">
            <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/varada-n-m-128aa8217/" target="_blank" class="social-btn linkedin">
            <svg class="icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.about-me {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}

/* Back Navigation */
.back-navigation {
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 10;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: #667eea;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.back-button:hover {
  background: rgba(102, 126, 234, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
}

.back-icon {
  width: 18px;
  height: 18px;
}

/* Background decoration */
.bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.circle-3 {
  width: 60px;
  height: 60px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Profile section */
.profile-section {
  text-align: center;
  margin-bottom: 3rem;
}

.avatar {
  margin-bottom: 1.5rem;
}

.avatar-placeholder {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.avatar-icon {
  width: 60px;
  height: 60px;
  color: white;
}

.name {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
}

.greeting {
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.highlight {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-badge {
  display: inline-block;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

/* Content section */
.content {
  text-align: center;
}

.description {
  margin-bottom: 2.5rem;
}

.lead {
  font-size: 1.25rem;
  color: #374151;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.secondary {
  font-size: 1.1rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

/* Skills preview */
.skills-preview {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.skill-tag {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

/* Social links */
.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.social-btn .icon {
  width: 20px;
  height: 20px;
}

.github {
  background: #24292e;
  color: white;
}

.github:hover {
  background: #1a1e22;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(36, 41, 46, 0.3);
}

.linkedin {
  background: #0077b5;
  color: white;
}

.linkedin:hover {
  background: #005885;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 119, 181, 0.3);
}

/* Responsive design */
@media (max-width: 768px) {
  .about-me {
    padding: 1rem;
  }
  
  .container {
    padding: 2rem;
  }

  .back-navigation {
    top: 1rem;
    left: 1rem;
  }
  
  .back-button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .name {
    font-size: 2.5rem;
  }
  
  .greeting {
    font-size: 1.25rem;
  }
  
  .lead {
    font-size: 1.1rem;
  }
  
  .social-links {
    flex-direction: column;
    align-items: center;
  }
  
  .social-btn {
    width: 200px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .name {
    font-size: 2rem;
  }
  
  .avatar-placeholder {
    width: 100px;
    height: 100px;
  }
  
  .avatar-icon {
    width: 50px;
    height: 50px;
  }
  
  .skills-preview {
    justify-content: center;
  }
}
</style>
