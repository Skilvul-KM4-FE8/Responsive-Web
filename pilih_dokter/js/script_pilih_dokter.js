// Get data from the link
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    // console.log(hashes)
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars
}

console.log(getUrlVars().category)

// get data from mock API
const doctors = fetch("https://64506b72a3221969114a2d25.mockapi.io/doctors")
doctors
    .then(response => response.json())
    .then(result => {
        let listDoctor = []
        // result.filter( doctor => {
        //     // console.log(doctor)
        //     console.log(doctor)
        //     return doctor.category === "umum"
        // })

        // result.filter( doctor => {
        //     return doctor.category === "umum"
        // })

        for( let doctor of result) {
            if (doctor.category == getUrlVars().category) {
                console.log(doctor)
                listDoctor.push(doctor)
                document.body.innerHTML += JSON.stringify(doctor)
            }
        }
    })
    .catch( e => console.log(e.response.Text))