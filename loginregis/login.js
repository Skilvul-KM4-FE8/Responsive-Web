const BASE_URL = `https://6454b891f803f345762f6469.mockapi.io`;
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const loginForm = document.getElementById("form-login");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = {
    email: inputEmail.value,
    password: inputPassword.value,
  };

  let res = await fetch(`${BASE_URL}/users`);
  let item = await res.json();
  let tempData = [];
  for (let i = 0; i < item.length; i++) {
    if (item[i].email == user.email) {
      tempData.push(item[i]);
    }
  }

  if (tempData.length < 1) {
    alert("Email atau Password anda salah");
  } else if (tempData[0].email == user.email && tempData[0].password == user.password) {
    loginForm.reset();
    // location.href = " ";
    alert("email benar");
    console.log(tempData);
    localStorage.setItem('name',`${tempData[0].name}`);
    localStorage.setItem('email',`${tempData[0].email}`);
    localStorage.setItem('id',`${tempData[0].id}`);
  } else {
    alert("Email atau Password anda salah");
  }
});
