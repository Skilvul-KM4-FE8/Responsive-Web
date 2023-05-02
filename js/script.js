fetch("https://6450d733e1f6f1bb22a05272.mockapi.io/medical-article")
.then((response) => {
    console.log(response);
    return response.json()
})
.then((result) => {
    console.log(result);
})
.catch(() => {
    console.log(error);
})