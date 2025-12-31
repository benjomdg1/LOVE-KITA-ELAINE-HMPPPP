// Starry night + falling stars
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.2,
    dy: Math.random() * 0.5 + 0.2
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
    s.y += s.dy;
    if (s.y > canvas.height) s.y = 0;
  });
  requestAnimationFrame(animateStars);
}
animateStars();

// Heart petals + paper reveal
window.addEventListener("DOMContentLoaded", () => {
  const heart = document.querySelector(".petal-heart");
  const paper = document.getElementById("lovePaper");

  const petalCount = 40;
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    const angle = (i / petalCount) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(angle), 3);
    const y = -(13 * Math.cos(angle) - 5 * Math.cos(2*angle) - 2*Math.cos(3*angle) - Math.cos(4*angle));

    petal.style.left = 50 + x*8 + "%";
    petal.style.top = 50 + y*8 + "%";
    petal.style.animationDelay = `${i*0.05}s`;
    heart.appendChild(petal);
  }

  // Fade petals
  setTimeout(() => {
    document.querySelectorAll(".petal").forEach(p => p.classList.add("fade-out"));
  }, 4000);

  // Reveal paper
  setTimeout(() => {
    paper.classList.add("revealed");
  }, 4000);
});
