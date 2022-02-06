import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("operations")
export class Operation {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  description: string;

  @Column()
  type: string;

  @Column()
  price: number;

  @Column()
  userId: number;
}
