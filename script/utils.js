export function openPopup(popup) {
  popup.classList.add("popup_active");
  popup.addEventListener("click", handleOverlayClick);
  document.addEventListener("keydown", handleEscKey);
}
export function closePopup(popup) {
  popup.classList.remove("popup_active");
  popup.removeEventListener("click", handleOverlayClick);
  document.removeEventListener("keydown", handleEscKey);
}

//////////////////////////////////
//  Mouse Click on Background  //
////////////////////////////////
function handleOverlayClick(e) {
  if (e.target.classList.contains("popup")) {
    closePopup(e.target);
  }
}

/////////////////////////////////
//         Esc button         //
///////////////////////////////
function handleEscKey(e) {
  if (e.key === "Escape") {
    closePopup(document.querySelector(".popup_active"));
  }
}
