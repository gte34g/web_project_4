import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import { openPopup, closePopup } from "./utils.js";

const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input-text",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_inactive",
  inputErrorClass: "popup__error",
  errorMessage: "popup__input-error_active",
};


const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const placeList = document.querySelector(".photo-grid");

// Profile Editing //
const profilePopup = document.querySelector("#popup");
const editProfileForm = profilePopup.querySelector(".popup__form");

// Edit Button //
const editProfileButton = document.querySelector("#editButton");
const openProfilePopup = document.querySelector(".profile__btn-edit");

// Inputs //
const inputName = document.querySelector("#input-name");
const inputTitle = document.querySelector("#input-about");
const cardName = document.querySelector("#input-place");
const cardLink = document.querySelector("#input-url");

// Inputs Info //
const heroName = document.querySelector("#heroName");
const heroTitle = document.querySelector("#heroTitle");

// Cards Adding, Editting //
const newPlacePopup = document.querySelector(".popup_add_place");
const previewCard = document.querySelector(".popup-preview");
const newPlaceForm = document.querySelector("#newPlaceForm");

// Close Buttons //
const closeProfilePopupButton = profilePopup.querySelector(".popup__btn-close");
const closeNewPlaceButton = newPlacePopup.querySelector(
  ".popup__btn-close_type_new-place"
);
const cardPreviewClose = previewCard.querySelector(".popup__close-preview");

//Add Button
const addNewPlaceButton = document.querySelector(".profile__btn-add");


// const createNewPlaceButton = document.querySelector(".popup__btn-create");

// const newPlaceForm = document.querySelector("#newPlaceForm");

const cardSelector = "#place-template";


function saveProfile(evt) {
  heroName.textContent = inputName.value;
  heroTitle.textContent = inputTitle.value;
  closePopup(profilePopup);
  evt.preventDefault();
}

openProfilePopup.addEventListener("click", () => {
  inputName.value = heroName.textContent;
  inputTitle.value = heroTitle.textContent;
  openPopup(profilePopup);
  editFormValidator.resetValidation();
});


editProfileButton.addEventListener("click", openProfilePopup);
closeProfilePopupButton.addEventListener("click", () => closePopup(profilePopup));
editProfileForm.addEventListener("submit", saveProfile);

function renderCard({ name, link }) {
  const card = new Card({ name, link }, cardSelector);
  const newCard = card.generateCard();
  placeList.prepend(newCard);
}

initialCards.forEach((card) => {renderCard(card, placeList);});


newPlaceForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const card = {
    name: cardName.value,
    link: cardLink.value,
  };
  newPlaceForm.reset();
  renderCard(card);
  closePopup(newPlacePopup);
});

cardPreviewClose.addEventListener("click", () => {closePopup(previewCard);});
addNewPlaceButton.addEventListener("click", () => {openPopup(newPlacePopup);});
closeNewPlaceButton.addEventListener("click", () => {closePopup(newPlacePopup);});

const addFormValidator = new FormValidator(settings, newPlaceForm);
const editFormValidator = new FormValidator(settings, editProfileForm);

addFormValidator.enableValidation();
editFormValidator.enableValidation();

addFormValidator.resetValidation();
editFormValidator.resetValidation();
