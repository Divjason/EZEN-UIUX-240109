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
let totalPaymentAmount = 0;
let clickedCount = 0;

itemClear.forEach((item) => {
  item.addEventListener("click", function () {
    const productPriceText =
      this.parentElement.parentElement.querySelector(".productPrice").innerText;
    const productPrice = parseFloat(productPriceText.replace(/,/g, ""));
    if (this.checked) {
      totalPaymentAmount += productPrice;
    } else {
      totalPaymentAmount -= productPrice;
    }
    updateTotalPaymentDisplay();

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
const cartCheck = document.querySelectorAll(".cart-chk");

cartCheckAll.addEventListener("click", () => {
  cartCheck.forEach((checkbox) => {
    checkbox.checked = cartCheckAll.checked;
  });
  totalPaymentAmount = 0;
  cartCheck.forEach((checkbox, idx) => {
    if (checkbox.checked) {
      const productPriceText = productPrices[idx].innerText;
      const productPrice = parseFloat(productPriceText.replace(/,/g, ""));
      totalPaymentAmount += productPrice;
    }
  });
  priceSum.forEach((item) => {
    item.innerText = totalPaymentAmount.toLocaleString();
  });
});

// Price Auto
const productNames = document.querySelectorAll(".productName");
const productPrices = document.querySelectorAll(".productPrice");
const priceSum = document.querySelectorAll(".priceSum");

fetch("../products.json")
  .then((response) => response.json())
  .then((jsonData) => {
    jsonData.data.forEach((item, idx) => {
      productNames[idx].innerText = item.name;
      productPrices[idx].innerText = item.price.toLocaleString() + "원";
      totalPaymentAmount += item.price;
    });
    update();
  });

cartCheck.forEach((checkbox) => {
  checkbox.addEventListener("click", function () {
    const productPriceText =
      this.parentElement.parentElement.querySelector(".productPrice").innerText;
    const productPrice = parseInt(productPriceText.replace(/,/g, ""));
    if (this.checked) {
      totalPaymentAmount += productPrice;
    } else {
      totalPaymentAmount -= productPrice;
    }
    update();
  });
});

function update() {
  priceSum.forEach((item) => {
    item.innerText = totalPaymentAmount.toLocaleString();
  });
}
