let popupForm = document.querySelector("#editButton");
let showPopup = document.querySelector("#popup");
let closePopup = document.querySelector(".popup__btn-close");
let heroName = document.querySelector("#heroName");
let heroTitle = document.querySelector("#heroTitle");
let form = document.querySelector(".popup__content");

function openForm() {
  let inputName = document.querySelector("#inputName");
  let inputTitle = document.querySelector("#inputTitle");
  inputName.value = heroName.textContent;
  inputTitle.value = heroTitle.textContent;
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
  showPopup.classList.add("popup_active");
  evt.preventDefault();
}

popupForm.addEventListener("click", openForm);
closePopup.addEventListener("click", hideForm);
form.addEventListener("submit", changeName);
