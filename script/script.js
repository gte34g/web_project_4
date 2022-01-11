let popupForm = document.querySelector('#editButton');
let showPopup = document.querySelector('#popup');
let closePopup = document.querySelector('.btn__profile-close');
let btnSave = document.querySelector(".btn__profile-save");
let heroName = document.querySelector("#heroName");
let heroTitle = document.querySelector("#heroTitle");


function openForm() {
  showPopup.classList.toggle("popup_active");
}

function hideForm() {
  closePopup.classList.toggle("popup_active");
}
popupForm.addEventListener("click", openForm);
closePopup.addEventListener("click", openForm);

function changeName(evt) {
  
  let inputName = document.querySelector(".popup__form__name");
  let inputTitle = document.querySelector(".popup__form__title");
  heroName.innerText = inputName.value;
  heroTitle.innerText = inputTitle.value;
  showPopup.classList.toggle("popup_active");
  evt.preventDefault();
}

btnSave.addEventListener("submit", changeName);