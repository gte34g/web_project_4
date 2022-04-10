import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this.popupElement.querySelector(".form");
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
    this.close();
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", () => this._formSubmit());
  }

  close = () => {
    this._form.reset();
    super.close();
  };

  setFormData(inputValues) {
    const inputs = [...this._form.querySelectorAll(".popup__input-text")];
    inputs.forEach((input) => {
      input.value = inputValues[input.name];
    });
  }
}
