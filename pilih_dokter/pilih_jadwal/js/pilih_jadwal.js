// import module
// import { getUrlVars } from "../../js/module/geturl.js";
import { calendar } from "./module/calendar.js";
import { navbarHTML } from "./module/navbar_html.js";
import { cardAboutDoctor } from "./module/card_about_doctor.js";
import { eventBtnBooked } from "./module/event_button_booked.js";
// import { containerScheduleHTML } from "./module/container_schedule_html.js";

const STORAGE_KEY = "temp-booked-data";

const sessionName = sessionStorage.getItem("lastname");
const sessionEmail = sessionStorage.getItem("email");
const sessionId = sessionStorage.getItem("id");
const navbarLoginOrNot = document.querySelector("#navbar-login-or-not");

let params = new URL(document.location).searchParams;
let id = params.get("id");

// get data from mock API
fetch(`https://64506b72a3221969114a2d25.mockapi.io/doctors?id=${id}&page=1&limit=1`)
  .then((response) => response.json())
  .then((result) => {
    const cardDoctor = document.querySelector("#card-doctor");
    let doctorNow = "";
    result.forEach((doctor) => {
      cardDoctor.innerHTML = cardAboutDoctor(doctor);
      console.log(doctor);
      doctorNow = doctor;
    });

    console.log(doctorNow);

    const containerSchedule = document.querySelector(".container-jadwal");
    const days = Array.from(document.querySelectorAll(".available"));
    // console.log(days[0].innerHTML)
    let dates = [];
    days.forEach((day) => {
      dates.push(day.innerHTML);
    });

    let today = new Date();
    // var time = today. getHours() + ":" + today
    let thisHour = today.getHours();
    let thisDate = today.getDate();
    // let thisDay = today.getDay()
    // let day = today.toString().split(" ")[0]
    let day = today;

    // let tomorrow = new Date();
    // tomorrow.setDate(tomorrow.getDate()+1);

    let nextHour = 0;
    let newDate = [];
    dates.forEach((date) => {
      let tomorrow = false;
      if (date == thisDate) {
        nextHour = thisHour + 3;
        console.log(nextHour)
        day.setDate(today.getDate() + 1);
        if (nextHour > 19 ) {
          nextHour = 0 + 5;
          console.log(nextHour)
        }
      }
      if (nextHour > 19) {
        if (nextHour <= 8) {
          nextHour = 0 + thisHour + 5;
        } else {
          nextHour = 0 + thisHour + 1;
        }
        
        newDate = dates.map((d) => parseInt(d)).map((d) => d + 1);
        tomorrow = true;
        day.setDate(today.getDate() + 1);
        console.log(nextHour)
        // console.log(day)
        
      }

      console.log(nextHour, newDate);

      let now = today.toString().split(" ");

      nextHour++;

      let value = {
        id: id,
        name: doctorNow.name,
        date: date,
        day: now[0],
        month: now[1],
        year: now[3],
        startHour: nextHour,
        endHour: nextHour + 1,
        userId: sessionId,
        userEmail: sessionEmail,
        userName: sessionName,
      };

      let stringifiedValue = JSON.stringify(value);

      containerSchedule.innerHTML += `<div class="form-check ms-0 py-3 px-5 border rounded mt-1 shadow-sm  border-2">
      <div class="container">
          <div class="row">
              <div class="col-1 d-flex justify-content-center align-items-center">
                  <input class="form-check-input" type="radio" name="book-date" id="book-date-${date}" style="font-size: 25px; border: 2px solid #3655D5;" value='${stringifiedValue}' ${date == thisDate ? "required" : ""}>
              </div>
              <div class="col">
                  <label class="form-check-label" for="book-date-${date}">
                      <p class="lead mt-3">${date}, ${now[0]} ${now[1]} ${now[3]} </p>
                      <h5 class="text-carevul">${nextHour}:00 - ${nextHour + 1}:00</h5>
                  </label>
              </div>
          </div>
      </div>
    </div>`;

      const radioBtnValue = Array.from(document.querySelectorAll("input[name = book-date]"));
      radioBtnValue.forEach((btn) => {
        btn.addEventListener("click", () => {
          let radval = JSON.parse(btn.value);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(radval));
          console.log(JSON.stringify(radval));
        });
      });

      // btn Book
      eventBtnBooked();
    });
  })
  .catch((e) => console.log(e));

// book
document.getElementById("banner").innerHTML = navbarHTML();
calendar();

const radioBtnValue = Array.from(document.querySelectorAll("input[name = book-date]"));
radioBtnValue.forEach((btn) => {
  btn.addEventListener("click", () => {
    let radval = JSON.parse(btn.value);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(radval));
    console.log(JSON.stringify(radval));
  });
});

// Ubah status Login di navbar

if (sessionName && sessionEmail && sessionId) {
  navbarLoginOrNot.innerHTML = `<h5>${sessionName}</h5>`;
}
