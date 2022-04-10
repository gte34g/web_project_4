export default class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
    this._handleEscUp = this._handleEscUp.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  _handleEscUp(evt) {
    evt.preventDefault();
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this.popupElement
      .querySelector(".popup__btn-close")
      .addEventListener("click", this.close);
    this.popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target === this.popupElement) {
        this.close();
      }
    });
  }
  

  open() {
    this.popupElement.classList.add("popup_active");
    document.addEventListener("keyup", this._handleEscUp);
  }

  close() {
    this.popupElement.classList.remove("popup_active");
    document.removeEventListener("keyup", this._handleEscUp);
  }
}
