import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  initialCards,
  settings,
  popupSettings,
  profileSettings,
  cardsSettings,
} from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";


const userInfo = new UserInfo({
  nameSelector: profileSettings.profileTitle,
  jobSelector: profileSettings.profileDescription,
});

const renderCard = (data) => {
  const card = new Card(data, cardsSettings.cardSelector, imagePopup.open);
  cardsList.addItem(card.generateCard());
};

const cardsList = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  cardsSettings.placeSection
);


const imagePopup = new PopupWithImage(popupSettings.imageWindow);

const userInfoPopup = new PopupWithForm({
  popupSelector: popupSettings.editFormWindow,
  handleFormSubmit: (fromData) => {
    userInfoPopup.close();
    userInfo.setUserInfo(fromData);
  },
});

const newCardPopup = new PopupWithForm({
  popupSelector: popupSettings.cardFromWindow,
  handleFormSubmit: (data) => {
    renderCard(data);
  },
});

cardsList.renderItems();

const profileFormValidator = new FormValidator(settings, userInfoPopup.popupElement);
const placeFormValidator = new FormValidator(settings, newCardPopup.popupElement);


imagePopup.setEventListeners();
userInfoPopup.setEventListeners();
newCardPopup.setEventListeners();

profileFormValidator.enableValidation();
placeFormValidator.enableValidation();

const openProfileForm = document.querySelector(".profile__btn-edit");
const openPlaceForm = document.querySelector(".profile__btn-add");
const openProfileWithInfo = () => {
  userInfoPopup.open();
  userInfoPopup.setFormData(userInfo.getUserInfo());
  profileFormValidator.resetValidation();
}

openProfileForm.addEventListener('click', openProfileWithInfo);

const openEmptyPlace = () => {
    newCardPopup.open();
    placeFormValidator.resetValidation();
}
openPlaceForm.addEventListener('click', openEmptyPlace);