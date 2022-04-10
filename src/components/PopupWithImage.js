import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  open = ({ link, title }) => {
    const imageCaption = this.popupElement.querySelector(".popup__description");
    const imageElement = this.popupElement.querySelector(".popup__img");

    imageElement.src = link;
    imageElement.alt = title;
    imageCaption.textContent = title;

    super.open();
  };
}

