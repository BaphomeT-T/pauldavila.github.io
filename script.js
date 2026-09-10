const translations = {
  es: {
    pageTitle: "Portafolio Paúl Dávila",
    sliderLabel: "Páginas del portafolio",
    prevLabel: "Página anterior",
    nextLabel: "Página siguiente",
    dotsLabel: "Indicador de páginas",
    goToPage: (n) => `Ir a página ${n}`,
    langSwitchLabel: "Cambiar idioma",
    closeLabel: "Cerrar",
    kickerPortfolio: "Portafolio",
    kickerProject: "Proyecto",
    introText: "Bienvenido a mi portafolio. Usa las flechas o desliza para navegar.",
    katuyText: "Katuy es una plataforma de comercio electrónico que transforma la manera de comprar y vender en Ecuador, brindando a los emprendedores una vitrina digital para dar a conocer sus productos y conectar con miles de clientes a nivel nacional. Desarrollada para el Ministerio de Telecomunicaciones (MINTEL), ahora Ministerio de Infraestructura y Tecnología, con arquitectura full-stack en Next.js y Tailwind CSS, API REST con autenticación JWT, base de datos MySQL y notificaciones en tiempo real mediante Sockets, construida bajo metodología Scrum en sprints iterativos.",
    katuyAlt: "Katuy Marketplace - plataforma de comercio electrónico",
    katuyNote: "Proyecto bajo acuerdo de confidencialidad (NDA) — repositorio no disponible públicamente.",
    lunaText: "Luna es un asistente de voz tipo Alexa construido sobre hardware reutilizado, pensado para dar una segunda vida a equipos en desuso mientras ofrece control domótico inteligente y conversacional en el hogar. Integra Home Assistant para el control de dispositivos (Tuya/Nexxt), un modelo de lenguaje vía DeepSeek API para responder preguntas tipo chatbot además de ejecutar comandos, reproducción de música mediante integración con Spotify, y acceso remoto seguro mediante VPN (Tailscale), todo desplegado en contenedores Docker con una interfaz propia en Next.js con soporte bilingüe (español/inglés).",
    lunaAlt: "Luna - asistente domótica con IA",
    lunaNote: "Proyecto personal — portafolio.",
    oficiosText: "Solución diseñada con metodología de Diseño Centrado en el Usuario (DCU): investigación con usuarios, sistema de diseño atómico (~20 componentes) y prototipo de alta fidelidad en Figma para conectar maestros de oficios tradicionales con aprendices.",
    oficiosAlt: "Oficios PRO - prototipo en Figma",
    figmaLink: "Ver prototipo en Figma",
    weatherText: "App móvil desarrollada con Flutter + Dart que permite buscar el clima en distintas ciudades usando la API pública de Open-Meteo (sin API key).",
    weatherAlt: "Weather Helper - pantalla principal",
    marketplaceText: "Página web hecha con Django que funciona como un marketplace. Muestra artículos en tu zona, permite subir artículos para vender y tiene chat en tiempo real con WebSockets entre compradores y vendedores según el producto.",
    marketplaceAlt: "PoliMarketPlace - captura del marketplace",
    japiboxText: "JAPIBOX es una plataforma de party games para jugar a distancia con amigos, pensada para llevar la diversión de los juegos de fiesta a cualquier videollamada o reunión virtual. Cuenta con una arquitectura modular donde cada juego se integra mediante contratos definidos (backend, frontend y catálogo) bajo un mismo slug, autenticación con Auth.js (Google y Discord) y modo invitado, y un sistema de datos con Prisma que gestiona roles de usuario, catálogo de juegos y versiones configurables (apto para todo público o +18).",
    japiboxAlt: "JAPIBOX - plataforma de party games",
    japiboxNote: "Proyecto privado en desarrollo — próximamente disponible al público.",
    foolyText: "Juego de fiesta inmersivo temático de Halloween desarrollado con Python que usa Twilio para llamar a los celulares de los jugadores y darles acertijos o retos que al completarse revelan un código para pasar a la siguiente ronda.",
    foolyAlt: "Fooly Scape Room - juego de escape room",
    githubLink: "Ver repositorio en GitHub",
  },
  en: {
    pageTitle: "Paúl Dávila Portfolio",
    sliderLabel: "Portfolio pages",
    prevLabel: "Previous page",
    nextLabel: "Next page",
    dotsLabel: "Page indicator",
    goToPage: (n) => `Go to page ${n}`,
    langSwitchLabel: "Switch language",
    closeLabel: "Close",
    kickerPortfolio: "Portfolio",
    kickerProject: "Project",
    introText: "Welcome to my portfolio. Use the arrows or swipe to navigate.",
    katuyText: "Katuy is an e-commerce platform that transforms how people buy and sell in Ecuador, giving entrepreneurs a digital storefront to showcase their products and connect with thousands of customers nationwide. Built for Ecuador's Ministry of Telecommunications (MINTEL), now the Ministry of Infrastructure and Technology, with a full-stack architecture in Next.js and Tailwind CSS, a REST API with JWT authentication, a MySQL database, and real-time notifications via Sockets, developed under Scrum methodology in iterative sprints.",
    katuyAlt: "Katuy Marketplace - e-commerce platform",
    katuyNote: "Project under a non-disclosure agreement (NDA) — repository not publicly available.",
    lunaText: "Luna is an Alexa-style voice assistant built on repurposed hardware, giving a second life to otherwise unused equipment while offering smart, conversational home automation control. It integrates Home Assistant for device control (Tuya/Nexxt), a language model via the DeepSeek API to answer chatbot-style questions in addition to executing commands, music playback through Spotify integration, and secure remote access via VPN (Tailscale), all deployed in Docker containers with a custom Next.js interface with bilingual support (Spanish/English).",
    lunaAlt: "Luna - AI home automation assistant",
    lunaNote: "Personal project — portfolio.",
    oficiosText: "Solution designed with a User-Centered Design (UCD) methodology: user research, an atomic design system (~20 components), and a high-fidelity Figma prototype to connect traditional trade masters with apprentices.",
    oficiosAlt: "Oficios PRO - Figma prototype",
    figmaLink: "View prototype on Figma",
    weatherText: "Mobile app built with Flutter + Dart that lets you check the weather in different cities using the public Open-Meteo API (no API key required).",
    weatherAlt: "Weather Helper - main screen",
    marketplaceText: "Web app built with Django that works as a marketplace. It shows listings near you, lets you post items for sale, and includes real-time chat via WebSockets between buyers and sellers per product.",
    marketplaceAlt: "PoliMarketPlace - marketplace screenshot",
    japiboxText: "JAPIBOX is a party games platform for playing remotely with friends, designed to bring the fun of party games to any video call or virtual hangout. It has a modular architecture where each game plugs in through defined contracts (backend, frontend, and catalog) under a single slug, authentication with Auth.js (Google and Discord) plus a guest mode, and a Prisma-based data system that manages user roles, the game catalog, and configurable versions (all-ages or +18).",
    japiboxAlt: "JAPIBOX - party games platform",
    japiboxNote: "Private project in development — coming soon to the public.",
    foolyText: "Immersive Halloween-themed party game built with Python that uses Twilio to call players' phones with riddles or challenges that, once solved, reveal a code to advance to the next round.",
    foolyAlt: "Fooly Scape Room - escape room game",
    githubLink: "View repository on GitHub",
  },
};

const LANG_STORAGE_KEY = "portfolio-lang";

function detectLanguage(){
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch (e) {}
  const browserLang = (navigator.language || "es").slice(0, 2).toLowerCase();
  return translations[browserLang] ? browserLang : "es";
}

let lang = detectLanguage();

function applyLanguage(){
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.title = dict.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (dict[key]) el.setAttribute("alt", dict[key]);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (dict[key]) el.setAttribute("aria-label", dict[key]);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });

  renderDots();
}

function setLanguage(next){
  if (!translations[next] || next === lang) return;
  lang = next;
  try { localStorage.setItem(LANG_STORAGE_KEY, lang); } catch (e) {}
  applyLanguage();
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

const pagesEl = document.getElementById("pages");
const pages = Array.from(document.querySelectorAll(".page"));
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsEl = document.getElementById("dots");

let index = 0;

function renderDots(){
  const dict = translations[lang];
  dotsEl.innerHTML = "";
  pages.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = "dot";
    d.setAttribute("role", "tab");
    d.setAttribute("aria-label", dict.goToPage(i + 1));
    d.setAttribute("aria-selected", i === index ? "true" : "false");
    d.addEventListener("click", () => goTo(i));
    dotsEl.appendChild(d);
  });
}

function update(){
  pagesEl.style.transform = `translateX(-${index * 100}%)`;
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === pages.length - 1;
  pages.forEach((p, i) => p.classList.toggle("is-active", i === index));
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

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

window.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("is-open")) return;
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

function openLightbox(src, alt){
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightbox.classList.add("is-open");
}

function closeLightbox(){
  lightbox.classList.remove("is-open");
}

document.querySelectorAll(".project-img").forEach((img) => {
  img.setAttribute("tabindex", "0");
  img.setAttribute("role", "button");
  img.addEventListener("click", () => openLightbox(img.currentSrc || img.src, img.alt));
  img.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " "){
      e.preventDefault();
      openLightbox(img.currentSrc || img.src, img.alt);
    }
  });
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
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

applyLanguage();
update();
