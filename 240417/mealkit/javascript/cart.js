const allClear = document.querySelector(".btn-all-clear");
const checkAll = document.querySelector(".cart-items-check-all");
const cartItems = document.querySelector(".cart-items");
const summary = document.querySelector(".cart-items-summary");
const btnOrder = document.querySelector(".btn-order");
const img = document.querySelector(".cart-item-empty");

allClear.addEventListener("click", () => {
  checkAll.style.display = "none";
  cartItems.style.display = "none";
  summary.style.display = "none";
  btnOrder.style.display = "none";
  img.style.display = "block";
});

const itemClear = document.querySelectorAll(".cart-content .btn-clear");

let clickedCount = 0;

itemClear.forEach((item) => {
  item.addEventListener("click", function () {
    this.parentElement.parentElement.style.display = "none";
    clickedCount++;

    if (clickedCount === itemClear.length) {
      checkAll.style.display = "none";
      cartItems.style.display = "none";
      summary.style.display = "none";
      btnOrder.style.display = "none";
      img.style.display = "block";
    }
  });
});

const cartCheckAll = document.querySelector(".cart-chk-all");

cartCheckAll.addEventListener("click", () => {
  const cartCheck = document.querySelectorAll(".cart-chk");
  cartCheck.forEach((checkbox) => {
    checkbox.checked = cartCheckAll.checked;
  });
});

const a = 11760;
const b = 18800;

const price01 = document.querySelector(".price01");
const price02 = document.querySelector(".price02");
const priceSum = document.querySelectorAll(".priceSum");

price01.innerText = a.toLocaleString() + " 원";
price02.innerText = b.toLocaleString() + " 원";

const switchCommas = (a + b).toLocaleString();
priceSum.forEach((item) => {
  item.innerText = switchCommas + "원";
});
