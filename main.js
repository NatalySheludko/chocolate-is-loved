const navBarModalWindow = document.querySelector(".burger-navbar-container");
const navBarBtnOpen = document.querySelector(".nav-icon-group");
navBarBtnOpen.addEventListener("click", () => {
  navBarModalWindow.classList.add("is-open-nav");
});
const navBarCloseBtn = document.querySelector(".burger-menu-close-btn");
navBarCloseBtn.addEventListener("click", () => {
  navBarModalWindow.classList.remove("is-open-nav");
});
const backdropModalWindow = document.querySelector(".backdrop");
const backdropOpenReviewsBtn = document.querySelector(".review-button-team");
backdropOpenReviewsBtn.addEventListener("click", () => {
  backdropModalWindow.classList.add("is-open");
});
const backdropCloseBtn = document.querySelector(".modal-close-btn");
backdropCloseBtn.addEventListener("click", () => {
  backdropModalWindow.classList.remove("is-open");
});

const STORAGE_KEY = "reviews-form-state";
const reviewsForm = document.querySelector(".form");
const reviewsName = document.querySelector("#user-name");
const reviewsEmail = document.querySelector("#user-email");
const reviewsPhone = document.querySelector("#user-tel");
const reviewsComment = document.querySelector("#user-comment");
reviewsForm.addEventListener("input", fullLocalStorage);
function fullLocalStorage() {
  const data = {
    nameData: reviewsName.value.trim(),
    emailData: reviewsEmail.value.trim(),
    phoneData: reviewsPhone.value.trim(),
    commentData: reviewsComment.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
reviewsForm.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(event) {
  event.preventDefault();
  const nameData = reviewsName.value.trim();
  const emailData = reviewsEmail.value.trim();
  const phoneData = reviewsPhone.value.trim();
  const commentData = reviewsComment.value.trim();
  reviewsForm.reset();
}
document.addEventListener("DOMContentLoaded", getFormData);
function getFormData() {
  const storageData = localStorage.getItem(STORAGE_KEY);
  if (storageData) {
    const data = JSON.parse(storageData);
    reviewsName.value = data.nameData;
    reviewsEmail.value = data.emailData;
    reviewsPhone.value = data.phoneData;
    reviewsComment.value = data.commentData;
  }
}

const STORAGE_SUBSCRIBE_KEY = "subscribe-form-state";
const footerForm = document.querySelector(".footer-btn-form");
const footerEmail = document.querySelector("input");
const footerBtn = document.querySelector(".button-subscribe");
footerForm.addEventListener("input", addDataToLocalStorage);
function addDataToLocalStorage() {
  const data = {
    emailData: footerEmail.value.trim(),
  };
  localStorage.setItem(STORAGE_SUBSCRIBE_KEY, JSON.stringify(data));
}
footerForm.addEventListener("submit", handleFormFooterSubmit);
function handleFormFooterSubmit(event) {
  event.preventDefault();
  const emailData = reviewsEmail.value.trim();
  footerForm.reset();
}
document.addEventListener("DOMContentLoaded", getFormFooterData);
function getFormFooterData() {
  const storageData = localStorage.getItem(STORAGE_SUBSCRIBE_KEY);
  if (storageData) {
    const data = JSON.parse(storageData);
    reviewsEmail.value = data.emailData;
  }
}

const swiper = new Swiper(".swiper", {
  mousewheel: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
      slideToClickedSlide: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1168: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
