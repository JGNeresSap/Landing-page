const botoes = document.querySelectorAll(".ShowTxt");
botoes.forEach((botao) => {
  botao.addEventListener("click", function () {
    const caixaPai = this.closest(".duvida-box");
    if (this.innerHTML === "+") {
      botoes.forEach((outroBotao) => {
        const outraCaixa = outroBotao.closest(".duvida-box");
        if (outraCaixa !== caixaPai) {
          outraCaixa.style.maxHeight = "55px";
          outroBotao.innerHTML = "+";
        }
      });
      caixaPai.style.maxHeight = caixaPai.scrollHeight + "px";
      this.innerHTML = "-";
    } else {
      caixaPai.style.maxHeight = "55px";
      this.innerHTML = "+";
    }
  });
});
const toggleBtn = document.getElementById("mobile-menu");
const menuList = document.querySelector(".menu-container ul");
toggleBtn.addEventListener("click", function () {
  menuList.classList.toggle("menu-open");
  toggleBtn.classList.toggle("active");
});
const sr = ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 700,
  easing: "ease-out",
});
sr.reveal(".reveal-tittle", { origin: "top" });
sr.reveal(".reveal-subtittle", { delay: 200 });
sr.reveal(".reveal-img", { origin: "left", delay: 200, scale: 0.95 });
sr.reveal(".reveal-txt", { origin: "right", delay: 400, scale: 0.95 });
sr.reveal(".card", {
  interval: 200,
  scale: 0.95,
});
sr.reveal(".Causas-card", {
  interval: 200,
  scale: 0.95,
});
sr.reveal(".duvida-box", {
  interval: 150,
  origin: "bottom",
});
sr.reveal(".reveal-img2", {
  origin: "right",
  delay: 200,
  scale: 0.95,
});
sr.reveal(".reveal-contato-left", {
  origin: "left",
  delay: 200,
});
sr.reveal(".reveal-contato-right", {
  origin: "right",
  delay: 200,
});
sr.reveal(".reveal-contato-bottom", {
  origin: "bottom",
  delay: 400,
});
sr.reveal(".reveal-container", {
  delay: 100,
});
const links = document.querySelectorAll(".menu-container a");
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 100;
  links.forEach((link) => {
    let section = document.querySelector(link.getAttribute("href"));
    if (
      section &&
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
document.querySelectorAll(".menu-container ul a").forEach((link) => {
  link.addEventListener("click", () => {
    menuList.classList.remove("menu-open");
    toggleBtn.classList.remove("active");
  });
});
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Mensagem enviada com sucesso!");
});
