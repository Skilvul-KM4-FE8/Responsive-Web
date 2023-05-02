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
const doctors = fetch(`https://64506b72a3221969114a2d25.mockapi.io/doctors?category=${getUrlVars().category}`)
doctors
    .then(response => response.json())
    .then(result => console.log(result))
    .catch( e => console.log(e.response.Text))