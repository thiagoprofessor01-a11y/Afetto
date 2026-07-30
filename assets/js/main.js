/* Afetto — interações mínimas: entrada do hero, menu mobile, ano do rodapé */
(function () {
  "use strict";

  // Habilita a animação orquestrada do hero somente quando o JS carrega
  // (evita "flash" de conteúdo escondido se o JS falhar).
  document.body.classList.add("js-ready");

  // Menu mobile
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    var closeMenu = function () {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Fecha ao clicar num link ou apertar Esc
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  // Ano corrente no rodapé
  var ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();

  // Botão flutuante de WhatsApp: aparece só depois de rolar além do hero
  var waFloat = document.querySelector(".wa-float");
  if (waFloat) {
    var toggleFloat = function () {
      var passouHero = window.pageYOffset > window.innerHeight * 0.7;
      waFloat.classList.toggle("is-visible", passouHero);
    };
    window.addEventListener("scroll", toggleFloat, { passive: true });
    toggleFloat();
  }

  // Vídeo do espaço
  var clinicVideoWrap = document.querySelector(".clinic-video");
  var clinicVideo = clinicVideoWrap && clinicVideoWrap.querySelector("video");
  var clinicSource = clinicVideoWrap && clinicVideoWrap.querySelector("source");
  if (clinicVideoWrap && clinicVideo) {
    // O erro de um <source> que falha (404, formato ausente) dispara no
    // próprio <source>, não borbulha para o <video> — por isso escuta aqui.
    if (clinicSource) {
      clinicSource.addEventListener("error", function () {
        clinicVideoWrap.classList.add("video-empty");
      });
    }
    // Pausa e mostra controles para quem prefere menos movimento
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      clinicVideo.removeAttribute("autoplay");
      clinicVideo.removeAttribute("loop");
      clinicVideo.setAttribute("controls", "");
      clinicVideo.pause();
    }
  }

  // Meta Pixel: registra "Contact" a cada clique em botão de WhatsApp
  document.addEventListener("click", function (e) {
    var link = e.target.closest('a[href*="wa.me"]');
    if (link && typeof fbq === "function") {
      fbq("track", "Contact");
    }
  });
})();
