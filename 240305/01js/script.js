import products from "./products.js";

const button = document.querySelector(".container > button");
const newlisting = document.querySelector(".newlisting");
const asceButton = document.querySelector(".ascending");
const descButton = document.querySelector(".descending");
const select = document.querySelector("select");

const removeItems = () => {
  const items = document.querySelectorAll("li");
  items.forEach((item) => {
    item.remove();
  });
};

const selectCategory = (e) => {
  const selectedIndex = e.target.options.selectedIndex;
  const value = e.target.options[selectedIndex].value;

  const filtered = products.data.filter((product) => {
    return product.category === value;
  });

  removeItems();
  filtered.forEach((product) => {
    createItem(product);
  });
};

const sortNew = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.id - b.id;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const sortAsce = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.price - b.price;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const sortDesc = () => {
  const myProducts = products.data.sort((a, b) => {
    return b.price - a.price;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const createItem = function (product) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const img = document.createElement("img");

  li.id = product.id;

  const attr = document.createAttribute("src");
  attr.value = product.img;
  img.setAttributeNode(attr);

  h3.className = "name";
  h3.innerText = product.name;

  const price = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW",
  }).format(product.price);

  span.className = "price";
  span.innerText = price;

  div.append(h3, span);
  li.append(div, img);
  ul.appendChild(li);
};

const importData = () => {
  products.data.map((product) => {
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });
};

button.addEventListener("click", importData);
newlisting.addEventListener("click", sortNew);
asceButton.addEventListener("click", sortAsce);
descButton.addEventListener("click", sortDesc);
select.addEventListener("change", selectCategory);
