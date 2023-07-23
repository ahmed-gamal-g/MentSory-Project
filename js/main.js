let backUp = document.getElementById("back-up")

// let logoOne = document.getElementById("logo-one")
// let logoOneLeft = document.getElementById("logo-one-left")

// let logoTwo = document.getElementById("logo-two")
// let logoTwoLeft = document.getElementById("logo-two-left")

// let logoThree = document.getElementById("logo-three")
// let logoThreeLeft = document.getElementById("logo-three-left")

// let pOne = document.getElementById("p-a3malna-one")
// let pTwo = document.getElementById("p-a3malna-two")
// let pThree = document.getElementById("p-a3malna-three")

// let a3malnOne = document.querySelector(".a3mal-one")
// let a3malnTwo = document.querySelector(".a3mal-two")
// let a3malnthree = document.querySelector(".a3mal-three")

// logoOne.onclick = function () {
//     if (pOne.classList.toggle("active")) {
//         a3malnOne.style.backgroundColor = "transparent"
//     } else {
//         a3malnOne.style.backgroundColor = "#0E4C98"
//     }

// }

// logoTwo.onclick = function () {
//     if (pTwo.classList.toggle("active")) {
//         a3malnTwo.style.backgroundColor = "transparent"
//     } else {
//         a3malnTwo.style.backgroundColor = "#0E4C98"
//     }

// }

// logoThree.onclick = function () {
//     if (pThree.classList.toggle("active")) {
//         a3malnthree.style.backgroundColor = "transparent"
//     } else {
//         a3malnthree.style.backgroundColor = "#0E4C98"
//     }

// }

window.onscroll = function () {
    if (this.scrollY > 200) {
        backUp.classList.add("active")
    } else {
        backUp.classList.remove("active")
    }
}

$(".chevron-icon-1 .fa-chevron-left").click(function (e) {
  e.preventDefault();
  $(".chevron-icon-1 .fa-chevron-right").css("display", "block");
  $(".chevron-icon-1 .fa-chevron-left").css("display", "none");
  $(".chevron-icon-1").css("background", "#0E4C98");
  $(".chevron-icon-1").css("border-radius", "0px 100px 100px 0px");
  $(".chevron-icon-1").css("padding-left", "1rem");
  $(".chevron-icon-1").css("padding-top", "1.2rem");
  $(".chevron-icon-1").css("padding-bottom", "1.2rem");
  $(".chevron-icon-1").css("right", "0");
  $(".chevron-icon-1").css("left", "0.5rem");
  $(".p-div .p-one").css("display", "none");
});

$(".chevron-icon-1 .fa-chevron-right").click(function (e) {
  e.preventDefault();
  $(".chevron-icon-1 .fa-chevron-right").css("display", "none");
  $(".chevron-icon-1 .fa-chevron-left").css("display", "block");
  $(".chevron-icon-1").css("background", "transparent");
  $(".chevron-icon-1").css("border-radius", "none");
  $(".chevron-icon-1").css("padding-left", "0");
  $(".chevron-icon-1").css("right", "2rem");
  $(".p-div .p-one").css("display", "block");
});

$(".chevron-icon-2 .fa-chevron-left").click(function (e) {
  e.preventDefault();
  $(".chevron-icon-2 .fa-chevron-right").css("display", "block");
  $(".chevron-icon-2 .fa-chevron-left").css("display", "none");
  $(".chevron-icon-2").css("background", "#0E4C98");
  $(".chevron-icon-2").css("border-radius", "0px 100px 100px 0px");
  $(".chevron-icon-2").css("padding-left", "1rem");
  $(".chevron-icon-2").css("padding-top", "1.2rem");
  $(".chevron-icon-2").css("padding-bottom", "1.2rem");
  $(".chevron-icon-2").css("right", "0");
  $(".chevron-icon-2").css("left", "0.5rem");
  $(".p-div .p-two").css("display", "none");
});

$(".chevron-icon-2 .fa-chevron-right").click(function (e) {
  e.preventDefault();
  $(".chevron-icon-2 .fa-chevron-right").css("display", "none");
  $(".chevron-icon-2 .fa-chevron-left").css("display", "block");
  $(".chevron-icon-2").css("background", "transparent");
  $(".chevron-icon-2").css("border-radius", "none");
  $(".chevron-icon-2").css("padding-left", "0");
  $(".chevron-icon-2").css("right", "2rem");
  $(".p-div .p-two").css("display", "block");
});

$(".chevron-icon-3 .fa-chevron-left").click(function (e) {
  e.preventDefault();
  $(".chevron-icon-3 .fa-chevron-right").css("display", "block");
  $(".chevron-icon-3 .fa-chevron-left").css("display", "none");
  $(".chevron-icon-3").css("background", "#0E4C98");
  $(".chevron-icon-3").css("border-radius", "0px 100px 100px 0px");
  $(".chevron-icon-3").css("padding-left", "1rem");
  $(".chevron-icon-3").css("padding-top", "1.2rem");
  $(".chevron-icon-3").css("padding-bottom", "1.2rem");
  $(".chevron-icon-3").css("right", "0");
  $(".chevron-icon-3").css("left", "0.5rem");
  $(".p-div .p-three").css("display", "none");
});

$(".chevron-icon-3 .fa-chevron-right").click(function (e) {
  e.preventDefault();
  $(".chevron-icon-3 .fa-chevron-right").css("display", "none");
  $(".chevron-icon-3 .fa-chevron-left").css("display", "block");
  $(".chevron-icon-3").css("background", "transparent");
  $(".chevron-icon-3").css("border-radius", "none");
  $(".chevron-icon-3").css("padding-left", "0");
  $(".chevron-icon-3").css("right", "2rem");
  $(".p-div .p-three").css("display", "block");
});
