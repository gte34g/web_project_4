export default class Card {
  constructor(
    { data, handleCardClick, handleDeleteCard, handleLikeButton },
    cardSelector,
    userId
  ) {
    this._title = data.name;
    this._link = data.link;
    this._id = data._id;

    this._likes = data.likes;
    this._handleDeleteCard = handleDeleteCard;
    this._cardSelector = cardSelector;
    this._handleLikeButton = handleLikeButton;
    this._handleCardClick = handleCardClick;

    this._ownerId = data.owner._id;
    this._userId = userId;

    this._confirmDelete = data.confirmDelete
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".place__item")
      .cloneNode(true);

    return cardElement;
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  _deleteButton() {
    const cardRemover = this._element.querySelector(".place__btn-trash");
    if (this._ownerId !== this._userId) {
      cardRemover.remove();
    }
  }

  _handleCardClick() {
    this._element({ link: this._link, title: this._title });
  }

  _setEventListeners() {
    this._element
      .querySelector(".place__btn-trash")
      .addEventListener("click", () => this._handleDeleteCard(this._getId));

    this._element
      .querySelector(".place__btn-hart")
      .addEventListener("click", () => this._handleLikeButton(this._getId));

    this._element
      .querySelector(".place__image")
      .addEventListener("click", () =>
        this._handleCardClick(this._title, this._link)
      );
  }
  
  getId() {
    return this._id
  }

  isLiked() {
    return this._likes.some((person) => person._id === this._userId);
  }

  likedCard(newLikes) {
    this._likes = newLikes;

    this._element.querySelector(".place__hart-counts").textContent =
      newLikes.length;

    this._element.querySelector(".place__btn-hart").classList.toggle("place__btn-hart_active");
  }

  generateCard() {
    this._element = this._getTemplate();
    const cardImg = this._element.querySelector(".place__image");
    this._element.querySelector(".place__text").textContent = this._title;
    cardImg.src = this._link;
    cardImg.alt = this._title;
    this._setEventListeners();
    this._deleteButton();

    this._element.querySelector(".place__hart-counts").textContent = this._likes.length;


      if (this.isLiked()) {
        this.likedCard(this._likes);
      }

    return this._element;
  }
}