// get data from mock API
const doctors = fetch("https://64506b72a3221969114a2d25.mockapi.io/doctors?category=")
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