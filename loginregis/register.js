const BASE_URL = `https://6454b891f803f345762f6469.mockapi.io`;

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const formRegister = document.getElementById("form-register");

formRegister.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
  };

  let tempEmail = [];
  fetch(`${BASE_URL}/users`)
    .then((res) => res.json())
    .then((posts) => {
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].email == user.email) {
          //   tempEmail.push(posts[i].email);
          tempEmail.push(posts[i].email);
        }
      }
      if (tempEmail[0] == user.email) {
        alert("Email sudah terdaftar sebelumnya");
      } else {
        let response = fetch(`${BASE_URL}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            password: user.password,
          }),
        });
        // console.log(response);
        alert("Email berhasil didaftarkan");
        formRegister.reset();
      }
    });
});
