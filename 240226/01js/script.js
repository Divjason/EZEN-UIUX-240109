const btn = document.querySelector("button");
const popupWidth = 600;
const popupHeight = 500;

btn.addEventListener("click", () => {
  const left = (window.screen.availWidth - popupWidth) / 2;
  const top = (window.screen.availHeight - popupHeight) / 2;
  window.open(
    "popup.html",
    "event",
    `width = ${popupWidth} height = ${popupHeight} left = ${left} top= ${top}`
  );
});
