const editProfileButton = document.querySelector("#editButton");
const profilePopup = document.querySelector(".popup");
const closeProfilePopupButton = document.querySelector(".popup__btn-close");
const editProfileForm = document.querySelector(".popup__content");

const heroName = document.querySelector("#heroName");
const heroTitle = document.querySelector("#heroTitle");
const inputName = document.querySelector("#inputName");
const inputTitle = document.querySelector("#inputTitle");

function openPopup(popup) {
  popup.classList.add("popup_active");
}
function closePopup(popup) {
  popup.classList.remove("popup_active");
}

function saveProfile(evt) {
  heroName.textContent = inputName.value;
  heroTitle.textContent = inputTitle.value;
  closePopup(profilePopup);
  evt.preventDefault();
}

function openProfilePopup(evt) {
  evt.preventDefault();
  inputName.value = heroName.textContent;
  inputTitle.value = heroTitle.textContent;
  openPopup(profilePopup);
}

editProfileButton.addEventListener("click", heroNameInForm);
closeProfilePopupButton.addEventListener("click", () => closePopup(profilePopup));
editProfileForm.addEventListener("submit", saveProfile);


// Sprint 5 //

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


const addNewPlaceButton = document.querySelector(".profile__btn-add");
const closeNewPlaceButton = document.querySelector(".popup__btn-close_type_new-place");
const newPlacePopup = document.querySelector(".popup_add_place");
const createNewPlaceButton = document.querySelector(".popup__btn-create");

const newPlaceForm = document.querySelector("#newPlaceForm");
const cardTemplate = document.querySelector("#place-template").content;
const cardPreview = document.querySelector(".popup-preview");
const cardPreviewClose = document.querySelector(".popup__close-preview");
const cardName = document.querySelector("#inputTitlePlace");
const cardLink = document.querySelector("#inputLinkPlace");

const placeList = document.querySelector(".photo-grid");
const largeImagePreview = document.querySelector(".popup_active")

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
  const popupImage = cardPreview.querySelector(".popup__img");
  const popupText = cardPreview.querySelector(".popup__description");
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
});
