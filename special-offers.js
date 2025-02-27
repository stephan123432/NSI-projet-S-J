function createFirework() {
  const firework = document.createElement('div');
  firework.classList.add('firework');
  document.getElementById('fireworks-container').appendChild(firework);
  
  const startPositionX = Math.random() * window.innerWidth;
  const startPositionY = window.innerHeight;
  const endPositionY = Math.random() * (window.innerHeight / 2);
  const duration = Math.random() * 1.5 + 1; // Firework duration between 1 and 2.5 seconds

  firework.style.left = `${startPositionX}px`;
  firework.style.bottom = '0px';
  firework.style.animation = `fireworkAnimation ${duration}s ease-out`;

  firework.addEventListener('animationend', () => {
    firework.remove();
  });
}

function startFireworks() {
  setInterval(createFirework, 300); // Create a new firework every 300ms
}

window.onload = () => {
  startFireworks();
};
