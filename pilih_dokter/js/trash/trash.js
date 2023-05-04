// Semua kode yang tidak dipake tapi dibuang sayang

import { getUrlVars } from "../module/geturl.js"
// get data from mock API
const doctors = fetch("https://64506b72a3221969114a2d25.mockapi.io/doctors?category=")
doctors
    .then(response => response.json())
    .then(result => {
        let listDoctor = []
        // result.filter( doctor => {
        //     // console.log(doctor)
        //     console.log(doctor)
        //     return doctor.category === "umum"
        // })

        // result.filter( doctor => {
        //     return doctor.category === "umum"
        // })

        for( let doctor of result) {
            if (doctor.category == getUrlVars().category) {
                console.log(doctor)
                listDoctor.push(doctor)
                document.body.innerHTML += JSON.stringify(doctor)
            }
        }
    })
    .catch( e => console.log(e.response.Text))



    
let today = new Date(); 
// var time = today. getHours() + ":" + today
let thisHour = today.getHours()
let thisDate = today.getDate()
// let thisDay = today.getDay()
// let day = today.toString().split(" ")[0]
let day = today

// let tomorrow = new Date();
// tomorrow.setDate(tomorrow.getDate()+1);

let nextHour = 0
let newDate = []
dates.forEach(date => {
  let tomorrow = false
  if (date == thisDate) {
    nextHour = thisHour + 3;
  }
  if (nextHour >= 23) {
    nextHour = 0 + thisHour + 1;
    newDate = dates.map(d => parseInt(d)).map( d => d + 1)
    tomorrow = true;
    day.setDate(today.getDate()+1)
    // console.log(day)
  }

  console.log(nextHour, newDate)

  let now = today.toString().split(" ")

  nextHour++;

  let value = {
    id: id,
    date: date,
    day: now[0],
    month: now[1],
    year: now[3],
    startHour: nextHour,
    endHour: nextHour + 1
  }

  let stringifiedValue = JSON.stringify(value)


  containerSchedule.innerHTML += `<div class="form-check ms-0 py-3 px-5 border rounded mt-1 shadow-sm  border-2">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-1 d-flex justify-content-center align-items-center">
                                                <input required class="form-check-input" type="radio" name="book-date" id="book-date-${date}" style="font-size: 25px; border: 2px solid #3655D5;" value="${stringifiedValue}">
                                            </div>
                                            <div class="col">
                                                <label class="form-check-label" for="book-date-${date}">
                                                    <p class="lead mt-3">${date}, ${now[0]} ${now[1]} ${now[3]} </p>
                                                    <h5 class="text-carevul">${nextHour}:00 - ${nextHour + 1}:00</h5>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                  </div>`

// btn Book
const btnBook = document.querySelector('#book-btn');
btnBook.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem("temp-book-data", stringifiedValue);
  window.location.href = `../?category=umum`;
})

})

// console.log(time)
// console.log(day)
// console.log(thisDate)
// console.log(thisHour)
// console.log(thisDay)
// console.log(today)
// console.log(dates)
// console.log(value)

