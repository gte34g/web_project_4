function showInputError(input, settings) {
  const { inputErrorClass } = settings;
  const error = input.validationMessage
  const errorElement = document.querySelector(`#${input.id}-error`)
  errorElement.textContent = error

  input.classList.add(inputErrorClass);
}

function hideInputError(input, settings) {
  const { inputErrorClass } = settings;
  const errorElement = document.querySelector(`#${input.id}-error`)
  errorElement.textContent = ''

  input.classList.remove(inputErrorClass);
}

const checkInputValidity = (input, settings) => {
  if (input.validity.valid) {
    hideInputError(input, settings);
  } else {
    showInputError(input, settings);
  }
};

function toggleButtonState(inputs, button, settings) {
  const isFormValid = inputs.every(input => input.validity.valid)
  const { inactiveButtonClass } = settings;
  if (isFormValid) {
    button.disabled = false
    button.classList.remove(inactiveButtonClass);
  } else {
    button.disabled = "disabled"
    button.classList.add(inactiveButtonClass);
  }
}

function enableValidation(settings) {
  const {formSelector, inputSelector, submitButtonSelector, ...rest} = settings
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach(form => {
    form.addEventListener('submit', (e) => e.preventDefault())
    
    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);
    inputs.forEach(input => {

      input.addEventListener('input', () => {
        checkInputValidity(input, rest)
        toggleButtonState(inputs, button, rest)
      })
    })
  })
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input-text",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_inactive",
  inputErrorClass: "popup__error",
  errorMessage: "popup__input-error_active",
};

enableValidation(config);