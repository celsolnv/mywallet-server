import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

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

  @CreateDateColumn()
  create_at: Date;

  @Column()
  userId: number;
}
