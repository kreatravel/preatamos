"use strict";

const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = themeToggle.querySelector("span:last-child");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
let savedTheme = null;

// El sitio sigue funcionando cuando el navegador bloquea el almacenamiento.
try {
  const storedTheme = localStorage.getItem("preatamos-theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    savedTheme = storedTheme;
  }
} catch {
  // La preferencia se conservará solo durante esta visita.
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === "dark";
  themeToggle.setAttribute("aria-label", isDark ? "Activar tema claro" : "Activar tema oscuro");
  themeLabel.textContent = isDark ? "Tema claro" : "Tema oscuro";
}

applyTheme(savedTheme ?? (systemTheme.matches ? "dark" : "light"));
themeToggle.hidden = false;

themeToggle.addEventListener("click", () => {
  savedTheme = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(savedTheme);
  try {
    localStorage.setItem("preatamos-theme", savedTheme);
  } catch {
    // Cambiar el tema no requiere acceso a localStorage.
  }
});

systemTheme.addEventListener("change", (event) => {
  if (savedTheme === null) {
    applyTheme(event.matches ? "dark" : "light");
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const mobileLayout = window.matchMedia("(max-width: 760px)");

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  navigation.dataset.collapsed = String(!isOpen);
}

setMenuOpen(false);
menuToggle.hidden = false;

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
  if (mobileLayout.matches && event.target.closest("a")) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileLayout.matches && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

mobileLayout.addEventListener("change", () => setMenuOpen(false));
