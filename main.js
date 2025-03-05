document.addEventListener("DOMContentLoaded", function () {
    // Carrossel do Banner
    const bannerImages = document.querySelectorAll(".banner-img");
    let bannerCurrentIndex = 0;
    const bannerIntervalTime = 5000;
    let bannerInterval;

    // Função para mostrar a imagem do banner
    function showBannerImage(index) {
        bannerImages.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    // Função para avançar para a próxima imagem do banner
    function nextBannerImage() {
        bannerCurrentIndex = (bannerCurrentIndex + 1) % bannerImages.length;
        showBannerImage(bannerCurrentIndex);
    }

    // Função para voltar para a imagem anterior do banner
    function prevBannerImage() {
        bannerCurrentIndex = (bannerCurrentIndex - 1 + bannerImages.length) % bannerImages.length;
        showBannerImage(bannerCurrentIndex);
    }

    // Iniciar o carrossel do banner
    function startBannerInterval() {
        bannerInterval = setInterval(nextBannerImage, bannerIntervalTime);
    }

    function stopBannerInterval() {
        clearInterval(bannerInterval);
    }

    // Iniciar o carrossel assim que o DOM carregar
    showBannerImage(bannerCurrentIndex);
    startBannerInterval();

    // Adicionar eventos para navegação manual
    const prevButton = document.createElement("button");
    prevButton.innerHTML = "&#8592;"; // Seta para a esquerda
    prevButton.classList.add("carousel-nav", "prev");
    document.body.appendChild(prevButton); // Você pode posicioná-lo no lugar desejado via CSS

    const nextButton = document.createElement("button");
    nextButton.innerHTML = "&#8594;"; // Seta para a direita
    nextButton.classList.add("carousel-nav", "next");
    document.body.appendChild(nextButton); // Você pode posicioná-lo no lugar desejado via CSS

    // Evento de navegação manual
    prevButton.addEventListener("click", function () {
        stopBannerInterval();
        prevBannerImage();
        startBannerInterval();
    });

    nextButton.addEventListener("click", function () {
        stopBannerInterval();
        nextBannerImage();
        startBannerInterval();
    });

    // Garantir que o carrossel não reinicie automaticamente ao passar para a próxima imagem
    bannerImages.forEach((img) => {
        img.addEventListener("mouseenter", stopBannerInterval);
        img.addEventListener("mouseleave", startBannerInterval);
    });
});

   

    

