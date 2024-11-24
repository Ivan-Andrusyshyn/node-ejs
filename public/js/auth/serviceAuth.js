import { signUpRef } from '../refs.js'
import { createHtmlAuth } from './createHtmlAuth.js'
import { authContainer } from '../refs.js'

const headerGet = {
 method: 'GET',
}
const headerPost = {
 method: 'POST',
 headers: {
  'Content-Type': 'application/json',
 },
}

export const authService = async () => {
 let isAuth = false

 const signUp = async (formObject) =>
  await fetch('/auth/sign-up', {
   ...headerPost,
   body: JSON.stringify(formObject),
  })

 const logout = async () => {
  await fetch('/auth/logout')
  localStorage.removeItem('user')
  authContainer.innerHTML = ''
  showModal()
 }

 const showModal = async () => {
  signUpRef.backdrop.classList.remove(
   'signup_hide'
  )
  await fetch('/', headerGet)
 }
 const hideModal = async () => {
  signUpRef.backdrop.classList.add('signup_hide')
  await fetch('/', headerGet)
 }
 const onLoadedPage = async (e) => {
  const userStr = localStorage.getItem('user')
  if (!!userStr) {
   isAuth = true
   const userData = JSON.parse(userStr)
   await createHtmlAuth(userData)
   await signUp(userData)
   await hideModal()
   const authLogoutBtn = document.querySelector(
    '.auth_logout'
   )

   authLogoutBtn.addEventListener('click', logout)
  } else {
   isAuth = false
   showModal()
  }
 }
 return {
  signUp,
  showModal,
  hideModal,
  onLoadedPage,
  logout,
 }
}
