<template>
  <div class="organic-pattern">
    <svg class="pattern-svg" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
      <!-- Background gradient -->
      <defs>
        <radialGradient id="bgGradient" cx="50%" cy="50%" r="70%">
          <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
        </radialGradient>
        
        <!-- Data Science themed gradients -->
        <radialGradient id="neuralGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#1e40af;stop-opacity:0.6" />
        </radialGradient>
        
        <radialGradient id="dataGradient" cx="40%" cy="60%" r="80%">
          <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.7" />
          <stop offset="100%" style="stop-color:#059669;stop-opacity:0.5" />
        </radialGradient>
        
        <radialGradient id="mlGradient" cx="60%" cy="40%" r="60%">
          <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#d97706;stop-opacity:0.6" />
        </radialGradient>
        
        <radialGradient id="aiGradient" cx="50%" cy="50%" r="70%">
          <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.6" />
          <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:0.4" />
        </radialGradient>
        
        <radialGradient id="analyticsGradient" cx="30%" cy="70%" r="60%">
          <stop offset="0%" style="stop-color:#ef4444;stop-opacity:0.7" />
          <stop offset="100%" style="stop-color:#dc2626;stop-opacity:0.5" />
        </radialGradient>

        <!-- Pattern definitions for data visualization -->
        <pattern id="dataPattern" patternUnits="userSpaceOnUse" width="40" height="40">
          <rect width="40" height="40" fill="none"/>
          <circle cx="20" cy="20" r="2" fill="#3b82f6" opacity="0.3"/>
          <circle cx="10" cy="10" r="1.5" fill="#10b981" opacity="0.4"/>
          <circle cx="30" cy="30" r="1" fill="#f59e0b" opacity="0.5"/>
        </pattern>

        <pattern id="networkPattern" patternUnits="userSpaceOnUse" width="60" height="60">
          <rect width="60" height="60" fill="none"/>
          <line x1="10" y1="10" x2="50" y2="50" stroke="#8b5cf6" stroke-width="1" opacity="0.3"/>
          <line x1="50" y1="10" x2="10" y2="50" stroke="#3b82f6" stroke-width="1" opacity="0.3"/>
          <circle cx="10" cy="10" r="3" fill="#10b981" opacity="0.4"/>
          <circle cx="50" cy="50" r="3" fill="#ef4444" opacity="0.4"/>
          <circle cx="50" cy="10" r="2" fill="#f59e0b" opacity="0.4"/>
          <circle cx="10" cy="50" r="2" fill="#8b5cf6" opacity="0.4"/>
        </pattern>
      </defs>
      
      <!-- Background -->
      <rect width="100%" height="100%" fill="url(#bgGradient)" />
      
      <!-- Neural Network inspired shapes -->
      <g class="neural-network">
        <!-- Large neural node -->
        <circle class="shape neural-node-1" cx="200" cy="150" r="60" fill="url(#neuralGradient)" opacity="0.7"/>
        <circle cx="200" cy="150" r="40" fill="none" stroke="#3b82f6" stroke-width="2" opacity="0.3"/>
        <circle cx="200" cy="150" r="20" fill="#ffffff" opacity="0.8"/>
        
        <!-- Connected nodes -->
        <circle class="shape neural-node-2" cx="350" cy="100" r="35" fill="url(#neuralGradient)" opacity="0.6"/>
        <circle cx="350" cy="100" r="20" fill="#ffffff" opacity="0.7"/>
        
        <circle class="shape neural-node-3" cx="320" cy="220" r="40" fill="url(#neuralGradient)" opacity="0.6"/>
        <circle cx="320" cy="220" r="25" fill="#ffffff" opacity="0.7"/>
        
        <!-- Connection lines -->
        <line class="connection" x1="200" y1="150" x2="350" y2="100" stroke="#3b82f6" stroke-width="3" opacity="0.4"/>
        <line class="connection" x1="200" y1="150" x2="320" y2="220" stroke="#3b82f6" stroke-width="3" opacity="0.4"/>
        <line class="connection" x1="350" y1="100" x2="320" y2="220" stroke="#3b82f6" stroke-width="2" opacity="0.3"/>
      </g>

      <!-- Data visualization elements -->
      <g class="data-viz">
        <!-- Bar chart inspired shape -->
        <rect class="shape bar-1" x="500" y="300" width="25" height="80" fill="url(#dataGradient)" rx="5"/>
        <rect class="shape bar-2" x="535" y="250" width="25" height="130" fill="url(#mlGradient)" rx="5"/>
        <rect class="shape bar-3" x="570" y="280" width="25" height="100" fill="url(#aiGradient)" rx="5"/>
        <rect class="shape bar-4" x="605" y="200" width="25" height="180" fill="url(#analyticsGradient)" rx="5"/>
        
        <!-- Data points cluster -->
        <g class="data-cluster" transform="translate(700, 150)">
          <circle class="shape data-point-1" cx="0" cy="0" r="8" fill="url(#dataGradient)"/>
          <circle class="shape data-point-2" cx="20" cy="15" r="6" fill="url(#mlGradient)"/>
          <circle class="shape data-point-3" cx="-15" cy="25" r="7" fill="url(#aiGradient)"/>
          <circle class="shape data-point-4" cx="30" cy="-10" r="5" fill="url(#analyticsGradient)"/>
          <circle class="shape data-point-5" cx="-10" cy="-20" r="9" fill="url(#neuralGradient)"/>
          <circle class="shape data-point-6" cx="40" cy="30" r="4" fill="url(#dataGradient)"/>
        </g>
      </g>

      <!-- Algorithm flow shapes -->
      <g class="algorithm-flow">
        <!-- Decision tree inspired -->
        <path class="shape tree-branch" 
              d="M800,400 L850,350 L900,400 L850,450 Z" 
              fill="url(#mlGradient)" opacity="0.6"/>
        <circle class="shape tree-node-1" cx="850" cy="350" r="15" fill="#ffffff"/>
        <circle class="shape tree-node-2" cx="825" cy="425" r="12" fill="#ffffff"/>
        <circle class="shape tree-node-3" cx="875" cy="425" r="12" fill="#ffffff"/>
        
        <!-- Flow arrows -->
        <path class="shape flow-arrow" 
              d="M950,200 L1000,180 L1050,200 L1030,220 L1000,210 L970,220 Z" 
              fill="url(#aiGradient)" opacity="0.5"/>
      </g>

      <!-- Matrix/Grid patterns -->
      <g class="matrix-grid">
        <rect class="shape matrix-1" x="100" y="500" width="120" height="80" fill="url(#networkPattern)" opacity="0.4" rx="10"/>
        <rect class="shape matrix-2" x="900" y="50" width="100" height="100" fill="url(#dataPattern)" opacity="0.5" rx="15"/>
      </g>

      <!-- Scatter plot inspired organic shapes -->
      <g class="scatter-plot">
        <ellipse class="shape scatter-1" cx="450" cy="500" rx="80" ry="60" fill="url(#dataGradient)" opacity="0.4" transform="rotate(25 450 500)"/>
        <ellipse class="shape scatter-2" cx="1000" cy="350" rx="60" ry="90" fill="url(#mlGradient)" opacity="0.4" transform="rotate(-15 1000 350)"/>
        
        <!-- Trend line -->
        <path class="trend-line" 
              d="M400,550 Q500,480 600,450" 
              stroke="url(#analyticsGradient)" stroke-width="4" fill="none" opacity="0.6"/>
      </g>

      <!-- AI Brain inspired shape -->
      <g class="ai-brain">
        <path class="shape brain-left" 
              d="M50,300 C80,280 120,290 140,320 C160,350 150,390 120,410 C90,430 50,420 30,390 C10,360 20,330 50,300 Z" 
              fill="url(#aiGradient)" opacity="0.5"/>
        <path class="shape brain-right" 
              d="M140,320 C170,300 210,310 230,340 C250,370 240,410 210,430 C180,450 140,440 120,410 C100,380 110,350 140,320 Z" 
              fill="url(#aiGradient)" opacity="0.5"/>
        
        <!-- Neural pathways -->
        <path class="neural-path" 
              d="M80,350 Q120,330 160,350" 
              stroke="#8b5cf6" stroke-width="2" fill="none" opacity="0.4"/>
        <path class="neural-path" 
              d="M90,380 Q130,360 170,380" 
              stroke="#8b5cf6" stroke-width="2" fill="none" opacity="0.4"/>
      </g>

      <!-- Code/Algorithm symbols -->
      <g class="code-symbols">
        <!-- Binary representation -->
        <text class="binary-text" x="1050" y="500" fill="url(#neuralGradient)" opacity="0.3" font-family="monospace" font-size="24">01</text>
        <text class="binary-text" x="1080" y="530" fill="url(#dataGradient)" opacity="0.3" font-family="monospace" font-size="20">10</text>
        <text class="binary-text" x="1110" y="480" fill="url(#mlGradient)" opacity="0.3" font-family="monospace" font-size="18">11</text>
        
        <!-- Mathematical symbols -->
        <text class="math-symbol" x="50" y="100" fill="url(#analyticsGradient)" opacity="0.4" font-family="serif" font-size="30">Σ</text>
        <text class="math-symbol" x="1100" y="150" fill="url(#aiGradient)" opacity="0.4" font-family="serif" font-size="28">∫</text>
        <text class="math-symbol" x="400" y="80" fill="url(#mlGradient)" opacity="0.4" font-family="serif" font-size="26">π</text>
      </g>

      <!-- Data flow streams -->
      <g class="data-streams">
        <path class="data-stream" 
              d="M0,200 Q200,180 400,200 T800,200" 
              stroke="url(#dataGradient)" stroke-width="3" fill="none" opacity="0.3"/>
        <path class="data-stream" 
              d="M1200,600 Q1000,580 800,600 T400,600" 
              stroke="url(#neuralGradient)" stroke-width="3" fill="none" opacity="0.3"/>
        
        <!-- Data particles -->
        <circle class="data-particle" cx="100" cy="200" r="4" fill="#10b981">
          <animateMotion dur="8s" repeatCount="indefinite">
            <mpath href="#stream1"/>
          </animateMotion>
        </circle>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'OrganicPattern'
}
</script>

<style scoped>
.organic-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.pattern-svg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Neural network animations */
.neural-network .shape {
  animation: pulse 4s ease-in-out infinite;
}

.neural-node-1 { animation-delay: 0s; }
.neural-node-2 { animation-delay: 0.5s; }
.neural-node-3 { animation-delay: 1s; }

.connection {
  animation: dataFlow 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { 
    transform: scale(1);
    opacity: 0.7;
  }
  50% { 
    transform: scale(1.1);
    opacity: 0.9;
  }
}

@keyframes dataFlow {
  0%, 100% { 
    stroke-dasharray: 0, 100;
    opacity: 0.4;
  }
  50% { 
    stroke-dasharray: 50, 50;
    opacity: 0.8;
  }
}

/* Data visualization animations */
.data-viz .shape {
  animation: dataGrow 6s ease-in-out infinite;
}

.bar-1 { animation-delay: 0s; }
.bar-2 { animation-delay: 0.5s; }
.bar-3 { animation-delay: 1s; }
.bar-4 { animation-delay: 1.5s; }

@keyframes dataGrow {
  0%, 100% { 
    transform: scaleY(1);
  }
  50% { 
    transform: scaleY(1.2);
  }
}

/* Data points floating */
.data-cluster .shape {
  animation: float 8s ease-in-out infinite;
}

.data-point-1 { animation-delay: 0s; }
.data-point-2 { animation-delay: 1s; }
.data-point-3 { animation-delay: 2s; }
.data-point-4 { animation-delay: 3s; }
.data-point-5 { animation-delay: 4s; }
.data-point-6 { animation-delay: 5s; }

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) translateX(0px);
  }
  25% { 
    transform: translateY(-8px) translateX(4px);
  }
  50% { 
    transform: translateY(-4px) translateX(-2px);
  }
  75% { 
    transform: translateY(-12px) translateX(6px);
  }
}

/* Algorithm flow animations */
.algorithm-flow .shape {
  animation: algorithmPulse 5s ease-in-out infinite;
}

.tree-branch { animation-delay: 0s; }
.tree-node-1 { animation-delay: 0.3s; }
.tree-node-2 { animation-delay: 0.6s; }
.tree-node-3 { animation-delay: 0.9s; }
.flow-arrow { animation-delay: 1.2s; }

@keyframes algorithmPulse {
  0%, 100% { 
    opacity: 0.6;
    transform: scale(1);
  }
  50% { 
    opacity: 0.9;
    transform: scale(1.05);
  }
}

/* Matrix grid animations */
.matrix-grid .shape {
  animation: matrixShift 10s linear infinite;
}

@keyframes matrixShift {
  0% { 
    transform: translateX(0px);
  }
  100% { 
    transform: translateX(20px);
  }
}

/* Scatter plot animations */
.scatter-plot .shape {
  animation: scatterMove 12s ease-in-out infinite;
}

.scatter-1 { animation-delay: 0s; }
.scatter-2 { animation-delay: 2s; }

@keyframes scatterMove {
  0%, 100% { 
    transform: rotate(25deg) scale(1);
  }
  50% { 
    transform: rotate(35deg) scale(1.1);
  }
}

/* Trend line animation */
.trend-line {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: drawLine 8s ease-in-out infinite;
}

@keyframes drawLine {
  0%, 20% { 
    stroke-dashoffset: 200;
  }
  80%, 100% { 
    stroke-dashoffset: 0;
  }
}

/* AI Brain animations */
.ai-brain .shape {
  animation: brainThink 6s ease-in-out infinite;
}

.brain-left { animation-delay: 0s; }
.brain-right { animation-delay: 0.5s; }

@keyframes brainThink {
  0%, 100% { 
    opacity: 0.5;
  }
  50% { 
    opacity: 0.8;
  }
}

.neural-path {
  stroke-dasharray: 50;
  animation: neuralActivity 4s linear infinite;
}

@keyframes neuralActivity {
  0% { 
    stroke-dashoffset: 50;
  }
  100% { 
    stroke-dashoffset: -50;
  }
}

/* Code symbols animations */
.binary-text, .math-symbol {
  animation: codeFlicker 8s ease-in-out infinite;
}

.binary-text:nth-child(1) { animation-delay: 0s; }
.binary-text:nth-child(2) { animation-delay: 1s; }
.binary-text:nth-child(3) { animation-delay: 2s; }
.math-symbol:nth-child(1) { animation-delay: 3s; }
.math-symbol:nth-child(2) { animation-delay: 4s; }
.math-symbol:nth-child(3) { animation-delay: 5s; }

@keyframes codeFlicker {
  0%, 90%, 100% { 
    opacity: 0.3;
  }
  5%, 85% { 
    opacity: 0.7;
  }
}

/* Data streams */
.data-stream {
  stroke-dasharray: 100, 50;
  animation: streamFlow 10s linear infinite;
}

@keyframes streamFlow {
  0% { 
    stroke-dashoffset: 150;
  }
  100% { 
    stroke-dashoffset: -150;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .pattern-svg {
    transform: scale(1.2);
  }
  
  .binary-text, .math-symbol {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .pattern-svg {
    transform: scale(1.5);
  }
  
  .binary-text, .math-symbol {
    font-size: 14px;
  }
}
</style>
