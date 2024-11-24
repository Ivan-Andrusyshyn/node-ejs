const tabsAuth = () => {
 const loginTab =
  document.getElementById('login-tab')
 const signupTab =
  document.getElementById('signup-tab')

 const loginForm = document.querySelector(
  '.login_form'
 )
 const signupForm = document.querySelector(
  '.sign-up_form'
 )

 const formTitle =
  document.getElementById('form-title')

 signupTab.classList.add('active')
 loginTab.classList.remove('active')

 loginTab.addEventListener('click', () => {
  loginTab.classList.add('active')
  signupTab.classList.remove('active')
  loginForm.classList.remove('hidden')
  signupForm.classList.add('hidden')
  formTitle.textContent = 'Login'
 })

 signupTab.addEventListener('click', () => {
  signupTab.classList.add('active')
  loginTab.classList.remove('active')
  signupForm.classList.remove('hidden')
  loginForm.classList.add('hidden')
  formTitle.textContent = 'Sign Up'
 })
}
export default tabsAuth
