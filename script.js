window.addEventListener("DOMContentLoaded", () => {
  const heart = document.querySelector(".petal-heart");
  const paper = document.getElementById("lovePaper");

  // Create rose petals forming a heart shape
  const petalCount = 40;
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    
    // Position petals in a rough heart shape
    const angle = (i / petalCount) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(angle), 3);
    const y = -(
      13 * Math.cos(angle) -
      5 * Math.cos(2 * angle) -
      2 * Math.cos(3 * angle) -
      Math.cos(4 * angle)
    );

    petal.style.left = 50 + x * 8 + "%";
    petal.style.top = 50 + y * 8 + "%";
    petal.style.animationDelay = `${i * 0.05}s`;

    heart.appendChild(petal);
  }

  // After heart fully formed, fade petals and reveal paper
  setTimeout(() => {
    document.querySelectorAll(".petal").forEach(p => p.classList.add("fade-out"));
  }, 4000);

  // Reveal paper and text
  setTimeout(() => {
    paper.classList.add("revealed");
  }, 4000);
});
