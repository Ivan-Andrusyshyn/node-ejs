import { formRefs } from './refs.js'
import { onCloseModal } from './modal.js'

formRefs.forEach(function (form) {
 form.addEventListener('submit', onSubmitForm)
})

function onSubmitForm(e) {
 // const formData = new FormData(e.currentTarget);
 // console.log(formData);
 // e.preventDefault();
 // onCloseModal();
 // e.target.reset();
 // alert("Send Sucсessful");
}
