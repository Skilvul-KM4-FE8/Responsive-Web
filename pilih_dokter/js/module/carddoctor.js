import { doctorTitle } from "./doctortitle.js";
import { getUrlVars } from "./geturl.js";

export function cardDoctor(doctor) {
  return    `<div class="container mt-3">
                      <div class="row p-3 border rounded shadow-sm stroke-card-border card-background">
                          <div class="col-md-2 d-flex justify-content-center align-items-center d-block">
                              <img src="${doctor.avatar}" alt="image of ${doctor.name}" class="rounded-circle img-fluid mx-auto">
                          </div>
                          <div class="col-md-8">
                              <h4 class="text-carevul ms-0 mt-2"><b> dr. ${doctor.name} ${doctorTitle(getUrlVars().category)}</b></h4>
                              <p class="text-secondary">${doctor.specialist} <br> ${doctor.hospital}</p>
                              <h5 class="mb-3"><span class="text-carevul">${doctor.totalPatient} Pasien</span> telah buat janji dengan dokter ini</h5>
                          </div>
                          <div class="col-md d-flex justify-content-center align-items-center d-block">
                              <a href="${doctor.id}" class="btn color-carevul-gradient text-white mx-auto px-5 py-2">Buat Janji</a>
                          </div>
                      </div>
                  </div>`;
}
