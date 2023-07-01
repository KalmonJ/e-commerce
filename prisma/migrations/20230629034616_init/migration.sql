-- CreateTable
CREATE TABLE "InTheBox" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "InTheBox_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InTheBox" ADD CONSTRAINT "InTheBox_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
