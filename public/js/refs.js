const bodyRef = document.body;

const modalRefs = {
  openModalBtn: document.querySelectorAll(".js-open-modal"),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

const menuRefs = {
  menuNavLink: document.querySelectorAll(".js-menu-nav-link"),
  openMenuBtn: document.querySelector(".js-open-menu"),
  closeMenuBtn: document.querySelector(".js-close-menu"),
  menuBackdrop: document.querySelector(".js-menu-backdrop"),
};

const formRefs = document.querySelectorAll(".js-form");

const fixBlocks = document.querySelectorAll(".fix-block");

const anchors = document.querySelectorAll("a[href*='#']");

const scrollBtn = document.querySelector(".btn-scroll-top");

export {
  bodyRef,
  modalRefs,
  menuRefs,
  formRefs,
  fixBlocks,
  anchors,
  scrollBtn,
};
