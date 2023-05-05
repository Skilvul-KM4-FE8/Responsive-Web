import { categoryCard } from "./module/card-category.js";
const rowData = document.querySelector("#row-category");

fetch("https://645468d8c18adbbdfeb5a267.mockapi.io/kategor-dokter")
  .then((response) => response.json())
  .then((d) => {
    d.forEach((data) => {
      let card = "";
      card = categoryCard(data);

      rowData.innerHTML += card;
    });
  })
  .catch((abc) => console.log(abc));
