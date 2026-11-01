// Año dinámico en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Reloj en vivo (demuestra que el JS estático se ejecuta en el cliente)
function updateClock() {
  const now = new Date();
  const el = document.getElementById("clock");
  if (el) el.textContent = "🕒 " + now.toLocaleTimeString("es-MX");
}
updateClock();
setInterval(updateClock, 1000);

// Contador de interacciones + scroll suave del CTA
let count = 0;
const counter = document.getElementById("counter");
const cta = document.getElementById("ctaBtn");

if (cta) {
  cta.addEventListener("click", () => {
    count++;
    if (counter) counter.textContent = count;
    document.getElementById("cicd").scrollIntoView({ behavior: "smooth" });
  });
}

// Scroll suave para los enlaces del menú
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
