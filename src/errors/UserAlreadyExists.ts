export class UserAlreadyExists extends Error {
  constructor() {
    super("User already exists!");

    this.name = "UserAlreadyExists";

    Object.setPrototypeOf(this, UserAlreadyExists.prototype);
  }
}
