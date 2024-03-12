const quoteURL = "http://dummyjson.com/quotes";

fetch(quoteURL)
  .then((response) => response.json())
  .then((data) => {
    const result = document.querySelector("#result");
    const random = Math.floor(Math.random() * 30);
    result.querySelector(".quote").innerText = data.quotes[random].quote;
    result.querySelector(".author").innerText = data.quotes[random].author;
  });
