-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "total" REAL NOT NULL,
    "isDelivery" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PROCESSANDO'
);
INSERT INTO "new_Order" ("createdAt", "customerEmail", "id", "isDelivery", "total", "userId") SELECT "createdAt", "customerEmail", "id", "isDelivery", "total", "userId" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
