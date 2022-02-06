import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableOperations1644167057631 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.createTable(
      new Table({
        name: "operations",
        columns: [
          {
            name: "id",
            type: "bigint",
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "type",
            type: "varchar",
          },
          {
            name: "price",
            type: "float",
          },
          {
            name: "userId",
            type: "bigint",
          },
          {
            name: "create_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["userId"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.dropTable("operations");
  }
}
