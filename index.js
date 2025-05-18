/** @format */
AOS.init({ duration: 1000, offset: 120, easing: "ease-in-out" });

if (window.console || window.console.firebug) {
  console.clear();
}

const about = document.querySelector(".about");
const project = document.querySelector(".project");
const experience = document.querySelector(".experience");
const mobileAbout = document.querySelector(".mobile-about");
const mobileProject = document.querySelector(".mobile-projects");
const mobileExperience = document.querySelector(".mobile-experience");
const nav = document.querySelector("nav");
const form = document.querySelector(".submit");
const form1 = document.querySelector("form");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const validationEmail = document.querySelector(".validation-email");
const validationSubject = document.querySelector(".validation-subject");
const validationMessage = document.querySelector(".validation-message");
const notSent = document.querySelector(".not-sent");
const spinner1 = document.querySelector("#spinner");
const footer = document.querySelector("footer");

footer.innerHTML = `Copyright © ${new Date().getFullYear()} Jaymart Tandoc`;

window.onscroll = () => {
  if (document.documentElement.scrollTop < 540) {
    nav.classList.remove("nav-black");
    about.classList.add("border");
    experience.classList.remove("border");
    project.classList.remove("border");
    mobileAbout.classList.add("border");
    mobileExperience.classList.remove("border");
    mobileProject.classList.remove("border");
  } else if (
    document.documentElement.scrollTop > 540 &&
    document.documentElement.scrollTop < 1400
  ) {
    nav.classList.add("nav-black");
    project.classList.add("border");
    about.classList.remove("border");
    experience.classList.remove("border");
    mobileAbout.classList.remove("border");
    mobileExperience.classList.remove("border");
    mobileProject.classList.add("border");
  } else if (document.documentElement.scrollTop > 1400) {
    nav.classList.add("nav-black");
    project.classList.remove("border");
    about.classList.remove("border");
    experience.classList.add("border");
    mobileAbout.classList.remove("border");
    mobileExperience.classList.add("border");
    mobileProject.classList.remove("border");
  }
};

about.addEventListener("click", () => {
  about.classList.add("border");
  experience.classList.remove("border");
  project.classList.remove("border");
});

project.addEventListener("click", () => {
  project.classList.add("border");
  about.classList.remove("border");
  experience.classList.remove("border");
});

experience.addEventListener("click", () => {
  experience.classList.add("border");
  about.classList.remove("border");
  project.classList.remove("border");
});

const modal = document.querySelectorAll("#myModal");
const btn = document.querySelectorAll(".palette-pic");
const zoom = document.querySelectorAll(".zoom");
const span = document.querySelectorAll(".close");
const ham = document.querySelectorAll(".ham");
const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");
const mobile = document.querySelectorAll(".mobile");

let closeham = true;
let posblock;

window.onresize = function () {
  if (window.innerWidth < 975) {
    if (closeham) {
      navMobile.style.animation = "none";
    }
  }
};

hamburger.onclick = function () {
  if (closeham) {
    clearTimeout(posblock);
    hamburger.style.position = "relative";
    ham.forEach(
      (ham) =>
        (ham.style.cssText = "position:absolute; transition: all 0.3s linear")
    );
    ham[1].style.opacity = "0";
    ham[0].style.transform = "rotate(45deg)";
    ham[2].style.transform = "rotate(135deg)";
    navMobile.style.animation = "animatenav 0.3s linear forwards";
    closeham = false;
  } else {
    closeNav();
  }
};

mobile.forEach((mob) => {
  mob.onclick = function () {
    closeNav();
  };
});

closeNav = () => {
  ham.forEach(
    (ham) =>
      (ham.style.cssText = "position:absolute; transition: all 0.3s linear ")
  );
  posblock = setTimeout(() => {
    ham.forEach((ham) => (ham.style.cssText = "position:static;"));
  }, 400);
  ham[1].style.opacity = "1";
  ham[0].style.transform = "rotate(0deg)";
  ham[2].style.transform = "rotate(0deg)";
  navMobile.style.animation = "animatenav1 0.3s linear forwards";
  closeham = true;
};

const modalPics = [
  document.querySelectorAll(".pal-pic"),
  document.querySelectorAll(".soc-pic"),
  document.querySelectorAll(".gder-pic"),
  document.querySelectorAll(".pos-pic"),
  document.querySelectorAll(".tryu-pic"),
  document.querySelectorAll(".envx-pic"),
  document.querySelectorAll(".tindog-pic"),
  document.querySelectorAll(".futurerealm-pic"),
  document.querySelectorAll(".kaperista-pic"),
];

const modalButton = document.querySelectorAll(".add");
const modalButton1 = document.querySelectorAll(".minus");

const visibleModal = (arr) => {
  const currentModal = modal[arr];
  const currentSpan = span[arr];
  const currentPics = modalPics[arr];

  let viewing = 0;

  currentModal.style.cssText =
    "display:flex; justify-content:center; align-items:center";

  currentSpan.onclick = () => closeModal(currentModal);
  window.onclick = (event) => {
    if (event.target === currentModal) closeModal(currentModal);
  };

  showPicture(currentPics, viewing);

  modalButton[arr].onclick = () => {
    viewing = (viewing + 1) % currentPics.length;
    showPicture(currentPics, viewing);
  };

  modalButton1[arr].onclick = () => {
    viewing = (viewing - 1 + currentPics.length) % currentPics.length;
    showPicture(currentPics, viewing);
  };
};

const closeModal = (modalElement) => {
  modalElement.style.opacity = "0";
  setTimeout(() => {
    modalElement.style.display = "none";
  }, 300);
};

const showPicture = (pics, index) => {
  pics.forEach((pic, i) => {
    pic.style.display = i === index ? "block" : "none";
  });
};
