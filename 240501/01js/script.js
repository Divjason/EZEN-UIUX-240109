const tabBtns = document.querySelectorAll(".tab-btn a");
tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener("click", function () {
    tabBtns.forEach((otherBtn) => {
      otherBtn.classList.remove("active");
    });
    this.classList.add("active");
  });
});
