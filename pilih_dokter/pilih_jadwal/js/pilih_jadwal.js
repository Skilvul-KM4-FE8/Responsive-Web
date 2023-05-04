// import module
import { getUrlVars } from "../../js/module/geturl.js";
import { calendar } from "./module/calendar.js";
import { navbarHTML } from "./module/navbar_html.js";
import { cardAboutDoctor } from "./module/card_about_doctor.js";
import { eventBtnBooked } from "./module/event_button_booked.js";
import { containerScheduleHTML } from "./module/container_schedule_html.js";

const STORAGE_KEY = "temp-booked-data";

let params = new URL(document.location).searchParams;
let id = params.get("id");

// get data from mock API
fetch(`https://64506b72a3221969114a2d25.mockapi.io/doctors?id=${getUrlVars().id}&page=1&limit=1`)
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
      }
      if (nextHour >= 23) {
        nextHour = 0 + thisHour + 1;
        newDate = dates.map((d) => parseInt(d)).map((d) => d + 1);
        tomorrow = true;
        day.setDate(today.getDate() + 1);
        // console.log(day)
      }

      console.log(nextHour, newDate);

      let now = today.toString().split(" ");

      nextHour++;

      let value = {
        id: id,
        // name: doctorNow.name,
        date: date,
        day: now[0],
        month: now[1],
        year: now[3],
        startHour: nextHour,
        endHour: nextHour + 1,
      };

      let stringifiedValue = JSON.stringify(value);

      containerSchedule.innerHTML += containerScheduleHTML(date,stringifiedValue,tomorrow,now,)

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
