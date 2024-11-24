import { authContainer } from '../refs.js'

export const createHtmlAuth = async (user) => {
 authContainer.innerHTML = `<div class="auth_user">
 <h3>User</h3>
 <p>
  Name:
  <span id="user-name">${user.name}</span>
 </p>
 <button class="auth_logout">Logout</button>
</div>`
}
