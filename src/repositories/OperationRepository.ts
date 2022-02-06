import { EntityRepository, Repository } from "typeorm";
import { Operation } from "../entities/Operation";

@EntityRepository(Operation)
export class OperationRepository extends Repository<Operation> {}
