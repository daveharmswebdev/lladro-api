-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "doerId" INTEGER;

-- CreateTable
CREATE TABLE "Doer" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Doer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_doerId_fkey" FOREIGN KEY ("doerId") REFERENCES "Doer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
