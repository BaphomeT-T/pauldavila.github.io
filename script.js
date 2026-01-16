const pagesEl = document.getElementById("pages");
const pages = Array.from(document.querySelectorAll(".page"));
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsEl = document.getElementById("dots");

let index = 0;

function renderDots(){
  dotsEl.innerHTML = "";
  pages.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = "dot";
    d.setAttribute("role", "tab");
    d.setAttribute("aria-label", `Ir a página ${i+1}`);
    d.setAttribute("aria-selected", i === index ? "true" : "false");
    d.addEventListener("click", () => goTo(i));
    dotsEl.appendChild(d);
  });
}

function update(){
  pagesEl.style.transform = `translateX(-${index * 100}%)`;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === pages.length - 1;
  renderDots();
}

function goTo(i){
  index = Math.max(0, Math.min(pages.length - 1, i));
  update();
}

function next(){ goTo(index + 1); }
function prev(){ goTo(index - 1); }

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

let touchStartX = 0;
let touchX = 0;
const threshold = 40;

pagesEl.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  touchX = touchStartX;
}, {passive: true});

pagesEl.addEventListener("touchmove", (e) => {
  touchX = e.touches[0].clientX;
}, {passive: true});

pagesEl.addEventListener("touchend", () => {
  const delta = touchX - touchStartX;
  if (Math.abs(delta) > threshold){
    if (delta < 0) next(); else prev();
  }
});

function initCarousels(){
  document.querySelectorAll("[data-carousel]").forEach((root) => {
    const track = root.querySelector(".project-carousel-track");
    const slides = Array.from(track.children);
    const prev = root.querySelector(".photo-prev");
    const next = root.querySelector(".photo-next");
    let i = 0;
    const render = () => {
      track.style.transform = `translateX(-${i * 100}%)`;
      prev.disabled = i === 0;
      next.disabled = i === slides.length - 1;
    };
    prev.addEventListener("click", () => { i = Math.max(0, i - 1); render(); });
    next.addEventListener("click", () => { i = Math.min(slides.length - 1, i + 1); render(); });
    render();
  });
}

initCarousels();
update();
