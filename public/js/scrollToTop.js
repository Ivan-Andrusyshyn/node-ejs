import { scrollBtn } from "./refs.js";

window.addEventListener("scroll", trackScroll);
scrollBtn.addEventListener("click", onClickScrollToTopBtn);

function trackScroll(e) {
  scrollBtn.classList.toggle("hide-scroll", window.scrollY < 500);
}

function onClickScrollToTopBtn(e) {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
