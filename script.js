// === CAMBIO DE TEMA ===
const btnTema = document.getElementById("btnTema");

if (btnTema) {
  if (localStorage.getItem("tema") === "oscuro") {
    document.body.classList.add("modo-oscuro");
    btnTema.textContent = "☀️ Modo claro";
  }

  btnTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
      btnTema.textContent = "☀️ Modo claro";
      localStorage.setItem("tema", "oscuro");
    } else {
      btnTema.textContent = "🌙 Modo oscuro";
      localStorage.setItem("tema", "claro");
    }
  });
}

// === MENÚ RESPONSIVE ===
const btnMenu = document.getElementById("btnMenu");
const nav = document.getElementById("nav");

if (btnMenu && nav) {
  btnMenu.addEventListener("click", () => {
    nav.classList.toggle("mostrar");
  });
}

const links = document.querySelectorAll(".nav a");
links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("mostrar");
  });
});

// === ANIMAR BARRAS DE HABILIDADES ===
const barras = document.querySelectorAll(".progreso");

function mostrarHabilidades() {
  const seccion = document.querySelector("#habilidades");
  const seccionTop = seccion.getBoundingClientRect().top;
  const alturaPantalla = window.innerHeight;

  if (seccionTop < alturaPantalla - 100) {
    barras.forEach(barra => {
      const porcentaje = barra.getAttribute("data-porcentaje");
      barra.style.width = porcentaje + "%";
    });
    window.removeEventListener("scroll", mostrarHabilidades);
  }
}

window.addEventListener("scroll", mostrarHabilidades);

// === ANIMACIONES AL HACER SCROLL ===
const elementosAnimados = document.querySelectorAll('.animado');

function mostrarAnimados() {
  const alturaPantalla = window.innerHeight;

  elementosAnimados.forEach(el => {
    const posicionTop = el.getBoundingClientRect().top;
    if (posicionTop < alturaPantalla - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', mostrarAnimados);
window.addEventListener('load', mostrarAnimados);
