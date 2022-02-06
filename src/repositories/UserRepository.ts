import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async checkUserExistsByEmail(email: string) {
    const user = await this.findOne({ email });
    if (user) {
      return true;
    }
    return false;
  }
}
