export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInfo() {
    this._user = {
      name: this._nameElement.textContent,
      job: this._jobElement.textContent,
    };

     document.querySelector(".profile__name").value = this._user.name;
     document.querySelector(".profile__title").value = this._user.job;

    return this._user;
  }

  setUserInfo = ({ userName, userTitle }) => {
    this._nameElement.textContent = userName;
    this._jobElement.textContent = userTitle;
  };
}

        