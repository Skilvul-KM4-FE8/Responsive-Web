const STORAGE_KEY = "booked-doctor";

const formBooked = document.querySelector("#form-book");

const tempData = JSON.parse(localStorage.getItem("temp-booked-data"));
console.log(tempData.name);

// fetch the API for getting the doctor's data
fetch(`https://64506b72a3221969114a2d25.mockapi.io/doctors?id=${tempData.id}&page=1&limit=1`)
  .then((response) => response.json())
  .then((d) => {
    let data = d[0]
    console.log(data)

    
  });
