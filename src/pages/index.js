import "./index.css";
import Card from "../components/Card";
import FormValidator from "../components/FormValidator.js";
import {
  settings,
  popupSettings,
  profileSettings,
  cardsSettings,
} from "../utils/constants.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {api} from "../components/Api.js"
import PopupWithSubmit from "../components/PopupWithSubmit";
import { data } from "autoprefixer";


const userInfo = new UserInfo({
  nameSelector: profileSettings.profileTitle,
  jobSelector: profileSettings.profileDescription,
  avatarSelector: profileSettings.avatarPicture,
  nameInput: profileSettings.profileInput,
  jobtInbut: profileSettings.aboutInput,
});

function renderCard(data) {
  const card = new Card(
    {
      data,
      handleCardClick: () => {
        imagePopup.open(data);
      },

      handleLikeButton: () => {
        const hasLiked = card.isLiked();
        if (hasLiked) {
          api
            .dislikeCard(card.getId())
            .then((res) => {
              card.updateLikes(res.likes);
            })
            .catch((err) => console.log(err));
        } else {
          api
            .likeCard(card.getId())
            .then((res) => {
              card.updateLikes(res.likes);
            })
            .catch((err) => console.log(err));
        }
      },

      handleDeleteCard: () => {
        confirmModal.open();
        confirmModal.setAction(() => {         
          api
            .deleteCard(card.getId())
            .then((res) => {
              card.removeCard();
              confirmModal.close();
            })
            .catch((err) => console.log(err));
        });
      },
    },
    cardsSettings.cardSelector,
    userId
  );
  return card.generateCard();
}


const cardsList = new Section(
  {
    renderer: (data) => cardsList.addItem(renderCard(data))
  },
  cardsSettings.placeSection
);

const imagePopup = new PopupWithImage(popupSettings.imageWindow);

const userInfoPopup = new PopupWithForm({
  popupSelector: popupSettings.editFormWindow,
  handleFormSubmit: (data) => {
    api
      .editProfile({
        name: data.userName,
        about: data.userTitle,
      })
      .then((res) => {
        userInfo.setUserInfo({
          userName: res.name,
          userTitle: res.about,
          avatarSelector: res.avatar,
        });
        userInfoPopup.close();
      })
      .catch((err) => console.log(err))
      .finally(() => userInfoPopup.changeButtonText("Save"));
  }
});

const newCardPopup = new PopupWithForm({
  popupSelector: popupSettings.cardFromWindow,
  handleFormSubmit: (data) => {
    
    api.createCard(data)
      .then(res => {
        const newCard = renderCard(res)
        cardsList.addItem(newCard);
        newCardPopup.close();
      })
      .catch((err) => console.log(err))
      .finally(() => newCardPopup.changeButtonText("Save"));   
  }
})

/* Avatar */
const changeAvatarPhoto = document.querySelector(".profile__btn-avatar");

const avatarEdit = new PopupWithForm({
  popupSelector: popupSettings.avatarModal,
  handleFormSubmit: (data) => {
    api
      .changeAvatar(data)
      .then(({ avatar }) => {
        userInfo.setUserAvatar({ avatar });
        avatarEdit.close();
      })
      .catch((err) => console.log(err))
    .finally(() => {
      avatarEdit.changeButtonText("Save");
    })
  },
});


const avatarFormValidator = new FormValidator(settings, avatarEdit.popupElement);
avatarFormValidator.enableValidation();

const openAvatarModal = () => {
  avatarEdit.open();
  avatarFormValidator.resetValidation();
};
avatarEdit.setEventListeners();
changeAvatarPhoto.addEventListener("click", openAvatarModal);


/* END OF AVATAR */

const profileFormValidator = new FormValidator(settings, userInfoPopup.popupElement);
const placeFormValidator = new FormValidator(settings, newCardPopup.popupElement);

const confirmModal = new PopupWithSubmit(".popup-confirm-delete");



confirmModal.setEventListeners();
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


let userId;
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cardData, userData]) => {
    userId = userData._id;
    cardsList.renderItems(cardData);

    userInfo.setUserInfo({
      userName: userData.name,
      userTitle: userData.about,
    });

    userInfo.setUserAvatar({
      avatar: userData.avatar,
    });
  })
  .catch((err) => console.log(err));