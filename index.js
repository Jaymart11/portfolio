/** @format */
AOS.init({duration: 1000, offset: 120, easing: 'ease-in-out'});

if (window.console || window.console.firebug) {
  console.clear();
}

const about = document.querySelector('.about');
const project = document.querySelector('.project');
const contact = document.querySelector('.contact');
const mobileAbout = document.querySelector('.mobile-about');
const mobileProject = document.querySelector('.mobile-projects');
const mobileContact = document.querySelector('.mobile-contact');
const nav = document.querySelector('nav');
const form = document.querySelector('.submit');
const form1 = document.querySelector('form');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
const validationEmail = document.querySelector('.validation-email');
const validationSubject = document.querySelector('.validation-subject');
const validationMessage = document.querySelector('.validation-message');
const notSent = document.querySelector('.not-sent');
const spinner1 = document.querySelector('#spinner');

window.onscroll = () => {
  if (document.documentElement.scrollTop < 540) {
    nav.classList.remove('nav-black');
    about.classList.add('border');
    contact.classList.remove('border');
    project.classList.remove('border');
    mobileAbout.classList.add('border');
    mobileContact.classList.remove('border');
    mobileProject.classList.remove('border');
  } else if (document.documentElement.scrollTop > 540 && document.documentElement.scrollTop < 1600) {
    nav.classList.add('nav-black');
    project.classList.add('border');
    about.classList.remove('border');
    contact.classList.remove('border');
    mobileAbout.classList.remove('border');
    mobileContact.classList.remove('border');
    mobileProject.classList.add('border');
  } else if (document.documentElement.scrollTop > 1600) {
    nav.classList.add('nav-black');
    project.classList.remove('border');
    about.classList.remove('border');
    contact.classList.add('border');
    mobileAbout.classList.remove('border');
    mobileContact.classList.add('border');
    mobileProject.classList.remove('border');
  }
};

about.addEventListener('click', () => {
  about.classList.add('border');
  contact.classList.remove('border');
  project.classList.remove('border');
});

project.addEventListener('click', () => {
  project.classList.add('border');
  about.classList.remove('border');
  contact.classList.remove('border');
});

contact.addEventListener('click', () => {
  contact.classList.add('border');
  about.classList.remove('border');
  project.classList.remove('border');
});

const words = ['Web Developer', 'Software Engineer'];
let i = 0;
let timer;

function typingEffect() {
  let word = words[i].split('');
  var loopTyping = function () {
    if (word.length > 0) {
      document.getElementById('word').innerHTML += word.shift();
    } else {
      setTimeout(deletingEffect, 800);
      return false;
    }
    timer = setTimeout(loopTyping, 150);
  };
  loopTyping();
}

function deletingEffect() {
  let word = words[i].split('');
  var loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById('word').innerHTML = word.join('');
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      setTimeout(typingEffect, 350);
      return false;
    }
    timer = setTimeout(loopDeleting, 30);
  };
  loopDeleting();
}

setTimeout(typingEffect, 1000);

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

email.addEventListener('keyup', () => {
  if (email.value === '') {
    validationEmail.innerHTML = '';
  } else if (!re.test(email.value)) {
    validationEmail.innerHTML = '<small>Email is invalid </small>';
    email.style.border = '2px solid red';
  } else {
    validationEmail.innerHTML = '';
    email.style.border = '2px transparent solid';
  }
});

subject.addEventListener('keyup', () => {
  if (subject.value !== '') {
    validationSubject.innerHTML = '';
    subject.style.border = '2px transparent solid';
  }
});

message.addEventListener('keyup', () => {
  if (message.value !== '') {
    validationMessage.innerHTML = '';
    message.style.border = '2px transparent solid';
  }
});

form.addEventListener('click', () => {
  if (email.value.length === 0) {
    email.style.border = '2px solid red';
    validationEmail.innerHTML = '<small>Email is required </small>';
  } else if (!re.test(email.value)) {
    validationEmail.innerHTML = '<small>Email is invalid </small>';
  } else {
    validationEmail.innerHTML = '';
    email.style.border = '2px transparent solid';
  }

  if (subject.value === '') {
    subject.style.border = '2px solid red';
    validationSubject.innerHTML = '<small>Subject is required </small>';
  } else {
    validationSubject.innerHTML = '';
    subject.style.border = '2px transparent solid';
  }

  if (message.value === '') {
    message.style.border = '2px solid red';
    validationMessage.innerHTML = '<small>Message is required </small>';
  } else {
    validationMessage.innerHTML = '';
    message.style.border = '2px transparent solid';
  }

  let loading = false;
  if (validationEmail.innerHTML === '' && validationSubject.innerHTML === '' && validationMessage.innerHTML === '') {
    loading = true;
    if (loading) {
      form1.style.display = 'none';
      spinner1.style.cssText = 'width: 100%; height: 64%; display:flex; justify-content:center; align-items:center; flex-direction: column;';
      spinner1.innerHTML = '<h1 style = "color: white;">Sending your message</h1>' + '<img src="img/spinner.svg" alt="Spinner" style = "width: 50vh; height:60%;"/>';
    }

    Email.send({
      SecureToken: 'e98a5f71-ee2c-4efb-99b0-163c1579656d',
      To: 'jaymarttandoc1@gmail.com',
      From: email.value,
      Subject: subject.value,
      Body: message.value,
    }).then(message => {
      if (message === 'OK') {
        loading = false;
        if (loading === false) {
          spinner1.style.display = 'none';
          form1.style.display = 'flex';
        }
        Swal.fire('Message Sent', '', 'success');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Messegane not sent',
          text: 'Try again later',
        });
      }
    });

    email.value = '';
    subject.value = '';
    message.value = '';
  }
});

const modal = document.querySelectorAll('#myModal');
const btn = document.querySelectorAll('.palette-pic');
const zoom = document.querySelectorAll('.zoom');
const span = document.querySelectorAll('.close');
const modalPic = document.querySelectorAll('.pal-pic');
const modalPic1 = document.querySelectorAll('.soc-pic');
const modalPic2 = document.querySelectorAll('.gder-pic');
const modalButton = document.querySelectorAll('.add');
const modalButton1 = document.querySelectorAll('.minus');
const picNumber = document.querySelectorAll('.pic-number');
const ham = document.querySelectorAll('.ham');
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const mobile = document.querySelectorAll('.mobile');

let closeham = true;
let posblock;

window.onresize = function () {
  if (window.innerWidth < 975) {
    if (closeham) {
      navMobile.style.animation = 'none';
    }
  }
};

hamburger.onclick = function () {
  if (closeham) {
    clearTimeout(posblock);
    hamburger.style.position = 'relative';
    ham.forEach(ham => (ham.style.cssText = 'position:absolute; transition: all 0.3s linear'));
    ham[1].style.opacity = '0';
    ham[0].style.transform = 'rotate(45deg)';
    ham[2].style.transform = 'rotate(135deg)';
    navMobile.style.animation = 'animatenav 0.3s linear forwards';
    closeham = false;
  } else {
    closeNav();
  }
};

mobile.forEach(mob => {
  mob.onclick = function () {
    closeNav();
  };
});

closeNav = () => {
  ham.forEach(ham => (ham.style.cssText = 'position:absolute; transition: all 0.3s linear '));
  posblock = setTimeout(() => {
    ham.forEach(ham => (ham.style.cssText = 'position:static;'));
  }, 400);
  ham[1].style.opacity = '1';
  ham[0].style.transform = 'rotate(0deg)';
  ham[2].style.transform = 'rotate(0deg)';
  navMobile.style.animation = 'animatenav1 0.3s linear forwards';
  closeham = true;
};

const visibleModal = arr => {
  modal[arr].style.cssText = 'display:flex; justify-content:center; align-items:center';

  span[arr].onclick = function () {
    modal[arr].style.opacity = '0';
    setTimeout(() => {
      modal[arr].style.display = 'none';
    }, 300);
  };

  window.onclick = function (event) {
    if (event.target == modal[arr]) {
      modal[arr].style.opacity = '0';
      setTimeout(() => {
        modal[arr].style.display = 'none';
      }, 300);
    }
  };

  switch (arr) {
    case 0:
      // Palette Kulay
      modalPic.forEach(pic => (pic.style.display = 'none'));
      modalPic[0].style.display = 'block';

      let viewing = 0;

      picNumber[arr].innerText = 'Picture ' + (viewing + 1);
      modalButton[arr].onclick = () => {
        viewing += 1;
        if (viewing < 0 || viewing > modalPic.length - 1) {
          viewing = 0;
        }
        modalPic.forEach(e => {
          e.style.animation = 'animateadd 1000ms ease-in-out';
          e.style.display = 'none';
        });
        if (viewing > 0) {
          modalPic[viewing].style.display = 'block';
        } else {
          modalPic[0].style.display = 'block';
        }
        picNumber[arr].innerText = 'Picture ' + (viewing + 1);
      };

      modalButton1[arr].onclick = () => {
        viewing -= 1;
        if (Math.abs(viewing) > modalPic.length - 1) {
          viewing = 0;
        }
        modalPic.forEach(e => {
          e.style.animation = 'animateadd 1000ms ease-in-out';
          e.style.display = 'none';
        });
        if (viewing < 0) {
          viewing = modalPic.length - 1;
          modalPic[viewing].style.display = 'block';
        } else if (viewing === 0) {
          modalPic[0].style.display = 'block';
        } else {
          modalPic[viewing].style.display = 'block';
        }
        picNumber[arr].innerText = 'Picture ' + (viewing + 1);
      };
      break;
    case 1:
      // Social Dev

      let viewing1 = 0;

      modalPic1.forEach(pic => (pic.style.display = 'none'));
      modalPic1[0].style.display = 'block';

      picNumber[arr].innerText = 'Picture ' + (viewing1 + 1);
      modalButton[arr].onclick = () => {
        viewing1 += 1;
        if (viewing1 < 0 || viewing1 > modalPic1.length - 1) {
          viewing1 = 0;
        }
        modalPic1.forEach(e => {
          e.style.animation = 'animateadd 1000ms ease-in-out';
          e.style.display = 'none';
        });
        if (viewing1 > 0) {
          modalPic1[viewing1].style.display = 'block';
        } else {
          modalPic1[0].style.display = 'block';
        }
        picNumber[arr].innerText = 'Picture ' + (viewing1 + 1);
      };

      modalButton1[arr].onclick = () => {
        viewing1 -= 1;
        if (Math.abs(viewing1) > modalPic1.length - 1) {
          viewing1 = 0;
        }
        modalPic1.forEach(e => {
          e.style.animation = 'animateadd 1000ms ease-in-out';
          e.style.display = 'none';
        });
        if (viewing1 < 0) {
          viewing1 = modalPic1.length - 1;
          modalPic1[viewing1].style.display = 'block';
        } else if (viewing1 === 0) {
          modalPic1[0].style.display = 'block';
        } else {
          modalPic1[viewing1].style.display = 'block';
        }
        picNumber[arr].innerText = 'Picture ' + (viewing1 + 1);
      };
      break;

    case 2:
      let viewing2 = 0;

      modalPic2.forEach(pic => (pic.style.display = 'none'));
      modalPic2[0].style.display = 'block';

      picNumber[arr].innerText = 'Picture ' + (viewing2 + 1);
      modalButton[arr].onclick = () => {
        viewing2 += 1;
        if (viewing2 < 0 || viewing2 > modalPic2.length - 1) {
          viewing2 = 0;
        }
        modalPic2.forEach(e => {
          e.style.animation = 'animateadd 1000ms ease-in-out';
          e.style.display = 'none';
        });
        if (viewing2 > 0) {
          modalPic2[viewing2].style.display = 'block';
        } else {
          modalPic2[0].style.display = 'block';
        }
        picNumber[arr].innerText = 'Picture ' + (viewing2 + 1);
      };

      modalButton1[arr].onclick = () => {
        viewing2 -= 1;
        if (Math.abs(viewing2) > modalPic2.length - 1) {
          viewing2 = 0;
        }
        modalPic2.forEach(e => {
          e.style.animation = 'animateadd 1000ms ease-in-out';
          e.style.display = 'none';
        });
        if (viewing2 < 0) {
          viewing2 = modalPic2.length - 1;
          modalPic2[viewing2].style.display = 'block';
        } else if (viewing2 === 0) {
          modalPic2[0].style.display = 'block';
        } else {
          modalPic2[viewing2].style.display = 'block';
        }
        picNumber[arr].innerText = 'Picture ' + (viewing2 + 1);
      };
      break;
  }
};
