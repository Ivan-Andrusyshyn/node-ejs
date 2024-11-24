const bodyRef = document.body

const modalRefs = {
 openModalBtn: document.querySelectorAll(
  '.js-open-modal'
 ),
 closeModalBtn: document.querySelector(
  '[data-action="close-modal"]'
 ),
 backdrop: document.querySelector('.js-backdrop'),
}

const signUpRef = {
 closeModalBtn: document.querySelector(
  '[data-action="close-modal"]'
 ),
 backdrop: document.querySelector(
  '.signup_backdrop'
 ),
}

const menuRefs = {
 menuNavLink: document.querySelectorAll(
  '.js-menu-nav-link'
 ),
 openMenuBtn: document.querySelector(
  '.js-open-menu'
 ),
 closeMenuBtn: document.querySelector(
  '.js-close-menu'
 ),
 menuBackdrop: document.querySelector(
  '.js-menu-backdrop'
 ),
}

const signinForm = document.querySelector(
 '.login_form'
)
const signupForm = document.querySelector(
 '.sign-up_form'
)
const authContainer =
 document.getElementById('auth')

const pageFormRef =
 document.querySelectorAll('.js-form')

const fixBlocks =
 document.querySelectorAll('.fix-block')

const anchors = document.querySelectorAll(
 "a[href*='#']"
)

const scrollBtn = document.querySelector(
 '.btn-scroll-top'
)

export {
 bodyRef,
 signupForm,
 signinForm,
 modalRefs,
 menuRefs,
 pageFormRef,
 fixBlocks,
 signUpRef,
 anchors,
 authContainer,
 scrollBtn,
}
