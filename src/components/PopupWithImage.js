import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  open = ({ link, name }) => {
    const imageCaption = this.popupElement.querySelector(".popup__description");
    const imageElement = this.popupElement.querySelector(".popup__img");

    imageElement.src = link;
    imageElement.alt = name;
    imageCaption.textContent = name;

    super.open();
  };
}

