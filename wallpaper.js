document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const wallpaperUrl = isLocal ? 'assets/Wallpaper1.png' : 'https://faketeamstr.github.io/Windows-12-Sim/assets/Wallpaper1.png';
    body.style.background = `url("${wallpaperUrl}") no-repeat fixed`;
    body.style.backgroundSize = 'cover';
});