export const initialCards = [
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

export const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input-text",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_inactive",
  inputErrorClass: "popup__error",
  errorMessageClass: "popup__input-error_active",
};

export const popupSettings = {
  imageWindow: ".popup-preview",
  editFormWindow: "#popup",
  cardFromWindow: ".popup_add_place",
  
};

export const profileSettings = {
  profileTitle: ".profile__name",
  profileDescription: ".profile__title",
};

export const cardsSettings = {
  cardSelector: "#place-template",
  placeSection: ".photo-grid",
};
