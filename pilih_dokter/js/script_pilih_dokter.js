// import from module
import { getUrlVars } from "./module/geturl.js";

// get data from mock API
const doctors = fetch(`https://64506b72a3221969114a2d25.mockapi.io/doctors?category=${getUrlVars().category}`);
doctors
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((e) => console.log(e.response.Text));

