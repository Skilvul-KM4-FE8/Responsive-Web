let navbar = document.getElementById("navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    navbar.classList.add("scroll-on");
  } else {
    navbar.classList.remove("scroll-on");
  }
};


const navbarContain = document.querySelector('#content-navbar');

// export default navbarContain;
export function navbarContent() {
  return navbarContain;
}


// console.log(navbarContent())