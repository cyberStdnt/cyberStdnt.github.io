/* =========================================================
   Yassir Mouyiwa — Portfolio
   Lightweight behavior
   ========================================================= */

(function () {
  "use strict";

  const html = document.documentElement;

  /* — Language switch — */
  const langBtn = document.querySelector("[data-lang-toggle]");
  const setLang = (lang) => {
    html.setAttribute("lang", lang);
    if (langBtn) langBtn.textContent = lang === "fr" ? "EN" : "FR";
    const next = lang === "fr" ? "Fr" : "En";
    const titleAttr = html.dataset["title" + next];
    if (titleAttr) document.title = titleAttr;
    try { localStorage.setItem("portfolio-lang", lang); } catch (_) {}
  };

  let initialLang = "fr";
  try {
    const stored = localStorage.getItem("portfolio-lang");
    if (stored === "fr" || stored === "en") initialLang = stored;
  } catch (_) {}
  setLang(initialLang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const current = html.getAttribute("lang") || "fr";
      setLang(current === "fr" ? "en" : "fr");
    });
  }

  /* — Theme switch — */
  const themeBtn = document.querySelector("[data-theme-toggle]");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const setTheme = (theme) => {
    html.setAttribute("data-theme", theme);
    if (themeBtn) themeBtn.textContent = theme === "dark" ? "☀" : "☾";
    try { localStorage.setItem("portfolio-theme", theme); } catch (_) {}
  };

  let initialTheme = prefersDark ? "dark" : "light";
  try {
    const stored = localStorage.getItem("portfolio-theme");
    if (stored === "dark" || stored === "light") initialTheme = stored;
  } catch (_) {}
  setTheme(initialTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = html.getAttribute("data-theme") || "light";
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* — Year in footer — */
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* — Nav shadow on scroll — */
  const nav = document.querySelector(".nav");
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) {
        nav.style.boxShadow = "0 1px 0 var(--border-soft), 0 4px 20px rgba(0,0,0,0.04)";
      } else {
        nav.style.boxShadow = "";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
