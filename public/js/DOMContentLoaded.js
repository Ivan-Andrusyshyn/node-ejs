import { createHtmlAuth } from './auth/createHtmlAuth.js'
import { authService } from './auth/serviceAuth.js'
import { serviceLoader } from './serviceLoader.js'

const { hideModal, logout, getUser, showModal } =
 await authService()
const { showLoader, hideLoader } = serviceLoader()

window.addEventListener(
 'DOMContentLoaded',
 async (e) => {
  try {
   showLoader()
   const { user } = await getUser()
   const nameInput = document.querySelectorAll(
    'input[name="name"]'
   )

   const phoneInput = document.querySelectorAll(
    'input[name="phone"]'
   )
   nameInput.forEach((inp) => {
    inp.value = user.name
   })

   phoneInput.forEach((inp) => {
    inp.value = user.phone
   })
   await createHtmlAuth(user)
   await hideModal()
   const authLogoutBtn = document.querySelector(
    '.auth_logout'
   )

   authLogoutBtn.addEventListener('click', logout)
   hideLoader()
  } catch (error) {
   showModal()
   hideLoader()
  }
 }
)
