
const rowData = document.querySelector('#row-category')

fetch("https://645468d8c18adbbdfeb5a267.mockapi.io/kategor-dokter")
    .then(  response =>  response.json())
    .then( d => {
        d.forEach( data => {
            card +=     `<div class="row justify-content-md-center" id="row-category">
                            <div class="col-md-3 mt-3">
                            <a href="./../pilih_dokter?category=umum" class="link-kategori">
                                <div class="container-kategori-box rounded shadow">
                                <img src="./assets/images/Umum.svg" alt="" class="mundur img-fluid link-kategori" />
                                <div class="bg-dark-shadow text-white rounded">
                                    <h4>THT</h4>
                                </div>
                                </div>
                            </a>
                            </div>
                        </div>`
        })
    })
    .catch( abc => console.log(abc))