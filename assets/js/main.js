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

  // Mês atual nas chamadas de urgência (atualiza sozinho)
  var meses = ["janeiro","fevereiro","março","abril","maio","junho",
               "julho","agosto","setembro","outubro","novembro","dezembro"];
  var mes = meses[new Date().getMonth()];
  var alvos = document.querySelectorAll(".mes-atual");
  for (var i = 0; i < alvos.length; i++) alvos[i].textContent = mes;
})();
