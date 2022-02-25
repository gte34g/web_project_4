const editProfileButton = document.querySelector("#editButton");
const profilePopup = document.querySelector("#popup");
const closeProfilePopupButton = profilePopup.querySelector(".popup__btn-close");
const editProfileForm = profilePopup.querySelector(".popup__form");

const heroName = document.querySelector("#heroName");
const heroTitle = document.querySelector("#heroTitle");
const inputName = document.querySelector("#input-name");
const inputTitle = document.querySelector("#input-about");

const addNewPlaceButton = document.querySelector(".profile__btn-add");
const closeNewPlaceButton = document.querySelector(".popup__btn-close_type_new-place");
const newPlacePopup = document.querySelector(".popup_add_place");
const createNewPlaceButton = document.querySelector(".popup__btn-create");

const newPlaceForm = document.querySelector("#newPlaceForm");
const cardTemplate = document.querySelector("#place-template").content;
const cardPreview = document.querySelector(".popup-preview");
const cardPreviewClose = document.querySelector(".popup__close-preview");
const cardName = document.querySelector("#input-place");
const cardLink = document.querySelector("#input-url");

const placeList = document.querySelector(".photo-grid");
const largeImagePreview = document.querySelector(".popup_active");

const popupImage = cardPreview.querySelector(".popup__img");
const popupText = cardPreview.querySelector(".popup__description");

function openPopup(popup) {
  popup.classList.add("popup_active");
  popup.addEventListener("click", mouseClickOnOverlay);
  document.addEventListener("keydown", handleEscKey);
}
function closePopup(popup) {
  popup.classList.remove("popup_active");
  popup.removeEventListener("click", mouseClickOnOverlay);
  document.removeEventListener("keydown", handleEscKey);
}

function saveProfile(evt) {
  heroName.textContent = inputName.value;
  heroTitle.textContent = inputTitle.value;
  closePopup(profilePopup);
  evt.preventDefault();
}

function openProfilePopup(evt) {
  inputName.value = heroName.textContent;
  inputTitle.value = heroTitle.textContent;
  openPopup(profilePopup);
}

editProfileButton.addEventListener("click", openProfilePopup);
closeProfilePopupButton.addEventListener("click", () => closePopup(profilePopup));
editProfileForm.addEventListener("submit", saveProfile);

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

function createPlaceCard(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImg = cardElement.querySelector(".place__image");
  const cardTitle = cardElement.querySelector(".place__text");
  const cardLike = cardElement.querySelector(".place__btn-hart");
  const cardDel = cardElement.querySelector(".place__btn-trash");

  const { name, link } = card;
  cardImg.src = card.link;
  cardImg.alt = card.name;
  cardTitle.textContent = card.name;

  cardImg.addEventListener("click", () => {
    openImage(card);
  });

  cardLike.addEventListener("click", () => {
    cardLike.classList.toggle("place__btn-hart_active");
  });

  cardDel.addEventListener("click", (evt) => {
    evt.target.closest(".place__item").remove();
  });
  
  return cardElement;  
}

function renderCard(card) {
  placeList.prepend(createPlaceCard(card));
}

initialCards.forEach((card) => {
  renderCard(card);
});

newPlaceForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const card = {
    name: cardName.value,
    link: cardLink.value,
  };
  renderCard(card);
  
  closePopup(newPlacePopup);
  newPlaceForm.reset();
});

const openImage = (card) => {
  openPopup(cardPreview);
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupText.textContent = card.name;
}

cardPreviewClose.addEventListener("click", () => {
  closePopup(cardPreview);
});
addNewPlaceButton.addEventListener("click", () => {
  openPopup(newPlacePopup);
});
closeNewPlaceButton.addEventListener("click", () => {
  closePopup(newPlacePopup);
  newPlaceForm.reset();
});

//////////////////////////////////
//  Mouse Click on Background  //
////////////////////////////////
function mouseClickOnOverlay(e) {
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