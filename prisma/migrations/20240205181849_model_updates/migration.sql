/*
  Warnings:

  - You are about to drop the column `serviceId` on the `ContactForm` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ContactForm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_ContactForm" ("company", "createdAt", "email", "id", "message", "name", "phone", "updatedAt") SELECT "company", "createdAt", "email", "id", "message", "name", "phone", "updatedAt" FROM "ContactForm";
DROP TABLE "ContactForm";
ALTER TABLE "new_ContactForm" RENAME TO "ContactForm";
CREATE UNIQUE INDEX "ContactForm_email_key" ON "ContactForm"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
