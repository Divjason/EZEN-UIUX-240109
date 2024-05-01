const preloading = document.querySelector(".preloading");
preloading.addEventListener("click", () => {
  window.location.href = "https://www.naver.com";
});
setTimeout(() => {
  window.location.href = "https://www.naver.com";
}, 3000);
