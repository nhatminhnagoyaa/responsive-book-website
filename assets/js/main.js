/*=============== SEARCH SHOW===============*/
const searchButton = document.getElementById("search-button");
const searchClose = document.getElementById("search-close");
const searchContent = document.getElementById("search-content");


/*=============== SEARCH SHOW ===============*/
if (searchButton) {
    searchButton.addEventListener("click", () => {
        searchContent.classList.add("show-search");
    });
}


/*=============== SEARCH HIDDEN ===============*/
if (searchClose) {
    searchClose.addEventListener("click", () => {
        searchContent.classList.remove("show-search");
    });
}


/*=============== LOGIN ===============*/
const loginButton = document.getElementById("login-button");
const loginClose = document.getElementById("login-close");
const loginContent = document.getElementById("login-content");


/*=============== LOGIN SHOW ===============*/
if (loginButton) {
    loginButton.addEventListener("click", () => {
        loginContent.classList.add("show-login");
    });
}


/*=============== LOGIN HIDDEN ===============*/
if (loginClose) {
    loginClose.addEventListener("click", () => {
        loginContent.classList.remove("show-login");
    });
}


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById("header");

    // When the scroll is reater than 50 viewport height,add the scroll-header class to the header tag
    this.scrollY >= 50
        ? header.classList.add("shadow-header")
        : header.classList.remove("shadow-header");
};

window.addEventListener('scroll', shadowHeader);


/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    centeredSlides: 'true',
    slidesPerView: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
});


/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    centeredSlides: 'auto',
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
});

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    centeredSlides: 'auto',
    slidesPerView: 'auto',

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
  
    this.scrollY >= 350
      ? scrollUp.classList.add("show-scroll")
      : scrollUp.classList.remove("show-scroll");
  };
  
  window.addEventListener("scroll", scrollUp);
  

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Truy cập vào tất cả section có id
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.pageY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener('scroll', scrollActive);

// ".nav__menu a[href*= : Truy cập vào tất cả nav_menu có đường link[#home] trong thẻ a

/*=============== DARK LIGHT THEME ===============*/
//Them change button
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';  // truy cập vào class : dark-theme
const iconTheme = "ri-sun-line";  //ri-sun-line: name is icon

//Previous selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem("selected-icon");

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
// Hàm này liên quan tới biểu tượng Icon
const getCurrentIcon = () =>themeButton.body.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

//We valifate if the user previously chose a topic
if (selectedTheme) {

    //If the validation is fulfilled, we ask the issue was to know if we activated
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme);
}

//Active / deactive the theme manially with the button
// Nhấn sự kiện nút button 
themeButton.addEventListener('click', () => {
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon());
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    daley:400,
    // reset: true
})
sr.reveal(`.home__data, .featured__container, .new__container,
.join__data, .testimonial__container, .footer`)
sr.reveal(`.home__images`, {delay: 600})
sr.reveal(`.services__card`, {interval: 100})
sr.reveal(`.discount__data`, {origin: 'left'})
sr.reveal(`.discount__images`, {origin: 'right'})