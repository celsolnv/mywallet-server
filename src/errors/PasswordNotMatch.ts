export class PasswordNotMatch extends Error {
  constructor() {
    super("Password not match!");

    this.name = "PasswordNotMatch";

    Object.setPrototypeOf(this, PasswordNotMatch.prototype);
  }
}
