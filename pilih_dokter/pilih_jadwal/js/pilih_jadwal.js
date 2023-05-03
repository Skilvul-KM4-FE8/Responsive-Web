// import module
import { getUrlVars } from "../../js/module/geturl.js";
import { calendar } from "./module/calendar.js";
import { navbarHTML } from "./module/navbar_html.js";

// get data from mock API
fetch(`https://64506b72a3221969114a2d25.mockapi.io/doctors?id=${getUrlVars().id}&page=1&limit=1`)
  .then((response) => response.json())
  .then((result) => {
    console.log(result[0])
  })
  .catch((e) => console.log(e.response.Text));

document.getElementById('banner').innerHTML = navbarHTML();
calendar()
