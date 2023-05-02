// import from module
import { getUrlVars } from "./module/geturl.js";
import { cardDoctor } from "./module/carddoctor.js";

// get data from mock API
const doctors = fetch(`https://64506b72a3221969114a2d25.mockapi.io/doctors?category=${getUrlVars().category}`)
  .then((response) => response.json())
  .then((result) => {
    //  console.log(result)
    const containerDoctorsList = document.querySelector('#container-doctors');
    let doctors = ''
    result.forEach( doctor => {
      doctors += cardDoctor(doctor)
    })

    containerDoctorsList.innerHTML = doctors
  })
  .catch((e) => console.log(e.response.Text));

