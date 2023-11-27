import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1700078592501 implements MigrationInterface {
    name = 'Default1700078592501'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "colors" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "red" integer NOT NULL, "green" integer NOT NULL, "blue" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "colors"`);
    }

}
