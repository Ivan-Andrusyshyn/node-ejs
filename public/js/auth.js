import { createHtmlAuth } from './auth/createHtmlAuth.js'
import { authService } from './auth/serviceAuth.js'
import tabsAuth from './auth/tabsAuth.js'
import { signupForm, signinForm } from './refs.js'
import { serviceLoader } from './serviceLoader.js'

tabsAuth()
signupForm.addEventListener('submit', onSignUp)

signinForm.addEventListener('submit', onSignIn)
const { signUp, hideModal, signIn, logout } =
 await authService()

const { showLoader, hideLoader } = serviceLoader()

async function onSignUp(e) {
 showLoader()
 e.preventDefault()

 const formObject = getFormObject(e)

 try {
  let response = await signUp(formObject)
  onCallRestFunction(response, formObject)
 } catch (error) {
  throw error
 } finally {
  hideLoader()
  e.target.reset()
 }
}

async function onSignIn(e) {
 showLoader()
 e.preventDefault()
 const formObject = getFormObject(e)
 try {
  let response = await signIn(formObject)
  onCallRestFunction(response, formObject)
 } catch (error) {
  throw error
 } finally {
  hideLoader()
  e.target.reset()
 }
}

// hlp

function getFormObject(e) {
 const formData = new FormData(e.currentTarget)
 return Object.fromEntries(formData.entries())
}

async function onCallRestFunction(
 response,
 formObject
) {
 if (!response.ok) {
  const errorData = await response.json()
  throw new Error(
   errorData.message || 'Error in registration.'
  )
 }

 const data = await response.json()

 saveToken(data.access_token)

 await hideModal()
 await createHtmlAuth(formObject)
 const authLogoutBtn = document.querySelector(
  '.auth_logout'
 )

 authLogoutBtn.addEventListener('click', logout)
}
function saveToken(access_token) {
 if (access_token) {
  localStorage.setItem(
   'access_token',
   JSON.stringify(access_token)
  )
 }
}
