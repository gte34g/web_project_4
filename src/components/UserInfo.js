export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    const userData = {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };

    return userData;
  }

  setUserInfo = ({fromData}) => {
    this._nameElement.textContent = fromData.userName;
    this._jobElement.textContent = fromData.userTitle;
  };
}

        