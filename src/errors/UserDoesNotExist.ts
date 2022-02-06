export class UserDoesNotExist extends Error {
  constructor() {
    super("User does not exists!");

    this.name = "UserDoesNotExist";

    Object.setPrototypeOf(this, UserDoesNotExist.prototype);
  }
}
