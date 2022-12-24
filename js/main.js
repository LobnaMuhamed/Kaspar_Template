let myNav = document.getElementById("nav_list");
let myToggle = document.querySelector(".toggle_menu");
let allList = document.querySelectorAll("ul li a");
let myBullets = document.querySelectorAll(".bullets li");
// var navbar = document.getElementById("nav_header");

//Scroll Nav_Bar
let navOffset = $(".nav__header").offset().top;

$(window).scroll(function () {
  let wScroll = $(window).scrollTop();

  if (wScroll > navOffset) {
    $(".nav__header").slideDown(100, function () {
      //   $(".nav__header").css("width", "100%");
      $(".nav__header").css("z-index", "100");
      $(".nav__header").css("background-color", "rgb(0 0 0 /50%");
      $(".nav__header").css("position", "fixed");
    });
  } else {
    $(".nav__header").show(100, function () {
      //   $(".nav__header").css("width", "100%");
      $(".nav__header").css("z-index", "1000");
      $(".nav__header").css("background-color", "transparent");
      $(".nav__header").css("position", "fixed");
    });
  }
});
$("a").click(function (e) {
  let aHref = $(e.target).attr("href");
  let sectionOffset = $(aHref).offset().top;
  $("html,body").animate({ scrollTop: sectionOffset }, 2000);
});

//NAV_Show _Toggle
const el = document.querySelectorAll(".number");
function show_ul() {
  if (myNav.style.display === "none") {
    myNav.style.display = "flex";
    myNav.style.flexDirection = "column";
    myNav.style.position = "absolute";
    myNav.style.top = "100%";
    myNav.style.left = "0";
    myNav.style.width = "100%";
    myNav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  } else {
    myNav.style.display = "none";
  }
}

myToggle.addEventListener("click", show_ul);

//Remove Class Active From Nav_Bar
allList.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allList.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
  };
});

//Remove Class Active From Bullets

myBullets.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    myBullets.forEach(function (ele) {
      ele.classList.remove("active_Bullet");
    });

    this.classList.add("active_Bullet");
  };
});

//Filter Portfolio
let switchrLis = document.querySelectorAll(".shuffle li");
let boxs = Array.from(document.querySelectorAll(".box"));
let myCaption = document.querySelectorAll(
  ".portfolio .imgs_container .box .caption"
);
switchrLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});
//Remove active_shuffle Class From All Lis And Add To Current
function removeActive() {
  switchrLis.forEach((li) => {
    li.classList.remove("active_shuffle");
    this.classList.add("active_shuffle");
  });
}
//Manage Imgs
function manageImgs() {
  boxs.forEach((box) => {
    box.style.display = "none";
  });

  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}

// OFF-SET BTN

$(window).scroll(function () {
  let wScroll = $(window).scrollTop();

  if (wScroll > navOffset) {
    $(".offsetBtn").fadeIn(500);
  } else {
    $(".offsetBtn").fadeOut(500);
  }
});

$(".offsetBtn").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 2000);
});


