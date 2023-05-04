const container = document.getElementById('read-another');
fetch("https://6450d733e1f6f1bb22a05272.mockapi.io/medical-article?page=1&limit=4")
.then((response) => {
    console.log(response);
    return response.json()
})
.then((result) => {
    result.forEach((post, index) => {
        const card = `
        <div class="card mb-3" style="max-width: 400px;" id="read-more-card">
            <div class="row">
                <div class="col-md-4">
                    <img src="${post.img}" class="rounded">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h6 class="card-title">${post.title}</h6>
                        <small class="text-body-secondary">Baca Selengkapnya</small>
                    </div>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += card;
    });
})
.catch(error => console.error(error));