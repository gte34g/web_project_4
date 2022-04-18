export default class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorMessageClass = settings.errorMessageClass;
    this._button = formElement.querySelector(this._submitButtonSelector);
    this.formElement = formElement;
    this._element = Array.from(
      formElement.querySelectorAll(this._inputSelector)
    );
  }

  _hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorMessageClass);
    errorElement.textContent = "";
  }

  _showInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorMessageClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _isFormValid() {
    return this._element.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._isFormValid()) {
      this._button.disabled = true;
      this._button.classList.add(this._inactiveButtonClass);
    } else {
      this._button.disabled = false;
      this._button.classList.remove(this._inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this._element.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  resetValidation() {
    this._element.forEach((inputList) => {
      this._hideInputError(inputList);
    });
    this._toggleButtonState();
  }

  enableValidation() {
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
    this._toggleButtonState();
  }
}
