let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://dummyjson.com/quotes/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.quote; 
      author.innerText = item.author;
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
      quote.innerText = "Failed to fetch quote. Try again.";
      author.innerText = "";
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
