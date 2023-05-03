// import from module
import { getUrlVars } from "./module/geturl.js";
import { cardDoctor } from "./module/carddoctor.js";
import { navbarHTML } from "../pilih_jadwal/js/module/navbar_html.js";

// get data from mock API
fetch(`https://64506b72a3221969114a2d25.mockapi.io/doctors?category=${getUrlVars().category}`)
  .then((response) => response.json())
  .then((result) => {
    const containerDoctorsList = document.querySelector('#container-doctors');
    let doctors = ''
    result.forEach( doctor => doctors += cardDoctor(doctor))
    containerDoctorsList.innerHTML = doctors
  })
  .catch((e) => console.log(e.response.Text));

document.getElementById('banner').innerHTML = navbarHTML()