const popupForm = document.querySelector("#editButton");
const showPopup = document.querySelector("#popup");
const closePopup = document.querySelector(".popup__btn-close");
const heroName = document.querySelector("#heroName");
const heroTitle = document.querySelector("#heroTitle");
const form = document.querySelector(".popup__content");

function openForm() {
  let inputName = document.querySelector("#inputName");
  let inputTitle = document.querySelector("#inputTitle");
  inputName.value = heroName.textContent;
  inputTitle.value = heroTitle.textContent;
  showPopup.classList.add("popup_active");
}

function hideForm() {
  showPopup.classList.remove("popup_active");
}

function changeName(evt) {
  let inputName = document.querySelector("#inputName");
  let inputTitle = document.querySelector("#inputTitle");
  heroName.textContent = inputName.value;
  heroTitle.textContent = inputTitle.value;
  showPopup.classList.remove("popup_active");
  evt.preventDefault();
}

popupForm.addEventListener("click", openForm);
closePopup.addEventListener("click", hideForm);
form.addEventListener("submit", changeName);


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


const addNewPlaceBtn = document.querySelector(".profile__btn-add");
const closeNewPlace = document.querySelector(".popup__btn-close_type_new-place");
const newPlacePopup = document.querySelector(".popup_add_place");
const createNewPlace = document.querySelector(".popup__btn-create");

const newPlaceForm = document.querySelector(".poupup__form__places");
const cardTemplate = document.querySelector("#place-template").content;
const cardPreview = document.querySelector(".popup-preview");
const cardPreviewClose = document.querySelector(".popup__close-preview");
const cardName = document.querySelector("#inputTitlePlace");
const cardLink = document.querySelector("#inputLinkPlace");

const placeList = document.querySelector(".photo-grid");
const largeImage = document.querySelector(".popup_active")

function closePopups(popup) {
  popup.classList.toggle("popup_active");
}

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

initialCards.forEach((crad) => {
  renderCard(crad);
});

newPlaceForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const card = {
    name: cardName.value,
    link: cardLink.value,
  };
  renderCard(card);
  hideForm(newPlacePopup);
  newPlaceForm.reset();
});

const openImage = (card) => {
  closePopups(cardPreview);
  const popupImage = cardPreview.querySelector(".popup__img");
  const popupText = cardPreview.querySelector(".popup__description");
  popupImage.src = card.link;
  popupImage.alt = card.name;
  popupText.textContent = card.name;
}

cardPreviewClose.addEventListener("click", () => {
  closePopups(cardPreview);
});
addNewPlaceBtn.addEventListener("click", () => {
  closePopups(newPlacePopup);
});
closeNewPlace.addEventListener("click", () => {
  closePopups(newPlacePopup);
});
