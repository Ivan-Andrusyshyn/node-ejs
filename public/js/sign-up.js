import { signForm, signUpRef } from './refs.js'

signForm.addEventListener('submit', onSubmitForm)

let isAuth = false

const signUp = async (formObject) =>
 await fetch('/sign-up', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
  },
  body: JSON.stringify(formObject),
 })

const showModal = async () => {
 signUpRef.backdrop.classList.remove(
  'signup_hide'
 )
 await fetch('/', {
  method: 'GET',
 })
}
const hideModal = async () => {
 signUpRef.backdrop.classList.add('signup_hide')
 await fetch('/', {
  method: 'GET',
 })
}
window.addEventListener(
 'DOMContentLoaded',
 async (e) => {
  const userStr = localStorage.getItem('user')
  if (!!userStr) {
   const userData = JSON.parse(userStr)
   await signUp(userData)
   isAuth = true
   await hideModal()
  } else {
   isAuth = false
   showModal()
  }
 }
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
    'Ошибка при отправке данных на сервер'
   )
  }

  await hideModal()
 } catch (error) {
  console.error('Ошибка:', error)
  alert(
   'Произошла ошибка при регистрации. Попробуйте снова!'
  )
 }

 e.target.reset()
}
