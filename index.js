document.addEventListener("DOMContentLoaded", () => {
  const bootImg = document.querySelector(".boot");
  
  bootImg.addEventListener("animationend", () => {
    window.location.href = "wallpaper.html";
  });
});