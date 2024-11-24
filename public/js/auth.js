import { createHtmlAuth } from './auth/createHtmlAuth.js'
import { authService } from './auth/serviceAuth.js'
import { signForm } from './refs.js'
import { serviceLoader } from './serviceLoader.js'

signForm.addEventListener('submit', onSubmitForm)

const { signUp, hideModal } = await authService()

const { showLoader, hideLoader } = serviceLoader()
let isAuth = false

async function onSubmitForm(e) {
 showLoader()
 e.preventDefault()

 const formData = new FormData(e.currentTarget)
 const formObject = Object.fromEntries(
  formData.entries()
 )
 try {
  const response = await signUp(formObject)
  if (!response.ok) {
   const errorData = await response.json()
   throw new Error(
    errorData.message || 'Error in registration.'
   )
  }

  const data = await response.json()

  if (data.access_token) {
   localStorage.setItem(
    'access_token',
    JSON.stringify(data.access_token)
   )
  }

  await hideModal()
  await createHtmlAuth(formObject)
  isAuth = true
  hideLoader()
 } catch (error) {
  console.error('Error:', error)
  isAuth = false
  hideLoader()
 }

 e.target.reset()
}
