import { OperationRepository } from "./../repositories/OperationRepository";
import { getCustomRepository } from "typeorm";
interface CreateData {
  description: string;
  price: number;
  type: string;
  userId: number;
}

export async function create({ type, description, price, userId }: CreateData) {
  try {
    const operationRepository = getCustomRepository(OperationRepository);

    const operation = operationRepository.create({
      description,
      price,
      type,
      userId,
    });

    await operationRepository.save(operation);

    return operation;
  } catch (error) {
    console.log(error);
  }
}
