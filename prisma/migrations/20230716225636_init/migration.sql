-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "Lifestyle" AS ENUM ('Sedentary', 'OneToThreeTimesWeek', 'ThreeToFiveTimesWeek', 'HighLoadDaily', 'ExtremeLoad');

-- CreateEnum
CREATE TYPE "Goal" AS ENUM ('WeightLoss', 'MuscleGain', 'WeightMaintenance');

-- CreateTable
CREATE TABLE "LifestyleCoefficient" (
    "id" SERIAL NOT NULL,
    "type" "Lifestyle" NOT NULL,
    "coefficient" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "LifestyleCoefficient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "gender" "Gender" NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "age" INTEGER NOT NULL,
    "goal" "Goal" NOT NULL,
    "lifestyleId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LifestyleCoefficient_type_key" ON "LifestyleCoefficient"("type");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_lifestyleId_fkey" FOREIGN KEY ("lifestyleId") REFERENCES "LifestyleCoefficient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
