/*
  Warnings:

  - You are about to drop the column `total` on the `orden` table. All the data in the column will be lost.
  - Added the required column `totalOrden` to the `Orden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden` DROP COLUMN `total`,
    ADD COLUMN `totalOrden` DOUBLE NOT NULL;
