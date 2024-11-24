import { signUpRef } from '../refs.js'
import { authContainer } from '../refs.js'

const access_token = localStorage.getItem(
 'access_token'
)

const buildHeader = (method) => {
 if (access_token) {
  return {
   method,
   headers: {
    Authorization: `Bearer ${JSON.parse(
     access_token
    )}`,
    'Content-Type': 'application/json',
   },
  }
 } else {
  return { method }
 }
}

export const authService = async () => {
 const signUp = async (formObject) => {
  return await fetch('/auth/sign-up', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(formObject),
  })
 }

 const logout = async () => {
  await fetch('/auth/logout', buildHeader('GET'))
  localStorage.removeItem('access_token')
  authContainer.innerHTML = ''
  showModal()
 }

 const showModal = async () => {
  signUpRef.backdrop.classList.remove(
   'signup_hide'
  )
  await fetch('/', buildHeader('GET'))
 }
 const hideModal = async () => {
  signUpRef.backdrop.classList.add('signup_hide')
  await fetch('/', buildHeader('GET'))
 }
 const getUser = async () => {
  const response = await fetch(
   '/auth/users',
   buildHeader('GET')
  )
  const data = await response.json()
  return data
 }

 return {
  signUp,
  showModal,
  hideModal,
  getUser,
  logout,
 }
}
