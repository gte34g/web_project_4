export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const userData = {
      userName: this._nameElement.textContent,
      userTitle: this._jobElement.textContent,
      
    };
    return userData;
  }

  getUserAvatar() {
    const userAvatar = {
      avatar: this._avatarElement.src,
    };
    return userAvatar;
  }

  setUserInfo = (data) => {
    this._nameElement.textContent = data.userName;
    this._jobElement.textContent = data.userTitle;
  };

  setUserAvatar = (data) => {
    this._avatarElement.src = data.avatar;
  };
}

