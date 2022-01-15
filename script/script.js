let popupForm = document.querySelector("#editButton");
let showPopup = document.querySelector("#popup");
let closePopup = document.querySelector(".profile__btn_close");
let heroName = document.querySelector("#heroName");
let heroTitle = document.querySelector("#heroTitle");
let form = document.querySelector(".popup__content");

function openForm() {
  showPopup.classList.remove("popup_active");
}

function hideForm() {
  showPopup.classList.add("popup_active");
}

function changeName(evt) {
  let inputName = document.querySelector("#inputName");
  let inputTitle = document.querySelector("#inputTitle");
  heroName.textContent = inputName.value;
  heroTitle.textContent = inputTitle.value;
  if (inputName.value.length === 0) {
    return inputName;
  }
  if (inputTitle.value.length === 0) {
    return inputTitle;
  }
  showPopup.classList.add("popup_active");
  evt.preventDefault();
}

popupForm.addEventListener("click", openForm);
closePopup.addEventListener("click", hideForm);
form.addEventListener("submit", changeName);
