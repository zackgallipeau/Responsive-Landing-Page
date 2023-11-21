"use strict";

//maintain scroll position when page is refreshed
// document.addEventListener("DOMContentLoaded", function (event) {
//   var scrollpos = localStorage.getItem("scrollpos");
//   if (scrollpos) window.scrollTo(0, scrollpos);
// });

// window.onbeforeunload = function (e) {
//   localStorage.setItem("scrollpos", window.scrollY);
// };

//WEBSITE LOAD ANIMATIONS
const allSections = document.querySelectorAll(".section");
allSections.forEach((section) => {
  section.classList.add(`${section.dataset.transition}`);
});

document.getElementById("hero2").classList.remove("hi-2");
document.getElementById("hero2").classList.add("hi-1");

document.getElementById("hero3").classList.remove("hi-3");
document.getElementById("hero3").classList.add("hi-1");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("hero2").classList.add("hi-2");
    document.getElementById("hero3").classList.add("hi-3");
    document.getElementById("hero2").classList.remove("hi-1");
    document.getElementById("hero3").classList.remove("hi-1");
  }, 100);
});

//Section load animations

function callback(entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    entry.target.classList.remove(`${entry.target.dataset.transition}`);
  } else {
    entry.target.classList.add(`${entry.target.dataset.transition}`);
  }
}

const observer = new IntersectionObserver(callback, {
  root: document.querySelector("#scrollArea"),
  threshold: 0.3,
});

allSections.forEach((section) => {
  observer.observe(section);
});

//Hero section hover animation
const hero1 = document.getElementById("hero1");
const hero2 = document.getElementById("hero2");
const hero3 = document.getElementById("hero3");

function heroExpand() {
  hero1.classList.add("hi-1b");
  hero2.classList.add("hi-2b");
  hero3.classList.add("hi-3b");
}

function heroContract() {
  hero1.classList.remove("hi-1b");
  hero2.classList.remove("hi-2b");
  hero3.classList.remove("hi-3b");
}

hero1.addEventListener("mouseover", heroExpand);
hero1.addEventListener("mouseleave", heroContract);
