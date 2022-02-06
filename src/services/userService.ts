import { PasswordNotMatch } from "./../errors/PasswordNotMatch";
import { UserDoesNotExist } from "./../errors/UserDoesNotExist";
import { UserAlreadyExists } from "../errors/UserAlreadyExists";
import { UserRepository } from "../repositories/UserRepository";
import { getCustomRepository } from "typeorm";
import { sign } from "jsonwebtoken";
import { compare, hash } from "bcrypt";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}
interface LoginData {
  email: string;
  password: string;
}
export async function register({ name, email, password }: RegisterData) {
  const userRepository = getCustomRepository(UserRepository);

  try {
    const userAlreadyExists = await userRepository.checkUserExistsByEmail(
      email
    );

    if (userAlreadyExists) {
      throw new UserAlreadyExists();
    }

    const passwordHash = await hash(password, 8);
    const user = userRepository.create({
      email,
      name,
      password: passwordHash,
    });
    await userRepository.save(user);

    return user;
  } catch (error) {
    console.log("Error in register user", error);
  }
}

export async function login({ email, password }: LoginData) {
  try {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new UserDoesNotExist();
    }

    const passwordMatch = compare(password, user.password);

    if (!passwordMatch) {
      throw new PasswordNotMatch();
    }

    const token = sign(
      {
        email: user.email,
      },
      String(process.env.JWT_SECRET),
      {
        subject: String(user.id),
        expiresIn: "1d",
      }
    );

    const result = {
      ...user,
      token,
    };
    return result;
  } catch (error) {
    console.log("Error in register user", error);
  }
}

export async function getUserById(id: number) {
  try {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(id);

    return user;
  } catch (error) {
    console.log("Error in server", error);
  }
}
