function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  }
  const numberOfIcons = 20; // How many music icons you want
const icons = [];

// Create icons
for (let i = 0; i < numberOfIcons; i++) {
  const icon = document.createElement('div');
  icon.classList.add('icon');
  icon.innerText = Math.random() > 0.5 ? '🎵' : '🎶';
  document.body.appendChild(icon);

  icons.push({
    element: icon,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    dx: (Math.random() - 0.5) * 2, // random horizontal speed
    dy: (Math.random() - 0.5) * 2  // random vertical speed
  });
}

// Animate
function animate() {
  icons.forEach(icon => {
    icon.x += icon.dx;
    icon.y += icon.dy;

    // Bounce off walls
    if (icon.x < 0 || icon.x > window.innerWidth - 32) icon.dx *= -1;
    if (icon.y < 0 || icon.y > window.innerHeight - 32) icon.dy *= -1;

    icon.element.style.left = `${icon.x}px`;
    icon.element.style.top = `${icon.y}px`;
  });

  requestAnimationFrame(animate);
}

animate();
const icon = document.createElement('img');
icon.src = 'note.png';
icon.classList.add('icon');
icon.style.width = '30px';
icon.style.height = '30px';
