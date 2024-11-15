let index = 0;

function mudarSlide(direcao) {
  const slides = document.querySelectorAll('.carrossel img');
  const totalSlides = slides.length;

  // Atualiza o índice do slide
  index = (index + direcao + totalSlides) % totalSlides;

  // Muda o carrossel para o slide correto
  document.querySelector('.carrossel').style.transform = `translateX(-${index * 100}%)`;
}

// Função para passar automaticamente a cada 3 segundos
setInterval(() => {
  mudarSlide(1); // Passa para o próximo slide
}, 3000); // 3000ms = 3 segundos

// Função para abrir o pop-up ao carregar a página
window.onload = function() {
  document.getElementById("popup").style.display = "block";
  document.body.classList.add("popup-active");
}

// Função para fechar o pop-up
function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.body.classList.remove("popup-active");
}
