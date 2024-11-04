// Função para reproduzir o canal selecionado
function playChannel(link) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = link;
    videoPlayer.style.display = "block";
    videoPlayer.height = "315"; // Definindo a altura do player
}

// Função de carrossel de banners, alterando automaticamente a cada 7 segundos
function startBannerCarousel() {
    const bannerFolder = "publicidade/";
    const banners = ["banner1.jpg", "banner2.jpg", "banner3.jpg", "banner4.jpg", "banner5.jpg"];
    let currentBannerIndex = 0;

    // Função para trocar o banner
    function changeBanner() {
        const bannerElement = document.getElementById('banner');
        bannerElement.src = bannerFolder + banners[currentBannerIndex];
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    }

    // Iniciar o carrossel e mudar o banner a cada 7 segundos
    changeBanner(); // Mostrar o primeiro banner imediatamente
    setInterval(changeBanner, 7000); // Trocar o banner a cada 7 segundos
}

// Carregar o carrossel de banners ao abrir a página
window.onload = function() {
    startBannerCarousel();
};
