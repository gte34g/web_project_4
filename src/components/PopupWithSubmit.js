import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  setAction(action) {
    this._handleFormSubmit = action;
  }
  setEventListeners() {
      this.popupElement.addEventListener("submit", (e) => {
          e.preventDefault()
          this._handleFormSubmit();

         // this.close
      });
      super.setEventListeners();
   
  }
}
