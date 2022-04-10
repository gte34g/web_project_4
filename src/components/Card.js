
export default class Card {
  constructor(data, cardSelector, onImageClick) {
    this._title = data.name;
    this._link = data.link;

    this._cardSelector = cardSelector;

    this._onImageClick = onImageClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".place__item")
      .cloneNode(true);

    return cardElement;
  }

  _handleDeleteCardButton() {
    this._element.remove();
    this._element = null;
  }

  _handleLikeButton() {
    this._element.querySelector(".place__btn-hart").classList.toggle("place__btn-hart_active");
  }

  _handlePreviewImage() {
    this._onImageClick({ link: this._link, title: this._title });
  }

  _setEventListeners() {
    this._element.querySelector(".place__btn-trash").addEventListener("click", () => this._handleDeleteCardButton());

    this._element.querySelector(".place__btn-hart").addEventListener("click", () => this._handleLikeButton());

    this._element.querySelector(".place__image").addEventListener("click", () => this._handlePreviewImage());
  }

  generateCard() {
    this._element = this._getTemplate();
    const cardImg = this._element.querySelector(".place__image");
    this._element.querySelector(".place__text").textContent = this._title;
    cardImg.src = this._link;
    cardImg.alt = this._title;
    this._setEventListeners();

    return this._element;
  }
}
