export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }
  
  getUserInfo() {
    this._userData = {
      userName: this._nameElement.textContent,
      userTitle: this._jobElement.textContent,
    };

    return this._userData;
  }

  setUserInfo = (data) => {
    this._nameElement.textContent = data.userName;
    this._jobElement.textContent = data.userTitle;
  };
}

        