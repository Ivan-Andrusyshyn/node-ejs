import { bodyRef, menuRefs } from "./refs.js";
import { disableScroll, enableScroll } from "./disableScroll.js";

menuRefs.openMenuBtn.addEventListener("click", onOpenMenu);
menuRefs.closeMenuBtn.addEventListener("click", onCloseMenu);
menuRefs.menuBackdrop.addEventListener("click", onClickBackdrop);
menuRefs.menuNavLink.forEach(function (link) {
  link.addEventListener("click", onCloseMenu);
});

function onOpenMenu(e) {
  bodyRef.classList.add("show-menu");
  disableScroll();
}

function onCloseMenu(e) {
  bodyRef.classList.remove("show-menu");
  enableScroll();
}

function onClickBackdrop(e) {
  if (e.currentTarget === e.target) onCloseMenu();
}

export { onCloseMenu };
