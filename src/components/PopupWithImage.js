import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open = ({ link, title }) => {
    const imageCaption = this.popupElement.querySelector(".popup__description");
    const imageElement = this.popupElement.querySelector(".popup__img");

    imageElement.src = link;
    imageElement.alt = title;
    imageCaption.textContent = title;

    this.popupElement.classList.add("popup-preview");
    document.addEventListener('keyup', this._handleEscUp)
    super.open();
  };
}

