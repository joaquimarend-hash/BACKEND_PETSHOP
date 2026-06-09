/*
  Warnings:

  - You are about to drop the column `lable` on the `Products` table. All the data in the column will be lost.
  - Added the required column `label` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "label" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL
);
INSERT INTO "new_Products" ("description", "id", "image", "price") SELECT "description", "id", "image", "price" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
