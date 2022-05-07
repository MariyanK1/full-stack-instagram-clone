import { today } from "../helpers/constants.js";

class User {
  constructor(userObj) {
    this.email = userObj.email;
    this.password = userObj.password;
    this.repeatPassword = userObj.repeatPassword;
    this.sex = userObj.sex;
    this.registeredAt = today;
    this.data = {
      registeredAt: this.registeredAt,
    };

    for (const [key, value] of new FormData(userObj)) {
      this.data[key] = value;
    }
  }
}

export default User;
