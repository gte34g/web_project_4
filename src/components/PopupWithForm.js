import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this.popupElement.querySelector(".form");
    this._submitButton = this.popupElement.querySelector(".popup__btn");
  }
  _getInputValues() {
    const inputs = [...this._form.querySelectorAll(".popup__input-text")];
    const inputValues = {};

    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }

  _formSubmit = () => {
    this._handleFormSubmit(this._getInputValues());
  };

  changeButtonText(text = "Saving...") {
    this._submitButton.textContent = text;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      this._formSubmit();
      e.preventDefault();
      this.changeButtonText()
    });
    super.setEventListeners();
  }

  close = () => {
    super.close();
    this._form.reset();
  };

  setFormData(inputValues) {
    const inputs = [...this._form.querySelectorAll(".popup__input-text")];
    inputs.forEach((input) => {
      input.value = inputValues[input.name];
    });
  }
}
