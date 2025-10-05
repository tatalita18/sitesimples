// Boas vinda ao site
alert("Bem-Vindo ao meu Site!");

//Menu Sanduiche

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Lista das imagens
const imagens = [
  "img/eueminhassobrinhas.jpg",
  "img/mylove.jpg",
  "img/eueminieu.jpg",
  "img/cacau1.jpg",
  "img/cacau2.jpg"
];

function trocarImagem(index) {
  const mainImage = document.getElementById("mainImage");
  const buttons = document.querySelectorAll(".btn");

  // troca a imagem principal
  mainImage.src = imagens[index];

  // remove destaque de todos os botões
  buttons.forEach(btn => btn.classList.remove("active"));

  // adiciona destaque no botão clicado
  buttons[index].classList.add("active");
}

// ===== SLIDESHOW AUTOMÁTICO =====
let indexAtual = 0;
const mainImage = document.getElementById("mainImage");
const buttons = document.querySelectorAll(".btn");

// Função para atualizar a imagem automaticamente
function avancarImagem() {
  indexAtual = (indexAtual + 1) % imagens.length; // avança o índice
  trocarImagem(indexAtual); // troca a imagem
}

// Troca automática a cada 3 segundos (3000 ms)
setInterval(avancarImagem, 3000);

// formulário
document.getElementById("form-contato").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita recarregar a página
  alert("Mensagem enviada com sucesso!");
  this.reset(); // limpa os campos
});

//Mudar Tema
function mudarTema() {
  document.body.classList.toggle("dark-mode");

}
