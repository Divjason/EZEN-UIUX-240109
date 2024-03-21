const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const seed = document.querySelector("#seed");
  const total = document.querySelector("#total");
  const result = document.querySelector("#result");

  let winner = new Set();
  while (winner.size < total.value) {
    let picked = Math.floor(Math.random() * seed.value + 1);
    winner.add(`${picked}번, `);
  }

  result.innerText = `당첨자 : ${Array.from(winner).join("")}`;
});
