class user {
  constructor(userName, profilePic, profileDesc, list) {
    this.userName = userName;
    this.profilePic = profilePic;
    this.profileDesc = profileDesc;
    this.list = list;
  }
}

class userFactory {
  constructor() {
    this.user = null;
  }
  createUser(userName, profilePic, profileDesc, list) {
    this.user = new user(userName, profilePic, profileDesc, list);
  }

  get userName() {
    return this.user.userName;
  }
  get profilePic() {
    return this.user.profilePic;
  }
  get profileDesc() {
    return this.user.profileDesc;
  }
  get list() {
    return this.user.list;
  }
}

export const userData = new userFactory();
