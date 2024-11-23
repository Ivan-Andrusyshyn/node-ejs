import { bodyRef, modalRefs } from "./refs.js";
import { onCloseMenu } from "./menu.js";
import { disableScroll, enableScroll } from "./disableScroll.js";

modalRefs.backdrop.addEventListener("click", onClickBackdrop);
modalRefs.closeModalBtn.addEventListener("click", onCloseModal);
modalRefs.openModalBtn.forEach(function (btn) {
  btn.addEventListener("click", onOpenModal);
});

function onOpenModal(e) {
  window.addEventListener("keydown", onEscKeyDown);
  bodyRef.classList.add("show-modal");
  onCloseMenu();
  disableScroll();
}

function onCloseModal(e) {
  window.removeEventListener("keydown", onEscKeyDown);
  bodyRef.classList.remove("show-modal");
  enableScroll();
}

function onClickBackdrop(e) {
  if (e.currentTarget === e.target) onCloseModal();
}

function onEscKeyDown(e) {
  if (e.code === "Escape") onCloseModal();
}

export { onCloseModal };
