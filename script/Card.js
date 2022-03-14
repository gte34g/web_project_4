import { openPopup } from "./utils.js";

const cardPreview = document.querySelector(".popup-preview");
const largeImagePreview = document.querySelector(".popup__window-large");
const popupImage = largeImagePreview.querySelector(".popup__img");
const popupText = largeImagePreview.querySelector(".popup__description");

class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document.querySelector(this._cardSelector).content.querySelector(".place__item").cloneNode(true);
  }

  _handleCardLikeButton = () => {this._element.querySelector(".place__btn-hart").classList.toggle("place__btn-hart_active")};
  _handleDeleteCardButton() {this._element.remove();}

  _setEventListeners() {
    this._element.querySelector(".place__btn-trash").addEventListener("click", () => this._handleDeleteCardButton());
    this._element.querySelector(".place__image").addEventListener("click", () => this._handlePreviewImage());
    this._element.querySelector(".place__btn-hart").addEventListener("click", this._handleCardLikeButton);
  }
  _handlePreviewImage() {
    popupImage.src = this._link;
    popupImage.alt = this._title;
    popupText.textContent = `Photo of ${this._title}`;
    openPopup(cardPreview);
  }

    generateCard() {
      this._element = this._getTemplate(); 
      const cardImg = this._element.querySelector(".place__image");
      this._element.querySelector(".place__text").textContent = this._title;
      cardImg.src = this._link;
      cardImg.alt = this._title;
      this._setEventListeners();
      return this._element
  };
}

export default Card;
