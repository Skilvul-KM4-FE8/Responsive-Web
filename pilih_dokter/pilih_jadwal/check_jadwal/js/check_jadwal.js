const STORAGE_KEY = "booked-doctor";

const sessionName = sessionStorage.getItem("name");
const sessionEmail = sessionStorage.getItem("email");
const sessionId = sessionStorage.getItem("id");


const formBooked = document.querySelector("#form-book");

const tempData = JSON.parse(localStorage.getItem("temp-booked-data"));
console.log(tempData.name);
console.log("mulai");

// fetch the API for getting the doctor's data
fetch(`https://64506b72a3221969114a2d25.mockapi.io/doctors?id=${tempData.id}&page=1&limit=1`)
  .then((response) => response.json())
  .then((d) => {
    let data = d[0];
    console.log(data.name);

    formBooked.innerHTML = `<h5>Jadwal Anda</h5>
                            <p>Tanggal : ${tempData.date} ${tempData.month} ${tempData.year} | ${tempData.startHour}:00 - ${tempData.endHour}:00 WIB <br>
                            Nama Dokter : <span class="text-carevul">dr. ${data.name}</span></p>
                            <h6>Nama Lengkap :  </h6>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Masukkan Nama Lengkap" aria-label="Username" aria-describedby="basic-addon1" name="client_name" id="input-name">
                            </div>
                            <h6>Keluhan : </h6>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="input-keluhan"></textarea>
                                <label for="input-keluhan">Silahkan tuliskan keluhan anda : </label>
                            </div>
                            <div class="hidden-input">
                                <input type="hidden" id="doctor-name" name="doctor-name" value="${data.name}">
                                <input type="hidden" id="doctor-avatar" name="doctor-avatar" value="${data.avatar}">
                                <input type="hidden" id="doctor-category" name="doctor-category" value="${data.category}">
                                <input type="hidden" id="doctor-hospital" name="doctor-hospital" value="${data.hospital}">
                                <input type="hidden" id="doctor-id" name="doctor-id" value="${data.id}">
                                <input type="hidden" id="date" name="date" value="${tempData.date}">
                                <input type="hidden" id="year" name="year" value="${tempData.year}">
                                <input type="hidden" id="month" name="month" value="${tempData.month}">
                                <input type="hidden" id="day" name="day" value="${tempData.day}">
                                <input type="hidden" id="start-hour" name="start-hour" value="${tempData.startHour}">
                                <input type="hidden" id="end-hour" name="end-hour" value="${tempData.endHour}">
                                <input type="hidden" id="user-account-name" name="end-hour" value="${sessionId}">
                                <input type="hidden" id="user-account-email" name="end-hour" value="${sessionEmail}">
                                <input type="hidden" id="user-account-id" name="end-hour" value="${sessionId}">
                                </div>
                            <div class="text-center mt-4">
                                <p class="fw-light text-carevul"> Harap memasuki roomchat konsultasi pada jadwal yang di tentukan</p>

                                <button id="btn-confirm" class="btn color-carevul-gradient text-white" type="submit" name="confirm">Konfirmasi</button>
                            </div>`;
    console.log("api");

    const inputName = document.getElementById("input-name");
    const inputKeluhan = document.getElementById("input-keluhan");
    const doctorName = document.getElementById("doctor-name");
    const doctorAvatar = document.getElementById("doctor-avatar");
    const doctorCategory = document.getElementById("doctor-category");
    const doctorHospital = document.getElementById("doctor-hospital");
    const doctorId = document.getElementById("doctor-id");
    const bookedDate = document.getElementById("date");
    const year = document.getElementById("year");
    const month = document.getElementById("month");
    const day = document.getElementById("day");
    const startHour = document.getElementById("start-hour");
    const endHour = document.getElementById("end-hour");
    const accountUserName = document.getElementById("user-account-name");
    const accountUserEmail = document.getElementById("user-account-email");
    const accountUserId = document.getElementById("user-account-id");

    const btnConfirm = document.getElementById("btn-confirm");

    // const validateInput = () => {
    //     if (inputName.value === "") return false;
    //     if (inputKeluhan.value === "") return false;
    //     return true;
    // }

    const handleSubmitForm = (event) => {
      event.preventDefault();

      if(sessionEmail && sessionName && sessionId) {
        
        const bookedDoctor = {
          userName: inputName.value,
          keluhan: inputKeluhan.value,
          doctorName: doctorName.value,
          doctorAvatar: doctorAvatar.value,
          doctorCategory: doctorCategory.value,
          doctorHospital: doctorHospital.value,
          doctorId: doctorId.value,
          bookedDate: bookedDate.value,
          year: year.value,
          month: month.value,
          day: day.value,
          startHour: startHour.value,
          endHour: endHour.value,
          accountUserName: accountUserName.value,
          accountUserEmail: accountUserEmail.value,
          accountUserId: accountUserId.value
        };
  
        // if (validateInput) {
        const bookedDoctorInLocalStorage = JSON.parse(localStorage.getItem("booked-doctors"));
        // }
  
        if (bookedDoctorInLocalStorage) {
          const newBookedDoctor = [...bookedDoctorInLocalStorage, bookedDoctor];
          localStorage.setItem("booked-doctors", JSON.stringify(newBookedDoctor));
        } else {
          const newBookedDoctor = [bookedDoctor];
          localStorage.setItem("booked-doctors", JSON.stringify(newBookedDoctor));
        }
  
        window.location.href = `./../../../ruang_konsultasi`;
      } else {
        document.body.innerHTML += `<div class="latar d-flex justify-content-center align-items-center">
        <div class="bungkus">
            <div class="d-flex justify-content-center align-items-center">
                <div class="kotak">
                    <h1 class="text-carevul">Silahkan Login Dulu....</h1>
                    <p>Kamu akan di arahkan ke halaman login dalam 3 detik...</p>
                </div>
            </div>
        </div>
    </div>`

    setTimeout(() => {
      window.location.href = `./../../../loginregis/login.html`;
    },3000)
      }

    };

    formBooked.addEventListener("submit", handleSubmitForm);
  });
console.log("setelah API");

console.log("selesai");



// Ubah status Login di navbar
console.log(sessionName, sessionEmail, sessionId)

const navbarLoginOrNot = document.querySelector("#navbar-login-or-not");

if (sessionName && sessionEmail && sessionId) {
  navbarLoginOrNot.innerHTML = `<h5>${sessionName}</h5>`
}