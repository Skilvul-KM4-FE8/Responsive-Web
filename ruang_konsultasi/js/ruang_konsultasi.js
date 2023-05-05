// memasukkan 
const STORAGE_KEY = "booked-doctors";

// get dom in section doctor list
const containerDoctorList = document.querySelector('#doctors-list');
console.log(containerDoctorList)

const bookedDoctorInLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
console.log(bookedDoctorInLocalStorage)

const sessionName = sessionStorage.getItem("name");
const sessionEmail = sessionStorage.getItem("email");
const sessionId = sessionStorage.getItem("id");

const today = new Date();
const thisDay = today.getDate();


let card = ''
// do if booked doctor exists in local storage
if (bookedDoctorInLocalStorage) {

    containerDoctorList.innerHTML = ""
    bookedDoctorInLocalStorage.forEach( doctor => {
        let consultDate = parseInt(doctor.bookedDate) 
        console.log(consultDate)
    
    if (doctor.accountUserName == sessionName && doctor.accountUserEmail == sessionEmail && doctor.accountUserId == sessionId) {

        let countDown = ''

        if (consultDate < thisDay ) {
            countDown = "Waktu Konsultasi Telah Berakhir"
        } else if (consultDate == thisDay) {
            countDown = "Konsultasi dilakukan hari ini, Harap perhatikan jadwal!"
        } else if (consultDate > thisDay) {
            countDown = `Konsultasi akan dilakukan ${consultDate - thisDay} Hari lagi`
        }

        card = `<div class="container mt-3">
                    <div class="row justify-content-md-center">
                        <div class="col-md-8">
                            <div class="container">
                                <div class="row p-3 border rounded shadow-sm stroke-card-border card-background">
                                <div class="col-md-2 d-flex justify-content-center align-items-center d-block">
                                    <img src="${doctor.doctorAvatar}" alt="image of ${doctor.doctorName}" class="rounded-circle img-fluid mx-auto">
                                </div>
                                <div class="col-md-9">
                                    <h4 class="text-carevul ms-0 mt-2"><b> dr. ${doctor.doctorName} </b></h4>
                                    <p class="text-light-gray mt-3">Jadwal Konsultasi : <span class="text-carevul"> ${doctor.day}, ${doctor.bookedDate} ${doctor.month} ${doctor.year} | ${doctor.startHour}:00 - ${doctor.endHour}:00 WIB </span>
                                        <br> ${doctor.doctorHospital} 
                                    </p>
                                    <h6 class="mb-3"><span class="text-carevul">Nama Pasien : ${doctor.userName} <br> Keluhan : ${doctor.keluhan} Pasien</span> <br>
                                    ${countDown}</h6>
                                </div>
                                <!-- <div class="col-md d-flex justify-content-center align-items-center d-block">
                                    <a href="./pilih_jadwal/?id=${doctor.id}" class="btn color-carevul-gradient text-white mx-auto px-5 py-2">Buat Janji</a>
                                </div> -->
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>`
                    
        


        containerDoctorList.innerHTML += card 
    }
    })
}

// Ubah status Login di navbar

const navbarLoginOrNot = document.querySelector("#navbar-login-or-not");

console.log(sessionName, sessionEmail, sessionId)

if (sessionName && sessionEmail && sessionId) {
  navbarLoginOrNot.innerHTML = `<h5>${sessionName}</h5>`
}