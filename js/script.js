// Navbar JS
let navbar = document.getElementById("navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    navbar.classList.add("scroll-on");
  } else {
    navbar.classList.remove("scroll-on");
  }
};

// Data Artikel
const container = document.getElementById('col-card');
fetch("https://6450d733e1f6f1bb22a05272.mockapi.io/medical-article")
.then((response) => {
    console.log(response);
    return response.json()
})
.then((result) => {
    result.forEach((post, index) => {
        const card = `
        <div class="card" id="card">
            <img src="${post.img}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.desc}</p>
            <a href="${post.fulltext}" id="card-goto-read" style="text-decoration: none;">Baca Selengkapnya</a>
            </div>
        </div>
        `;
        container.innerHTML += card;

        //membatasi 3 elemen lalu enter
        if ((index + 1) % 3 === 0) {
            const clearDiv = document.createElement('div');
            clearDiv.classList.add('clear');
            container.appendChild(clearDiv);
        }
    });
})
.catch(error => console.error(error));

