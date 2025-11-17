/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, index) => {
  modalBtn.addEventListener("click", () => {
    modal(index);
  });
});

modalCloses.forEach((modalClose, index) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
var swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/
// var swiperTestimonial = new Swiper(".testimonial__container", {
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 48,

//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: true,
//     },
//     breakpoints: {
//         568: {
//             slidesPerView: 2,
//         },
//     },
// });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.getElementById("chatbot-toggler");
  const chatbot = document.getElementById("chatbot-container");
  const closeBtn = document.getElementById("chatbot-close");
  const messages = document.getElementById("chatbot-messages");
  const faqButtons = document.querySelectorAll(".faq-btn");

  const faqAnswers = {
    "What services do you offer?": 
      "✨ I offer frontend (React, Angular), Java backend, AEM Sites, Forms, and UI/UX & graphic design services.",
    "Can I see your resume?": 
      '📄 <a href="assets/pdf/Ayush_AEM_FULLSTACK_CGI.pdf" target="_blank">Click to download my resume here</a>.',
    "How to contact you?": 
      "📧 <strong>Email:</strong> <a href='mailto:ayushkumarsep1998@gmail.com'>ayushkumarsep1998@gmail.com</a><br>📱 <strong>Call:</strong> 98345XXXXX",
    "Join WhatsApp Group": 
      "✅ Join our community on WhatsApp:<br><a href='https://chat.whatsapp.com/YOUR_GROUP_INVITE_LINK' target='_blank' style='color: #25D366;'>Click here to join WhatsApp Group</a>"
  };

  // Open chatbot
  toggler.addEventListener("click", () => {
    chatbot.style.display = "flex";
  });

  // Close chatbot
  closeBtn.addEventListener("click", () => {
    chatbot.style.display = "none";
  });

  // Append message
  function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.className = `chatbot-message ${sender}`;
    msg.innerHTML = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  // Handle FAQ responses
  faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const question = btn.innerText;
      addMessage("user", question);

      setTimeout(() => {
        const response = faqAnswers[question] || "🤔 Sorry, I don't have an answer for that.";
        addMessage("bot", response);
      }, 500);
    });
  });
});
// function sendEmail() {
//     Email.send({
//         SecureToken : "89ba90ab-5d32-4149-b954-f8cbedfdc5ab",
//         To: "ayushkumar17sep@gmail.com",
//         From: document.getElementById("email").value,
//         Subject: "Portfolio contact form Details",
//         Body: "Body",
//     }).then((message) => {
// if (message == "OK") return onSuccess();
// });
// }
// var params;
// function sendMail(){
//      params ={
//         name: document.getElementById("name").value,
//         mobile: document.getElementById("mobile").value,
//         message: document.getElementById("message").value,
//         email: document.getElementById("email").value,
//     };

// }

// const serviceID ="service_541koem";
// const templateID="template_pmzbp2b";

// emailjs.send(serviceID,templateID ,params)
// .then(
//     res => {
//         document.getElementById("name").value ="";
//         document.getElementById("mobile").value ="";
//         document.getElementById("message").value ="";
//         console.log(res);
//         alert("Message sent successfully")
//     }
// )
// .catch((err) => console.log(err));
