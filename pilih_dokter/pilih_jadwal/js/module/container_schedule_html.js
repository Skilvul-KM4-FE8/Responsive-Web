export function containerScheduleHTML() {
    return `<div class="form-check ms-0 py-3 px-5 border rounded mt-1 shadow-sm  border-2">
    <div class="container">
        <div class="row">
            <div class="col-1 d-flex justify-content-center align-items-center">
                <input class="form-check-input" type="radio" name="book-date" id="book-date-${date}" style="font-size: 25px; border: 2px solid #3655D5;" value='${stringifiedValue}' ${
date == thisDate ? "required" : ""
}>
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
}