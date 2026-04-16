import './style.css'

// Custom Cursor glow effect following mouse
const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

// Click effect on glow
document.addEventListener('mousedown', () => {
  cursorGlow.style.width = '300px';
  cursorGlow.style.height = '300px';
  cursorGlow.style.background = 'radial-gradient(circle, rgba(255, 0, 85, 0.4) 0%, transparent 60%)';
});

document.addEventListener('mouseup', () => {
  cursorGlow.style.width = '400px';
  cursorGlow.style.height = '400px';
  cursorGlow.style.background = 'radial-gradient(circle, var(--cyan-dim) 0%, transparent 60%)';
});

// Dashboard Numbers Simulators
const nodesNodes = document.getElementById('stat-nodes');
const velocityValue = document.getElementById('stat-velocity');
const waitValue = document.getElementById('stat-wait');
const bottleneckValue = document.getElementById('stat-bottlenecks');

function updateDashboardData() {
  // Update Nodes
  const currentNodes = parseInt(nodesNodes.innerText.replace(/,/g, ''));
  const change = Math.floor(Math.random() * 20) - 5; 
  nodesNodes.innerText = (currentNodes + change).toLocaleString();

  // Update Crowd Velocity (m/s)
  const currentVel = parseFloat(velocityValue.innerText);
  const velChange = (Math.random() * 0.08 - 0.04).toFixed(3);
  let newVel = (currentVel + parseFloat(velChange)).toFixed(2);
  if (newVel < 0.8) newVel = 0.8;
  if (newVel > 2.0) newVel = 2.0;
  velocityValue.innerText = `${newVel} m/s`;

  // Update Wait Time
  const currentWait = parseFloat(waitValue.innerText);
  const waitChange = (Math.random() * 0.4 - 0.2).toFixed(2);
  let newWait = (currentWait + parseFloat(waitChange)).toFixed(1);
  if (newWait <= 0.2) newWait = 0.2; // Floor wait time
  if (newWait >= 3.0) newWait = 3.0;
  waitValue.innerText = `${newWait} min`;
  
  // Conditionally color the wait time text
  waitValue.className = 'value ' + (newWait > 2.0 ? 'magenta-text' : '');

  // Randomly toggle bottlenecks occasionally, but keep it mostly optimized (0)
  if (Math.random() > 0.95) {
      bottleneckValue.innerText = Math.floor(Math.random() * 3);
  } else if (Math.random() > 0.6) {
      bottleneckValue.innerText = '0';
  }

  setTimeout(updateDashboardData, Math.random() * 2000 + 500);
}

updateDashboardData();

// Data Viz Bar Simulator
const vizContainer = document.querySelector('.data-viz-mocker');
const NUM_BARS = 40;

for (let i = 0; i < NUM_BARS; i++) {
  const bar = document.createElement('div');
  bar.classList.add('bar');
  bar.style.height = `${Math.random() * 100}%`;
  vizContainer.appendChild(bar);
}

const bars = document.querySelectorAll('.bar');

setInterval(() => {
  bars.forEach(bar => {
    if (Math.random() > 0.6) {
      const active = Math.random() > 0.8;
      bar.style.height = `${Math.random() * (active ? 100 : 50)}%`;
      bar.style.opacity = active ? '0.8' : '0.2';
      if(active) {
        bar.style.boxShadow = '0 0 10px var(--cyan-bright)';
      } else {
        bar.style.boxShadow = 'none';
      }
    }
  });
}, 200);

// Tilt Effect for Glass Cards
const tiltCards = document.querySelectorAll('.tilt');
tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
  });
});

// Map Filtering Logic
const mapToggles = document.querySelectorAll('.map-toggle');
const mapZones = document.querySelectorAll('.zone');

mapToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    // Reset buttons
    mapToggles.forEach(btn => btn.classList.remove('active'));
    toggle.classList.add('active');
    
    const layer = toggle.getAttribute('data-layer');
    
    mapZones.forEach(zone => {
      if (layer === 'all') {
        zone.style.opacity = '1';
      } else if (zone.classList.contains(layer)) {
        zone.style.opacity = '1';
      } else {
        zone.style.opacity = '0.1';
      }
    });
  });
});
