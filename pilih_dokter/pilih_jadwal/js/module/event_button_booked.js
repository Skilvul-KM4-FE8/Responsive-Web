export  function eventBtnBooked  ()  {
    const btnBook = document.querySelector("#book-btn");
    btnBook.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = `./check_jadwal`;
    });
  }