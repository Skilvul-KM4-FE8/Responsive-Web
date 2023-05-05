export function dateSchedule() {
    const containerSchedule = document.querySelector(".container-jadwal");
    const days = Array.from(document.querySelectorAll(".available"));
    // console.log(days[0].innerHTML)
    let dates = [];
    days.forEach((day) => {
      // day.addEventListener('click',function (){
      //   console.log(day)
      // })
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
    }
