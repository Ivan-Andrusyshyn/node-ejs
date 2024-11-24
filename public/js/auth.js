import { createHtmlAuth } from './auth/createHtmlAuth.js'
import { authService } from './auth/serviceAuth.js'
import { signForm } from './refs.js'

signForm.addEventListener('submit', onSubmitForm)

const { signUp, hideModal, onLoadedPage } =
 await authService()

window.addEventListener(
 'DOMContentLoaded',
 onLoadedPage
)

async function onSubmitForm(e) {
 e.preventDefault()

 const formData = new FormData(e.currentTarget)
 const formObject = Object.fromEntries(
  formData.entries()
 )

 localStorage.setItem(
  'user',
  JSON.stringify(formObject)
 )
 try {
  const response = await signUp(formObject)

  if (!response.ok) {
   throw new Error(
    'Something went wrong. Please check code.'
   )
  }

  await hideModal()
  await createHtmlAuth(formObject)
 } catch (error) {
  console.error('Error:', error)
 }

 e.target.reset()
}
