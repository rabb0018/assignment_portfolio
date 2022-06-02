"use strict";

// let theme = localStorage.getItem('data-theme');
// const changeThemeToDark = () => {
//     document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
//     localStorage.setItem("data-theme", "dark") // save theme to local storage
// }

// const changeThemeToLight = () => {
//     document.documentElement.setAttribute("data-theme", "light") // set theme light
//     localStorage.setItem("data-theme", 'light') // save theme to local storage
// }

// const checkbox = document.getElementById("switch");
// // Apply retrived them to the website
// checkbox.addEventListener('change', () => {
//     let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
//     if (theme ==='dark'){
//         changeThemeToLight()
//     }else{
//         changeThemeToDark()
//     }
// });

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
