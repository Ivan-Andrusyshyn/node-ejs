export const serviceLoader = () => {
 function showLoader() {
  document.querySelector(
   '.loader-overlay'
  ).style.display = 'flex'
 }

 function hideLoader() {
  document.querySelector(
   '.loader-overlay'
  ).style.display = 'none'
 }

 return { showLoader, hideLoader }
}
