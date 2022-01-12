let popupForm = document.querySelector('#editButton');
let showPopup = document.querySelector('#popup');
let closePopup = document.querySelector('.btn__profile-close');
let btnSave = document.querySelector(".btn__profile-save");
let heroName = document.querySelector("#heroName");
let heroTitle = document.querySelector("#heroTitle");


function openForm() {
  showPopup.classList.toggle("popup-active");
}

function hideForm() {
  closePopup.classList.toggle("popup-active");
}
popupForm.addEventListener("click", openForm);
closePopup.addEventListener("click", openForm);

function changeName(evt) {
  
  let inputName = document.querySelector("#inputName");
  let inputTitle = document.querySelector("#inputTitle");
  heroName.innerText = inputName.value;
  heroTitle.innerText = inputTitle.value;
  showPopup.classList.toggle("popup-active");
  evt.preventDefault();
}

btnSave.addEventListener("submit", changeName);