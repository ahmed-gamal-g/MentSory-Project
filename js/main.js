let backUp = document.getElementById("back-up")

window.onscroll = function () {
    if (this.scrollY > 200) {
        backUp.classList.add("active")
    } else {
        backUp.classList.remove("active")
    }
}


let right1 = document.querySelector(".right-1");
let right2 = document.querySelector(".right-2");
let right3 = document.querySelector(".right-3");

let left1 = document.querySelector(".left-1");
let left2 = document.querySelector(".left-2");
let left3 = document.querySelector(".left-3");

let pOne = document.querySelector(".p-one");
let ptwo = document.querySelector(".p-two");
let pThree = document.querySelector(".p-three");

right1.onclick = function () {
  pOne.classList.add("active")
  right1.style.display = "none"
  left1.style.display = "inline-block"
}

right2.onclick = function () {
  ptwo.classList.add("active")
  right2.style.display = "none"
  left2.style.display = "inline-block"
}
right3.onclick = function () {
  pThree.classList.add("active")
  right3.style.display = "none"
  left3.style.display = "inline-block"
}

left1.onclick = function () {
  pOne.classList.remove("active")
  left1.style.display = "none"
  right1.style.display = "inline-block"
}
left2.onclick = function () {
  ptwo.classList.remove("active")
  left2.style.display = "none"
  right2.style.display = "inline-block"
}
left3.onclick = function () {
  pThree.classList.remove("active")
  left3.style.display = "none"
  right3.style.display = "inline-block"
}


// $(".chevron-icon-1 .fa-chevron-left").click(function (e) {
//   e.preventDefault();
//   $(".chevron-icon-1 .fa-chevron-right").css("display", "block");
//   $(".chevron-icon-1 .fa-chevron-left").css("display", "none");
//   $(".chevron-icon-1").css("background", "#0E4C98");
//   $(".chevron-icon-1").css("border-radius", "0px 100px 100px 0px");
//   $(".chevron-icon-1").css("padding-left", "1rem");
//   $(".chevron-icon-1").css("padding-top", "1.2rem");
//   $(".chevron-icon-1").css("padding-bottom", "1.2rem");
//   $(".chevron-icon-1").css("right", "0");
//   $(".chevron-icon-1").css("left", "0.5rem");
//   $(".p-div .p-one").css("display", "none");
// });

// $(".chevron-icon-1 .fa-chevron-right").click(function (e) {
//   e.preventDefault();
//   $(".chevron-icon-1 .fa-chevron-right").css("display", "none");
//   $(".chevron-icon-1 .fa-chevron-left").css("display", "block");
//   $(".chevron-icon-1").css("background", "transparent");
//   $(".chevron-icon-1").css("border-radius", "none");
//   $(".chevron-icon-1").css("padding-left", "0");
//   $(".chevron-icon-1").css("right", "2rem");
//   $(".p-div .p-one").css("display", "block");
// });

// $(".chevron-icon-2 .fa-chevron-left").click(function (e) {
//   e.preventDefault();
//   $(".chevron-icon-2 .fa-chevron-right").css("display", "block");
//   $(".chevron-icon-2 .fa-chevron-left").css("display", "none");
//   $(".chevron-icon-2").css("background", "#0E4C98");
//   $(".chevron-icon-2").css("border-radius", "0px 100px 100px 0px");
//   $(".chevron-icon-2").css("padding-left", "1rem");
//   $(".chevron-icon-2").css("padding-top", "1.2rem");
//   $(".chevron-icon-2").css("padding-bottom", "1.2rem");
//   $(".chevron-icon-2").css("right", "0");
//   $(".chevron-icon-2").css("left", "0.5rem");
//   $(".p-div .p-two").css("display", "none");
// });

// $(".chevron-icon-2 .fa-chevron-right").click(function (e) {
//   e.preventDefault();
//   $(".chevron-icon-2 .fa-chevron-right").css("display", "none");
//   $(".chevron-icon-2 .fa-chevron-left").css("display", "block");
//   $(".chevron-icon-2").css("background", "transparent");
//   $(".chevron-icon-2").css("border-radius", "none");
//   $(".chevron-icon-2").css("padding-left", "0");
//   $(".chevron-icon-2").css("right", "2rem");
//   $(".p-div .p-two").css("display", "block");
// });

// $(".chevron-icon-3 .fa-chevron-left").click(function (e) {
//   e.preventDefault();
//   $(".chevron-icon-3 .fa-chevron-right").css("display", "block");
//   $(".chevron-icon-3 .fa-chevron-left").css("display", "none");
//   $(".chevron-icon-3").css("background", "#0E4C98");
//   $(".chevron-icon-3").css("border-radius", "0px 100px 100px 0px");
//   $(".chevron-icon-3").css("padding-left", "1rem");
//   $(".chevron-icon-3").css("padding-top", "1.2rem");
//   $(".chevron-icon-3").css("padding-bottom", "1.2rem");
//   $(".chevron-icon-3").css("right", "0");
//   $(".chevron-icon-3").css("left", "0.5rem");
//   $(".p-div .p-three").css("display", "none");
// });

// $(".chevron-icon-3 .fa-chevron-right").click(function (e) {
//   e.preventDefault();
//   $(".chevron-icon-3 .fa-chevron-right").css("display", "none");
//   $(".chevron-icon-3 .fa-chevron-left").css("display", "block");
//   $(".chevron-icon-3").css("background", "transparent");
//   $(".chevron-icon-3").css("border-radius", "none");
//   $(".chevron-icon-3").css("padding-left", "0");
//   $(".chevron-icon-3").css("right", "2rem");
//   $(".p-div .p-three").css("display", "block");
// });
