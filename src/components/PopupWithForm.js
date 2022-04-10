import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor( {popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this.popupElement.querySelector(".form");
  }
  _getInputValues() {
    this._inputs = this._form.querySelectorAll(".popup__input-text");
    this._inputValues = {};

    this._inputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });

    return this._inputValues;
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

  formData(inputValues) {
    const inputs = [...this._form.querySelectorAll(".popup__input-text")];
    inputs.forEach((input) => {
      input.value = inputValues[input.name];
    });
  }

}
