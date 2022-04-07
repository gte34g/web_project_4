export default class UserInfo {
    constructor({ nameSelector, jobSelector }) {
      this.nameElement = document.querySelector(nameSelector);
      this.jobElement = document.querySelector(jobSelector);
    }

    getUserInfo() {
      this._user = {
        name: this.nameElement.textContent,
        job: this.jobElement.textContent,
      };
     
      return this._user;
    }

  setUserInfo = ({name, job}) => {
      this.nameElement.textContent = name;
      this.jobElement.textContent = job;
    }
  }

        